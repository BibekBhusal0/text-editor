import type { MenuItemVariantProps } from "@heroui/theme";
import { Command as CommandPrimitive } from "cmdk";
import { useMemo, useRef, useCallback, ReactNode } from "react";
import { listboxItem } from "@heroui/theme";
import { mapPropsVariants, PropGetter, useProviderContext } from "@heroui/system";
import { useFocusRing } from "@react-aria/focus";
import { Node } from "@react-types/shared";
import { filterDOMProps } from "@heroui/react-utils";
import { clsx, dataAttr, objectToDeps, } from "@heroui/shared-utils";
import { useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import { useHover, usePress } from "@react-aria/interactions";
import { useIsMobile } from "@heroui/use-is-mobile";
import { ListState } from "@react-stately/list";
import type { ListboxItemVariantProps, ListboxItemSlots, SlotsToClasses } from "@heroui/theme";
import type { FocusableProps, PressEvents } from "@react-types/shared";



interface BaseProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The listbox item title.
   */
  title?: ReactNode;
  /**
   * The listbox item subtitle.
   */
  description?: ReactNode;
  /**
   * The listbox item start content.
   */
  startContent?: ReactNode;
  /**
   * The listbox item end content.
   */
  endContent?: ReactNode;
  /**
   * Whether the listbox press events are disabled.
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * Whether to hide the check icon when the items are selected.
   * @default false
   */
  hideSelectedIcon?: boolean;
  /**
   * The listbox item `selected` icon, it's usually an checkmark icon.
   * If you pass a function, HeroUI will expose the current selected icon and the selected status,
   * In case you want to use a custom indicator or modify the current one.
   *
   * Important: The selected icon will be rendered only if the listbox selection mode is different than `none`.
   */
  // selectedIcon?: ReactNode | ((props: ListboxItemSelectedIconProps) => ReactNode) | null;
  /**
   * Whether the item should be highlighted on focus.
   * @default false
   */
  shouldHighlightOnFocus?: boolean;
  /**
   * Whether to disable the items animation.
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <ListboxItem classNames={{
   *    base:"base-classes",
   *    title:"label-classes",
   *    wrapper:"wrapper-classes", // title and description wrapper
   *    description:"description-classes",
   *    selectedIcon:"selected-icon-classes",
   *    shortcut:"shortcut-classes",
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<ListboxItemSlots>;
}


interface Props<T extends object> extends ListboxItemBaseProps {
  item: Node<T>;
  state: ListState<T>;
}

export type ListboxItemBaseProps = Omit<BaseProps, "onClick"> &
  Omit<ListboxItemVariantProps, "hasDescriptionTextChild" | "hasTitleTextChild"> &
  // Omit<AriaOptionProps, "key"> &
  FocusableProps &
  PressEvents & {
    /**
     * The native click event handler.
     * use `onPress` instead.
     * @deprecated
     */
    onClick?: (e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>) => void;
  };


export type UseListboxItemProps<T extends object> = Props<T> &
  Omit<React.ComponentProps<typeof CommandPrimitive.List>, keyof Props<T>> &
  MenuItemVariantProps;


export function useListboxItem<T extends object>(originalProps: UseListboxItemProps<T>) {
  const globalContext = useProviderContext();

  const [props, variantProps] = mapPropsVariants(originalProps, listboxItem.variantKeys);

  const {
    item,
    state,
    description,
    startContent,
    endContent,
    className,
    classNames,
    autoFocus,
    onPress,
    onPressUp,
    onPressStart,
    onPressEnd,
    onPressChange,
    onClick,
    shouldHighlightOnFocus,
    ...otherProps
  } = props;

  const disableAnimation =
    originalProps.disableAnimation ?? globalContext?.disableAnimation ?? false;

  const domRef = useRef<HTMLLIElement>(null);

  const Component = "li"
  const shouldFilterDOMProps = typeof Component === "string";

  const { rendered, key } = item;

  const isDisabled = state.disabledKeys.has(key) || originalProps.isDisabled;
  const isSelectable = state.selectionManager.selectionMode !== "none";

  const isMobile = useIsMobile();

  const { isPressed } = usePress({
    ref: domRef,
    isDisabled: isDisabled,
    onClick,
    onPress,
    onPressUp,
    onPressStart,
    onPressEnd,
    onPressChange,
  });

  const { isHovered, hoverProps } = useHover({
    isDisabled,
  });

  const { isFocusVisible, } = useFocusRing({
    autoFocus,
  });

  const { isFocused, isSelected, optionProps, labelProps, descriptionProps } = useOption(
    {
      key,
      isDisabled,
      "aria-label": props["aria-label"],
    },
    state,
    domRef,
  );

  let itemProps = optionProps;

  const slots = useMemo(
    () =>
      listboxItem({
        ...variantProps,
        isDisabled,
        disableAnimation,
        hasTitleTextChild: typeof rendered === "string",
        hasDescriptionTextChild: typeof description === "string",
      }),
    [objectToDeps(variantProps), isDisabled, disableAnimation, rendered, description],
  );

  const baseStyles = clsx(classNames?.base, className);

  const isHighlighted =
    (shouldHighlightOnFocus && isFocused) ||
    (isMobile ? isHovered || isPressed : isHovered || (isFocused && !isFocusVisible));

  const getItemProps: PropGetter = (props = {}) => ({
    ref: domRef,
    ...mergeProps(
      itemProps,
      hoverProps,
      filterDOMProps(otherProps, {
        enabled: shouldFilterDOMProps,
      }),
      props,
    ),
    "data-selectable": dataAttr(isSelectable),
    "data-focus": dataAttr(isFocused),
    "data-hover": dataAttr(isHighlighted),
    "data-disabled": dataAttr(isDisabled),
    "data-selected": dataAttr(isSelected),
    "data-pressed": dataAttr(isPressed),
    "data-focus-visible": dataAttr(isFocusVisible),
    className: slots.base({ class: clsx(baseStyles, props.className) }),
  });

  const getLabelProps: PropGetter = (props = {}) => ({
    ...mergeProps(labelProps, props),
    "data-label": dataAttr(true),
    className: slots.title({ class: classNames?.title }),
  });

  const getDescriptionProps: PropGetter = (props = {}) => ({
    ...mergeProps(descriptionProps, props),
    className: slots.description({ class: classNames?.description }),
  });

  const getWrapperProps: PropGetter = (props = {}) => ({
    ...mergeProps(props),
    className: slots.wrapper({ class: classNames?.wrapper }),
  });

  const getSelectedIconProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "aria-hidden": dataAttr(true),
        "data-disabled": dataAttr(isDisabled),
        className: slots.selectedIcon({ class: classNames?.selectedIcon }),
        ...props,
      };
    },
    [isDisabled, slots, classNames],
  );

  return {
    Component,
    domRef,
    slots,
    classNames,
    isSelectable,
    isSelected,
    isDisabled,
    rendered,
    description,
    startContent,
    endContent,
    // hideSelectedIcon,
    disableAnimation,
    getItemProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getSelectedIconProps,
  };
}

export type UseListboxItemReturn = ReturnType<typeof useListboxItem>;
