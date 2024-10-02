// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function PrimaryBtn({ ...props }) {
  const { title } = props;

  return (
    <Button className="bg-custom-primary-custom-normal rounded-btn pt-btn-t pb-btn-b px-btn-x h-btn-normal w-btn-normal disabled:bg-custom-primary-custom-inverse-hover hover:bg-custom-primary-custom-inverse-hover selection:bg-custom-primary-custom-selected">
      <span className="text-white font-btn text-btn">{title}</span>
    </Button>
  );
}

export default PrimaryBtn;
