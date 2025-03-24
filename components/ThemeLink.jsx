import Link from "next/link";

const ThemeLink = ({ className, title, href }) => {
  return (
    <Link
      href={href}
      className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center ${className}`}
    >
      {title}
    </Link>
  );
};

export default ThemeLink;
