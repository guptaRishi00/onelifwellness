import React, { useState, useRef } from "react";
import "../App.css";
import AnatomyTitle from "../components/HumanAnatomy/AnatomyTitle";
import InputFields from "../components/HumanAnatomy/InputFields";
import HumanBody from "../components/HumanAnatomy/HumanBody";
import CallToAction from "../components/CallToAction";
import AnatomyCard from "../components/HumanAnatomy/AnatomyCard";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function HumanAnatomy() {
  const [organType, setOrganType] = useState(null);
  const mobileForm = useRef();
  const [mobileStatus, setMobileStatus] = useState("");

  console.log(organType);

  const sendMobileEmail = (e) => {
    e.preventDefault();
    setMobileStatus("Sending...");

    emailjs
      .sendForm(
        "service_nhwjamx",
        "template_cytqq56",
        mobileForm.current,
        "BRfh47i2hK2ZXCmjO"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setMobileStatus("Message sent successfully! ✅");
          mobileForm.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMobileStatus("Failed to send message. Please try again. ❌");
        }
      );
  };

  return (
    <div className="w-full overflow-hidden">
      <AnatomyTitle />
      <div className="lg:!px-10 !p-5 relative w-full !py-16 !mb-40">
        <div
          className="w-full rounded-2xl !px-8 flex justify-between h-[400px] lg:h-[800px]"
          style={{
            backgroundImage: "linear-gradient(to right, #E7ECF1, #ADFB49)",
          }}
        >
          <InputFields />
          <HumanBody organType={setOrganType} />
          {organType && <AnatomyCard organType={organType} />}
        </div>
      </div>
      
      {/* Mobile Contact Form - Only visible on mobile */}
      <div className="lg:hidden !px-5 !-mt-40">
        <motion.div
          className="bg-white !mx-auto !max-w-md shadow-lg !px-6 !py-8 rounded-2xl !mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="!font-bold !text-xl !text-center !mb-6">Get In Touch</h2>
          <form ref={mobileForm} onSubmit={sendMobileEmail} className="flex flex-col gap-4">
            <input
              type="text"
              className="shadow-md !p-4 !rounded-xl w-full border border-gray-200"
              placeholder="Enter your name"
              name="name"
              required
            />
            <input
              type="email"
              className="shadow-md !p-4 !rounded-xl w-full border border-gray-200"
              placeholder="Enter your email"
              name="email"
              required
            />
            <textarea
              name="message"
              className="shadow-md !p-4 !rounded-xl w-full border border-gray-200 !h-24"
              placeholder="Type your message"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#022759] !text-white !px-5 !py-3 !rounded-xl !font-medium hover:bg-[#033a73] transition-colors"
            >
              Send Message
            </button>
            {mobileStatus && (
              <p className="!text-sm !text-center !mt-2">{mobileStatus}</p>
            )}
          </form>
        </motion.div>
      </div>

      <CallToAction
        title="Ready to Grow With Us?"
        description="Take the next step in your wellness journey. Dive deeper into our specialized programs, browse our expert articles, or get personal guidance tailored to your needs."
        buttonText="Explore Insights"
        buttonLink="/blog-page"
      />
    </div>
  );
}

export default HumanAnatomy;
