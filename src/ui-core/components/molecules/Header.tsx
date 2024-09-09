import { Link } from "react-router-dom";
import CompanyLogo from "../atoms/navbar/CompanyLogo";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { IoBookmarksOutline } from "react-icons/io5";
import { useAppSelector } from "../../../app/store";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { isSignedIn } = useUser();

  const { user } = useUser();
  const watchlistState = useAppSelector(
    (state: any) => state.watchList.watchlistItems
  );
  const cartState = useAppSelector(
    (state: any) => state.cart?.cartItems.length
  );

  return (
    <div className="flex justify-between px-4 border-b-4">
      <Link to={"/"}>
        <CompanyLogo />
      </Link>
      <div className="flex items-center">
        <div className="flex gap-2 pr-4">
          <span>{user?.firstName}</span>
          <UserButton />
        </div>
        {!isSignedIn && (
          <SignInButton>
            <button className="w-20 h-full p-2 font-bold rounded-md hover:bg-slate-400">
              Sign In
            </button>
          </SignInButton>
        )}
        {isSignedIn && (
          <div>
            <Link
              className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-full hover:bg-slate-400"
              to={"/watchlist"}
            >
              <IoBookmarksOutline className="text-xl" />({watchlistState.length}
              )
            </Link>
          </div>
        )}
        <div>
          <Link
            className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-full hover:bg-slate-400"
            to={"/cart"}
          >
            <FaShoppingCart className="text-xl" />({cartState})
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
