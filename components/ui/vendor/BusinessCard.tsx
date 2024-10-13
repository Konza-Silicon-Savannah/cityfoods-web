/* eslint-disable react/jsx-key */

// import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card";
import PaidIcon from "@mui/icons-material/Paid";
import EmojiPeopleSharpIcon from "@mui/icons-material/EmojiPeopleSharp";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";

const analysis = [
  {
    title: "Kes 45,240",
    description: "Earned this month",
    icon: <PaidIcon sx={{ fontSize: 70 }} />,
  },
  {
    title: "200",
    description: "Monthly customers",
    icon: <EmojiPeopleSharpIcon sx={{ fontSize: 70 }} />,
  },
  {
    title: "20",
    description: "Vouchers Issued",
    icon: <ReceiptSharpIcon sx={{ fontSize: 70 }} />,
  },
];


export function CardAnalytics() {
  return (
    <div className="snap-x scroll-smooth overflow-x-auto flex space-x-4 md:grid md:grid-cols-3 md:gap-6 md:mb-4">
      {analysis.map((notification, index) => (
        <Card key={index} className="snap-center rounded-md shadow min-w-[250px] w-full md:w-auto">
          <CardContent className="px-0">
            <div className="flex items-center">
              <div className="text-yellow-600 p-3">{notification.icon}</div>
              <div className="place-items-center px-2 space-y-3">
                <p className="text-lg font-black leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

