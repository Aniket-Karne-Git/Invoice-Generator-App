import AccordionFAQ from "./AccordionFAQ";

const FAQ = () => {
  return (
    <div className="bg-white flex flex-col gap-6 py-8 md:py-24 px-4 md:px-16">
      <div className="">
        <div className="flex items-center justify-center flex-col mb-12">
          <h2 className="text-2xl md:text-5xl font-semibold mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <div>
            <AccordionFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
