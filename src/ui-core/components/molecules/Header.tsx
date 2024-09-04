import { Link } from "react-router-dom";
import CompanyLogo from "../atoms/CompanyLogo";
import { UserButton, useUser } from "@clerk/clerk-react";
import { IoBookmarksOutline } from "react-icons/io5";
import { useAppSelector } from "../../../app/store";

function Header() {
  const { user } = useUser();
  const watchlistState = useAppSelector((state: any)=>state.watchList.watchlistItems);

  return (
    <div className="flex justify-between px-4 pr-12 border-b-4">
      <Link to={"/"}>
        <CompanyLogo />
      </Link>
      <div className="flex items-center justify-center w-10 gap-4 pr-10">
        <span>{user?.firstName}</span>
        <UserButton />
        <Link className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-full hover:bg-slate-400" to={"/watchlist"}>
          <IoBookmarksOutline className="text-xl" />
          ({watchlistState.length})
        </Link>
      </div>
    </div>
  );
}

export default Header;
