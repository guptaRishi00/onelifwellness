import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CallToAction from "../CallToAction";
import Testimonials from "./Testimonials";

// Component to render a section of the article
const ArticleSection = ({ title, children }) => (
  <section className="!mb-10">
    <h2 className="text-3xl font-bold text-[#002B5B] border-b-2 border-[#ADFB49] !pb-3 !mb-6 !mt-6">
      {title}
    </h2>
    {children}
  </section>
);

// Component for the infobox on the right side
// const InfoBox = ({ data }) => (
//   <div className="!w-full lg:!w-80 lg:float-right lg:!ml-8 !mb-8 lg:!mb-0 border-2 bg-white shadow-lg rounded-lg overflow-hidden">
//     <h3 className="font-bold text-center text-xl bg-[#ADFB49] text-[#002B5B] !p-4">
//       {data.title}
//     </h3>
//     {data.imageUrl && (
//       <img src={data.imageUrl} alt={data.title} className="!w-full !h-auto" />
//     )}
//     <div className="!p-6">
//       {data.list.map((item, index) => (
//         <div key={index} className="!mb-4 last:!mb-0">
//           <p className="font-bold text-[#002B5B] text-lg !mb-2">{item.name}</p>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             {item.functions.map((func, i) => (
//               <li key={i} className="text-sm">
//                 {func}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// The main component that structures the article
const OrganExpandArticle = ({ data, organType }) => {
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

  return (
    <div className="bg-gray-100">
      <motion.div
        className="font-serif bg-white !p-6 sm:!p-10 md:!p-16 !w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Article Header */}
        <header className="border-b-3 border-[#ADFB49] !pb-6 !mb-8">
          <h1 className="text-5xl font-bold text-[#002B5B] tracking-wide !mb-2">
            {data.title}
          </h1>
          <p className="text-base text-gray-700 italic">
            From One Life Wellness, the comprehensive encyclopedia
          </p>
        </header>

        <main className="text-gray-700 leading-relaxed text-lg">
          <div className="bg-[#ADFB49] bg-opacity-20 !p-6 rounded-lg !mb-8 border-l-4 border-[#ADFB49]">
            <p className="text-[#002B5B] font-medium text-xl italic">
              {data.introduction}
            </p>
          </div>

          {/* Infobox if available */}
          {/* {data.lobes && <InfoBox data={data.lobes} />} */}

          {/* How It Works Section */}
          {data.howItWorks && (
            <ArticleSection title={data.howItWorks.title}>
              <p className="!mb-6 text-[#002B5B] font-medium text-xl">
                {data.howItWorks.summary}
              </p>
              <div className="!space-y-4">
                {data.howItWorks.parts.map((part, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 !p-5 rounded-lg border-l-4 border-[#ADFB49]"
                  >
                    <span className="font-bold text-[#002B5B] text-lg">
                      {part.name}:
                    </span>{" "}
                    <span className="text-gray-700">{part.description}</span>
                  </div>
                ))}
              </div>
            </ArticleSection>
          )}

          {/* Changes With Age Section */}
          {data.changesWithAge && (
            <ArticleSection title={data.changesWithAge.title}>
              <p className="!mb-6 text-[#002B5B] font-medium text-xl">
                {data.changesWithAge.summary}
              </p>
              <div className="!space-y-5">
                {data.changesWithAge.stages.map((stage, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#ADFB49] from-0% to-white to-15% !p-6 rounded-lg border border-gray-200"
                  >
                    <span className="font-bold text-[#002B5B] text-lg block !mb-2">
                      {stage.name}:
                    </span>
                    <span
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: stage.description.replace(
                          /\[\d+\]/g,
                          (match) =>
                            `<sup class="text-blue-600 cursor-pointer hover:underline">${match}</sup>`
                        ),
                      }}
                    />
                  </div>
                ))}
              </div>
            </ArticleSection>
          )}

          {/* Common Myths Section */}
          {data.commonMyths && (
            <ArticleSection title={data.commonMyths.title}>
              <div className="grid gap-6 md:grid-cols-1">
                {data.commonMyths.myths.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border-l-4 border-green-400 !p-6 rounded-lg"
                  >
                    <div className="flex items-start">
                      <div>
                        <span className="font-bold text-gray-700 text-lg block !mb-2">
                          <strong className=""> Myth:</strong> {item.myth}
                        </span>
                        <span className=" text-[#002B5B]">
                          <strong>Reality:</strong> {item.reality}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ArticleSection>
          )}

          {/* How to Keep Healthy Section */}
          {data.howToKeepHealthy && (
            <ArticleSection title={data.howToKeepHealthy.title}>
              <p className="!mb-6 text-[#002B5B] font-medium text-xl">
                {data.howToKeepHealthy.summary}
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {data.howToKeepHealthy.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border-l-4 border-[#ADFB49] !p-6 rounded-lg"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#ADFB49] text-[#002B5B] font-bold rounded-full !w-8 !h-8 flex items-center justify-center !mr-4 !mt-1 text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-bold text-[#002B5B] text-lg block !mb-2">
                          {tip.title}
                        </span>
                        <span className="text-gray-700">{tip.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ArticleSection>
          )}

          {/* Conclusion */}
          {data.conclusion && (
            <div className="!mt-12 !pt-8 border-t-2 border-[#ADFB49] !mb-20">
              <div className="bg-[#002B5B] !text-white !p-8 rounded-lg">
                <h3 className="text-2xl font-bold !mb-4 !text-[#ADFB49]">
                  Conclusion
                </h3>
                <p className="text-lg leading-relaxed !text-white">
                  {data.conclusion}
                </p>
              </div>
            </div>
          )}
        </main>
      </motion.div>

      {/* Testimonials Section */}
      {/* <Testimonials organType={organType} /> */}

      {/* Call to Action */}
      <CallToAction
        title="Ready to Grow With Us?"
        description="Take the next step in your wellness journey. Dive deeper into our specialized programs, browse our expert articles, or get personal guidance tailored to your needs."
        buttonText="Explore Insights"
        buttonLink="/insights"
      />
    </div>
  );
};

export default OrganExpandArticle;
