import React from "react";

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
  } = data;
  return (
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 mx-auto">
      <h2>"Company Name: "{invoiceAuthor}</h2>
      <h2>"Contact Person: "{contactPerson}</h2>
      <h2>"Company Address: "{companyAddress}</h2>
      <h2>"Company City: "{companyCity}</h2>
      <h2>"Company Country: "{companyCountry}</h2>
    </div>
  );
};

export default FormPreview;
