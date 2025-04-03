export async function getInvoiceById(id) {
  const response = await fetch(`http://localhost:3000/api/invoice/${id}`, {
    cache: "no-store",
  });
  const invoice = await response.json();
  return invoice;
}
