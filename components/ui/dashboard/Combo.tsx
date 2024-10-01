"use client"

import React from 'react';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
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
  } from "@/components/ui/popover"

const countrys = [
    {
        value: "kenya",
        label: "Kenya",
    }
]

export function Combo () {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className='w-full justify-between'
                >
                    {value
                        ? countrys.find((country)=> country.value === value)?.label
                        : "Select Country..."
                    } 
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
                <Command>
                    <CommandInput placeholder='Select country...' />
                    <CommandList>
                        <CommandEmpty></CommandEmpty>
                        <CommandGroup>
                            {countrys.map((country)=> (
                                <CommandItem
                                    key={country.value }
                                    value={country.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check 
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === country.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {country.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
