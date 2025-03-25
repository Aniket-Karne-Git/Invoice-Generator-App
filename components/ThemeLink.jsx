import Link from "next/link";

const ThemeLink = ({ className, title, href, icon }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center ${className}`}
    >
      {title}
      {/* <span className="ml-2">
        <Icon />
      </span> */}
    </Link>
  );
};

export default ThemeLink;
