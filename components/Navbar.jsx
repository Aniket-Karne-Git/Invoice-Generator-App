import Link from "next/link";
import ThemeLink from "./ThemeLink";

const Navbar = () => {
  return (
    <header className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50">
      <Link className="font-bold text-2xl md:text-4xl " href="/">
        Invoicer
      </Link>

      <nav className="flex items-center gap-3 ">
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Free Tools</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/login">Log in</Link>
        <ThemeLink
          href="/register"
          className="bg-rose-500 text hover:bg-rose-600 focus:ring-rose-300"
          title="Register"
        />
      </div>
    </header>
  );
};

export default Navbar;
