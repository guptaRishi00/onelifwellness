import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function InputFields() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="hidden lg:!flex !flex-col w-[35%] z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white w-[80%] flex flex-col !-mt-10 items-center justify-center shadow-lg !px-7 !py-5 rounded-2xl gap-5">
        {/* input fields */}
        <div className="flex flex-col items-center justify-center h-full gap-5 w-full">
          <h1 className="!font-bold !text-lg">Enter Details</h1>
          <input
            type="text"
            className="shadow-md !p-5 !rounded-2xl w-full"
            placeholder="enter your email"
          />
          <input
            type="text"
            className="shadow-md !p-5 !rounded-2xl w-full"
            placeholder="enter your email"
          />
          <textarea
            name=""
            id=""
            className="shadow-md !p-5 !rounded-2xl w-full"
            placeholder="type your message"
          ></textarea>
          <button className="w-full bg-[#022759] !text-white !px-5 !py-2 !rounded-xl">
            Send message
          </button>
        </div>
      </div>

      <div className="!mt-8 !ml-10" ref={textRef}>
        <motion.p
          className="!text-gray-600 !mb-2 !uppercase !tracking-wide !text-sm !font-medium"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={textVariants}
        >
          scientific study of the structure
          <br /> of the human body
        </motion.p>

        <motion.h3
          className="!text-6xl !font-bold !mb-4 !text-gray-800"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
          variants={textVariants}
        >
          Human <br />
          Anatomy
        </motion.h3>

        <motion.p
          className="!text-gray-700 text-justify text-sm"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
          variants={textVariants}
        >
          Human anatomy is the scientific study of the structure of the human
          body. It forms the foundation for understanding physiology, pathology,
          and medical procedures. By learning how organs, bones, muscles, and
          systems interact, we gain insight into how our bodies function and how
          to care for them.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default InputFields;
