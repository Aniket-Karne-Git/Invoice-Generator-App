import InvoiceImage from "../public/images/invoice-template.png";
import ThemeLink from "./ThemeLink";

const InvoiceCTA = () => {
  return (
    <div className="invoice-cta flex items-center justify-center">
      <div className="py-24 px-16 bg-white shadow-2xl rounded-md ">
        <ThemeLink
          href="/invoice/new"
          className="bg-rose-600 text hover:bg-rose-700 focus:ring-rose-300"
          title="Create Your First Invoice"
        />
      </div>
    </div>
  );
};

export default InvoiceCTA;
