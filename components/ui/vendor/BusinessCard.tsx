
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PaidIcon from '@mui/icons-material/Paid';
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import ReceiptSharpIcon from '@mui/icons-material/ReceiptSharp';

const analysis = [
  {
    title: "Kes 45,240",
    description: "Earned this month",
    icon:<PaidIcon sx={{ fontSize: 70 }}/>,
  },
  {
    title: "200",
    description: "Monthly customers",
    icon:<EmojiPeopleSharpIcon sx={{ fontSize: 70 }}/>,
  },
  {
    title: "20",
    description: "Vouchers Issued",
    icon:<ReceiptSharpIcon sx={{ fontSize: 70 }}/>,
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardAnalytics({ className, ...props }: CardProps) {
  return (
    <Card className={cn("shadow-none border rounded-md pb-2 flex-row px-4", className)} {...props}>
        <CardHeader className="px-0">
            <CardTitle>Business Overview</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
            <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory sm:flex-row sm:gap-8 md:gap-12 lg:gap-16">
                {analysis.map((notification, index) => (
                    <div
                        key={index}
                        className="flex flex-none snap-center sm:grow items-center rounded-md space-x-4  shadow-2xl"
                    >
                        <div className="text-yellow-600">
                            {notification.icon}
                        </div>
                        <div className="place-items-center px-2 space-y-3">
                            <p className="text-lg font-black leading-none">
                                {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {notification.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
  )
}
