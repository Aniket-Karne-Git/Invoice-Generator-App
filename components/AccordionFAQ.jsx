"use client";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const AccordionFAQ = () => {
  const faqs = [
    {
      title: "How can I make invoice for free?",
      description:
        "Refrens invoice generator allows you to create invoices for free without taking much time. Head over to Refrens invoice generator and start creating invoices using pre-formatted invoice templates. You can add your logo, brand colors, and multiple invoice templates and use many more such features to keep your brand consistent.",
    },
    {
      title: "Which is the best free invoice generator?",
      description:
        "Refrens is the best free invoice generator as you can create invoices for clients without paying a single amount. You can freely customize your fields and columns, download the invoice as PDF or send it directly via email, or share it via WhatsApp and within one click you can create a payment receipt, debit note and credit note. Not only this, you can create quotations, purchase orders, proforma invoices, payment receipts, delivery challan, and expense management and can also keep the records of your inventory.",
    },
    {
      title: "How to raise an invoice as a Freelancer?",
      description: `If you are a freelancer and want to save time and money on creating invoices, then simply opt for an invoice generator like Refrens, which provides you invoices for free. Simply go to Refrens invoice and add the details such as:
       1. Title of the invoice.
       2. Logo of your business or you can create a business for your freelance business.
       3. Add Invoice number, invoice date, and invoice due date.
       4. Now, in the Billed By section add your details.
       5. In the Billed To section, add your client's details.
       6. In the line item section, add your service name with a description of your freelance work.
       7. As you are a freelancer and work hourly you should create invoices in hourly format. So click on the 'Add/Rename column' above the line item and change the 'Quantity' to 'Hours Worked' and in place of 'Rate' change to 'Rate per Hour'. Your invoice is created now. 
        `,
    },
  ];
  return (
    <Accordion>
      {faqs.map((faq, i) => {
        return (
          <AccordionPanel key={i}>
            <AccordionTitle>{faq.title}</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {faq.description}
              </p>
            </AccordionContent>
          </AccordionPanel>
        );
      })}
    </Accordion>
  );
};

export default AccordionFAQ;
