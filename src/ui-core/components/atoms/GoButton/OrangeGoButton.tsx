import { FaArrowRight } from "react-icons/fa";

// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function OrangeGoButton() {
  return (
    <Button
      className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-primary-custom-inverse-hover rounded-icon py-icon-y px-icon-x bg-custom-background-white"
      color="white"
    >
      <FaArrowRight className="text-custom-primary-custom-normal text-icon-md" />
    </Button>
  );
}

export default OrangeGoButton;
