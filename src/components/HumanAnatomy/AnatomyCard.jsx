import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import heart from "../../assets/images/human-anatomy/heart-organ.png";
import brain from "../../assets/images/human-anatomy/brain-organ.png";
import muscle from "../../assets/images/human-anatomy/muscle.png";
import stomach from "../../assets/images/human-anatomy/stomach-organ.png";

import {
  Activity,
  HeartPulse,
  BrainCircuit,
  Dumbbell,
  Utensils,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";

function AnatomyCard({ organType }) {
  const partData = {
    brain: {
      image: brain,
      title: "The Brain",
      shortDesc:
        "Center of the nervous system and control center for the body.",
      longDesc:
        "The brain is the most complex organ in the human body. It controls thoughts, memory, emotions, touch, motor skills, vision, breathing, temperature, hunger, and every process that regulates our body.",
      icons: [
        <BrainCircuit size={28} key="brain1" />,
        <Activity size={28} key="brain2" />,
        <HeartPulse size={28} key="brain3" />,
      ],
      cardClass: "md:absolute md:z-10 md:right-[8.8%] md:top-[5%]",
    },
    heart: {
      image: heart,
      title: "The Heart",
      shortDesc: "Muscular organ that pumps blood throughout the body.",
      longDesc:
        "The heart is a fist-sized organ that pumps blood through the circulatory system. It beats about 100,000 times per day, pumping 2,000 gallons of oxygen-rich blood to all parts of the body.",
      icons: [
        <Activity size={28} key="heart1" />,
        <HeartPulse size={28} key="heart2" />,
        <Activity size={28} key="heart3" />,
      ],
      cardClass: "md:absolute md:z-10 md:right-[8.8%] md:top-[10%]",
    },
    "muscle-arm": {
      image: muscle,
      title: "Skeletal Muscles",
      shortDesc: "Tissues that enable body movement and maintain posture.",
      longDesc:
        "Skeletal muscles are attached to bones by tendons and are used to create movement by contracting and relaxing. They make up about 40% of your body weight and contain 50-75% of all proteins in your body.",
      icons: [
        <Dumbbell size={28} key="muscle1" />,
        <Activity size={28} key="muscle2" />,
        <HeartPulse size={28} key="muscle3" />,
      ],
      cardClass: "md:absolute md:z-10 md:right-[5%] md:top-[30%] top-[50%]",
    },
    stomach: {
      image: stomach,
      title: "The Stomach",
      shortDesc:
        "Digestive organ that breaks down food for nutrient absorption.",
      longDesc:
        "The stomach is a muscular, hollow organ that is part of the digestive system. It stores food, mixes it with digestive juices, and begins the process of breaking down food into nutrients the body can absorb.",
      icons: [
        <Utensils size={28} key="stomach1" />,
        <Activity size={28} key="stomach2" />,
        <HeartPulse size={28} key="stomach3" />,
      ],
      cardClass: "md:absolute md:z-10 md:right-[8.8%] md:top-[40%]",
    },
  };

  // Default to heart if no organType is provided or if the organType is invalid
  const currentOrgan = partData[organType] || partData.heart;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: (custom) => ({
      scale: 1,
      transition: { delay: custom * 0.1, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <motion.div
      className="bg-white w-full md:w-[30%] h-[365px] md:h-[57%] rounded-xl md:rounded-4xl !mt-4 md:!mt-10 z-20 !mx-4 md:!ml-10 !p-3 md:!p-5 flex flex-col gap-3 md:gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`header-${organType}`}
          className="bg-[#022759] w-full rounded-xl md:rounded-4xl !p-3 md:!p-5 flex items-center gap-3 md:gap-5"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white rounded-full !p-2 md:!p-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/organ-expand/${organType}`}>
              <motion.img
                src={currentOrgan.image}
                alt=""
                className="w-10 md:w-16"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </Link>
          </motion.div>
          <div className="flex flex-col">
            <motion.h4
              className="!text-white !text-sm md:!text-base"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {currentOrgan.title}
            </motion.h4>
            <motion.p
              className="!text-white !text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {currentOrgan.shortDesc}!
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`description-${organType}`}
          className="bg-[#022759] w-full rounded-xl md:rounded-4xl !p-3 md:!p-5"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.h4
            className="!text-white text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {currentOrgan.title}
          </motion.h4>
          <motion.p
            className="!text-white !text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {currentOrgan.longDesc}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`icons-${organType}`}
          className="bg-[#022759] w-full rounded-xl md:rounded-4xl !p-3 md:!p-5 flex items-center gap-2 md:gap-5 justify-center flex-wrap md:flex-nowrap"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Link className="w-full" to={`/organ-expand/${organType}`}>
            <motion.div
              className="bg-white !p-2 md:!p-8 rounded-lg md:rounded-2xl w-full text-center text-2xl"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5 }}
            >
              Read More
            </motion.div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default AnatomyCard;
