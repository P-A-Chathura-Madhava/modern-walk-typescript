import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function InputField({ ...props }) {
  const { inputType, labelTitle, placeholderData } = props;
  const [eyeIcon, setEyeIcon] = useState(false);

  return (
    <div className="flex flex-col gap-[4px] w-[300px]">
      <Label htmlFor="" className="text-input-label font-input-label">
        {labelTitle}
      </Label>
      <Input
        type={inputType}
        className="transition-all duration-300 border-2 outline-none h-input-field w-input-field rounded-input-field border-custom-main pt-input-t pb-input-t pl-input-l focus:border-primary-hover hover:bg-custom-background-elephant-grey"
        placeholder={placeholderData}
      />
      {inputType !== "password" ? (
        ""
      ) : (
        <div className="absolute ml-[380px] mt-[33px]">
          {eyeIcon === true ? (
            <FaEye
              className="text-xl cursor-pointer"
              onClick={() => setEyeIcon(!eyeIcon)}
            />
          ) : (
            <FaEyeSlash
              className="text-xl cursor-pointer"
              onClick={() => setEyeIcon(!eyeIcon)}
            />
          )}
        </div>
      )}
      <p className="text-custom-danger-red text-input-field-msg font-input-field-msg">
        Please enter a valid email address
      </p>
    </div>
  );
}

export default InputField;
