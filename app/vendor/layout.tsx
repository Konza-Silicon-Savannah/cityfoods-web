import { Toaster } from "@/components/ui/sonner"
import VendorNav from "@/components/ui/vendor/vendornav";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <VendorNav />
          </div>
          <div className="flex-grow p-2 md:overflow-y-auto md:p-0">
            <Toaster />
            {children}
          </div>
        </div>
    );
}  