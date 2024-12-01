import { FaArrowRight } from "react-icons/fa";

// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function OrangeGoButtonBig() {
  return (
    <Button
      className="flex items-center justify-center cursor-pointer h-icon-h-big w-icon-w-big hover:bg-custom-primary-custom-inverse-hover rounded-icon py-icon-y px-icon-x bg-custom-background-white"
      color="white"
    >
      <FaArrowRight className="text-custom-primary-custom-normal text-icon-big" />
    </Button>
  );
}

export default OrangeGoButtonBig;
