import PreviewTable from "./PreviewTable";
import { CldImage } from "next-cloudinary";

const FormPreview = ({ data }) => {
  const {
    invoiceAuthor,
    contactPerson,
    companyAddress,
    companyCity,
    companyCountry,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
    notes,
    terms,
    logoUrl,
    tableData,
  } = data;
  return (
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 mx-auto">
      {/* Image and Invoice Label */}
      <div className="flex justify-between items-center">
        {/* Image */}

        <div className="flex items-center justify-center">
          {logoUrl && (
            <CldImage
              width="120"
              height="120"
              src={logoUrl}
              alt="Invoice Logo"
            />
          )}
        </div>

        <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
      </div>

      {/* Company Details */}
      <div className="flex flex-col w-1/2 mt-6">
        <div className="flex space-x-2">
          <p className="font-bold text-base">Company Name: </p>
          <p className="text-base">{invoiceAuthor}</p>
        </div>

        <div className="flex space-x-2">
          <p className="font-bold text-base">Your Name: </p>
          <p className="text-base">{contactPerson}</p>
        </div>

        <div className="flex space-x-2">
          <p className="font-bold text-base">Company Address: </p>
          <p className="text-base">{companyAddress}</p>
        </div>

        <div className="flex space-x-2">
          <p className="font-bold text-base">Company City: </p>
          <p className="text-base">{companyCity}</p>
        </div>

        <div className="flex space-x-2">
          <p className="font-bold text-base">Company Country: </p>
          <p className="text-base">{companyCountry}</p>
        </div>
      </div>

      {/* Client Details */}
      <div className="flex justify-between gap-4 mb-8">
        <div className="flex flex-col w-1/2 mt-6">
          <h2 className="mb-2 font-semibold">Bill to:</h2>

          <div className="flex space-x-2">
            <p className="font-bold text-base">Client Company: </p>
            <p className="text-base">{clientCompany}</p>
          </div>

          <div className="flex space-x-2">
            <p className="font-bold text-base">Client's Address: </p>
            <p className="text-base">{clientAddress}</p>
          </div>

          <div className="flex space-x-2">
            <p className="font-bold text-base">Client's City: </p>
            <p className="text-base">{clientCity}</p>
          </div>

          <div className="flex space-x-2">
            <p className="font-bold text-base">Client's Country: </p>
            <p className="text-base">{clientCountry}</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 mt-6">
          <div className="flex gap-2 space-x-2">
            <p className="text-slate-500 font-bold">Invoice Number: </p>
            <p className="font-bold text-base">{invoiceNumber}</p>
          </div>

          <div className="flex gap-2 space-x-2">
            <p className="text-slate-500 font-bold">Invoice Date: </p>
            <p className="font-bold text-base">{invoiceDate}</p>
          </div>

          <div className="flex gap-2 space-x-2">
            <p className="text-slate-500 font-bold">Invoice Due Date: </p>
            <p className="font-bold text-base">{invoiceDueDate}</p>
          </div>
        </div>
      </div>
      {/* Form Table */}
      <PreviewTable tableData={tableData} />
      <div className="flex flex-col w-full my-6">
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Notes
        </p>
        <p>{notes}</p>
      </div>
      <div className="flex flex-col w-full my-6">
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Terms and Conditions
        </p>
        <p>{terms}</p>
      </div>
      <div className="mt-12 flex justify-end">
        <h2 className="text-sm">
          Powered by {""}
          <a className="font-bold text-pink-600" href="#">
            Paktolus
          </a>
        </h2>
      </div>
    </div>
  );
};

export default FormPreview;
