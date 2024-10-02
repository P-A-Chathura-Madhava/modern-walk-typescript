import { IoSearchSharp } from "react-icons/io5";

// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function SearchBigIcon() {
  return (
    <Button className="flex items-center justify-center cursor-pointer h-icon-h-big w-icon-w-big hover:bg-custom-main rounded-icon py-icon-y px-icon-x bg-custom-background-white">
      <IoSearchSharp className="text-black text-icon-big" />
    </Button>
  );
}

export default SearchBigIcon;
