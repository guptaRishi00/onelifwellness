import React from "react";

function BrainPage() {
  return (
    <div className="!bg-blue-50 !min-h-screen !py-8 !px-4">
      <div className="!w-full !mx-auto">
        {/* Hero Section */}
        <div className="!text-center !mb-8">
          <div className="!bg-green-100 !px-4 !py-2 !rounded-full !inline-block !mb-4">
            <span className="!text-sm !font-medium !text-blue-900">
              🧠 Brain Health Guide
            </span>
          </div>
          <h1 className="!text-4xl !font-bold !text-blue-900 !mb-4">
            Your Brain: The Key to Your Health and Well-Being
          </h1>
          <p className="!text-blue-800 !mb-6 !max-w-3xl !mx-auto">
            The brain is the command center of your body, controlling everything
            from your thoughts and emotions to movement and memory. Whether
            you're searching for answers about brain health, aging, or
            neurological conditions, this guide will help you understand how
            your brain works and what you can do to keep it healthy.
          </p>
        </div>

        {/* How Brain Works Section */}
        <div className="!bg-white !p-6 !rounded-lg !shadow-sm !mb-8 !border">
          <h2 className="!text-2xl !font-bold !text-blue-900 !mb-4 !flex !items-center">
            <div className="!bg-green-300 !w-10 !h-10 !rounded-lg !flex !items-center !justify-center !mr-3">
              <span className="!text-xl">🧠</span>
            </div>
            How Your Brain Works
          </h2>
          <p className="!text-blue-800 !leading-relaxed">
            Imagine your brain as a bustling city, where different districts
            perform specialized tasks to keep everything running smoothly. At
            the core is the cerebrum, the largest part of the brain, which
            handles thinking, memory, and voluntary movements. Whether you're
            solving a puzzle, recalling a childhood memory, or lifting a coffee
            cup, your cerebrum is in charge. Right behind it sits the
            cerebellum, responsible for balance and coordination, ensuring you
            stay steady while walking or reaching for something. Deep within the
            brain lies the brainstem, the body's autopilot. It controls vital
            functions like breathing, heart rate, and digestion without you
            having to think about them. Nearby is the limbic system, often
            called the emotional center. It processes feelings such as joy,
            fear, and motivation, helping shape your reactions to different
            experiences. Finally, acting as a relay station, the thalamus and
            hypothalamus regulate sensory signals, hunger, sleep, and body
            temperature. These components work together, constantly
            communicating to help you move, think, and feel—without you even
            realizing it.
          </p>
        </div>

        {/* Age Changes Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
              How Your Brain Changes with Age
            </h3>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              Your brain isn't static—it continuously evolves. Here's a closer
              look at how it changes throughout life and the common challenges
              at each stage.
            </p>
          </div>

          <div className="!grid !md:grid-cols-2 !lg:grid-cols-3 !gap-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  1
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Childhood</h4>
                  <span className="!text-sm !text-blue-600">(0-10 years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Rapid Learner
              </h5>
              <p className="!text-blue-800 !text-sm">
                In the first years of life, the brain develops at an astonishing
                pace, forming millions of new connections every second. This is
                why children learn languages, social behaviors, and new skills
                effortlessly. However, their brains are still refining impulse
                control and attention, making conditions like ADHD and learning
                disabilities more common during this stage.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  2
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Teenage Years</h4>
                  <span className="!text-sm !text-blue-600">(10-20 years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Emotional Explorer
              </h5>
              <p className="!text-blue-800 !text-sm">
                Teenagers may seem impulsive, and there's a reason for that—the
                prefrontal cortex, responsible for decision-making and
                self-control, is still developing. Meanwhile, the emotional
                center of the brain, the limbic system, is highly active,
                leading to intense emotions and risk-taking behavior. Anxiety
                and depression often surface during these years as young adults
                navigate complex social and academic pressures.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  3
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Adulthood</h4>
                  <span className="!text-sm !text-blue-600">(20-40 years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Prime Time
              </h5>
              <p className="!text-blue-800 !text-sm">
                By adulthood, the brain reaches peak cognitive function.
                Problem-solving skills, memory, and reasoning are at their best.
                However, work-related stress and lifestyle choices can start to
                take a toll, leading to mental fatigue, migraines, and early
                signs of burnout.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  4
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Middle Age</h4>
                  <span className="!text-sm !text-blue-600">(40-65 years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Wise Thinker
              </h5>
              <p className="!text-blue-800 !text-sm">
                During middle age, memory recall may slow down slightly, but
                experience and critical thinking abilities improve
                decision-making. The brain undergoes slight shrinkage, affecting
                focus and processing speed. Common issues include forgetfulness,
                brain fog, and early signs of dementia.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border !md:col-span-2 !lg:col-span-1">
              <div className="!flex !items-center !mb-3">
                <span className="!bg-green-300 !w-10 !h-10 !rounded-full !flex !items-center !justify-center !mr-3 !font-bold !text-blue-900">
                  5
                </span>
                <div>
                  <h4 className="!font-bold !text-blue-900">Senior Years</h4>
                  <span className="!text-sm !text-blue-600">(65+ years)</span>
                </div>
              </div>
              <h5 className="!font-semibold !text-blue-900 !mb-2">
                The Resilient Mind
              </h5>
              <p className="!text-blue-800 !text-sm">
                Cognitive decline is a natural part of aging, but an active
                lifestyle can significantly slow the process. The brain remains
                capable of learning new skills thanks to neuroplasticity.
                However, concerns like Alzheimer's, strokes, and memory loss
                become more prevalent in later years.
              </p>
            </div>
          </div>

          <div className="!text-center">
            <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-bold !py-3 !px-6 !rounded-full">
              📖 Read More: How the Brain Develops Over a Lifetime
            </button>
          </div>
        </div>

        {/* Myths Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3 !flex !items-center !justify-center">
              <span className="!text-2xl !mr-2">🚫</span>
              Common Myths About the Brain
            </h2>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              There are many misconceptions about how the brain works. Let's set
              the record straight.
            </p>
          </div>

          <div className="!grid !md:grid-cols-2 !gap-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  We Only Use 10% of Our Brain
                </h4>
              </div>
              <p className="!text-blue-800">
                This is completely false! Brain scans show that almost every
                part of the brain is active, even while sleeping.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Left vs. Right-Brained People
                </h4>
              </div>
              <p className="!text-blue-800">
                The idea that people are either logical (left-brained) or
                creative (right-brained) is a myth. Both hemispheres work
                together for almost all tasks.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Brain Damage is Always Permanent
                </h4>
              </div>
              <p className="!text-blue-800">
                Not necessarily! The brain has an incredible ability to repair
                and rewire itself through neuroplasticity. Many people recover
                cognitive functions after injuries.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-2">
                <span className="!bg-red-100 !px-2 !py-1 !rounded !text-xs !font-bold !text-red-600 !mr-2">
                  MYTH
                </span>
                <h4 className="!font-bold !text-blue-900">
                  Classical Music Makes You Smarter
                </h4>
              </div>
              <p className="!text-blue-800">
                While music can boost focus and mood, it doesn't directly
                increase intelligence or make lasting cognitive improvements.
              </p>
            </div>
          </div>

          <div className="!text-center">
            <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-bold !py-3 !px-6 !rounded-full">
              🧠 Read More: 10 Common Brain Myths
            </button>
          </div>
        </div>

        <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
          Incredible Things Your Brain Can Do
        </h2>

        <p className="!text-blue-900 !mb-4">
          Your brain is full of surprises! Here are some fascinating things it
          does every day.
        </p>

        <div className="!space-y-4 !mb-6">
          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              The Brain Can Rewire Itself
            </h4>
            <p className="!text-blue-900">
              Neuroplasticity allows the brain to reorganize and form new
              connections. A stroke patient who loses speech can train other
              brain areas to compensate, regaining their ability to talk.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              Your Brain Works Hard While You Sleep
            </h4>
            <p className="!text-blue-900">
              Have you ever gone to bed struggling with a problem and woken up
              with a solution? That's because your brain processes and
              consolidates information overnight, strengthening your memory.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              Your Brain Can Trick You
            </h4>
            <p className="!text-blue-900">
              Optical illusions reveal that our brains sometimes interpret
              things differently than they actually are. This is because the
              brain constantly fills in gaps, making assumptions to help us
              process the world faster.
            </p>
          </div>

          <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full">
            [Read More: 15 Fascinating Facts About the Brain]
          </button>
        </div>

        <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
          How to Keep Your Brain Healthy
        </h2>

        <p className="!text-blue-900 !mb-4">
          A healthy brain requires the right fuel, physical activity, and mental
          engagement. Here's how you can actively protect and improve your brain
          function:
        </p>

        <div className="!space-y-4 !mb-6">
          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              1. Nutrition for Brain Power
            </h4>
            <p className="!text-blue-900">
              Your diet has a direct impact on brain function. Foods rich in
              omega-3 fatty acids (such as salmon and walnuts) help reduce
              inflammation and improve cognitive function. Antioxidants found in
              berries and dark chocolate protect brain cells from damage, while
              leafy greens and whole grains provide essential nutrients for
              mental clarity.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              2. Exercise and Brain Health
            </h4>
            <p className="!text-blue-900">
              Regular physical activity increases blood flow to the brain,
              delivering oxygen and essential nutrients. Exercise has been
              linked to improved memory and reduced risk of neurodegenerative
              diseases. Activities like yoga, brisk walking, and strength
              training all support brain health by reducing stress and boosting
              mood-regulating chemicals.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              3. Sleep and Mental Recovery
            </h4>
            <p className="!text-blue-900">
              Your brain performs essential maintenance while you sleep,
              clearing out toxins and consolidating memories. Poor sleep can
              lead to cognitive decline, difficulty concentrating, and increased
              stress. Aim for 7-9 hours of quality sleep per night to support
              brain function.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              4. Mental Stimulation and Learning
            </h4>
            <p className="!text-blue-900">
              Challenging your brain with new experiences helps build new neural
              connections. Reading, learning a new language, playing an
              instrument, or engaging in strategic games like chess stimulate
              cognitive function and delay age-related decline.
            </p>
          </div>

          <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
            <h4 className="!font-semibold !text-blue-900 !mb-2">
              5. Stress Management and Emotional Well-Being
            </h4>
            <p className="!text-blue-900">
              Chronic stress can damage brain cells and shrink the hippocampus,
              the part of the brain responsible for memory. Practicing
              mindfulness, meditation, or even deep-breathing exercises can help
              regulate emotions and reduce the harmful effects of stress.
            </p>
          </div>

          <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full">
            [Read More: How to Keep Your Brain Healthy]
          </button>
        </div>

        <div className="!bg-green-100 !p-5 !rounded-lg !border !border-green-200">
          <h2 className="!text-xl !font-semibold !text-blue-900 !mb-2">
            Note:
          </h2>
          <p className="!text-blue-900">
            Your brain is your most valuable asset. By making small but
            impactful lifestyle changes, you can protect and strengthen it at
            any age. Whether it's through nutrition, movement, stress
            management, or lifelong learning, investing in your brain's health
            today will benefit you for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrainPage;
