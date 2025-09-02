import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import humanbody from "../../assets/images/human-anatomy/humanbody.png";
import heartLine from "../../assets/images/human-anatomy/heart-line.png";
import muscleLine from "../../assets/images/human-anatomy/muscle-line.png";
import brainLine from "../../assets/images/human-anatomy/brain-line.png";
import bladderLine from "../../assets/images/human-anatomy/bladder-line.png";

function HumanBody({ organType }) {
  const [activePoint, setActivePoint] = useState(null);
  const containerRef = useRef(null);
  const pointsRef = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  // Set brain as default selection on component mount - only for desktop
  useEffect(() => {
    if (!isMobile) {
      setActivePoint("brain");
      organType("brain");
    } else {
      setActivePoint(null);
      organType(null);
    }
  }, [organType, isMobile]);

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is standard lg breakpoint in Tailwind
    };

    // Initial check
    checkMobile();

    // Set up listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Register click points in the ref object
  const registerPointRef = (name, element) => {
    if (element) {
      pointsRef.current[name] = element;
    }
  };

  const handlePointClick = (pointName) => {
    // Only allow card selection on desktop (lg and above)
    if (isMobile) return;
    
    setActivePoint(activePoint === pointName ? null : pointName);
    organType(activePoint === pointName ? null : pointName);
  };

  // Add document click listener to close card when clicking outside - ONLY on mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Only run this function on mobile devices
      if (!isMobile) return;

      // Skip handling for link/button clicks - they should navigate as expected
      if (
        event.target.tagName === "A" ||
        event.target.tagName === "BUTTON" ||
        event.target.closest("a") ||
        event.target.closest("button")
      ) {
        return;
      }

      // Check if click is inside the currently displayed anatomy content
      const anatomyContentElement = document.getElementById(
        `${activePoint}-content`
      );
      if (
        anatomyContentElement &&
        anatomyContentElement.contains(event.target)
      ) {
        return; // Click is inside the anatomy content, don't do anything
      }

      // Check if clicked on any of the anatomy points
      let clickedOnPoint = false;
      Object.values(pointsRef.current).forEach((element) => {
        if (element && element.contains(event.target)) {
          clickedOnPoint = true;
        }
      });

      // If not clicked on a point or inside content and there's an active point, close it
      if (!clickedOnPoint && activePoint) {
        setActivePoint(null);
        organType(null);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activePoint, organType, isMobile]);

  // Helper function to get the appropriate line image and positioning
  const getLineImageDetails = (pointName) => {
    // Map each point to its line image and manual positioning
    // You can adjust these values directly for precise positioning
    const lineDetails = {
      brain: {
        src: brainLine,
        className:
          "hidden lg:absolute lg:top-[-4.5%] lg:left-[47.5%] w-[250px]", // Adjust these values manually
      },
      heart: {
        src: heartLine,
        className: "hidden lg:absolute lg:top-[10%] lg:left-[48.6%] w-[255px]", // Adjust these values manually
      },
      "muscle-arm": {
        src: muscleLine,
        className: "hidden lg:absolute lg:top-[19%] lg:left-[54.5%] w-[250px]", // Adjust these values manually
      },
      stomach: {
        src: bladderLine,
        className: "hidden lg:absolute lg:top-[29%] lg:left-[47.7%] w-[250px] ", // Adjust these values manually
      },
    };

    return lineDetails[pointName] || null;
  };

  const AnatomyPoint = ({ top, left, name, label }) => (
    <div
      ref={(el) => registerPointRef(name, el)}
      className={`absolute ${top} ${left} cursor-pointer transition-all duration-300 z-10 transform hover:scale-110`}
      onClick={() => handlePointClick(name)}
    >
      <motion.div
        className={`w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center ${
          activePoint === name ? "ring-2 ring-blue-500" : ""
        }`}
        whileTap={{ scale: 0.9 }}
        animate={activePoint === name ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`w-2 h-2 rounded-full ${
            activePoint === name ? "bg-red-500" : "bg-blue-600"
          } absolute`}
          animate={
            activePoint === name
              ? { backgroundColor: "#ef4444" }
              : { backgroundColor: "#2563eb" }
          }
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>
      <div className="w-4 h-4 rounded-full bg-white shadow-md absolute animate-ping opacity-30"></div>
      {/* Label display removed */}
    </div>
  );

  // Get active line image details
  const activeLineDetails = activePoint
    ? getLineImageDetails(activePoint)
    : null;

  return (
    <div
      ref={containerRef}
      className="w-full absolute mx-auto flex justify-center"
    >
      <img
        src={humanbody}
        alt="Human anatomy"
        className="w-[90%] lg:w-[43%] !-mt-19 lg:!-mt-30 !-ml-22"
      />

      {/* Brain */}
      <AnatomyPoint
        top="top-[-10.3%] lg:top-[-6%]"
        left="left-[39%] lg:left-[47.7%]"
        name="brain"
        label="Brain"
      />

      {/* Heart */}
      <AnatomyPoint
        top="top-[8%] lg:top-[12.5%]"
        left="left-[40%] lg:left-[48.5%]"
        name="heart"
        label="Heart"
      />

      {/* Stomach */}
      <AnatomyPoint
        top=" top-[27%] lg:top-[29%]"
        left="left-[38%] lg:left-[47.8%]"
        name="stomach"
        label="Stomach"
      />

      {/* Muscles */}
      <AnatomyPoint
        top="top-[15%] lg:top-[18%]"
        left="left-[54%]"
        name="muscle-arm"
        label="Muscles"
      />

      {/* Display the active line with animation */}
      <AnimatePresence>
        {activeLineDetails && (
          <motion.img
            src={activeLineDetails.src}
            alt={`${activePoint} line`}
            className={`z-0 ${activeLineDetails.className}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default HumanBody;
