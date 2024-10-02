// Shadcn UI components
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

function RadioBtn() {
  return (
    <RadioGroup defaultValue="option-one">
      <div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-primary-custom-inverse-hover rounded-icon">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              className="text-custom-primary-custom-normal border-black/50"
            />
          </div>
          <Label htmlFor="option-one">Option One</Label>
        </div>
      </div>
    </RadioGroup>
  );
}

export default RadioBtn;
