"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePrinter } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { useReactToPrint } from "react-to-print";

const ActionButtons = ({ invoiceId }) => {
  const [sending, setSending] = useState(false);
  const [sendMail, setSendMail] = useState(false);
  const [email, setEmail] = useState("");

  //   const handlePrint = useReactToPrint({
  //     contentRef: invoiceRef,
  //   });
  async function handleSendMail(e) {
    try {
      setSending(true);
      const baseUrl = "http://localhost:3000";
      const invoiceUrl = `${baseUrl}/invoice/${invoiceId}`;
      e.preventDefault();
      console.log(email, invoiceUrl);
      const response = await fetch("http://localhost:3000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          invoiceUrl,
        }),
      });
      if (response.ok) {
        toast.success("Invoice sent successfully.");
        setEmail("");
        setSending(false);
        setSendMail(false);
      }
    } catch (error) {
      setSending(false);
      setSendMail(false);
      toast.error("Oops, Something went wrong, try again.");
    }
  }
  return (
    <div className="container mx-auto py-4 px-8 flex justify-between items-center mb-6">
      {/* Header */}
      <div className="flex gap-4 items-center"></div>
      <div className="flex gap-4 ">
        {sendMail ? (
          <form onSubmit={handleSendMail} className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="johndoe@gmail.com"
              />
            </div>
            {sending ? (
              <button
                type="button"
                disabled
                className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600"
              >
                <span>
                  <CiMail />
                </span>
                <span>Sending</span>
              </button>
            ) : (
              <button
                type="submit"
                className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600"
              >
                <span>
                  <CiMail />
                </span>
                <span>Send</span>
              </button>
            )}
          </form>
        ) : (
          <button
            onClick={() => setSendMail(true)}
            className="flex bg-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600 text-slate-50"
          >
            <span>
              <CiMail />
            </span>
            <span>Send invoice</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
