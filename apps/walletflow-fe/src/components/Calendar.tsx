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
                        className="data-[empty=true]:text-muted-foreground w-[120px] justify-start text-left font-normal"
                    >
                        {/* <CalendarIcon /> */}
                        {date ? format(date, "PPP") : <span>DD / MM / YY</span>}
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