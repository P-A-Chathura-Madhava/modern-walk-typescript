import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function BackToHomeButton() {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-2 font-bold text-blue-700 underline"
    >
      <IoArrowBack /> back to home
    </Link>
  );
}

export default BackToHomeButton;
