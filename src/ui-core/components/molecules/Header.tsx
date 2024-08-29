import { Link } from "react-router-dom";
import CompanyLogo from "../atoms/CompanyLogo";

function Header() {
  return (
    <>
      <Link to={"/"}>
        <CompanyLogo />
      </Link>
    </>
  );
}

export default Header;
