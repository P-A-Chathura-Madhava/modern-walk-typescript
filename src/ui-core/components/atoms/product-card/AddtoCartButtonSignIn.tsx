import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AddtoCartButton() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center text-xl w-icon-w-normal h-icon-h-normal rounded-icon hover:bg-slate-200"
      onClick={() => navigate("/signin")}
    >
      <FiShoppingCart />
    </div>
  );
}

export default AddtoCartButton;
