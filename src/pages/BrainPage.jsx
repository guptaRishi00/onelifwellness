import React from "react";
import { Link } from "react-router-dom";
import FormattedText from "../components/FormattedText";

function BrainPage() {
  return (
    <div className="!bg-white !min-h-screen !py-8 !px-4">
      <div className="!w-full !mx-auto !max-w-6xl">
        <h1 className="!text-4xl !font-bold !text-blue-900 !mb-6 !text-center">
          Your Brain: The Key to Your Health and Well-Being
        </h1>

        <p className="!text-[#022759] !mb-8 !text-center !text-lg">
          The brain is the command center of your body, controlling everything
          from your thoughts and emotions to movement and memory. Whether you're
          searching for answers about brain health, aging, or neurological
          conditions, this guide will help you understand how your brain works
          and what you can do to keep it healthy.
        </p>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          How Your Brain Works
        </h2>

        <p className="!text-[#022759] !leading-relaxed !mb-8">
          <FormattedText>
            Imagine your brain as a bustling city, where different districts
            perform specialized tasks to keep everything running smoothly. At the
            core is the cerebrum: the largest part of the brain, which handles
            thinking, memory, and voluntary movements. Whether you're solving a
            puzzle, recalling a childhood memory, or lifting a coffee cup, your
            cerebrum is in charge. Right behind it sits the cerebellum:
            responsible for balance and coordination, ensuring you stay steady
            while walking or reaching for something. Deep within the brain lies
            the brainstem: the body's autopilot. It controls vital functions like
            breathing, heart rate, and digestion without you having to think about
            them. Nearby is the limbic system: often called the emotional center.
            It processes feelings such as joy, fear, and motivation, helping shape
            your reactions to different experiences. Finally, acting as a relay
            station, the thalamus and hypothalamus: regulate sensory signals,
            hunger, sleep, and body temperature. These components work together,
            constantly communicating to help you move, think, and feel—without you
            even realizing it.
          </FormattedText>
        </p>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          How Your Brain Changes with Age
        </h2>

        <p className="!text-[#022759] !mb-6">
          Your brain isn't static—it continuously evolves. Here's a closer look
          at how it changes throughout life and the common challenges at each
          stage.
        </p>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Childhood (0-10 years): The Rapid Learner
        </h3>

        <p className="!text-[#022759] !mb-4">
          In the first years of life, the brain develops at an astonishing pace,
          forming millions of new connections every second. This is why children
          learn languages, social behaviors, and new skills effortlessly.
          However, their brains are still refining impulse control and
          attention, making conditions like ADHD and learning disabilities more
          common during this stage.
        </p>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Teenage Years (10-20 years): The Emotional Explorer
        </h3>

        <p className="!text-[#022759] !mb-4">
          Teenagers may seem impulsive, and there's a reason for that—the
          prefrontal cortex, responsible for decision-making and self-control,
          is still developing. Meanwhile, the emotional center of the brain, the
          limbic system, is highly active, leading to intense emotions and
          risk-taking behavior. Anxiety and depression often surface during
          these years as young adults navigate complex social and academic
          pressures.
        </p>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Adulthood (20-40 years): The Prime Time
        </h3>

        <p className="!text-[#022759] !mb-4">
          By adulthood, the brain reaches peak cognitive function.
          Problem-solving skills, memory, and reasoning are at their best.
          However, work-related stress and lifestyle choices can start to take a
          toll, leading to mental fatigue, migraines, and early signs of
          burnout.
        </p>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Middle Age (40-65 years): The Wise Thinker
        </h3>

        <p className="!text-[#022759] !mb-4">
          During middle age, memory recall may slow down slightly, but
          experience and critical thinking abilities improve decision-making.
          The brain undergoes slight shrinkage, affecting focus and processing
          speed. Common issues include forgetfulness, brain fog, and early signs
          of dementia.
        </p>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Senior Years (65+ years): The Resilient Mind
        </h3>

        <p className="!text-[#022759] !mb-6">
          Cognitive decline is a natural part of aging, but an active lifestyle
          can significantly slow the process. The brain remains capable of
          learning new skills thanks to neuroplasticity. However, concerns like
          Alzheimer's, strokes, and memory loss become more prevalent in later
          years.
        </p>

        <Link to={"/blog-detail/the-developing-brain-from-womb-to-early-childhood"} className="!inline-block !mb-8">
          <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-3 !px-6 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
            Read More: How the Brain Develops Over a Lifetime
          </button>
        </Link>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          Common Myths About the Brain
        </h2>

        <p className="!text-[#022759] !mb-6">
          There are many misconceptions about how the brain works. Let's set the
          record straight.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Myth: We Only Use 10% of Our Brain
        </h3>

        <p className="!text-[#022759] !mb-4">
          This is completely false! Brain scans show that almost every part of
          the brain is active, even while sleeping.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Myth: Left vs. Right-Brained People
        </h3>

        <p className="!text-[#022759] !mb-4">
          The idea that people are either logical (left-brained) or creative
          (right-brained) is a myth. Both hemispheres work together for almost
          all tasks.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Myth: Brain Damage is Always Permanent
        </h3>

        <p className="!text-[#022759] !mb-4">
          Not necessarily! The brain has an incredible ability to repair and
          rewire itself through neuroplasticity. Many people recover cognitive
          functions after injuries.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Myth: Classical Music Makes You Smarter
        </h3>

        <p className="!text-[#022759] !mb-6">
          While music can boost focus and mood, it doesn't directly increase
          intelligence or make lasting cognitive improvements.
        </p>

        <Link to={"/blog-detail/10-common-brain-myths"} className="!inline-block !mb-8">
          <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-3 !px-6 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
            Read More: 10 Common Brain Myths
          </button>
        </Link>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          Incredible Things Your Brain Can Do
        </h2>

        <p className="!text-[#022759] !mb-4">
          Your brain is full of surprises! Here are some fascinating things it
          does every day.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          The Brain Can Rewire Itself
        </h3>

        <p className="!text-[#022759] !mb-4">
          Neuroplasticity allows the brain to reorganize and form new
          connections. A stroke patient who loses speech can train other brain
          areas to compensate, regaining their ability to talk.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Your Brain Works Hard While You Sleep
        </h3>

        <p className="!text-[#022759] !mb-4">
          Have you ever gone to bed struggling with a problem and woken up with
          a solution? That's because your brain processes and consolidates
          information overnight, strengthening your memory.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Your Brain Can Trick You
        </h3>

        <p className="!text-[#022759] !mb-6">
          Optical illusions reveal that our brains sometimes interpret things
          differently than they actually are. This is because the brain
          constantly fills in gaps, making assumptions to help us process the
          world faster.
        </p>

        <Link to={"/blog-detail/15-fascinating-facts-about-the-brain"} className="!inline-block !mb-8">
          <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-3 !px-6 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
            Read More: 15 Fascinating Facts About the Brain
          </button>
        </Link>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          How to Keep Your Brain Healthy
        </h2>

        <p className="!text-[#022759] !mb-4">
          A healthy brain requires the right fuel, physical activity, and mental
          engagement. Here's how you can actively protect and improve your brain
          function:
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          1. Nutrition for Brain Power
        </h3>

        <p className="!text-[#022759] !mb-4">
          Your diet has a direct impact on brain function. Foods rich in omega-3
          fatty acids (such as salmon and walnuts) help reduce inflammation and
          improve cognitive function. Antioxidants found in berries and dark
          chocolate protect brain cells from damage, while leafy greens and
          whole grains provide essential nutrients for mental clarity.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          2. Exercise and Brain Health
        </h3>

        <p className="!text-[#022759] !mb-4">
          Regular physical activity increases blood flow to the brain,
          delivering oxygen and essential nutrients. Exercise has been linked to
          improved memory and reduced risk of neurodegenerative diseases.
          Activities like yoga, brisk walking, and strength training all support
          brain health by reducing stress and boosting mood-regulating
          chemicals.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          3. Sleep and Mental Recovery
        </h3>

        <p className="!text-[#022759] !mb-4">
          Your brain performs essential maintenance while you sleep, clearing
          out toxins and consolidating memories. Poor sleep can lead to
          cognitive decline, difficulty concentrating, and increased stress. Aim
          for 7-9 hours of quality sleep per night to support brain function.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          4. Mental Stimulation and Learning
        </h3>

        <p className="!text-[#022759] !mb-4">
          Challenging your brain with new experiences helps build new neural
          connections. Reading, learning a new language, playing an instrument,
          or engaging in strategic games like chess stimulate cognitive function
          and delay age-related decline.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          5. Stress Management and Emotional Well-Being
        </h3>

        <p className="!text-[#022759] !mb-6">
          Chronic stress can damage brain cells and shrink the hippocampus, the
          part of the brain responsible for memory. Practicing mindfulness,
          meditation, or even deep-breathing exercises can help regulate
          emotions and reduce the harmful effects of stress.
        </p>

        <Link className="!inline-block !mb-8" to={'/blog-detail/the-brain-in-adulthood-productivity-stress-and-mental-resilience'}>
          <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-3 !px-6 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
            Read More: How to Keep Your Brain Healthy
          </button>
        </Link>

        <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Important Note
        </h2>

        <p className="!text-[#022759]">
          Your brain is your most valuable asset. By making small but impactful
          lifestyle changes, you can protect and strengthen it at any age.
          Whether it's through nutrition, movement, stress management, or
          lifelong learning, investing in your brain's health today will benefit
          you for years to come.
        </p>
      </div>
    </div>
  );
}

export default BrainPage;
