import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function StomachPage() {
  return (
    <div className="!bg-blue-50 !min-h-screen !py-8 !px-4">
      <div className="!w-full !mx-auto">
        {/* Hero Section */}
        <div className="!text-center !mb-8">
          <div className="!bg-green-100 !px-4 !py-2 !rounded-full !inline-block !mb-4">
            <span className="!text-sm !font-medium !text-blue-900">
              🍃 Gut Health Guide
            </span>
          </div>
          <h1 className="!text-4xl !font-bold !text-blue-900 !mb-4">
            Your Gut: The Key to Your Overall Well-Being
          </h1>
          <p className="!text-blue-800 !mb-6 !max-w-3xl !mx-auto">
            Your gut is more than just a digestion center—it's the foundation of
            your overall health. Often called the "second brain," your gut
            houses trillions of bacteria that influence digestion, immunity,
            mood, and even brain function. A well-balanced gut microbiome can
            lead to better energy, improved mental clarity, and a stronger
            immune system.
          </p>
        </div>

        {/* How Gut Works Section */}
        <div className="!bg-white !p-6 !rounded-lg !shadow-sm !mb-8 !border">
          <h2 className="!text-2xl !font-bold !text-blue-900 !mb-4 !flex !items-center">
            <div className="!bg-green-300 !w-10 !h-10 !rounded-lg !flex !items-center !justify-center !mr-3">
              <span className="!text-xl">🍃</span>
            </div>
            How Your Gut Works
          </h2>
          <p className="!text-blue-800 !leading-relaxed !mb-4">
            The digestive system is a complex network of organs that work
            together to break down food, absorb nutrients, and eliminate waste.
            Think of it as a sophisticated processing plant that runs 24/7 to
            keep your body functioning optimally.
          </p>
          <p className="!text-blue-800 !leading-relaxed">
            Starting from your mouth where digestion begins with chewing and
            saliva, food travels through the esophagus to your stomach—a
            powerhouse of acids and enzymes. The small intestine then absorbs
            most nutrients with help from the liver, pancreas, and gallbladder.
            Finally, the large intestine hosts billions of beneficial bacteria
            that digest fiber, produce vitamins, and regulate immune function.
            Each section plays a crucial role in maintaining your overall health
            and well-being.
          </p>
        </div>

        {/* Gut-Brain Connection Section */}
        <div className="!bg-white !p-6 !rounded-lg !shadow-sm !mb-8 !border">
          <h2 className="!text-2xl !font-bold !text-blue-900 !mb-4 !flex !items-center">
            <div className="!bg-green-300 !w-10 !h-10 !rounded-lg !flex !items-center !justify-center !mr-3">
              <span className="!text-xl">🧠</span>
            </div>
            The Gut-Brain Connection
          </h2>
          <p className="!text-blue-800 !leading-relaxed">
            Did you know that 90% of serotonin (the happiness hormone) is
            produced in the gut? The gut and brain communicate constantly
            through the gut-brain axis, influencing mood, stress levels, and
            cognitive function. When your gut is healthy, you feel more balanced
            and energized. However, an unhealthy gut can contribute to anxiety,
            depression, and even neurological disorders. This incredible
            connection is why your gut is often called your "second brain."
          </p>
        </div>

        {/* Signs of Unhealthy Gut Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3">
              Warning Signs of an Unhealthy Gut
            </h2>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              Your body gives clear signals when your gut is out of balance.
              Recognizing these signs early can help prevent more serious
              issues.
            </p>
          </div>

          <div className="!grid !md:grid-cols-2 !lg:grid-cols-3 !gap-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!text-center !mb-3">
                <span className="!text-3xl">😣</span>
                <h4 className="!font-bold !text-blue-900 !mt-2">
                  Digestive Issues
                </h4>
              </div>
              <p className="!text-blue-800 !text-sm !text-center">
                Frequent bloating, gas, constipation, or diarrhea
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!text-center !mb-3">
                <span className="!text-3xl">😴</span>
                <h4 className="!font-bold !text-blue-900 !mt-2">
                  Unexplained Fatigue
                </h4>
              </div>
              <p className="!text-blue-800 !text-sm !text-center">
                Feeling tired despite adequate sleep and rest
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!text-center !mb-3">
                <span className="!text-3xl">🤧</span>
                <h4 className="!font-bold !text-blue-900 !mt-2">
                  Food Intolerances
                </h4>
              </div>
              <p className="!text-blue-800 !text-sm !text-center">
                New sensitivities to foods you used to tolerate well
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!text-center !mb-3">
                <span className="!text-3xl">🦠</span>
                <h4 className="!font-bold !text-blue-900 !mt-2">
                  Frequent Infections
                </h4>
              </div>
              <p className="!text-blue-800 !text-sm !text-center">
                Getting sick often due to weakened immunity
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!text-center !mb-3">
                <span className="!text-3xl">🔴</span>
                <h4 className="!font-bold !text-blue-900 !mt-2">
                  Skin Problems
                </h4>
              </div>
              <p className="!text-blue-800 !text-sm !text-center">
                Acne, eczema, or other inflammatory skin conditions
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!text-center !mb-3">
                <span className="!text-3xl">😰</span>
                <h4 className="!font-bold !text-blue-900 !mt-2">
                  Mood Changes
                </h4>
              </div>
              <p className="!text-blue-800 !text-sm !text-center">
                Increased anxiety, depression, or mood swings
              </p>
            </div>
          </div>
        </div>

        {/* Myths Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3 !flex !items-center !justify-center">
              <span className="!text-2xl !mr-2">🚫</span>
              Common Myths About Gut Health
            </h2>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              There are many misconceptions about gut health. Let's separate
              fact from fiction.
            </p>
          </div>

          <div className="!grid !md:grid-cols-1 !gap-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  A healthy gut just means good digestion
                </h4>
              </div>
              <p className="!text-blue-800">
                Your gut does much more than digest food—it impacts your immune
                system, brain function, mood regulation, and overall well-being
                through complex interactions with your entire body.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Probiotics alone can fix gut health
                </h4>
              </div>
              <p className="!text-blue-800">
                While probiotics help, a balanced diet rich in fiber,
                prebiotics, and diverse nutrients is essential for optimal gut
                function. Probiotics work best as part of a comprehensive gut
                health strategy.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Gut issues are always caused by food
                </h4>
              </div>
              <p className="!text-blue-800">
                Stress, lack of sleep, medications like antibiotics, and
                environmental factors can all disrupt gut bacteria, leading to
                digestive problems. Diet is important, but it's not the only
                factor.
              </p>
            </div>
          </div>

          <div className="!text-center">
            <Link to="/blog-page?organType=Stomach" className="!inline-block">
              <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-bold !py-3 !px-6 !rounded-full flex items-center gap-2">
                🍃 Read More: Gut Health Myths Debunked
                <ArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
          Amazing Things Your Gut Can Do
        </h2>

        <p className="!text-blue-900 !mb-4">
          Your gut is truly remarkable! Here are some incredible facts about
          this complex and vital system.
        </p>

        <div className="!space-y-4 !mb-6">
          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              It Hosts Over 100 Trillion Bacteria
            </h4>
            <p className="!text-blue-900">
              Your gut microbiome contains more bacteria than there are cells in
              your entire body! These beneficial microbes aid digestion, support
              immune function, and even influence your mood and behavior.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              It Produces Mood-Regulating Chemicals
            </h4>
            <p className="!text-blue-900">
              Your gut produces neurotransmitters like serotonin and dopamine,
              which directly influence your mood, sleep patterns, and overall
              mental well-being. This is why gut health is so closely linked to
              mental health.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              Your Gut Microbiome is Unique Like a Fingerprint
            </h4>
            <p className="!text-blue-900">
              No two people have the same gut bacteria composition. Your unique
              microbiome is influenced by genetics, diet, environment, and life
              experiences, making personalized gut health approaches most
              effective.
            </p>
          </div>

          <Link to="/blog-page?organType=Stomach" className="!inline-block !w-full">
            <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full flex items-center justify-center gap-2">
              [Read More: 15 Fascinating Gut Health Facts]
              <ArrowRight className="!inline-block !ml-2" />
            </button>
          </Link>
        </div>

        <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
          How to Keep Your Gut Healthy
        </h2>

        <p className="!text-blue-900 !mb-4">
          Maintaining a balanced gut isn't complicated—it starts with simple
          lifestyle changes that can have profound effects on your overall
          health:
        </p>

        <div className="!space-y-4 !mb-6">
          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              1. Eat a Diverse, Fiber-Rich Diet
            </h4>
            <p className="!text-blue-900">
              Include plenty of vegetables, fruits, whole grains, and legumes.
              Consume fermented foods like yogurt, kimchi, sauerkraut, and
              kombucha to boost beneficial bacteria. Limit processed foods,
              excess sugar, and artificial sweeteners, which can harm your gut
              microbiome and promote inflammation.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              2. Stay Properly Hydrated
            </h4>
            <p className="!text-blue-900">
              Drinking enough water promotes healthy digestion, nutrient
              absorption, and detoxification. Adequate hydration also helps
              maintain the protective mucus lining in your intestines, which
              supports beneficial bacteria and prevents harmful substances from
              entering your bloodstream.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              3. Manage Stress Effectively
            </h4>
            <p className="!text-blue-900">
              Chronic stress disrupts gut bacteria and can lead to digestive
              issues. Practice deep breathing, meditation, yoga, or regular
              exercise to keep your gut-brain connection strong. Even short
              daily relaxation practices can significantly improve your gut
              health.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              4. Prioritize Quality Sleep
            </h4>
            <p className="!text-blue-900">
              Poor sleep weakens the gut barrier and leads to inflammation and
              digestive problems. Aim for 7-9 hours of quality sleep per night.
              Your gut bacteria follow circadian rhythms too, so consistent
              sleep patterns help maintain a healthy microbiome.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              5. Use Antibiotics Wisely
            </h4>
            <p className="!text-blue-900">
              Antibiotics kill both good and bad bacteria, leading to
              imbalances. Only use them when prescribed by a healthcare
              provider, and consider taking probiotics during and after
              antibiotic treatment to help restore your gut microbiome more
              quickly.
            </p>
          </div>

          <Link to="/blog-page?organType=Stomach" className="!inline-block !w-full">
            <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full flex items-center justify-center gap-2">
              [Read More: Complete Gut Health Guide]
              <ArrowRight className="!inline-block !ml-2" />
            </button>
          </Link>
        </div>

        {/* Probiotics Section */}
        <div className="!bg-white !p-6 !rounded-lg !shadow-sm !mb-8 !border">
          <h2 className="!text-2xl !font-bold !text-blue-900 !mb-4">
            The Best Probiotics for Gut and Mental Health
          </h2>
          <p className="!text-blue-800 !leading-relaxed !mb-4">
            Probiotics are live bacteria that provide significant benefits for
            gut and brain health. Research has shown that certain probiotic
            strains can help reduce stress, anxiety, and depression while
            promoting overall cognitive function through the gut-brain
            connection.
          </p>

          <div className="!grid !md:grid-cols-3 !gap-4 !mb-4">
            <div className="!bg-blue-50 !p-4 !rounded-lg">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                Lactobacillus rhamnosus
              </h4>
              <p className="!text-blue-800 !text-sm">
                Reduces anxiety and depression while supporting digestive health
              </p>
            </div>
            <div className="!bg-blue-50 !p-4 !rounded-lg">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                Bifidobacterium longum
              </h4>
              <p className="!text-blue-800 !text-sm">
                Supports cognitive function, memory, and stress response
              </p>
            </div>
            <div className="!bg-blue-50 !p-4 !rounded-lg">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                Saccharomyces boulardii
              </h4>
              <p className="!text-blue-800 !text-sm">
                Helps with IBS symptoms and reduces gut inflammation
              </p>
            </div>
          </div>

          <p className="!text-blue-800 !leading-relaxed">
            Get probiotics through fermented foods like yogurt, kefir, kimchi,
            and miso, or choose a high-quality multi-strain supplement. Pair
            probiotics with prebiotic foods (garlic, onions, bananas, asparagus)
            to help them thrive in your gut.
          </p>
        </div>

        {/* Antibiotics Section */}
        <div className="!bg-white !p-6 !rounded-lg !shadow-sm !mb-8 !border">
          <h2 className="!text-2xl !font-bold !text-blue-900 !mb-4">
            The Effects of Antibiotics on Gut Health
          </h2>
          <p className="!text-blue-800 !leading-relaxed !mb-4">
            Antibiotics are lifesaving medications, but they can disrupt gut
            health by killing not just harmful bacteria but also beneficial gut
            microbes. This can lead to digestive issues, weakened immunity, and
            long-term imbalances in gut flora that may take months to fully
            restore.
          </p>

          <div className="!grid !md:grid-cols-2 !gap-4 !mb-4">
            <div>
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                Common Side Effects:
              </h4>
              <ul className="!text-blue-800 !text-sm !space-y-1">
                <li>• Diarrhea or constipation</li>
                <li>• Bloating and gas</li>
                <li>• Weakened immunity</li>
                <li>• Food intolerances</li>
                <li>• Yeast infections</li>
              </ul>
            </div>
            <div>
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                Recovery Steps:
              </h4>
              <ul className="!text-blue-800 !text-sm !space-y-1">
                <li>• Take probiotics during treatment</li>
                <li>• Eat prebiotic-rich foods</li>
                <li>• Reduce sugar and processed foods</li>
                <li>• Stay hydrated and eat fiber</li>
                <li>• Be patient—recovery takes time</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="!bg-green-100 !p-5 !rounded-lg !border !border-green-200">
          <h2 className="!text-xl !font-semibold !text-blue-900 !mb-2">
            Remember:
          </h2>
          <p className="!text-blue-900">
            Your gut is truly the foundation of your overall health, influencing
            everything from your immune system to your mood and energy levels.
            By making simple but consistent changes to support your gut
            microbiome, you're investing in your long-term health and
            well-being. Small daily choices can lead to profound improvements in
            how you feel and function. Listen to your gut—it's trying to tell
            you something important!
          </p>
        </div>
      </div>
    </div>
  );
}

export default StomachPage;
