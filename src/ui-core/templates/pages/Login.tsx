import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex w-full justify-center items-center py-4 font-poppins">
      <SignIn />
    </div>
  );
}

export default Login;
