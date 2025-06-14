import React, { useState, useRef, useEffect } from "react";
import { MoveDown, MoveUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import flowers from "../../assets/images/organexpandpage/flowers.png";

function Testimonials({ image, type }) {
  // Single state to track which FAQ is expanded, -1 means none
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Toggle function for FAQs
  const toggleFAQ = (index) => {
    if (expandedFAQ === index) {
      // If clicking the already expanded FAQ, collapse it
      setExpandedFAQ(null);
    } else {
      // Otherwise expand the clicked FAQ and collapse any other
      setExpandedFAQ(index);
    }
  };

  // Combined FAQ data
  const allFAQs = {
    brain: [
      {
        question: " Your brain never turns off",
        answer:
          "Even while you sleep, your brain is active—sorting memories, clearing waste, and regulating vital functions like breathing and heart rate.",
      },
      {
        question: " Stress changes your brain",
        answer:
          "Chronic stress can shrink key areas like the hippocampus (memory) and enlarge the amygdala (emotional reactivity), affecting mood and decision-making.",
      },
      {
        question: " Learning reshapes your brain",
        answer:
          "Every time you learn something new, your brain forms and strengthens connections—this ability is called neuroplasticity and it lasts a lifetime.",
      },
      {
        question: " The brain and gut are connected",
        answer:
          "Your brain communicates with your gut through the vagus nerve and shared neurotransmitters—what you eat can directly affect how you feel and think.",
      },
      {
        question: " You use your whole brain",
        answer:
          "The idea that we only use 10% of our brain is a myth. Nearly every region is active, even when you're resting or daydreaming.",
      },
      {
        question: " Brain cells talk in milliseconds",
        answer:
          "Neurons send signals across your body in just milliseconds—faster than any computer, enabling instant reactions and decisions.",
      },
    ],
    heart: [
      {
        question: " Your heart powers your body nonstop",
        answer:
          "It beats about 100,000 times a day—pumping blood to deliver oxygen and nutrients to every cell, even while you sleep.",
      },
      {
        question: " Emotions affect your heartbeat",
        answer:
          "Joy, anxiety, and fear all trigger changes in heart rate and rhythm, showing the deep link between emotional and physical health.",
      },
      {
        question: " Women may feel heart attacks differently",
        answer:
          "While chest pain is common, women often feel fatigue, shortness of breath, nausea, or jaw pain instead—making it harder to detect.",
      },
      {
        question: " Exercise builds a stronger heart",
        answer:
          "Aerobic activity strengthens your heart muscle, helping it pump more efficiently and reduce long-term risk for disease.",
      },
      {
        question: " Your heart has its own pacemaker",
        answer:
          "The sinoatrial (SA) node creates electrical impulses that set your heartbeat—like a built-in rhythm generator.",
      },
      {
        question: " Heart disease can begin early",
        answer:
          "Plaque can start forming in arteries during your 20s or 30s—long before symptoms appear, which is why prevention matters early.",
      },
    ],

    stomach: [
      {
        question: " Your gut houses 100 trillion microbes",
        answer:
          "These bacteria, viruses, and fungi help digest food, regulate immunity, and even influence your mood and focus.",
      },
      {
        question: " You produce 90% of serotonin in your gut",
        answer:
          "This “feel-good” neurotransmitter isn’t just made in the brain—your gut plays a major role in emotional health.",
      },
      {
        question: " Digestion starts in your mouth",
        answer:
          "Enzymes in your saliva begin breaking down food before it even reaches your stomach.",
      },
      {
        question: " Your gut is part of your immune system",
        answer:
          "More than 70% of your immune cells live in your gut, helping to fight off infection and regulate inflammation.",
      },
      {
        question: " Fiber feeds your good bacteria",
        answer:
          "Prebiotic fibers from fruits, vegetables, and whole grains fuel the healthy microbes that protect your gut lining.",
      },
      {
        question: " Your gut-brain connection is real",
        answer:
          "The vagus nerve links your digestive system to your brain—so what you eat can impact how you feel mentally and emotionally.",
      },
    ],

    "muscle-arm": [
      {
        question: " You have over 600 muscles",
        answer:
          "Muscles make up nearly 40% of your body weight and are responsible for every movement—from blinking to lifting.",
      },
      {
        question: " Bones are living tissue",
        answer:
          "They’re constantly breaking down and rebuilding through a process called remodeling, which helps maintain strength and flexibility.",
      },
      {
        question: " Posture affects more than your spine",
        answer:
          "Poor posture can strain joints, cause headaches, and even affect breathing—while good alignment supports long-term mobility.",
      },
      {
        question: " Muscle loss begins in your 30s",
        answer:
          "Without regular exercise, adults can lose up to 8% of muscle mass per decade, affecting balance and strength.",
      },
      {
        question: " Stretching improves circulation",
        answer:
          "Gentle stretching keeps muscles flexible, reduces tension, and boosts blood flow—especially helpful after long periods of sitting.",
      },
      {
        question: " Strength training protects your bones",
        answer:
          "Lifting weights or using resistance bands stimulates bone growth and helps prevent osteoporosis as you age.",
      },
    ],
  };

  const currentFaq = allFAQs[type];

  const basicFacts = {
    brain: {
      sub: "Facts",
      title: "Brain Myths vs. Facts",
      description:
        "Quick insights into one of your body's most powerful organs.",
      fact: [
        {
          title: "Myth: The brain stops growing after childhood.",
          description:
            "Fact: Your brain is capable of lifelong change. Neuroplasticity allows it to adapt, grow, and rewire itself—even after injury or trauma.",
        },
        {
          title: "Myth: The brain doesn't use much energy.",
          description:
            "Fact: Your brain uses about 20% of your body's total energy—even though it's just 2% of your weight. It's always working, even at rest.",
        },
        {
          title: "Myth: Sleep is just for rest—not for the brain.",
          description:
            "Fact: During deep sleep, your brain consolidates memories, clears toxins, and recharges. Sleep is essential for focus and emotional balance.",
        },
        {
          title: "Myth: The brain isn't very active.",
          description:
            "Fact: Your brain generates up to 70,000 thoughts every day—guiding your decisions, memories, and feelings from moment to moment.",
        },
        {
          title: "Myth: The brain doesn't need much blood.",
          description:
            "Fact: The brain has around 100,000 miles of blood vessels—enough to circle the Earth four times—delivering vital nutrients and oxygen.",
        },
        {
          title: "Myth: The brain only has a few nerve cells.",
          description:
            "Fact: Your brain contains about 86 billion neurons, each forming thousands of connections to send signals across your entire body.",
        },
      ],
    },
    heart: {
      sub: "Facts",
      title: "Heart Myths vs. Facts",
      description:
        "Quick insights into one of your body's most powerful organs.",
      fact: [
        {
          title: "Myth: Only older people get heart disease.",
          description:
            "Fact: Heart disease can affect people of all ages, especially with poor diet, stress, smoking, or family history.",
        },
        {
          title: "Myth: A strong heart doesn't need exercise.",
          description:
            "Fact: Even the healthiest heart benefits from regular activity—exercise strengthens your heart just like any other muscle.",
        },
        {
          title: "Myth: Chest pain is the only heart attack symptom.",
          description:
            "Fact: Other signs include jaw pain, nausea, shortness of breath, and fatigue—especially in women.",
        },
        {
          title: "Myth: If I feel fine, my heart must be healthy.",
          description:
            "Fact: Heart problems can build silently for years. Regular checkups are key, even without symptoms.",
        },
        {
          title: "Myth: Heart problems only come from genetics.",
          description:
            "Fact: Lifestyle plays a major role—what you eat, how much you move, and how you manage stress all impact your heart health.",
        },
        {
          title: "Myth: Only cardio workouts matter for the heart.",
          description:
            "Fact: Strength training, flexibility, and even walking are all heart-healthy when done consistently.",
        },
      ],
    },
    stomach: {
      sub: "Facts",
      title: "Gut Myths vs. Facts",
      description:
        "Understanding your microbiome goes beyond digestion—your gut influences everything from immunity to mood.",
      fact: [
        {
          title: "Myth: A healthy gut just means no bloating",
          description:
            "Fact: Gut health includes immunity, mood, energy, and metabolism—not just digestion",
        },
        {
          title: "Myth: Probiotics are all you need",
          description:
            "Fact: They help, but gut health also depends on fiber, sleep, movement, and stress",
        },
        {
          title: "Myth: All gut issues are food-related",
          description:
            "Fact: Sleep loss, medications, and mental health can impact your gut too",
        },
        {
          title:
            "Myth: You only need to care about your gut if you have symptoms",
          description:
            "Fact: A balanced gut supports long-term wellness—even if you feel fine today",
        },
        {
          title: "Myth: More fiber is always better",
          description:
            "Fact: Fiber helps—but too much, too fast can cause discomfort. Gradual change is key",
        },
        {
          title: `"Myth: You need a "gut detox""`,
          description:
            "Fact: Your body detoxes naturally—daily balance is better than any cleanse",
        },
      ],
    },
    "muscle-arm": {
      sub: "Facts",
      title: "Muscle & Joint Myths vs. Facts",
      description:
        "Stay strong and mobile by separating common myths from science-backed truths about movement, aging, and pain.",
      fact: [
        {
          title: "Myth: Bones stop changing after your teens",
          description:
            "Fact: Bones constantly rebuild—they respond to use, nutrition, and age",
        },
        {
          title: "Myth: You should avoid all activity when joints hurt",
          description:
            "Fact: Gentle movement often reduces pain and helps joints stay flexible",
        },
        {
          title: "Myth: Cracking joints causes arthritis",
          description:
            "Fact: It doesn't cause joint damage, though it might annoy those around you!",
        },
        {
          title: "Myth: Strength training is only for athletes",
          description:
            "Fact: It's key for maintaining bone density, mobility, and injury prevention for everyone",
        },
        {
          title: "Myth: Back pain always means something is wrong",
          description:
            "Fact: Most back pain comes from posture or strain and improves with movement",
        },
        {
          title: "Myth: Muscle loss is inevitable with age",
          description:
            "Fact: Resistance training and protein intake help maintain and rebuild muscle at any age",
        },
      ],
    },
  };

  const currentFacts = basicFacts[type];

  const benefits = {
    brain: {
      sub: "benefits",
      title: "Brain Health Benefits",
      description:
        "Support your brain's health and performance with simple, science-backed habits that improve focus, memory, and long-term function.",
      insight: [
        {
          title: "Cognitive Clarity",
          description:
            "Improve focus and mental sharpness with habits like staying hydrated, getting enough sleep, and taking regular screen breaks.",
        },
        {
          title: "Emotional Balance",
          description:
            "Support emotional well-being by calming stress centers in the brain through mindfulness, social connection, and gratitude.",
        },
        {
          title: "Memory Boost",
          description:
            "Strengthen memory with quality sleep, healthy fats, and daily brain exercises like puzzles, learning, or journaling.",
        },
        {
          title: "Stress Resilience",
          description:
            "Protect your brain from chronic stress by practicing deep breathing, movement, and rest to reduce cortisol's impact.",
        },
        {
          title: "Neuroplasticity Growth",
          description:
            "Keep your brain flexible by learning new skills, switching routines, or engaging in novel experiences that challenge your thinking.",
        },
        {
          title: "Brain-Healthy Nutrition",
          description:
            "Fuel your mind with omega-3s, leafy greens, and antioxidant-rich foods that help neurons thrive and fight inflammation.",
        },
        {
          title: "Better Sleep Cycles",
          description:
            "Give your brain 7–9 hours of restful sleep to lock in memories, clear toxins, and reset for the next day.",
        },
      ],
    },
    heart: {
      sub: "benefits",
      title: "Heart Health Benefits",
      description:
        "Support your heart's health and performance with simple, science-backed habits that improve circulation, endurance, and long-term function.",
      insight: [
        {
          title: "Stronger Circulation",
          description:
            "Delivers oxygen and nutrients efficiently to muscles, brain, and vital organs.",
        },
        {
          title: "Steadier Energy",
          description:
            "Keeps you energized and focused throughout the day by fueling cells consistently.",
        },
        {
          title: "Reduced Disease Risk",
          description:
            "Lowers chances of hypertension, heart attacks, and other cardiovascular conditions.",
        },
        {
          title: "Emotional Regulation",
          description:
            "Improved heart health leads to better stress response and emotional balance.",
        },
        {
          title: "Deeper, Restorative Sleep",
          description:
            "A calm, regulated heart enhances sleep quality and overnight recovery.",
        },
        {
          title: "Long-Term Vitality",
          description:
            "Maintains stamina and supports healthy aging through improved resilience.",
        },
        {
          title: "Quick Recovery from Stress",
          description:
            "A healthy heart helps you bounce back faster from emotional or physical challenges.",
        },
        {
          title: "Better Physical Performance",
          description:
            "Supports strength, endurance, and overall activity levels with improved circulation.",
        },
      ],
    },
    stomach: {
      sub: "benefits",
      title: "Gut Health Benefits",
      description:
        "Support your gut for smoother digestion, stronger immunity, better mood, and lifelong wellness.",
      insight: [
        {
          title: "Better Digestion",
          description:
            "A healthy gut breaks down food efficiently and keeps you regular, reducing bloating, cramping, and discomfort.",
        },
        {
          title: "Stronger Immunity",
          description:
            "Your gut helps defend against illness by supporting your immune system and reducing inflammation.",
        },
        {
          title: "Improved Mood & Focus",
          description:
            "A balanced microbiome supports better mental clarity, mood stability, and emotional resilience.",
        },
        {
          title: "Hormone Balance",
          description:
            "Your gut helps regulate hormones that affect appetite, stress, sleep, and mood—creating internal balance.",
        },
        {
          title: "Clearer Skin",
          description:
            "Skin issues like acne and eczema can reflect gut imbalances. A healthy gut may reduce breakouts and improve glow.",
        },
        {
          title: "Energy Support",
          description:
            "Efficient digestion means better nutrient absorption—keeping you fueled and focused throughout the day.",
        },
        {
          title: "Long-Term Health Protection",
          description:
            "A diverse gut microbiome lowers your risk for chronic conditions like diabetes, obesity, autoimmune issues, and even Alzheimer's.",
        },
      ],
    },
    "muscle-arm": {
      sub: "benefits",
      title: "Musculoskeletal Health Benefits",
      description:
        "Support your muscles, bones, and joints to stay strong, mobile, and injury-resistant throughout life.",
      insight: [
        {
          title: "Postural Strength",
          description:
            "A strong MSK system helps you stand tall, sit correctly, and reduce strain on your spine, joints, and muscles.",
        },
        {
          title: "Injury Prevention",
          description:
            "Muscle strength and joint stability protect your body from everyday injuries like falls, strains, or back pain.",
        },
        {
          title: "Mobility & Flexibility",
          description:
            "Healthy muscles and joints allow smooth, pain-free movement—making everyday actions like climbing stairs or lifting bags easier.",
        },
        {
          title: "Functional Fitness",
          description:
            "The MSK system powers your ability to carry, walk, balance, and stay independent—especially important with age.",
        },
        {
          title: "Bone Health Support",
          description:
            "Weight-bearing exercise strengthens bones and slows natural bone loss, reducing the risk of fractures or osteoporosis.",
        },
        {
          title: "Recovery & Repair",
          description:
            "With rest, movement, and nutrition, the MSK system naturally heals, rebuilds, and adapts to physical demands.",
        },
        {
          title: "Long-Term Strength",
          description:
            "Staying active and strong in your 30s, 40s, and beyond supports energy, balance, and resilience throughout life.",
        },
      ],
    },
  };

  const currentBenefits = benefits[type];

  // Background colors for benefits section
  const bgColors = ["bg-[#022759]", "bg-[#D9EF78]", "bg-[#F1F2ED]"];

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
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  // FAQ animation variants
  const faqContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const faqItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Carousel navigation
  const nextSlide = () => {
    if (currentFacts.fact.length <= itemsPerSlide) return;

    const maxSlide = Math.ceil(currentFacts.fact.length / itemsPerSlide) - 1;
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (currentFacts.fact.length <= itemsPerSlide) return;

    const maxSlide = Math.ceil(currentFacts.fact.length / itemsPerSlide) - 1;
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  // Handle responsive carousel
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerSlide(1);
      } else if (width < 768) {
        setItemsPerSlide(2);
      } else if (width < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate visible items for current slide
  const getVisibleItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return currentFacts.fact.slice(start, end);
  };

  // Calculate dots for pagination
  const totalDots = Math.ceil(currentFacts.fact.length / itemsPerSlide);

  return (
    <div className="">
      <div className="bg-white">
        {/* facts section starts here */}
        <div className="flex flex-col !p-4 md:!p-10 lg:!p-20">
          <style jsx>{`
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transition: transform 0.6s;
              transform-style: preserve-3d;
            }
            .flip-card-front,
            .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
            }
            .flip-card-back {
              transform: rotateY(180deg);
            }
          `}</style>

          <p className="!text-gray-300">{currentFacts.sub}</p>
          <div className="flex flex-wrap items-center !gap-3 md:!gap-5">
            <h2 className="!text-2xl md:!text-3xl lg:!text-4xl !font-medium !text-[#032659]">
              {currentFacts.title}
            </h2>
            <p className="!text-4xl md:!text-6xl lg:!text-8xl !font-thin !text-gray-300">
              /
            </p>
            <div className="!text-gray-600 !mt-1">
              <p>{currentFacts.description}</p>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative !mt-5 md:!mt-10">
            <div className="flex items-center justify-between w-full !mb-4 md:!mb-6">
              <button
                onClick={prevSlide}
                className="!bg-[#F1F2ED] !hover:bg-[#D8EE78] !p-2 md:!p-3 !rounded-full !shadow-md !transition-all !duration-300 !text-[#032659]"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex !space-x-2">
                {Array.from({ length: totalDots }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`!w-2 !h-2 md:!w-3 md:!h-3 !rounded-full !transition-all !duration-300 !p-1 md:!p-2 ${
                      idx === currentSlide ? "!bg-[#032659]" : "!bg-[#D8EE78]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="!bg-[#F1F2ED] !hover:bg-[#D8EE78] !rounded-full !shadow-md !transition-all !duration-300 !p-2 !text-[#032659]"
                disabled={currentSlide === totalDots - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Flip Cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 !gap-3 md:!gap-4 !p-2 md:!p-4"
              ref={carouselRef}
            >
              {getVisibleItems().map((fact, i) => (
                <div
                  key={`${currentSlide}-${i}`}
                  className="flip-card !h-64 md:!h-80"
                >
                  <div className="flip-card-inner">
                    {/* Front of Card */}
                    <div className="flip-card-front !rounded-3xl !bg-[#F1F2ED] flex items-center justify-center !p-4 md:!p-8 !border-l-4 !border-[#032659]">
                      <h4 className="!text-center !text-base md:!text-xl !font-medium !text-[#032659]">
                        {fact.title}
                      </h4>
                    </div>

                    {/* Back of Card */}
                    <div className="flip-card-back !rounded-3xl !bg-[#D8EE78] !text-[#032659] flex items-center justify-center !p-4 md:!p-8 !shadow-md overflow-auto">
                      <p className="!text-center !text-sm md:!text-base">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* facts section ends here */}

        {/* faq starts here */}
        <motion.div
          className="flex flex-col !p-4 md:!p-10 lg:!p-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="!text-gray-300">FAQ</p>
          <div className="flex flex-wrap items-center !gap-2 md:!gap-5">
            <h2 className="!text-2xl md:!text-3xl lg:!text-4xl !font-medium !text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="!text-4xl md:!text-6xl lg:!text-8xl !font-thin !text-gray-300">
              /
            </p>
            <div className="!text-gray-600 !mt-1">
              <p>Meal planning made easy: your questions, answered</p>
            </div>
          </div>

          {/* Fixed FAQ mapping */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 !gap-4 md:!gap-8 !mt-5 md:!mt-10"
            variants={faqContainer}
            initial="hidden"
            animate="visible"
          >
            {currentFaq &&
              currentFaq.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`transition-all duration-300 ${
                    expandedFAQ === index
                      ? "flex items-start justify-between !gap-5 md:!gap-10 w-full bg-[#F1F2ED] !p-6 md:!p-15 rounded-3xl"
                      : "flex items-center !gap-3 md:!gap-5"
                  }`}
                  layout
                  variants={faqItem}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {expandedFAQ === index ? (
                    <>
                      <motion.div
                        className="border border-black rounded-full !p-3 md:!p-5 !py-4 md:!py-8 bg-[#D9EF78] cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MoveUp size={16} />
                      </motion.div>
                      <div className="flex flex-col items-start !gap-3 md:!gap-5">
                        <p className="!font-semibold !text-base md:!text-lg">
                          {faq.question}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="!font-regular text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      <motion.span
                        className="border border-black rounded-full !p-2 md:!p-3 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MoveDown className="" size={12} />
                      </motion.span>
                      <div className="flex flex-col">
                        <p className="text-sm md:text-base">{faq.question}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
          </motion.div>
          {/* faq ends here */}

          <motion.div
            className="flex flex-col !mt-16 md:!mt-20 lg:!mt-30 !mb-20 md:!mb-30 lg:!mb-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="!text-gray-300">Benefits</p>
            <div className="flex flex-wrap items-center !gap-2 md:!gap-5">
              <h2 className="!text-2xl md:!text-3xl lg:!text-4xl !font-medium !text-gray-800">
                Benefits
              </h2>
              <p className="!text-4xl md:!text-6xl lg:!text-8xl !font-thin !text-gray-300">
                /
              </p>
              <div className="!text-gray-600 !mt-1">
                <p className="w-full md:w-3/4 lg:w-1/2">
                  {currentBenefits.description}
                </p>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 !gap-3 md:!gap-4 !p-2 md:!p-4 !mt-5 md:!mt-10"
              variants={staggerContainer}
            >
              {currentBenefits.insight.slice(0, 7).map((item, index) => (
                <motion.div
                  className={`flex flex-col justify-between !gap-3 md:!gap-5 !px-6 md:!px-10 !py-12 md:!py-24 cursor-pointer rounded-3xl md:rounded-4xl ${
                    bgColors[index % 3]
                  } hover:bg-[#022759] transition-all duration-300 group`}
                  variants={fadeInUp}
                  key={index}
                >
                  <h1
                    className={`!text-2xl md:!text-3xl lg:!text-4xl !font-medium ${
                      bgColors[index % 3] === "bg-[#022759]"
                        ? "!text-white"
                        : bgColors[index % 3] === "bg-[#D9EF78]"
                        ? "!text-gray-800"
                        : "!text-gray-800"
                    } group-hover:!text-white`}
                  >
                    {item.title}
                  </h1>
                  <p
                    className={`${
                      bgColors[index % 3] === "bg-[#022759]"
                        ? "!text-white"
                        : bgColors[index % 3] === "bg-[#D9EF78]"
                        ? "!text-gray-800"
                        : "!text-gray-800"
                    } group-hover:!text-white !font-medium text-md md:text-base`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}

              {/* Image in the last column */}
              <div className="flex items-center justify-center !mb-10 !mt-4 md:!mt-0">
                {image && (
                  <img
                    src={image}
                    alt={`${type} health visual`}
                    className="w-[80%] "
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
