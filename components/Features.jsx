import { BsCurrencyDollar, BsFillGrid1X2Fill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdCloudDone } from "react-icons/io";
import ThemeLink from "./ThemeLink";

const Features = () => {
  const features = [
    {
      icon: BsCurrencyDollar,
      title: "Easy tax Invoice",
      description:
        "Create, manage, send and track tax invoices without any hassle.",
    },
    {
      icon: BsFillGrid1X2Fill,
      title: "Customization of Columns",
      description:
        "Customizable invoice template to add more relevant information and columns.",
    },
    {
      icon: FaRegStar,
      title: "Band Your Invoice",
      description:
        "Easily add the business logo and change the color of the invoice with one click. No watermark.No Ads.",
    },
    {
      icon: IoDiamondOutline,
      title: "Invoice Templates",
      description:
        "With a range of invoice designs, send personalized invoices to the clients that proclaim your brand.",
    },
    {
      icon: HiOutlineDocumentCurrencyDollar,
      title: "Email & Track Invoices",
      description:
        "Send invoice via email and get to know when the invoice was opened.",
    },
    {
      icon: GrPowerReset,
      title: "Recurring Invoices",
      description:
        "Create recurring invoices & never miss your payments. Perfect for billing weekly, monthly or yearly.",
    },
    {
      icon: BsGraphUpArrow,
      title: "Insightful Reports",
      description:
        "Reports help you follow compliance and give insight into business performance.",
    },
    {
      icon: IoMdCloudDone,
      title: "Easy Access Anywhere",
      description:
        "Easy to use dashboard for mobile and desktop. Get email alerts in real-time.",
    },
  ];
  return (
    <div className="bg-slate-950 py-8 md:py-16 px-4 md:px-16 px-4 text-slate-50 flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl md:text-5xl font-semibold mb-12">
        Features of Our Invoice Generator
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => {
          return (
            <div className="mb-3" key={i}>
              <div className="border-2 border-purple-400 rounded-lg py-4 w-14 h-14 flex items-center justify-center mb-3">
                <feature.icon className="text-3xl" />
              </div>
              <p className="mb-3 text-xl">{feature.title}</p>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <ThemeLink
        href="/invoice/new"
        className="bg-purple-600 text hover:bg-purple-700 focus:ring-purple-300"
        title="Create Invoice For Free"
      />
    </div>
  );
};

export default Features;
