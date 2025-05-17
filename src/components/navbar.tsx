import {
  Navbar as HeroNavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"
import ThemeSwitch from "./theme-switch";
import { Icon } from "./icons";
import { Modal, ModalContent, useDisclosure } from "@heroui/modal";


export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <HeroNavbar
      isBordered
      isBlurred
      maxWidth="xl"
      shouldHideOnScroll={false}
      className='h-12 p-0 mb-3'

    >
      <NavbarContent className="gap-4 " >
        <NavbarItem  >
          <Button
            className="relative"
            onPress={onOpen}
            size='sm'
            variant='ghost'
          >
            More examples
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='p-5'>
              More examples will be here
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem  >
          <Button
            as={Link}
            isExternal
            isIconOnly
            size='sm'
            variant='flat'
            className='text-xl'
            href='https://github.com/bibekbhusal0/text-editor'
          >
            <Icon icon='github' />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </HeroNavbar>
  );
};

