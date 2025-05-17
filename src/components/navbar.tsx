import { Navbar as HeroNavbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Modal, ModalContent, useDisclosure } from "@heroui/modal";

import ThemeSwitch from "./theme-switch";
import { Icon } from "./icons";
import { Examples } from "./examples";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <HeroNavbar
      isBlurred
      isBordered
      className="mb-3 h-12 p-0"
      maxWidth="xl"
      shouldHideOnScroll={false}
    >
      <NavbarContent className="gap-4">
        <NavbarItem>
          <Button className="relative" size="sm" variant="ghost" onPress={onOpen}>
            More examples
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="p-5">
              <Examples />
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem>
          <Button
            isExternal
            isIconOnly
            as={Link}
            className="text-xl"
            href="https://github.com/bibekbhusal0/text-editor"
            size="sm"
            variant="flat"
          >
            <Icon icon="github" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </HeroNavbar>
  );
};
