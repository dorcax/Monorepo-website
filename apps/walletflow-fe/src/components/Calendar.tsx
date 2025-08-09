import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
const DatePicker = () => {

    const [date, setDate] = useState<Date>()
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        data-empty={!date}
                        className="data-[empty=true]:text-muted-foreground w-[180px] justify-center items-center font-normal shadow-0  border-0 "
                    >
                        {/* <CalendarIcon /> */}
                        {date ? format(date, "PPP") : <span className="text-[#939393] text-xs font-semibold">DD  / MM  / YY</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default DatePicker