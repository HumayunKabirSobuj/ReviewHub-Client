"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type * as React from "react"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DatePickerWithRangeProps {
  dateRange: DateRange | undefined
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>
  className?: string
}

export function DatePickerWithRange({ dateRange, className }: DatePickerWithRangeProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn("w-[240px] justify-start text-left font-normal", !dateRange && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Date range</span>
            )}
          </Button>
        </PopoverTrigger>

      </Popover>
    </div>
  )
}
