import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="w-40 flex justify-between items-center gap-2">
      <Image src={logo} alt="Logo" width={60} height={60} />
      <div className="mt-1">
        <h1 className="text-xl md:text-2xl font-bold text-primary">Zeltry</h1>
        <p className="text-xs text-gray-500 font-semibold">Fresh & Organic</p>
      </div>
    </Link>
  );
};

export default Logo;
