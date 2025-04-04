import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { invoiceData, tableData } = await request.json();
    console.log(invoiceData);
    // Create the Invoice record
    console.log(invoiceData.userId);
    const invoice = await db.invoice.create({
      data: {
        userId: invoiceData.userId,
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
    const data = {
      invoice,
      rows,
    };
    // console.log(invoice);
    return NextResponse.json(invoiceData);
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

export async function GET(request) {
  try {
    const invoices = await db.invoice.findMany({
      include: {
        tableData: true,
      },
    });
    console.log(invoices);
    return NextResponse.json(invoices);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch invoices",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
