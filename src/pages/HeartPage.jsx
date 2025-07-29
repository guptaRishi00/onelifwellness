import React from "react";

function HeartPage() {
  return (
    <div className="!bg-blue-50 !min-h-screen !py-8 !px-4">
      <div className="!w-full !mx-auto">
        {/* Hero Section */}
        <div className="!text-center !mb-8">
          <div className="!bg-green-100 !px-4 !py-2 !rounded-full !inline-block !mb-4">
            <span className="!text-sm !font-medium !text-blue-900">
              ❤️ Heart Health Guide
            </span>
          </div>
          <h1 className="!text-4xl !font-bold !text-blue-900 !mb-4">
            Your Heart: The Key to Your Life and Energy
          </h1>
          <p className="!text-blue-800 !mb-6 !max-w-3xl !mx-auto">
            The heart is one of the most vital organs in the human body,
            responsible for keeping you alive and energized. Acting as a
            powerful pump, it circulates oxygen-rich blood to every cell,
            ensuring that your body functions smoothly. Whether you're resting,
            running, or experiencing emotions, your heart is constantly working
            behind the scenes to keep you going.
          </p>
        </div>

        {/* How Heart Works Section */}
        <div className="!bg-white !p-6 !rounded-lg !shadow-sm !mb-8 !border">
          <h2 className="!text-2xl !font-bold !text-blue-900 !mb-4 !flex !items-center">
            <div className="!bg-green-300 !w-10 !h-10 !rounded-lg !flex !items-center !justify-center !mr-3">
              <span className="!text-xl">❤️</span>
            </div>
            How Your Heart Works
          </h2>
          <p className="!text-blue-800 !leading-relaxed !mb-4">
            The heart is a strong, muscular organ about the size of your fist,
            located in the chest. It has four chambers that work together like a
            perfectly coordinated team to pump blood throughout the body. The
            right atrium receives oxygen-poor blood from the body, while the
            right ventricle sends this blood to the lungs to pick up oxygen. The
            left atrium then receives the oxygen-rich blood from the lungs, and
            the left ventricle—the strongest chamber—pumps this oxygenated blood
            to the rest of your body through a network of arteries.
          </p>
          <p className="!text-blue-800 !leading-relaxed">
            The heart beats about 100,000 times a day, sending blood through
            60,000 miles of blood vessels! Its electrical system ensures that it
            beats in a coordinated manner, keeping you alive and active. This
            incredible organ generates enough energy daily to power a small car
            for 20 miles, working tirelessly without you even thinking about it.
          </p>
        </div>

        {/* Age Changes Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
              How Your Heart Changes with Age
            </h3>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              As we go through different life stages, our heart undergoes
              significant changes in structure and function. Here's what happens
              at each stage of life.
            </p>
          </div>

          <div className="!grid !md:grid-cols-2 !lg:grid-cols-3 !gap-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  1
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Before Birth</h4>
                  <span className="!text-sm !text-blue-600">(3-8 weeks)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Formation Stage
              </h5>
              <p className="!text-blue-800 !text-sm">
                The heart starts forming by the 3rd week of pregnancy and is
                fully developed by the 8th week. Special fetal structures help
                bypass the lungs until birth, making this the most critical
                period for heart development.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  2
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Childhood</h4>
                  <span className="!text-sm !text-blue-600">(0-12 years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Growing Engine
              </h5>
              <p className="!text-blue-800 !text-sm">
                The heart grows rapidly, adapting to the child's increasing
                energy needs. A newborn's heart beats much faster (120-160 beats
                per minute) compared to an adult's, gradually slowing as the
                child grows.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  3
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Young Adulthood</h4>
                  <span className="!text-sm !text-blue-600">(13-40 years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Peak Performance
              </h5>
              <p className="!text-blue-800 !text-sm">
                The heart reaches its full size and efficiency, working at its
                peak. This is when lifestyle choices such as diet, exercise, and
                stress management start playing a crucial role in long-term
                heart health.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  4
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Middle Age</h4>
                  <span className="!text-sm !text-blue-600">(40-60 years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Maintenance Phase
              </h5>
              <p className="!text-blue-800 !text-sm">
                The heart's pumping efficiency may decline slightly. Blood
                vessels may start to stiffen, and conditions like high blood
                pressure and cholesterol buildup can develop if unhealthy habits
                persist.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border !md:col-span-2 !lg:col-span-1">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  5
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Senior Years</h4>
                  <span className="!text-sm !text-blue-600">(60+ years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Experienced Worker
              </h5>
              <p className="!text-blue-800 !text-sm">
                The heart muscle may thicken, and blood vessels may stiffen
                further, making circulation less efficient. However, a healthy
                lifestyle can significantly slow these changes and maintain
                heart function well into old age.
              </p>
            </div>
          </div>

          <div className="!text-center">
            <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-bold !py-3 !px-6 !rounded-full">
              📖 Read More: Heart Development Through Life
            </button>
          </div>
        </div>

        {/* Myths Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3 !flex !items-center !justify-center">
              <span className="!text-2xl !mr-2">🚫</span>
              Common Myths About the Heart
            </h2>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              There are many misconceptions about heart health. Let's set the
              record straight with facts.
            </p>
          </div>

          <div className="!grid !md:grid-cols-2 !gap-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Heart disease only affects older people
                </h4>
              </div>
              <p className="!text-blue-800">
                Young adults can also develop heart problems due to poor
                lifestyle choices, genetics, or chronic stress. Prevention
                should start early!
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  If you have a strong heart, you don't need to exercise
                </h4>
              </div>
              <p className="!text-blue-800">
                Regular exercise keeps your heart muscle strong and prevents
                future heart problems. Even a healthy heart needs consistent
                activity to stay in peak condition.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Chest pain is the only sign of a heart attack
                </h4>
              </div>
              <p className="!text-blue-800">
                Heart attacks can also cause nausea, jaw pain, shortness of
                breath, fatigue, and pain in the arms or back. Symptoms can vary
                greatly between individuals.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Heart problems run in families, so there's nothing I can do
                </h4>
              </div>
              <p className="!text-blue-800">
                While genetics play a role, lifestyle choices have a huge impact
                on heart health. You can significantly reduce your risk through
                healthy habits.
              </p>
            </div>
          </div>

          <div className="!text-center">
            <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-bold !py-3 !px-6 !rounded-full">
              ❤️ Read More: Heart Health Myths Debunked
            </button>
          </div>
        </div>

        <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
          Amazing Things Your Heart Can Do
        </h2>

        <p className="!text-blue-900 !mb-4">
          Your heart is truly remarkable! Here are some incredible facts about
          this life-sustaining organ.
        </p>

        <div className="!space-y-4 !mb-6">
          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              It Pumps 2,000 Gallons Daily
            </h4>
            <p className="!text-blue-900">
              Your heart pumps about 2,000 gallons of blood every day through
              60,000 miles of blood vessels. That's enough blood to fill a small
              swimming pool every single day!
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              It Responds to Your Emotions
            </h4>
            <p className="!text-blue-900">
              Your heart beats faster when you're excited, in love, or stressed.
              This is because emotions trigger the release of hormones that
              directly affect your heart rate and blood pressure.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              It Has Its Own Electrical System
            </h4>
            <p className="!text-blue-900">
              Your heart doesn't need your brain to tell it to beat! It has its
              own electrical system that keeps it beating even if it's
              disconnected from the nervous system.
            </p>
          </div>

          <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full">
            [Read More: 15 Amazing Heart Facts]
          </button>
        </div>

        <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
          How to Keep Your Heart Healthy
        </h2>

        <p className="!text-blue-900 !mb-4">
          Taking care of your heart is essential for a long and active life.
          Here are the most effective ways to maintain cardiovascular health:
        </p>

        <div className="!space-y-4 !mb-6">
          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              1. Eat a Heart-Healthy Diet
            </h4>
            <p className="!text-blue-900">
              Focus on fruits, vegetables, whole grains, and lean proteins.
              Include omega-3 fatty acids found in fish, nuts, and seeds while
              avoiding excess salt, sugar, and unhealthy fats. Foods rich in
              antioxidants like berries and dark leafy greens help protect your
              heart from damage.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              2. Stay Physically Active
            </h4>
            <p className="!text-blue-900">
              Engage in at least 30 minutes of moderate exercise most days of
              the week. Walking, swimming, cycling, and dancing are all
              excellent for heart health. Strength training and yoga can also
              benefit your cardiovascular system by improving circulation and
              reducing stress.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              3. Manage Stress Effectively
            </h4>
            <p className="!text-blue-900">
              Chronic stress can damage your heart by raising blood pressure and
              increasing inflammation. Practice deep breathing, meditation, or
              mindfulness to help manage stress. Getting enough sleep (7-9 hours
              per night) also allows your heart to recover and repair.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              4. Avoid Harmful Substances
            </h4>
            <p className="!text-blue-900">
              Smoking damages blood vessels and significantly increases heart
              disease risk. Excessive alcohol consumption can raise blood
              pressure and contribute to heart problems. If you smoke, quitting
              is the single best thing you can do for your heart health.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              5. Regular Health Monitoring
            </h4>
            <p className="!text-blue-900">
              Keep track of your blood pressure, cholesterol levels, and blood
              sugar through regular checkups. Early detection of issues can
              prevent serious complications. Know your family history and
              discuss your risk factors with your healthcare provider.
            </p>
          </div>

          <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full">
            [Read More: Complete Heart Health Guide]
          </button>
        </div>

        <div className="!bg-green-100 !p-5 !rounded-lg !border !border-green-200">
          <h2 className="!text-xl !font-semibold !text-blue-900 !mb-2">
            Remember:
          </h2>
          <p className="!text-blue-900">
            Your heart is a powerhouse, working tirelessly every second of your
            life. By making smart lifestyle choices and being mindful of your
            heart's health, you can ensure it keeps beating strong for years to
            come. Show your heart some love—after all, it's the reason you're
            alive! Small changes today can lead to a lifetime of better heart
            health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeartPage;
