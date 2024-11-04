// custom layout for auth
import SideNav from "@/components/ui/dashboard/SideNav";
import { Toaster } from "@/components/ui/sonner";
import { AuthGuard } from '@/components/AuthGuard';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-48">
          <SideNav />
        </div>
        <div className="flex-grow p-2 md:overflow-y-auto md:p-0 bg-black md:bg-white">
          <Toaster />
          {children}
        </div>
      </div>
    </AuthGuard>
    
  );
}
