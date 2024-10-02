import { FaCaretDown } from "react-icons/fa";

// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function FieldDropNormal() {
  return (
    <Button className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-main rounded-icon py-icon-y px-icon-x bg-custom-background-white">
      <FaCaretDown className="text-black text-icon-md" />
    </Button>
  );
}

export default FieldDropNormal;
