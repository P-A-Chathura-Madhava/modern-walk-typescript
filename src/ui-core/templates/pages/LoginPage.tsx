import InputField from "../../components/atoms/InputField/InputField";
import CheckBox from "../../components/atoms/CheckBox/CheckBox";
import PrimaryBtn from "../../components/atoms/Button/PrimaryBtn";

function LoginPage() {
  return (
    <div className="container flex items-center justify-center pt-16 font-poppins">
      <div className="flex flex-col items-center">
        <h1 className="pb-3 font-btn text-icon-big font-poppins">
          Modern Walk
        </h1>
        <div className="flex flex-col gap-2">
          <InputField
            {...{
              inputType: "text",
              labelTitle: "Email Address",
              placeholderData: "elon@teala.com",
            }}
          />
          <InputField
            {...{
              inputType: "password",
              labelTitle: "Password",
              placeholderData: "****",
            }}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-[4px] items-center">
            <CheckBox />
            <p>Remember me</p>
          </div>
          <PrimaryBtn {...{ title: "Sign in" }} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
