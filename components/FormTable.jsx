"use client";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlinePlus,
} from "react-icons/ai";

const FormTable = ({ updateTableData }) => {
  const [tableData, setTableData] = useState([
    {
      itemDescription: "",
      qty: "",
      unitPrice: "",
      tax: "",
      amount: "",
    },
  ]);

  function addRow() {
    setTableData([
      ...tableData,
      {
        itemDescription: "",
        qty: "",
        unitPrice: "",
        tax: "",
        amount: "",
      },
    ]);
  }

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedData = [...tableData];
    updatedData[index][name] = value;

    if (name === "qty" || name === "unitPrice") {
      const qty = parseFloat(updatedData[index].qty);
      const price = parseFloat(updatedData[index].unitPrice);
      if (!isNaN(qty) && !isNaN(price)) {
        updatedData[index].amount = (qty * price).toFixed(2);
      } else {
        updatedData[index].amount = "";
      }
    }

    setTableData(updatedData);
    updateTableData(updatedData);
  };

  function removeRow(index) {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }

  return (
    <div className="relative overflow-x-auto  sm:rounded-lg my-6">
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
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <input
                    className="h-7 w-3/4 bg-transparent text-base p-2 mb-2 placeholder:text-slate-400"
                    type="text"
                    placeholder="Item Description"
                    name="itemDescription"
                    value={row.itemDescription}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </th>
                <td className="px-6 py-4">
                  <input
                    className="h-7 w-12 bg-transparent text-base p-2 mb-2 placeholder:text-slate-400"
                    type="number"
                    placeholder="2"
                    name="qty"
                    value={row.qty}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="h-7 w-24 bg-transparent text-base p-2 mb-2 placeholder:text-slate-400"
                    type="number"
                    placeholder="5"
                    name="unitPrice"
                    value={row.unitPrice}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="h-7 w-12 bg-transparent text-base p-2 mb-2 placeholder:text-slate-400"
                    type="number"
                    placeholder="10"
                    name="tax"
                    value={row.tax}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="h-7 w-24 bg-transparent text-base p-2 mb-2 placeholder:text-slate-400"
                    type="number"
                    placeholder="1000"
                    name="amount"
                    value={row.amount}
                    readOnly
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button type="button" onClick={() => removeRow(index)}>
                    <AiOutlineCloseCircle className="text-base text-red-600" />
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <button
                type="button"
                className="my-3 flex item-center space-x-2 text-purple-600 font-bold"
                onClick={addRow}
              >
                <AiOutlinePlus className="text-base" />
                <span>Add line item</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;
