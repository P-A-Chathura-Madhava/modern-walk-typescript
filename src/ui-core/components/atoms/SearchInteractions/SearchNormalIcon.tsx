import { IoSearchSharp } from "react-icons/io5";

// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function SearchNormalIcon() {
  return (
    <Button
      className="flex items-center justify-center cursor-pointer bg-custom-background-white h-icon-h-normal w-icon-w-normal hover:bg-custom-main rounded-icon py-icon-y px-icon-x"
      color="white"
    >
      <IoSearchSharp className="text-black text-icon-md" />
    </Button>
  );
}

export default SearchNormalIcon;
