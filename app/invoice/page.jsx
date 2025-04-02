import ThemeLink from "@/components/ThemeLink";
import { getInvoices } from "@/libs/getInvoices";
import { AiOutlineArrowDown } from "react-icons/ai";

const Page = async () => {
  const invoices = await getInvoices();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg container max-w-5xl mx-auto mt-16">
      <div className="flex px-8 py-8 justify-between items-center">
        <h2 className="text-3xl text-purple-700">
          Our Invoices ({invoices.length})
        </h2>
        <ThemeLink
          href="/invoice/new"
          className="bg-rose-600 text hover:bg-rose-700 focus:ring-rose-300"
          title="Create Invoice"
          icon={AiOutlineArrowDown}
        />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Invoice ID
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice Name
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">View Invoice</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((row) => {
            const options = { year: "numeric", month: "long", day: "numeric" };
            const invoiceDate = new Date(row.invoiceDate).toLocaleDateString(
              undefined,
              options
            );
            return (
              <tr
                key={row.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.id}
                </th>
                <td className="px-6 py-4">{row.clientCompany}</td>
                <td className="px-6 py-4">{invoiceDate}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={`/invoice/${row.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Invoice
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
