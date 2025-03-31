"use client";

import FormPreview from "@/components/FormPreview";
import FormTable from "@/components/FormTable";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState, useRef } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  AiOutlinePrinter,
} from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useReactToPrint } from "react-to-print";

const createInvoice = () => {
  const invoiceRef = useRef();

  const [logoUrl, setLogoUrl] = useState("");
  const [preview, setPreview] = useState(false);

  const [formData, setFormData] = useState({
    invoiceAuthor: "",
    contactPerson: "  ",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientCompany: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDueDate: "",
  });

  const [tableData, setTableData] = useState([]);

  const [combinedData, setCombinedData] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(e) {
    e.preventDefault();

    const allFormData = {
      ...formData,
      logoUrl,
      tableData,
    };

    setCombinedData(allFormData);
    setPreview(!preview);
  }

  const updateTableData = (newTableData) => {
    setTableData(newTableData);
  };

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
  });

  return (
    <div className="bg-slate-50 py-8 md:py-8 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        {/* Header */}
        <div className="flex gap-4">
          <button
            className="flex items-center space-x-2 px-3 py-2 rounded-sm border border-slate-600"
            onClick={() => {
              setPreview(!preview);
            }}
          >
            {preview ? (
              <div className="flex items-center space-x-2">
                <span>
                  <BsLayoutTextWindowReverse />
                </span>
                <span>Edit Form</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>
                  <BsLayoutTextWindowReverse />
                </span>
                <span>Preview</span>
              </div>
            )}
          </button>
          <button
            onClick={() => handlePrint()}
            className="flex items-center space-x-2 px-3 py-2 rounded-sm border border-slate-600"
          >
            <span>
              <AiOutlinePrinter />
            </span>
            <span>Print/Download</span>
          </button>
        </div>
        <div className="flex gap-4 ">
          <button className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600">
            <span>
              <AiOutlineCloudUpload />
            </span>
            <span>Save Online</span>
          </button>
          <button className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600">
            <span>
              <CiMail />
            </span>
            <span>Send</span>
          </button>
        </div>
      </div>
      {preview ? (
        <div ref={invoiceRef}>
          <FormPreview data={combinedData} />
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 mx-auto"
        >
          {/* Image and Invoice Label */}
          <div className="flex justify-between items-center">
            {/* Image */}

            <div className="flex items-center justify-center">
              {logoUrl ? (
                <CldImage
                  width="240"
                  height="240"
                  src={logoUrl}
                  alt="Invoice Logo"
                />
              ) : (
                <div>
                  <CldUploadButton
                    className="flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 text-sm text-gray-500 dark:text-gray-400"
                    onSuccess={(data, { close }) => {
                      setLogoUrl(data.info.secure_url);
                      close();
                    }}
                    uploadPreset="InvoicePreset"
                  />
                </div>
              )}
            </div>

            <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
          </div>

          {/* Company Details */}
          <div className="flex flex-col w-1/2 mt-6">
            <input
              className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Your Company"
              name="invoiceAuthor"
              onChange={handleInputChange}
              value={formData.invoiceAuthor}
            />
            <input
              className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Your Name"
              name="contactPerson"
              onChange={handleInputChange}
              value={formData.contactPerson}
            />
            <input
              className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Company Address"
              name="companyAddress"
              onChange={handleInputChange}
              value={formData.companyAddress}
            />
            <input
              className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="City, State, Zip"
              name="companyCity"
              onChange={handleInputChange}
              value={formData.companyCity}
            />
            <input
              className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Country"
              name="companyCountry"
              onChange={handleInputChange}
              value={formData.companyCountry}
            />
          </div>

          {/* Client Details */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-1/2 mt-6">
              <h2 className="mb-2 font-semibold">Bill to:</h2>
              <input
                className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Your Client's Company"
                name="clientCompany"
                onChange={handleInputChange}
                value={formData.clientCompany}
              />
              <input
                className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Client's Address"
                name="clientAddress"
                onChange={handleInputChange}
                value={formData.clientAddress}
              />
              <input
                className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="City, State, Zip"
                name="clientCity"
                onChange={handleInputChange}
                value={formData.clientCity}
              />
              <input
                className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Country eg USA"
                name="clientCountry"
                onChange={handleInputChange}
                value={formData.clientCountry}
              />
            </div>
            <div className="flex flex-col w-1/2 mt-6">
              <div className="flex gap-2">
                <label
                  className="text-slate-500 font-bold"
                  htmlFor="invoiceNumber"
                >
                  Invoice #
                </label>
                <input
                  className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
                  type="text"
                  placeholder="INV-202"
                  name="invoiceNumber"
                  onChange={handleInputChange}
                  value={formData.invoiceNumber}
                />
              </div>

              <div className="flex gap-2">
                <label
                  className="text-slate-500 font-bold"
                  htmlFor="InvoiceDate"
                >
                  Invoice Date #
                </label>
                <input
                  className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDate}
                />
              </div>

              <div className="flex gap-2">
                <label className="text-slate-500 font-bold" htmlFor="dueDate">
                  Due Date #
                </label>
                <input
                  className="h-7 text-base p-2 mb-2 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDueDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDueDate}
                />
              </div>
            </div>
          </div>
          {/* Form Table */}
          <FormTable updateTableData={updateTableData} />
          <button
            className="bg-purple-600 py-2.5 px-6 text-white rounded"
            type="submit"
          >
            Create Invoice
          </button>
        </form>
      )}
    </div>
  );
};

export default createInvoice;
