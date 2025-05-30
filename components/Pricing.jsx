import Link from "next/link";
import { BsCheck2Circle } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

const Pricing = () => {
  return (
    <div className="bg-slate-100 flex flex-col gap-6 py-8 md:py-16 px-4 md:px-16">
      <div className="">
        <div className="flex items-center justify-center flex-col mb-12">
          <h2 className="text-2xl md:text-5xl font-semibold mb-4">
            Pricing of Invoice Generator
          </h2>
          <p>Only Pay When You Need Premium Features.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-2xl rounded:lg p-12 flex flex-col">
            {/* icon */}
            <div className="flex items-center justify-center rounded-full w-16 h-16 bg-purple-100 mb-6">
              <BsCheck2Circle className="text-purple-500 text-3xl" />
            </div>
            <h4 className="mb-6 text-2xl font-bold text-slate-900">
              Free Plan
            </h4>
            <p className="mb-6 text-slate-500">
              Create plan upto 100 invoices and other document in the year -
              completly free. Invoices, Quotations, Pro Forma, Expenses and
              more. No hidden charges.
            </p>
            <Link
              className=" font-bold text-purple-700 hover:text-purple-800"
              href="/invoice/new"
            >
              Create Free Invoice
            </Link>
          </div>

          <div className="bg-white shadow-2xl rounded:lg p-12 flex flex-col">
            {/* icon */}
            <div className="flex items-center justify-center rounded-full w-16 h-16 bg-purple-100 mb-6">
              <IoDiamondOutline className="text-purple-500 text-3xl" />
            </div>
            <h4 className="mb-6 text-2xl font-bold text-slate-900">
              Premium Plan
            </h4>
            <p className="mb-6 text-slate-500">
              Manage your accounting faster pace with additional Premium
              features at minimum cost.
            </p>
            <Link
              className="font-bold text-purple-700 hover:text-purple-800"
              href="/features"
            >
              Explore Premium Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
