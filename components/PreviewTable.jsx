const PreviewTable = ({ tableData }) => {
  const totalSum = tableData?.reduce((acc, row) => {
    return acc + parseFloat(row.amount || 0);
  }, 0);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item Description
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Price
            </th>
            <th scope="col" className="px-6 py-3">
              TAX
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.itemDescription}
                </th>
                <td className="px-6 py-4">{row.qty}</td>
                <td className="px-6 py-4">${row.unitPrice}</td>
                <td className="px-6 py-4">{row.tax}</td>
                <td className="px-6 py-4">${row.amount}</td>
              </tr>
            );
          })}
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            ></th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 font-bold text-slate-800 text-base uppercase">
              Total Amount
            </td>
            <td className="px-6 py-4 text-base font-bold text-slate-900">
              ${isNaN(totalSum) ? "0.00" : totalSum.toFixed(2)}{" "}
              {/* Safeguard for NaN */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PreviewTable;
