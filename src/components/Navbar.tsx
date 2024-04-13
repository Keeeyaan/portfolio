import Image from "next/image";

import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <p className="hidden sm:block font-semibold text-xl">
          Kean Jieden Villaflor
        </p>
      </div>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
