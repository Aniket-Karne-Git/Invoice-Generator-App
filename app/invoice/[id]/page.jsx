import ActionButtons from "@/components/ActionButtons";
import FormPreview from "@/components/FormPreview";
import { getInvoiceById } from "@/libs/getInvoiceById";

const InvoicePage = async ({ params: { id } }) => {
  const invoice = await getInvoiceById(id);
  console.log(invoice);
  return (
    <div>
      <div>
        <ActionButtons invoiceId={invoice.id} />
      </div>
      {/* <div className="flex gap-4 justify-between">
        <button
          onClick={() => handlePrint()}
          className="flex items-center space-x-2 px-3 py-2 rounded-sm border border-slate-600"
        >
          <span>
            <AiOutlinePrinter />
          </span>
          <span>Print/Download</span>
        </button>
        <button className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600">
          <span>
            <CiMail />
          </span>
          <span>Send</span>
        </button>
      </div> */}
      <FormPreview data={invoice} />
    </div>
  );
};

export default InvoicePage;
