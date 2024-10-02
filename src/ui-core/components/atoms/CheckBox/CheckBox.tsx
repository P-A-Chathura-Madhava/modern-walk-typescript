import { Checkbox } from "../../../../components/ui/checkbox";

function CheckBox() {
  return (
    <div className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-primary-custom-inverse-hover rounded-icon">
      <Checkbox className="border-black/50" />
    </div>
  );
}

export default CheckBox;
