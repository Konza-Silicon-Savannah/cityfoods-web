"use client"

import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";


const weekdays = [
    {
        value:"monday",
        label:"Monday",
    },
    {
        value:"tuesday",
        label:"Tuesday",
    },
    {
        value:"wednesday",
        label:"Wednesday",
    },
    {
        value:"thursday",
        label:"Thursday",
    },
    {
        value:"friday",
        label:"Friday",
    },
]

interface ComboboxProps {
    value: string[];
    onChange: (value: string[]) => void;
}

export function Combobox({ value, onChange }: ComboboxProps) {
    const [open, setOpen] = React.useState(false);

    const handleSetValue = (val: string) => {
        if (Array.isArray(value) && value.includes(val)) {
            onChange(value.filter((item) => item !== val));
        } else {
            onChange([...(Array.isArray(value) ? value : []), val]);
        }
    };
    

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button 
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    <div className="flex gap-2 justify-start">
                        {value?.length ?
                            value.map((val, i) => (
                                <div 
                                    key={i} 
                                    className="px-2 py-1 rounded-xl border bg-slate-200 text-xs font-medium"
                                >
                                    {weekdays.find((weekday) => weekday.value === val)?.label}
                                </div>
                            ))
                            : "Select day/s..."
                        }
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="search day..."/>
                    <CommandEmpty>No days found.</CommandEmpty>
                    <CommandList>
                        <CommandGroup>
                            {weekdays.map((weekday) => (
                                <CommandItem
                                    key={weekday.value}
                                    value={weekday.value}
                                    onSelect={() => {
                                        handleSetValue(weekday.value);
                                    }}
                                >
                                    <Check
                                        className={cn("mr-2 h-4 w-4", Array.isArray(value) && value.includes(weekday.value) ? "opacity-100" : "opacity-0")}
                                    />
                                    {weekday.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}