import { BsChevronRight } from "react-icons/bs";

const Steps = () => {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-slate-50 mx-auto flex items-center justify-center">
      <div className="">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Create Your Invoice in Less than 2 minutes
        </h2>
        <div className="flex items-start md:items-center flex-col md:flex-row">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <p className="border-2 border-slate-400 rounded-full p-2 h-8 w-8 flex items-center justify-center">
              1
            </p>
            <p>Invoice Details</p>
            <BsChevronRight className="hidden md:block" size={24} />
          </div>
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <p className="border-2 border-slate-400 rounded-full p-2 h-8 w-8 flex items-center justify-center">
              2
            </p>
            <p>
              Your Bank Details <br /> (Optional)
            </p>
            <BsChevronRight className="hidden md:block" size={24} />
          </div>
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <p className="border-2 border-slate-400 rounded-full p-2 h-8 w-8 flex items-center justify-center">
              3
            </p>
            <p>
              Select Design and Colors <br /> (Download or Email Invoice)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
