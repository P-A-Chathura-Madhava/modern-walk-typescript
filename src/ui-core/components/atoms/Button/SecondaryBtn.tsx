// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function SecondaryBtn() {
  return (
    <Button className="border bg-custom-background-white rounded-btn pt-btn-t pb-btn-b px-btn-x h-btn-normal w-btn-normal disabled:border-custom-primary-custom-inverse-hover selection:border-custom-primary-custom-selected selection:text-custom-primary-custom-selected selection:bg-custom-primary-custom-inverse-hover-click disabled:text-custom-primary-custom-inverse-hover text-custom-primary-custom-normal border-custom-primary-custom-normal hover:border-custom-primary-custom-hover hover:text-custom-primary-custom-hover hover:bg-custom-primary-custom-inverse-hover">
      <span className="text-custom-primary-custom-normal font-btn text-btn">
        Cancel
      </span>
    </Button>
  );
}

export default SecondaryBtn;
