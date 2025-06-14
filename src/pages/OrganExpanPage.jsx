import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import spiral from "../assets/images/organexpandpage/spiral.png";
import heart from "../assets/images/organexpandpage/heart-organ.png";
import brain from "../assets/images/organexpandpage/brain-organ.png";
import muscle from "../assets/images/human-anatomy/muscle.png";
import stomach from "../assets/images/organexpandpage/stomach-organ.png";
import owl from "../assets/images/organexpandpage/owl.png";
import humanbody from "../assets//images/human-anatomy/humanbody.png";
import { Plus } from "lucide-react";

import {
  Activity,
  HeartPulse,
  BrainCircuit,
  Dumbbell,
  Utensils,
} from "lucide-react";
import Testimonials from "../components/OrganExpan/Testimonials";
import CallToAction from "../components/CallToAction";

function OrganExpanPage() {
  const { type } = useParams();
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const faqData = {
    brain: {
      title: "Your Brain: The Key to Your Health and Well-Being",
      description:
        "The brain is your body's central control hub—regulating thoughts, emotions, movement, memory, and more. Here's everything you need to know about how it works and how to keep it sharp.",
      faqs: [
        {
          question: "How does my brain work?",
          answer:
            "Different parts of your brain manage tasks like movement, breathing, emotions, and memory. These regions work together to run everything from thinking to heartbeat—all in sync.",
        },
        {
          question: "How does my brain change with age?",
          answer:
            "As you grow, your brain builds and prunes connections. It sharpens in adulthood and may slow a bit with age, but staying active keeps it strong longer.",
        },
        {
          question: "What are common myths about the brain?",
          answer:
            'You use more than 10% of your brain—almost all areas are active. And "left- or right-brained" thinking is a myth. Your whole brain works together.',
        },
        {
          question: "How does my brain rewire itself?",
          answer:
            "Your brain can adapt and learn by forming new connections. This ability, called neuroplasticity, helps you grow, build skills, and recover after injury.",
        },
        {
          question: "What happens in my brain while I sleep?",
          answer:
            "While you sleep, your brain clears waste, stores memories, and resets for the next day. It's one of the most important times for brain recovery.",
        },
        {
          question: "How can I keep my brain healthy?",
          answer:
            "Eat well, stay active, keep learning, sleep enough, and manage stress. These simple habits protect your memory and boost brainpower long-term.",
        },
      ],
    },
    heart: {
      title: "Your Heart: The Engine That Keeps You Going",
      description:
        "Your heart is a powerful pump that delivers oxygen and nutrients to every part of your body. Learn how it works, how it changes with age, and how you can keep it beating strong.",
      faqs: [
        {
          question: "What does the heart do exactly?",
          answer:
            "Your heart pumps oxygen-rich blood through your body—about 2,000 gallons a day—to keep your organs nourished and remove waste.",
        },
        {
          question: "Does the heart ever rest?",
          answer:
            "Nope—it works nonstop, day and night. Its pace adjusts automatically based on your activity, sleep, and emotional state.",
        },
        {
          question: "What happens to my heart as I age?",
          answer:
            "With age, the heart muscle can thicken and arteries may stiffen, making it harder to circulate blood as efficiently as before.",
        },
        {
          question: "Can emotions really affect my heart?",
          answer:
            "Yes. Strong emotions like stress, fear, or joy can raise your heart rate and blood pressure—sometimes dramatically.",
        },
        {
          question: "Is heart disease preventable?",
          answer:
            "Mostly, yes. Healthy eating, regular exercise, good sleep, and stress management go a long way in protecting your heart.",
        },
        {
          question: "When should I get my heart checked?",
          answer:
            "Start in your 20s—especially if you have a family history. Keep track of your blood pressure, cholesterol, and blood sugar regularly.",
        },
      ],
    },
    stomach: {
      title: "Your Stomach: Where Digestion Begins",
      description:
        "Your stomach isn't just a food processor—it plays a vital role in breaking down nutrients, supporting your immune system, and housing your microbiome. Understanding how it works can help you boost digestion, reduce discomfort, and improve your overall health.",
      faqs: [
        {
          question: "What is the microbiome?",
          answer:
            "It's the community of bacteria, fungi, and microbes living in your gut. These microbes help digest food, protect against illness, and influence everything from mood to metabolism.",
        },
        {
          question: "How do I know if my gut is unhealthy?",
          answer:
            "Common signs include bloating, constipation, fatigue, frequent illness, or food sensitivities. Skin issues and brain fog can also be related to gut imbalance.",
        },
        {
          question: "Can stress really affect digestion?",
          answer:
            "Yes—stress changes gut motility and microbiome balance. It can trigger bloating, cramps, or even disrupt nutrient absorption.",
        },
        {
          question: "What foods are good for my gut?",
          answer:
            "Prebiotics (like garlic, onions, bananas), probiotics (like yogurt, kefir), and fiber-rich foods (like oats and vegetables) all support gut health.",
        },
        {
          question: "Do I need supplements for gut health?",
          answer:
            "Not always. Many people can support their gut through diet. But if needed, probiotics or digestive enzymes may help—talk to a healthcare provider.",
        },
        {
          question: "How long does it take to improve gut health?",
          answer:
            "You can feel better in as little as a few days, but lasting gut changes may take weeks of consistent, healthy habits.",
        },
      ],
    },
    "muscle-arm": {
      title: "Your Muscles & Joints: Move Better, Feel Stronger",
      description:
        "Your muscles and joints are what keep you upright, moving, and pain-free. Learn how your body's support system works, how to care for it, and what habits help you stay strong and mobile as you age.",
      faqs: [
        {
          question: "What's the difference between a tendon and a ligament?",
          answer:
            "Tendons connect muscles to bones, helping you move. Ligaments connect bones to each other, keeping joints stable.",
        },
        {
          question: "How do I know if I have poor posture?",
          answer:
            "Frequent neck or lower back pain, rounded shoulders, or a forward head tilt can be signs. Try standing tall with your shoulders relaxed and aligned over your hips.",
        },
        {
          question: "Can I build strength without a gym?",
          answer:
            "Yes! Bodyweight exercises, walking, yoga, or resistance bands at home can all build and maintain muscle and bone strength.",
        },
        {
          question: "Is it normal to lose flexibility with age?",
          answer:
            "Yes, but stretching and mobility work help you maintain range of motion and prevent stiffness.",
        },
        {
          question: "Should I exercise if I have joint pain?",
          answer:
            "In most cases, yes—gentle, low-impact activity helps reduce stiffness and pain. Always check with a doctor for serious or persistent issues.",
        },
        {
          question: "How often should I stretch?",
          answer:
            "Aim to stretch major muscle groups at least 2–3 times a week—or daily if you're sedentary or recovering from stiffness.",
        },
      ],
    },
  };

  const currentFaq = faqData[type];

  const overviewData = {
    brain: {
      title: "Your Brain: The Key to Your Health and Well-Being",
      description:
        "The brain is the command center of your body, controlling everything from your thoughts and emotions to movement and memory. Whether you're seeking answers about brain health, aging, or neurological conditions, this guide will help you understand how your brain works and what you can do to keep it healthy.",
      tabs: [
        {
          title: "Cerebrum",
          description:
            "This is the largest part of your brain. It helps you think, remember, speak, and make decisions. It also controls movement and receives messages from your senses—like touch, sight, and sound—so you can understand the world around you.",
          conclusion:
            "All these regions communicate constantly to let you move, think and feel—without you even realizing it.",
        },
        {
          title: "Cerebellum",
          description:
            "Located at the back of your brain, the cerebellum helps you stay balanced and move smoothly. It fine-tunes your movements, so you can walk, run, or even hold a pen steadily without thinking about it.",
        },
        {
          title: "Brainstem",
          description:
            "The brainstem controls basic life functions that happen without you thinking—like breathing, heart rate, and digestion. It acts like an autopilot system, keeping you alive and functioning every second of the day.",
        },
        {
          title: "Limbic System",
          description:
            "This part of your brain processes your emotions. It helps you feel happy, scared, excited, or motivated. It also plays a big role in forming memories and shaping your emotional reactions.",
        },
        {
          title: "Thalamus & Hypothalamus",
          description:
            "These small parts are like your brain's control room. They manage hunger, sleep, body temperature, and hormones. They also relay messages between different areas of the brain and your body, helping everything stay in sync.",
        },
      ],
    },
    heart: {
      title: "Your Heart: The Key to Your Health and Well-Being",
      description:
        "The heart is the powerhouse of your body—delivering oxygen, nutrients, and life to every cell. This guide helps you understand how your heart works, how it evolves with age, and what you can do every day to keep it strong and protected.",
      tabs: [
        {
          title: "Right Atrium",
          description:
            "This chamber collects oxygen-poor blood returning from the body. It acts as the entry point for blood that needs to be sent to the lungs for oxygen.",
        },
        {
          title: "Right Ventricle",
          description:
            "The right ventricle pumps the oxygen-poor blood it receives from the right atrium into the lungs, where it picks up fresh oxygen and releases carbon dioxide.",
        },
        {
          title: "Left Atrium",
          description:
            "Once blood is oxygenated in the lungs, it enters the left atrium. This chamber stores the oxygen-rich blood before it moves to the heart's main pumping chamber.",
        },
        {
          title: "Left Ventricle",
          description:
            "The left ventricle is the heart's powerhouse. It pumps oxygen-rich blood out through the aorta to supply the rest of the body with energy and nutrients.",
        },
        {
          title: "Valves",
          description:
            "Valves between each chamber act like one-way doors. They keep blood flowing in the right direction and prevent any backflow during each heartbeat.",
        },
        {
          title: "Pacemaker (SA Node)",
          description:
            "The sinoatrial node is your heart's natural pacemaker. It sends electrical signals that keep your heart beating in a steady and coordinated rhythm.",
        },
      ],
    },
    stomach: {
      title: "Your Gut: The Core of Digestion, Immunity, and Mood",
      description:
        "Your gut does much more than process food. It's a powerhouse of digestion, home to trillions of microbes that influence your immunity, energy, and even emotions. This guide breaks down how your digestive system works and how to care for it at every stage of life.",
      tabs: [
        {
          title: "Mouth",
          description:
            "Digestion starts here. Your teeth and saliva begin breaking down food mechanically and chemically, preparing it for the journey through your digestive system.",
        },
        {
          title: "Esophagus",
          description:
            "This muscular tube carries food from your mouth to your stomach using wave-like movements called peristalsis. It's a fast, smooth, and automatic process.",
        },
        {
          title: "Stomach",
          description:
            "The stomach churns and mixes food with acid and enzymes, breaking it into a semi-liquid form. It also helps kill harmful microbes before food moves on to the intestines.",
        },
        {
          title: "Small Intestine",
          description:
            "This is the main site for digestion and nutrient absorption. Enzymes and bile work here to extract vitamins, minerals, and energy, which are then absorbed into the bloodstream.",
        },
        {
          title: "Large Intestine (Colon)",
          description:
            "The colon reabsorbs water and processes waste. It also houses a large portion of your gut microbiome—helpful bacteria that support immunity, mood, and metabolism.",
        },
        {
          title: "Rectum & Anus",
          description:
            "These parts handle waste storage and elimination. Once digestion is complete, the body prepares to remove what's no longer needed.",
        },
      ],
    },
    "muscle-arm": {
      title:
        "Your Musculoskeletal System: The Framework of Movement and Strength",
      description:
        "Your musculoskeletal system gives your body structure, power, and protection. It includes your bones, muscles, joints, ligaments, and tendons—all working together to help you sit, stand, move, and stay upright. This guide breaks down each part of the system and how they work as a team to support your daily life.",
      tabs: [
        {
          title: "Bones",
          description:
            "Bones form the rigid framework of your body. They support your weight, protect vital organs, and store minerals like calcium. Bone marrow inside certain bones also produces red blood cells.",
        },
        {
          title: "Muscles",
          description:
            "Muscles contract and relax to create movement. They help you lift, walk, breathe, and even pump blood. There are over 600 muscles in your body—working consciously and unconsciously every day.",
        },
        {
          title: "Joints",
          description:
            "Joints are where two or more bones meet. They allow you to bend, rotate, and move with control. Different types of joints—like hinge, ball-and-socket, and pivot—offer different kinds of movement.",
        },
        {
          title: "Ligaments",
          description:
            "Ligaments are tough, elastic bands of tissue that connect bones to other bones. They stabilize your joints and help prevent injuries during movement.",
        },
        {
          title: "Tendons",
          description:
            "Tendons attach muscles to bones. When a muscle contracts, the tendon pulls on the bone, allowing you to move. They're essential for strength and coordination.",
        },
        {
          title: "Cartilage",
          description:
            "Cartilage is a smooth, cushioning tissue found in joints, the nose, ears, and spine. It reduces friction and absorbs shock, protecting your bones from wear and tear.",
        },
      ],
    },
  };

  const currentOverview = overviewData[type] || overviewData.brain;

  console.log(currentOverview.tabs);

  // Define organ data similar to AnatomyCard
  const organData = {
    brain: {
      image: brain,
      title: "The Brain",
      structure:
        "The brain is made up of the cerebrum, cerebellum, and brainstem. Each part has a distinct role—managing thought, balance, and automatic functions. It’s protected by the skull and bathed in cerebrospinal fluid for shock absorption.",
      function:
        "It controls your thoughts, emotions, breathing, digestion, and movement. The brain processes all sensory input and sends signals throughout the body. It also helps regulate sleep, temperature, hunger, memory, and behavior, keeping everything running smoothly.",
      importance:
        "As the body’s command center, the brain is essential for survival. It interprets what you see, hear, and feel—allowing you to think, speak, move, and feel emotions. Without it, no other system can properly function.",
      facts: `Even though it weighs only about 2% of your body, the brain uses over 20% of your energy. It’s always active—even when you’re sleeping—and rewires itself constantly through learning and experiences, a phenomenon called neuroplasticity.`,
      icons: [
        {
          icon: <BrainCircuit size={24} />,
          value: "86 billion",
          label: "neurons",
        },
        {
          icon: <Activity size={24} />,
          value: "100,000",
          label: "miles of blood vessels",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "750ml",
          label: "blood flow per minute",
        },
      ],
    },
    heart: {
      image: heart,
      title: "The Heart",
      structure:
        "Your heart is a strong, four-chambered muscle about the size of your fist. It includes two atria and two ventricles that coordinate to move blood. Valves and a built-in pacemaker keep blood flowing in the right direction with a steady rhythm.",
      function:
        "Each heartbeat sends blood through more than 60,000 miles of vessels. This nonstop movement delivers oxygen and nutrients to your entire body while carrying away waste. Your heart adjusts instantly based on activity, rest, or emotion.",
      importance:
        "The heart powers your entire body—fueling every organ, muscle, and tissue. A healthy heart supports energy, stamina, and emotional stability, and plays a key role in preventing chronic diseases over your lifetime.",
      facts:
        "Your heart beats about 100,000 times a day and pumps around 2,000 gallons of blood. It powers your entire circulatory system and beats faster when you’re excited or stressed. Women’s hearts typically beat 8–10 times faster than men’s.",
      icons: [
        {
          icon: <Activity size={24} />,
          value: "100,000",
          label: "heartbeats per day",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "2,000",
          label: "gallons of blood pumped daily",
        },
        {
          icon: <Activity size={24} />,
          value: "60,000",
          label: "miles of blood vessels",
        },
      ],
    },
    "muscle-arm": {
      image: muscle,
      title: "Skeletal Muscles",
      structure:
        "The musculoskeletal system includes bones, muscles, joints, tendons, and ligaments. Bones provide structure, muscles create movement, and joints offer flexibility. Tendons connect muscles to bones, while ligaments connect bones to each other for stability and motion control.",
      function:
        "It supports your body’s shape, protects internal organs, and powers all movement. Whether you’re walking, lifting, or simply standing still, your MSK system is working—keeping you balanced, stable, and in motion.",
      importance:
        "Your MSK system allows you to live actively and independently. It’s essential not only for mobility but also for posture, injury prevention, and performing everyday tasks like bending, carrying, or climbing stairs.",
      facts:
        "206 bones in the adult human body <br/> • Over 600 skeletal muscles <br/> • ~230 movable and semi-movable joints",
      icons: [
        {
          icon: <Dumbbell size={24} />,
          value: "640+",
          label: "muscles in the body",
        },
        {
          icon: <Activity size={24} />,
          value: "35%",
          label: "of body mass in men",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "30%",
          label: "of body mass in women",
        },
      ],
    },
    stomach: {
      image: stomach,
      title: "The Stomach",
      structure:
        "The stomach is a J-shaped organ with three main parts: the fundus (top), the body (middle), and the antrum (bottom). It has three layers of muscles and a mucus lining.",
      function:
        "The stomach stores food, mixes it with digestive juices, and begins the process of breaking down food into nutrients the body can absorb.",
      importance:
        "The stomach plays a crucial role in digestion, protecting the body from harmful substances, and producing hormones that regulate hunger.",
      facts:
        "The stomach can expand to hold about 1-1.5 liters of food and liquid. It produces 2-3 liters of gastric juice daily.",
      icons: [
        {
          icon: <Utensils size={24} />,
          value: "3-5",
          label: "hours to digest a meal",
        },
        {
          icon: <Activity size={24} />,
          value: "pH 1-3",
          label: "stomach acid",
        },
        {
          icon: <HeartPulse size={24} />,
          value: "20-30%",
          label: "of protein digestion",
        },
      ],
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Get the current organ data or default to heart if type doesn't exist
  const currentOrgan = organData[type] || organData.heart;
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to render the content of the currently selected tab
  const renderTabContent = () => {
    // Add null check for currentOverview.tabs
    if (!currentOverview.tabs || currentOverview.tabs.length === 0) {
      return (
        <p className="text-gray-700">
          No information available for this organ.
        </p>
      );
    }

    const currentTab = currentOverview.tabs[currentTabIndex];
    if (!currentTab) return null;

    // Render content based on tab type
    if (currentTab.points && currentTab.points[0]?.name) {
      // How Your Brain Works tab
      return (
        <div className="space-y-4">
          <p className="text-gray-700">{currentTab.description}</p>
          <div className="space-y-3"></div>
        </div>
      );
    } else if (currentTab.points && currentTab.points[0]?.ageRange) {
      // How Your Brain Changes with Age tab
      return <div className="space-y-3"></div>;
    } else if (currentTab.myths) {
      // Common Myths About the Brain tab
      return (
        <div className="space-y-3">
          {currentTab.myths.map((item, idx) => (
            <div key={idx} className="bg-[#F0F9FF] rounded-lg p-3">
              <h3 className="font-bold text-[#022759]">{item.myth}</h3>
              <p className="text-gray-600 text-sm">{item.reality}</p>
            </div>
          ))}
        </div>
      );
    } else if (currentTab.strategies) {
      // How to Keep Your Brain Healthy tab
      return (
        <div className="space-y-3">
          {currentTab.strategies.map((strategy, idx) => (
            <div key={idx} className="bg-[#F0F9FF] rounded-lg p-3">
              <h3 className="font-bold text-[#022759]">{strategy.category}</h3>
              <p className="text-gray-600 text-sm">{strategy.description}</p>
            </div>
          ))}
        </div>
      );
    }

    return (
      <p className="text-gray-700">
        {currentTab.description || "Select a tab to learn more."}
      </p>
    );
  };

  return (
    <div className="">
      <div className="min-h-screen flex flex-col bg-[#E7FFC9]">
        <motion.div
          className="bg-[#ADFB49] flex-grow flex items-center relative !p-4 md:!p-8 lg:!p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src={spiral}
            alt="Background spiral"
            className="w-1/3 sm:w-2/5 md:w-1/2 absolute z-0 opacity-70 md:opacity-100"
          />

          <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
            {/* Organ image */}
            <motion.div
              className="flex items-center justify-center !px-4"
              variants={fadeInUp}
            >
              <img
                src={currentOrgan.image}
                alt={currentOrgan.title}
                className="w-56 sm:w-72 md:w-80 lg:w-96 max-w-full"
              />
            </motion.div>

            {/* Information section */}
            <motion.div
              className="flex flex-col gap-3 sm:gap-4 bg-white !p-4 md:!p-5 rounded-2xl shadow-lg w-full md:w-4/5 mx-auto"
              variants={fadeInUp}
            >
              <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                {currentOrgan.title}
              </h1>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
                variants={staggerContainer}
              >
                {/* Structure info card */}
                <motion.div
                  className="bg-[#022759] rounded-xl !p-3 md:!p-4 !text-white"
                  variants={fadeInUp}
                >
                  <h2 className="text-sm md:text-md font-bold !mb-1 md:!mb-2 !text-white">
                    Structure
                  </h2>
                  <p className="text-xs md:text-sm !text-white">
                    {currentOrgan.structure}
                  </p>
                </motion.div>

                {/* Function info card */}
                <motion.div
                  className="bg-[#022759] rounded-xl !p-3 md:!p-4 !text-white"
                  variants={fadeInUp}
                >
                  <h2 className="text-sm md:text-md font-bold !mb-1 md:!mb-2 !text-white">
                    Function
                  </h2>
                  <p className="text-xs md:text-sm !text-white">
                    {currentOrgan.function}
                  </p>
                </motion.div>

                {/* Importance info card */}
                <motion.div
                  className="bg-[#022759] rounded-xl !p-3 md:!p-4 !text-white"
                  variants={fadeInUp}
                >
                  <h2 className="text-sm md:text-md font-bold !mb-1 md:!mb-2 !text-white">
                    Importance
                  </h2>
                  <p className="text-xs md:text-sm !text-white">
                    {currentOrgan.importance}
                  </p>
                </motion.div>

                {/* Facts info card */}
                <motion.div
                  className="bg-[#022759] rounded-xl !p-3 md:!p-4 !text-white"
                  variants={fadeInUp}
                >
                  <h2 className="text-sm md:text-md font-bold !mb-1 md:!mb-2 !text-white">
                    Key Facts
                  </h2>
                  <p className="text-xs md:text-sm !text-white">
                    {currentOrgan.facts}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 !p-3 md:!p-4 rounded-xl bg-[#022759]"
                variants={fadeInUp}
              >
                {currentOrgan.icons.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white !p-2 sm:!p-2 rounded-xl flex flex-col items-center justify-center flex-1 "
                  >
                    <div className="mb-1 md:mb-2 text-[#002B5B]">
                      {item.icon}
                    </div>
                    <p className="text-xs md:text-lg font-bold text-[#002B5B]">
                      {item.value}
                    </p>
                    <p className="text-[5px] sm:text-[10px] text-[#002B5B]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Overview section with interactive tabs */}
        <div className="bg-white w-full !p-4 sm:!p-6 md:!p-8 lg:!p-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center text-[#022759] gap-2 sm:gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              {currentOverview.title}
            </h1>
            <p className="font-medium !text-xs sm:text-[8px] w-full md:w-3/4 lg:w-[58%] text-center">
              {currentOverview.description}
            </p>
          </motion.div>

          <div className="flex !flex-col lg:!flex-row items-center justify-between !mt-10 md:!mt-16 lg:!mt-20 gap-8">
            <div className="flex items-center justify-center relative w-full md:w-2/5 lg:w-1/3 !mb-6 md:mb-0">
              <img
                src={owl}
                alt="Owl mascot"
                className="w-48 sm:w-64 md:w-72 lg:w-90 max-w-full wwa-page-scrolling"
              />
              <img
                src={currentOrgan.image}
                alt={`${currentOrgan.title} illustration`}
                className="absolute w-20 sm:w-24 md:w-28 lg:w-30"
              />
            </div>
            <motion.div
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="space-x-0 sm:space-x-2 !mb-3 md:!mb-4 flex flex-wrap gap-2">
                {currentOverview.tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTabIndex(index)}
                    className={`!px-3 sm:!px-4 !py-1 sm:!py-2 text-xs cursor-pointer font-bold text-[#022759] transition rounded-lg ${
                      currentTabIndex === index
                        ? "bg-[#ADFB49] text-white"
                        : "bg-[#C4DDFF] hover:bg-[#ADFB49] hover:text-white"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="bg-white !p-3 sm:!p-4 rounded-xl max-w-xl shadow-md">
                <p className="font-bold text-base sm:text-lg text-[#022759]">
                  {currentOverview.tabs[currentTabIndex]?.title || "Overview"}
                </p>
                <div className="text-gray-700 mt-1 sm:mt-2">
                  {renderTabContent()}
                </div>
                <Link to={"/blog-page"}>
                  <button className="!p-2 rounded-lg !mt-2">
                    Read More{">>"}
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* overview ends here */}

        <motion.div
          className="bg-[#E7FFC9] w-full !p-4 sm:!p-6 md:!p-8 lg:!p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center justify-center text-[#022759] gap-2 sm:gap-3">
            <h1 className="!text-2xl sm:!text-3xl md:!text-4xl !font-bold !text-center">
              {currentFaq.title}
            </h1>
            <p className="!font-medium !text-xs sm:!text-sm w-full sm:w-3/4 md:w-2/3 lg:w-1/2 !text-center">
              {currentFaq.description}
            </p>
          </div>

          <div className="flex sm:flex-col md:!flex-row lg:flex-row items-center md:items-start justify-between !px-2 sm:!px-6 md:!px-8 lg:!px-10 !mt-8 sm:!mt-12 md:!mt-16 lg:!mt-20 !gap-8">
            <div className="hidden lg:flex lg:w-1/3 justify-center md:justify-start">
              <img src={humanbody} alt="" className="w-[100%]" />
            </div>

            <motion.div
              className="w-full md:w-3/5 lg:w-3/5 flex flex-col !gap-3 sm:!gap-4"
              variants={staggerContainer}
            >
              {currentFaq.faqs.map((item, index) => (
                <motion.div
                  key={index}
                  className="!bg-white !rounded-2xl !p-3 sm:!p-4 md:!p-5"
                  variants={fadeInUp}
                >
                  <button
                    className="w-full flex items-center justify-between !p-2 sm:!p-3 md:!p-4 !text-left focus:outline-none cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="!font-medium !text-gray-700 !text-sm sm:!text-base">
                      {item.question}
                    </span>
                    <span className="!p-1 !rounded-full !bg-gray-200">
                      <Plus size={18} className="transition-transform" />
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="!px-2 sm:!px-3 md:!px-4 !pb-2 sm:!pb-3 md:!pb-4 !text-gray-600 !text-xs sm:!text-sm">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <Testimonials image={currentOrgan.image} type={type} />
      </div>
      <CallToAction
        title="Ready to Grow With Us?"
        description="Take the next step in your wellness journey. Dive deeper into our specialized programs, browse our expert articles, or get personal guidance tailored to your needs."
        buttonText="Explore Insights"
        buttonLink="/insights"
      />
    </div>
  );
}

export default OrganExpanPage;
