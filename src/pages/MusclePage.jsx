import React from "react";
import { Link } from "react-router-dom";

function MusclePage() {
  return (
    <div className="!bg-white !min-h-screen !py-8 !px-4">
      <div className="!w-full !mx-auto !max-w-6xl">
        <h1 className="!text-4xl !font-bold !text-blue-900 !mb-6 !text-center">
          Musculoskeletal System: The Framework of Human Movement
        </h1>

        <p className="!text-[#022759] !mb-6 !text-center !text-lg">
          The musculoskeletal system is the foundation of human movement,
          providing support, mobility, and protection to vital organs. It
          consists of bones, muscles, joints, tendons, ligaments, and connective
          tissues, all working together to enable motion and maintain posture.
          This system is also essential for blood cell production, mineral
          storage, and overall structural stability.
        </p>

        <p className="!text-[#76de00] !mb-8 !text-center">
          In this guide, we'll explore the anatomy, functions, and common
          disorders of the musculoskeletal system, along with tips to maintain
          strong bones, flexible joints, and healthy muscles.
        </p>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          Understanding the Musculoskeletal System
        </h2>

        <p className="!text-[#022759] !mb-6">
          Your musculoskeletal system is a complex network of interconnected
          parts working together for movement and stability.
        </p>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Bones: The Structural Foundation
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-4">
          Bones form the skeletal framework of the body, supporting organs and
          enabling movement. They are dynamic tissues involved in mineral
          storage and blood cell production, constantly renewing themselves
          through bone remodeling processes.
        </p>

        <div className="!mb-6 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/bone-structure-and-function"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              Bone Structure and Function
            </button>
          </Link>
        </div>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Joints: Where Movement Happens
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-4">
          Joints connect bones and allow different types of movement, from
          hinge-like motion in the knees to rotational movement in the
          shoulders. They're cushioned by cartilage and lubricated by synovial
          fluid.
        </p>

        <div className="!mb-6 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/types-of-joints-and-their-functions"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              Types of Joints and Their Functions
            </button>
          </Link>
        </div>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Muscles: The Power Behind Motion
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-4">
          Muscles generate force for movement, posture maintenance, and internal
          functions like circulation and digestion. They contract through nerve
          signals that trigger interactions between protein filaments.
        </p>

        <div className="!mb-6 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/how-muscles-contract-and-function"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              How Muscles Contract and Function
            </button>
          </Link>
        </div>

        <h3 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Tendons & Ligaments: Connecting the System
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-8">
          Tendons link muscles to bones, enabling movement transfer, while
          ligaments stabilize joints and prevent excessive motion. These
          connective tissues provide strength and flexibility to the system.
        </p>

        <div className="!mb-8 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/the-importance-of-tendons-and-ligaments"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              The Importance of Tendons and Ligaments
            </button>
          </Link>
        </div>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          How the Musculoskeletal System Works
        </h2>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Bone Growth and Remodeling
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-4">
          Bones continuously renew themselves through a process called bone
          remodeling, where old tissue is replaced with new. This helps maintain
          bone strength and mineral balance throughout your lifetime, with the
          entire skeleton being replaced approximately every 10 years.
        </p>

        <div className="!mb-6 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/bone-growth-and-remodeling"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              Bone Growth and Remodeling
            </button>
          </Link>
        </div>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Muscle Contraction and Movement
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-4">
          Muscles contract when nerve signals trigger interactions between actin
          and myosin filaments, generating force. This sliding filament
          mechanism allows muscles to shorten and create the pulling force
          needed for movement, while opposing muscles relax to allow smooth
          motion.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          The Role of Joints in Mobility
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-8">
          Different joint types facilitate various movements: ball-and-socket
          joints allow rotation, hinge joints enable bending and straightening,
          and pivot joints permit twisting motions. Synovial fluid lubricates
          these joints, reducing friction and wear during movement.
        </p>

        <div className="!mb-8 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/how-joints-enable-movement"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              How Joints Enable Movement
            </button>
          </Link>
        </div>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          Common Musculoskeletal Disorders
        </h2>

        <p className="!text-[#022759] !mb-6">
          Understanding these common conditions can help you recognize symptoms
          early and seek appropriate treatment.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Osteoporosis: Weakening of Bones
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-4">
          Osteoporosis occurs when bone density decreases, making bones fragile
          and prone to fractures. It's often called the "silent disease" because
          bone loss occurs without symptoms until a fracture happens. Risk
          factors include age, hormonal changes, lack of calcium, and sedentary
          lifestyle.
        </p>

        <div className="!mb-6 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/how-to-prevent-and-manage-osteoporosis"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              How to Prevent and Manage Osteoporosis
            </button>
          </Link>
        </div>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Arthritis: Joint Inflammation
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-4">
          Arthritis leads to pain and stiffness due to joint inflammation or
          cartilage wear. The two main types are osteoarthritis (wear-and-tear)
          and rheumatoid arthritis (autoimmune). Symptoms include joint pain,
          swelling, reduced range of motion, and morning stiffness.
        </p>

        <div className="!mb-6 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/understanding-arthritis-causes-and-treatment"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              Understanding Arthritis: Causes and Treatment
            </button>
          </Link>
        </div>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Muscle Strain and Injuries
        </h3>

        <p className="!text-[#022759] !leading-relaxed !mb-8">
          Overuse, poor posture, and sudden movements can cause muscle injuries
          ranging from minor strains to complete tears. Common causes include
          inadequate warm-up, muscle imbalances, fatigue, and repetitive motions
          without proper rest and recovery.
        </p>

        <div className="!mb-8 !flex !flex-wrap !gap-3">
          <Link to={"/blog-detail/how-to-prevent-and-treat-muscle-strains"}>
            <button className="!bg-[#8ae915] hover:!bg-[#76de00] !text-white !font-bold !py-2.5 !px-4 !rounded-lg !shadow-md !transition-colors !duration-200 !ease-in-out hover:!shadow-lg">
              How to Prevent and Treat Muscle Strains
            </button>
          </Link>
        </div>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          How to Keep Your Musculoskeletal System Healthy
        </h2>

        <p className="!text-[#022759] !mb-4">
          Maintaining a strong musculoskeletal system requires consistent care
          and attention. Here are evidence-based strategies to keep your bones,
          muscles, and joints healthy:
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          1. Exercise Regularly for Strength and Flexibility
        </h3>

        <p className="!text-[#022759] !mb-4">
          Engage in weight-bearing exercises like walking, running, and
          resistance training to strengthen bones and muscles. Include
          flexibility work through stretching or yoga to maintain joint range of
          motion. Aim for at least 150 minutes of moderate activity weekly, plus
          2-3 strength training sessions.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          2. Eat a Balanced Diet Rich in Bone-Building Nutrients
        </h3>

        <p className="!text-[#022759] !mb-4">
          Include calcium-rich foods (dairy, leafy greens, sardines), vitamin D
          sources (fatty fish, fortified foods), and high-quality protein for
          muscle maintenance. Magnesium, vitamin K, and phosphorus also support
          bone health. Limit excessive caffeine and alcohol which can interfere
          with calcium absorption.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          3. Stay Active Throughout the Day
        </h3>

        <p className="!text-[#022759] !mb-4">
          Avoid prolonged sitting or inactivity, which can weaken muscles and
          stiffen joints. Take regular movement breaks, use a standing desk, and
          incorporate daily activities like taking stairs or walking meetings.
          Movement keeps joints lubricated and maintains muscle strength.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          4. Maintain Good Posture and Body Mechanics
        </h3>

        <p className="!text-[#022759] !mb-4">
          Proper alignment reduces stress on muscles, joints, and ligaments. Set
          up an ergonomic workspace, practice good lifting techniques, and be
          mindful of your posture throughout the day. Consider posture training
          exercises to strengthen supporting muscles.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          5. Prioritize Recovery and Sleep
        </h3>

        <p className="!text-[#022759] !mb-8">
          Quality sleep is essential for muscle repair and bone remodeling.
          Allow adequate rest between intense workouts, manage stress levels,
          and ensure 7-9 hours of sleep nightly. Consider massage, foam rolling,
          or other recovery techniques to maintain tissue health.
        </p>

        <h2 className="!text-3xl !font-bold !text-blue-900 !mb-4">
          Amazing Facts About Your Musculoskeletal System
        </h2>

        <p className="!text-[#022759] !mb-4">
          Your musculoskeletal system is truly remarkable! Here are some
          incredible facts about this complex and vital system.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Your Bones Are Stronger Than Steel
        </h3>

        <p className="!text-[#022759] !mb-4">
          Pound for pound, bone is actually stronger than steel! A cubic inch of
          bone can bear loads of up to 19,000 pounds - that's roughly the weight
          of five pickup trucks. This incredible strength comes from bone's
          unique composite structure of collagen and calcium phosphate.
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          You Have Over 600 Muscles
        </h3>

        <p className="!text-[#022759] !mb-4">
          The human body contains over 600 individual muscles, making up about
          40% of your total body weight. The smallest muscle is in your ear (the
          stapedius), while the largest is your gluteus maximus. It takes 17
          muscles just to smile!
        </p>

        <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
          Your Skeleton Completely Renews Itself
        </h3>

        <p className="!text-[#022759] !mb-8">
          Through bone remodeling, your entire skeleton is replaced
          approximately every 10 years. This means the skeleton you have today
          is completely different from the one you had a decade ago! This
          process allows bones to repair micro-damage and adapt to physical
          stress.
        </p>

        <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3">
          Important Note
        </h2>

        <p className="!text-[#022759]">
          The musculoskeletal system plays a crucial role in mobility,
          stability, and overall health. By understanding how it functions and
          taking preventative measures through regular exercise, proper
          nutrition, and healthy lifestyle choices, you can ensure long-term
          bone, muscle, and joint health. Your body is designed for movement -
          use it, care for it, and it will serve you well throughout your life!
        </p>
      </div>
    </div>
  );
}

export default MusclePage;
