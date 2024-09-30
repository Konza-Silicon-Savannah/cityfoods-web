// custom layout for auth
import SideNav from "@/components/ui/dashboard/SideNav";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
                <SideNav />
          </div>
          <div className="flex-grow p-2 md:overflow-y-auto md:p-0">
                {children}
          </div>
        </div>
    );
}   