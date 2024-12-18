import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SideBottomLinks from "./sidelinks";
import { Separator } from "@/components/ui/separator";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="h-screen justify-between py-4 px-2">
          <div className="">
            <div className="flex justify-items-center">
              <Link
                className="flex justify-center px-5 pb-4"
                href="/"
                key="logo"
              >
                <div className="flex items-center w-32 font-extrabold md:w-40 ">
                  City<span className="text-green-500">Foods</span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <NavLinks />
            </div>
          </div>
          <Separator />
          <div className="flex flex-col items-start justify-end">
            <SideBottomLinks />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
