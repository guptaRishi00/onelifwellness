import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function MusclePage() {
  return (
    <div className="!bg-blue-50 !min-h-screen !py-8 !px-4">
      <div className="!w-full !mx-auto">
        {/* Hero Section */}
        <div className="!text-center !mb-8">
          <div className="!bg-green-100 !px-4 !py-2 !rounded-full !inline-block !mb-4">
            <span className="!text-sm !font-medium !text-blue-900">
              💪 Musculoskeletal Health Guide
            </span>
          </div>
          <h1 className="!text-4xl !font-bold !text-blue-900 !mb-4">
            Musculoskeletal System: The Framework of Human Movement
          </h1>
          <p className="!text-blue-800 !mb-6 !max-w-6xl !mx-auto">
            The musculoskeletal system is the foundation of human movement,
            providing support, mobility, and protection to vital organs. It
            consists of bones, muscles, joints, tendons, ligaments, and
            connective tissues, all working together to enable motion and
            maintain posture. This system is also essential for blood cell
            production, mineral storage, and overall structural stability.
          </p>
          <p className="!text-blue-700 !max-w-4xl !mx-auto">
            In this guide, we'll explore the anatomy, functions, and common
            disorders of the musculoskeletal system, along with tips to maintain
            strong bones, flexible joints, and healthy muscles.
          </p>
        </div>

        {/* Understanding the System Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3">
              Understanding the Musculoskeletal System
            </h2>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              Your musculoskeletal system is a complex network of interconnected
              parts working together for movement and stability.
            </p>
          </div>

          <div className="!grid !md:grid-cols-2 !gap-6 !mb-6">
            <div className="!bg-white !p-6 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-4">
                <div className="!bg-green-300 !w-12 !h-12 !rounded-lg !flex !items-center !justify-center !mr-4">
                  <span className="!text-2xl">🦴</span>
                </div>
                <h3 className="!text-xl !font-bold !text-blue-900">
                  Bones: The Structural Foundation
                </h3>
              </div>
              <p className="!text-blue-800 !leading-relaxed">
                Bones form the skeletal framework of the body, supporting organs
                and enabling movement. They are dynamic tissues involved in
                mineral storage and blood cell production, constantly renewing
                themselves through bone remodeling processes.
              </p>
            </div>

            <div className="!bg-white !p-6 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-4">
                <div className="!bg-green-300 !w-12 !h-12 !rounded-lg !flex !items-center !justify-center !mr-4">
                  <span className="!text-2xl">🔗</span>
                </div>
                <h3 className="!text-xl !font-bold !text-blue-900">
                  Joints: Where Movement Happens
                </h3>
              </div>
              <p className="!text-blue-800 !leading-relaxed">
                Joints connect bones and allow different types of movement, from
                hinge-like motion in the knees to rotational movement in the
                shoulders. They're cushioned by cartilage and lubricated by
                synovial fluid.
              </p>
            </div>

            <div className="!bg-white !p-6 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-4">
                <div className="!bg-green-300 !w-12 !h-12 !rounded-lg !flex !items-center !justify-center !mr-4">
                  <span className="!text-2xl">💪</span>
                </div>
                <h3 className="!text-xl !font-bold !text-blue-900">
                  Muscles: The Power Behind Motion
                </h3>
              </div>
              <p className="!text-blue-800 !leading-relaxed">
                Muscles generate force for movement, posture maintenance, and
                internal functions like circulation and digestion. They contract
                through nerve signals that trigger interactions between protein
                filaments.
              </p>
            </div>

            <div className="!bg-white !p-6 !rounded-lg !shadow-sm !border">
              <div className="!flex !items-center !mb-4">
                <div className="!bg-green-300 !w-12 !h-12 !rounded-lg !flex !items-center !justify-center !mr-4">
                  <span className="!text-2xl">🔧</span>
                </div>
                <h3 className="!text-xl !font-bold !text-blue-900">
                  Tendons & Ligaments: Connecting the System
                </h3>
              </div>
              <p className="!text-blue-800 !leading-relaxed">
                Tendons link muscles to bones, enabling movement transfer, while
                ligaments stabilize joints and prevent excessive motion. These
                connective tissues provide strength and flexibility to the
                system.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="!bg-white !p-6 !rounded-lg !shadow-sm !mb-8 !border">
          <h2 className="!text-2xl !font-bold !text-blue-900 !mb-4 !flex !items-center">
            <div className="!bg-green-300 !w-10 !h-10 !rounded-lg !flex !items-center !justify-center !mr-3">
              <span className="!text-xl">⚡</span>
            </div>
            How the Musculoskeletal System Works
          </h2>

          <div className="!space-y-6">
            <div>
              <h3 className="!text-lg !font-semibold !text-blue-900 !mb-2">
                Bone Growth and Remodeling
              </h3>
              <p className="!text-blue-800 !leading-relaxed">
                Bones continuously renew themselves through a process called
                bone remodeling, where old tissue is replaced with new. This
                helps maintain bone strength and mineral balance throughout your
                lifetime, with the entire skeleton being replaced approximately
                every 10 years.
              </p>
            </div>

            <div>
              <h3 className="!text-lg !font-semibold !text-blue-900 !mb-2">
                Muscle Contraction and Movement
              </h3>
              <p className="!text-blue-800 !leading-relaxed">
                Muscles contract when nerve signals trigger interactions between
                actin and myosin filaments, generating force. This sliding
                filament mechanism allows muscles to shorten and create the
                pulling force needed for movement, while opposing muscles relax
                to allow smooth motion.
              </p>
            </div>

            <div>
              <h3 className="!text-lg !font-semibold !text-blue-900 !mb-2">
                The Role of Joints in Mobility
              </h3>
              <p className="!text-blue-800 !leading-relaxed">
                Different joint types facilitate various movements:
                ball-and-socket joints allow rotation, hinge joints enable
                bending and straightening, and pivot joints permit twisting
                motions. Synovial fluid lubricates these joints, reducing
                friction and wear during movement.
              </p>
            </div>
          </div>
        </div>

        {/* Common Disorders Section */}
        <div className="!mb-8">
          <div className="!text-center !mb-6">
            <h2 className="!text-2xl !font-bold !text-blue-900 !mb-3">
              Common Musculoskeletal Disorders
            </h2>
            <p className="!text-blue-800 !max-w-2xl !mx-auto">
              Understanding these common conditions can help you recognize
              symptoms early and seek appropriate treatment.
            </p>
          </div>

          <div className="!grid !md:grid-cols-1 !gap-4 !mb-6">
            <div className="!bg-white !p-6 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-3">
                <span className="!text-3xl !mr-4">🦴</span>
                <div>
                  <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
                    Osteoporosis: Weakening of Bones
                  </h3>
                  <p className="!text-blue-800 !leading-relaxed">
                    Osteoporosis occurs when bone density decreases, making
                    bones fragile and prone to fractures. It's often called the
                    "silent disease" because bone loss occurs without symptoms
                    until a fracture happens. Risk factors include age, hormonal
                    changes, lack of calcium, and sedentary lifestyle.
                  </p>
                </div>
              </div>
            </div>

            <div className="!bg-white !p-6 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-3">
                <span className="!text-3xl !mr-4">🔗</span>
                <div>
                  <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
                    Arthritis: Joint Inflammation
                  </h3>
                  <p className="!text-blue-800 !leading-relaxed">
                    Arthritis leads to pain and stiffness due to joint
                    inflammation or cartilage wear. The two main types are
                    osteoarthritis (wear-and-tear) and rheumatoid arthritis
                    (autoimmune). Symptoms include joint pain, swelling, reduced
                    range of motion, and morning stiffness.
                  </p>
                </div>
              </div>
            </div>

            <div className="!bg-white !p-6 !rounded-lg !shadow-sm !border-l-4 !border-red-400">
              <div className="!flex !items-start !mb-3">
                <span className="!text-3xl !mr-4">💪</span>
                <div>
                  <h3 className="!text-xl !font-bold !text-blue-900 !mb-2">
                    Muscle Strain and Injuries
                  </h3>
                  <p className="!text-blue-800 !leading-relaxed">
                    Overuse, poor posture, and sudden movements can cause muscle
                    injuries ranging from minor strains to complete tears.
                    Common causes include inadequate warm-up, muscle imbalances,
                    fatigue, and repetitive motions without proper rest and
                    recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Tips Section */}
        <div className="!mb-8">
          <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
            How to Keep Your Musculoskeletal System Healthy
          </h2>

          <p className="!text-blue-900 !mb-4">
            Maintaining a strong musculoskeletal system requires consistent care
            and attention. Here are evidence-based strategies to keep your
            bones, muscles, and joints healthy:
          </p>

          <div className="!space-y-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                1. Exercise Regularly for Strength and Flexibility
              </h4>
              <p className="!text-blue-900">
                Engage in weight-bearing exercises like walking, running, and
                resistance training to strengthen bones and muscles. Include
                flexibility work through stretching or yoga to maintain joint
                range of motion. Aim for at least 150 minutes of moderate
                activity weekly, plus 2-3 strength training sessions.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                2. Eat a Balanced Diet Rich in Bone-Building Nutrients
              </h4>
              <p className="!text-blue-900">
                Include calcium-rich foods (dairy, leafy greens, sardines),
                vitamin D sources (fatty fish, fortified foods), and
                high-quality protein for muscle maintenance. Magnesium, vitamin
                K, and phosphorus also support bone health. Limit excessive
                caffeine and alcohol which can interfere with calcium
                absorption.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                3. Stay Active Throughout the Day
              </h4>
              <p className="!text-blue-900">
                Avoid prolonged sitting or inactivity, which can weaken muscles
                and stiffen joints. Take regular movement breaks, use a standing
                desk, and incorporate daily activities like taking stairs or
                walking meetings. Movement keeps joints lubricated and maintains
                muscle strength.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                4. Maintain Good Posture and Body Mechanics
              </h4>
              <p className="!text-blue-900">
                Proper alignment reduces stress on muscles, joints, and
                ligaments. Set up an ergonomic workspace, practice good lifting
                techniques, and be mindful of your posture throughout the day.
                Consider posture training exercises to strengthen supporting
                muscles.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                5. Prioritize Recovery and Sleep
              </h4>
              <p className="!text-blue-900">
                Quality sleep is essential for muscle repair and bone
                remodeling. Allow adequate rest between intense workouts, manage
                stress levels, and ensure 7-9 hours of sleep nightly. Consider
                massage, foam rolling, or other recovery techniques to maintain
                tissue health.
              </p>
            </div>

            <Link to="/blog-page?organType=Muscle" className="!inline-block !w-full">
              <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full flex items-center justify-center gap-2">
                [Read More: Complete Musculoskeletal Health Guide]
                <ArrowRight className="!inline-block !ml-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Amazing Facts Section */}
        <div className="!mb-8">
          <h2 className="!text-2xl !font-semibold !text-blue-900 !mb-3">
            Amazing Facts About Your Musculoskeletal System
          </h2>

          <p className="!text-blue-900 !mb-4">
            Your musculoskeletal system is truly remarkable! Here are some
            incredible facts about this complex and vital system.
          </p>

          <div className="!space-y-4 !mb-6">
            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                Your Bones Are Stronger Than Steel
              </h4>
              <p className="!text-blue-900">
                Pound for pound, bone is actually stronger than steel! A cubic
                inch of bone can bear loads of up to 19,000 pounds - that's
                roughly the weight of five pickup trucks. This incredible
                strength comes from bone's unique composite structure of
                collagen and calcium phosphate.
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                You Have Over 600 Muscles
              </h4>
              <p className="!text-blue-900">
                The human body contains over 600 individual muscles, making up
                about 40% of your total body weight. The smallest muscle is in
                your ear (the stapedius), while the largest is your gluteus
                maximus. It takes 17 muscles just to smile!
              </p>
            </div>

            <div className="!bg-white !p-5 !rounded-lg !shadow-sm">
              <h4 className="!font-semibold !text-blue-900 !mb-2">
                Your Skeleton Completely Renews Itself
              </h4>
              <p className="!text-blue-900">
                Through bone remodeling, your entire skeleton is replaced
                approximately every 10 years. This means the skeleton you have
                today is completely different from the one you had a decade ago!
                This process allows bones to repair micro-damage and adapt to
                physical stress.
              </p>
            </div>

            <Link to="/blog-page?organType=Muscle" className="!inline-block !w-full">
              <button className="!bg-green-300 !hover:bg-green-400 !text-blue-900 !font-semibold !py-3 !px-6 !rounded-lg !w-full flex items-center justify-center gap-2">
                [Read More: 20 Fascinating Musculoskeletal Facts]
                <ArrowRight className="!inline-block !ml-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Conclusion */}
        <div className="!bg-green-100 !p-5 !rounded-lg !border !border-green-200">
          <h2 className="!text-xl !font-semibold !text-blue-900 !mb-2">
            Remember:
          </h2>
          <p className="!text-blue-900">
            The musculoskeletal system plays a crucial role in mobility,
            stability, and overall health. By understanding how it functions and
            taking preventative measures through regular exercise, proper
            nutrition, and healthy lifestyle choices, you can ensure long-term
            bone, muscle, and joint health. Your body is designed for movement -
            use it, care for it, and it will serve you well throughout your
            life!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MusclePage;
