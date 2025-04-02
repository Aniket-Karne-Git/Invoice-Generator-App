import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { invoiceData, tableData } = await request.json();
    // Create the Invoice record
    const invoice = await db.invoice.create({
      data: {
        companyName: invoiceData.companyName,
        invoiceAuthor: invoiceData.invoiceAuthor,
        companyAddress: invoiceData.companyAddress,
        companyCity: invoiceData.companyCity,
        companyCountry: invoiceData.companyCountry,
        clientCompany: invoiceData.clientCompany,
        clientAddress: invoiceData.clientAddress,
        clientCity: invoiceData.clientCity,
        clientCountry: invoiceData.clientCountry,
        invoiceNumber: invoiceData.invoiceNumber,
        invoiceDate: `${invoiceData.invoiceDate}T00:00:00Z`,
        invoiceDueDate: `${invoiceData.invoiceDueDate}T00:00:00Z`,
        notes: invoiceData.notes,
        terms: invoiceData.terms,
        logoUrl: invoiceData.logoUrl,
      },
    });
    const rowPromises = tableData.map(async (rowData) => {
      const row = await db.row.create({
        data: {
          invoiceId: invoice.id,
          itemDescription: rowData.itemDescription,
          qty: parseInt(rowData.qty),
          unitPrice: parseFloat(rowData.unitPrice),
          tax: parseFloat(rowData.tax),
          amount: parseFloat(rowData.amount),
        },
      });
      return row;
    });
    // Use Promise.all to await all row creation promises
    const rows = await Promise.all(rowPromises);
    console.log(invoice, rows);
    return NextResponse.json(
      {
        invoice,
        rows,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error,
        message: "Couldn't create invoice",
      },
      {
        status: 500,
      }
    );
  }
}
