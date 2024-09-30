// custome layout for auth
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen">
        <div className="w-1/2 h-full relative hidden md:block">
          <Image
            src="/images/fishmealhero.png"
            fill
            style={{ objectFit: 'cover' }}
            alt="sidebar login image"
          />
          <div className="absolute top-4 left-4 text-white font-bold text-2xl">
            City <span className="text-green-500">Foods</span>
          </div>
        </div>
        <div className=" w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-44 space-y-4">
            
          {children}
          {/* Home button */}
          <div className="absolute top-4 right-4">
            <Link
              href="/"
              className="px-4 py-2 border border-gray-400 rounded-full text-gray-800 hover:bg-gray-100"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
}   