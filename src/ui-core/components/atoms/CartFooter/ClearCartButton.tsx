import { Button } from "../../../../components/ui/button";

function ClearCartButton({ ...props }) {
  return (
    <Button className="bg-white rounded-btn pt-btn-t pb-btn-b px-btn-x h-btn-normal w-btn-normal disabled:bg-custom-primary-custom-inverse-hover hover:bg-custom-danger-red selection:bg-custom-primary-custom-selected text-custom-danger-red hover:text-white">
      <span className="font-btn text-btn">Clear Cart</span>
    </Button>
  );
}

export default ClearCartButton;
