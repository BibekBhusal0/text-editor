import { FloatingMenu as FloatingMenuPremitive, useCurrentEditor } from "@tiptap/react";
// import { Button } from "@heroui/button"

const FloatingMenu = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  return (
    <>
      <pre>{editor.getHTML()}</pre>
    </>
  );
  // return <FloatingMenuPremitive editor={editor} className=''>
  //
  //   I am floating
  //   {/* <Button onPress={() => { console.log("you clicked me") }}> </Button> */}
  // </FloatingMenuPremitive >
};
export default FloatingMenu;
