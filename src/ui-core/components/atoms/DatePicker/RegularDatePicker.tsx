import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

// Shadcn UI  Library
import { Calendar } from "../../../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";

function RegularDatePicker() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-main rounded-icon py-icon-y px-icon-x">
          <FaCalendarAlt className="text-icon-md" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default RegularDatePicker;
