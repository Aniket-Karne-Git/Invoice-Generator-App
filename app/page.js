import Hero from "@/components/Hero";
import InvoiceCTA from "@/components/InvoiceCTA";
// import InvoiceCTA from "@/components/invoiceCTA";
import Steps from "@/components/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <InvoiceCTA />
      <Steps />
    </main>
  );
}
