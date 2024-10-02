import { TbCaretUpDownFilled } from "react-icons/tb";

// Shadcn UI components
import { Button } from "../../../../components/ui/button";

function TableSort1() {
  return (
    <Button className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-main rounded-icon py-icon-y px-icon-x bg-custom-background-white">
      <TbCaretUpDownFilled className="text-black text-icon-md" />
    </Button>
  );
}

export default TableSort1;
