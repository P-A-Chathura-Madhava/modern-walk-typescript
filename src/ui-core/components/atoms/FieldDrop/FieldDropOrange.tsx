import { FaCaretUp } from "react-icons/fa";

// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function FieldDropOrange() {
  return (
    <Button className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-primary-custom-inverse-hover hover:text-custom-primary-custom-hover rounded-icon bg-custom-background-white">
      <div>
        <FaCaretUp className="text-custom-primary-custom-normal text-icon-md" />
      </div>
    </Button>
  );
}

export default FieldDropOrange;
