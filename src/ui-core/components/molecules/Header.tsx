import { Link } from "react-router-dom";
import CompanyLogo from "../atoms/CompanyLogo";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const {user} = useUser();
  
  return (
    <div className="flex justify-between px-4 border-b-4 pr-12">
      <Link to={"/"}>
        <CompanyLogo />
      </Link>
      <div className="w-10 flex items-center justify-center gap-4">
        <span>{user?.firstName}</span>
      <UserButton />      
      </div>
    </div>
  );
}

export default Header;
