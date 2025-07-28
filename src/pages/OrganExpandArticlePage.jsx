import React from 'react';
import { useParams } from 'react-router-dom';
import OrganExpandArticle from '../components/OrganExpan/OrganExpandArticle';

// Organ data objects - similar to the brain data structure provided
const organData = {
  "brain": {
    "title": "Your Brain: The Key to Your Health and Well-Being",
    "introduction": "The brain is the command center of your body, controlling everything from your thoughts and emotions to movement and memory[cite: 2, 115]. Whether you're searching for answers about brain health, aging, or neurological conditions, this guide will help you understand how your brain works and what you can do to keep it healthy[cite: 3, 116].",
    "howItWorks": {
      "title": "How Your Brain Works",
      "summary": "Imagine your brain as a bustling city, where different districts perform specialized tasks to keep everything running smoothly[cite: 5, 118].",
      "parts": [
        {
          "name": "Cerebrum",
          "description": "The largest part of the brain, the cerebrum handles thinking, memory, and voluntary movements[cite: 6, 119]. Whether you're solving a puzzle, recalling a childhood memory, or lifting a coffee cup, your cerebrum is in charge[cite: 7, 120]."
        },
        {
          "name": "Cerebellum",
          "description": "Sitting right behind the cerebrum, the cerebellum is responsible for balance and coordination, ensuring you stay steady while walking or reaching for something[cite: 8, 121]."
        },
        {
          "name": "Brainstem",
          "description": "The body's autopilot, the brainstem controls vital functions like breathing, heart rate, and digestion without you having to think about them[cite: 9, 10, 122, 123]."
        },
        {
          "name": "Limbic System",
          "description": "Often called the emotional center, the limbic system processes feelings such as joy, fear, and motivation, helping shape your reactions to different experiences[cite: 11, 12, 124, 125]."
        },
        {
          "name": "Thalamus and Hypothalamus",
          "description": "These act as a relay station, regulating sensory signals, hunger, sleep, and body temperature[cite: 13, 126]. These components work together, constantly communicating to help you move, think, and feel—without you even realizing it[cite: 14, 127]."
        }
      ]
    },
    "lobes": {
      "title": "Lobes of the Brain",
      "imageUrl": "https://images.unsplash.com/photo-1525359392019-4e1a94b4e9e1?q=80&w=2070&auto=format&fit=crop",
      "list": [
        { "name": "Frontal Lobe", "functions": ["Executive functioning-reasoning, problem-solving, planning", "Parts of speech", "Emotions"] },
        { "name": "Parietal Lobe", "functions": ["Recognition and perception of stimuli", "Language"] },
        { "name": "Temporal Lobe", "functions": ["Hearing", "Short term memory", "Language comprehension"] },
        { "name": "Occipital Lobe", "functions": ["Sight", "Visual Perception"] },
        { "name": "Cerebellum", "functions": ["Coordination", "Balance"] }
      ]
    },
    "changesWithAge": {
      "title": "How Your Brain Changes with Age",
      "summary": "Your brain isn't static—it continuously evolves[cite: 47, 160]. Here's a closer look at how it changes throughout life and the common challenges at each stage[cite: 47, 160].",
      "stages": [
        { "name": "Childhood (0-10 years): The Rapid Learner", "description": "In the first years of life, the brain develops at an astonishing pace, forming millions of new connections every second[cite: 49, 162]. This is why children learn languages, social behaviors, and new skills effortlessly[cite: 50, 163]. However, their brains are still refining impulse control and attention, making conditions like ADHD and learning disabilities more common during this stage[cite: 51, 164]." },
        { "name": "Teenage Years (10-20 years): The Emotional Explorer", "description": "The prefrontal cortex, responsible for decision-making and self-control, is still developing[cite: 53, 166]. Meanwhile, the emotional center of the brain, the limbic system, is highly active, leading to intense emotions and risk-taking behavior[cite: 54, 167]. Anxiety and depression often surface during these years[cite: 55, 168]." },
        { "name": "Adulthood (20-40 years): The Prime Time", "description": "By adulthood, the brain reaches peak cognitive function[cite: 57, 170]. Problem-solving skills, memory, and reasoning are at their best[cite: 57, 170]. However, work-related stress and lifestyle choices can start to take a toll, leading to mental fatigue, migraines, and early signs of burnout[cite: 58, 171]." },
        { "name": "Middle Age (40-65 years): The Wise Thinker", "description": "During middle age, memory recall may slow down slightly, but experience and critical thinking abilities improve decision-making[cite: 60, 173]. The brain undergoes slight shrinkage, affecting focus and processing speed[cite: 61, 174]. Common issues include forgetfulness, brain fog, and early signs of dementia[cite: 62, 175]." },
        { "name": "Senior Years (65+ years): The Resilient Mind", "description": "Cognitive decline is a natural part of aging, but an active lifestyle can significantly slow the process[cite: 64, 177]. The brain remains capable of learning new skills thanks to neuroplasticity[cite: 65, 178]. However, concerns like Alzheimer's, strokes, and memory loss become more prevalent in later years[cite: 66, 179]." }
      ]
    },
    "commonMyths": {
      "title": "Common Myths About the Brain",
      "myths": [
        { "myth": "We Only Use 10% of Our Brain", "reality": "This is completely false[cite: 70, 183]! Brain scans show that almost every part of the brain is active, even while sleeping[cite: 71, 184]." },
        { "myth": "Left-Brained vs. Right-Brained People", "reality": "The idea that people are either logical (left-brained) or creative (right-brained) is a myth[cite: 72, 185]. Both hemispheres work together for almost all tasks[cite: 73, 186]." },
        { "myth": "Brain Damage is Always Permanent", "reality": "Not necessarily[cite: 74, 187]! The brain has an incredible ability to repair and rewire itself, a process known as neuroplasticity[cite: 75, 188]." },
        { "myth": "Listening to Classical Music Makes You Smarter", "reality": "While music can boost focus and mood, it doesn't directly increase intelligence[cite: 77, 190]."}
      ]
    },
    "howToKeepHealthy": {
      "title": "How to Keep Your Brain Healthy",
      "summary": "A healthy brain requires the right fuel, physical activity, and mental engagement[cite: 92, 205]. Here's how you can actively protect and improve your brain function[cite: 93, 206]:",
      "tips": [
        { "title": "Nutrition for Brain Power", "description": "Foods rich in omega-3 fatty acids (such as salmon and walnuts) help reduce inflammation and improve cognitive function[cite: 95, 208]. Antioxidants found in berries and dark chocolate protect brain cells from damage[cite: 96, 209]." },
        { "title": "Exercise and Brain Health", "description": "Regular physical activity increases blood flow to the brain, delivering oxygen and essential nutrients[cite: 98, 211]. Exercise has been linked to improved memory and reduced risk of neurodegenerative diseases[cite: 99, 212]." },
        { "title": "Sleep and Mental Recovery", "description": "Your brain performs essential maintenance while you sleep, clearing out toxins and consolidating memories[cite: 102, 215]. Aim for 7-9 hours of quality sleep per night to support brain function[cite: 104, 217]." },
        { "title": "Mental Stimulation and Learning", "description": "Challenging your brain with new experiences helps build new neural connections[cite: 106, 219]. Reading, learning a new language, or playing an instrument stimulate cognitive function[cite: 107, 220]." },
        { "title": "Stress Management and Emotional Well-Being", "description": "Chronic stress can damage brain cells and shrink the hippocampus[cite: 109, 222]. Practicing mindfulness, meditation, or deep-breathing exercises can help regulate emotions and reduce the harmful effects of stress[cite: 110, 223]." }
      ]
    },
    "conclusion": "Your brain is your most valuable asset[cite: 112, 225]. By making small but impactful lifestyle changes, you can protect and strengthen it at any age[cite: 112, 225]. Whether it's through nutrition, movement, stress management, or lifelong learning, investing in your brain's health today will benefit you for years to come[cite: 113, 226]."
  },
  "heart": {
    "title": "The Human Heart: Your Body's Lifeline",
    "introduction": "The heart is one of the most vital organs in the human body, responsible for keeping you alive and energized[cite: 461]. Acting as a powerful pump, it circulates oxygen-rich blood to every cell, ensuring that your body functions smoothly[cite: 462].",
    "howItWorks": {
      "title": "How the Heart Works",
      "summary": "The heart is a strong, muscular organ about the size of your fist, located in the chest[cite: 466]. It has four chambers that work together to pump blood throughout the body[cite: 467].",
      "parts": [
        {
          "name": "Right Atrium",
          "description": "Receives oxygen-poor blood from the body[cite: 469]."
        },
        {
          "name": "Right Ventricle",
          "description": "Sends this blood to the lungs to pick up oxygen[cite: 469]."
        },
        {
          "name": "Left Atrium",
          "description": "Receives oxygen-rich blood from the lungs[cite: 470]."
        },
        {
          "name": "Left Ventricle",
          "description": "Pumps the oxygenated blood to the rest of the body[cite: 471]."
        }
      ]
    },
    "changesWithAge": {
      "title": "How the Heart Changes with Age",
      "summary": "As we go through different life stages, our heart undergoes significant changes in structure and function[cite: 475]. Understanding these changes can help us take proactive steps to maintain heart health[cite: 476].",
      "stages": [
        { "name": "Infancy & Childhood (0-12 years)", "description": "The heart grows rapidly, adapting to the child's increasing energy needs[cite: 482]. A newborn's heart beats faster (about 120-160 beats per minute) compared to an adult's[cite: 483]." },
        { "name": "Adolescence & Adulthood (13-40 years)", "description": "The heart reaches its full size and efficiency, working at its peak[cite: 486]. Lifestyle choices such as diet and exercise start playing a crucial role in heart health[cite: 487]." },
        { "name": "Middle Age (40-60 years)", "description": "The heart's pumping efficiency may decline slightly[cite: 490]. Conditions like high blood pressure and cholesterol buildup can develop if unhealthy habits persist[cite: 491]." },
        { "name": "Old Age (60+ years)", "description": "The heart muscle may thicken, and blood vessels may stiffen, making circulation less efficient[cite: 494]. The risk of heart disease, arrhythmias, and valve problems increases[cite: 495]." }
      ]
    },
    "commonMyths": {
      "title": "Common Myths About the Heart",
      "myths": [
        { "myth": "Heart disease only affects older people.", "reality": "Fact: Young adults can also develop heart problems due to poor lifestyle choices, genetics, or stress[cite: 498]." },
        { "myth": "If you have a strong heart, you don't need to exercise.", "reality": "Fact: Regular exercise keeps your heart muscle strong and prevents future heart problems[cite: 500]." },
        { "myth": "Chest pain is the only sign of a heart attack.", "reality": "Fact: Heart attacks can also cause nausea, jaw pain, shortness of breath, and fatigue[cite: 502]." }
      ]
    },
    "howToKeepHealthy": {
      "title": "How to Keep Your Heart Healthy",
      "summary": "Taking care of your heart is essential for a long and active life[cite: 511].",
      "tips": [
        { "title": "Eat a Heart-Healthy Diet", "description": "Consume fruits, vegetables, whole grains, and lean proteins, and avoid excess salt, sugar, and unhealthy fats[cite: 513]. Include omega-3 fatty acids found in fish, nuts, and seeds[cite: 514]." },
        { "title": "Stay Active", "description": "Engage in at least 30 minutes of exercise (walking, cycling, swimming) most days of the week[cite: 517]." },
        { "title": "Manage Stress", "description": "Practice deep breathing, meditation, or mindfulness[cite: 520]. Get enough sleep (7-9 hours per night) to allow your heart to recover[cite: 521]." },
        { "title": "Quit Smoking and Limit Alcohol", "description": "Smoking damages blood vessels and increases heart disease risk[cite: 523]. Excess alcohol can raise blood pressure and contribute to heart problems[cite: 524]." },
        { "title": "Regular Checkups", "description": "Monitor blood pressure, cholesterol levels, and blood sugar[cite: 526]. Early detection of issues can prevent serious complications[cite: 527]." }
      ]
    },
    "conclusion": "Your heart is a powerhouse, working tirelessly every second of your life[cite: 529]. By making smart lifestyle choices and being mindful of your heart's health, you can ensure it keeps beating strong for years to come[cite: 530]."
  },
  "stomach": {
    "title": "Gut Health: Your Key to Overall Well-being",
    "introduction": "Your gut is more than just a digestion center—it's the foundation of your overall health[cite: 228]. Often called the 'second brain,' your gut houses trillions of bacteria that influence digestion, immunity, mood, and even brain function[cite: 229]. A well-balanced gut microbiome can lead to better energy, improved mental clarity, and a stronger immune system[cite: 230].",
    "howItWorks": {
      "title": "How the Gut Works",
      "summary": "The digestive system is a complex network of organs that work together to break down food, absorb nutrients, and eliminate waste[cite: 233].",
      "parts": [
        {
          "name": "Mouth & Esophagus",
          "description": "Digestion begins with chewing and saliva, which start breaking down food before it moves through the esophagus into the stomach[cite: 235]."
        },
        {
          "name": "Stomach",
          "description": "A powerhouse of acids and enzymes that break down proteins and kill harmful bacteria[cite: 237]."
        },
        {
          "name": "Small Intestine",
          "description": "The primary site for nutrient absorption, assisted by the liver, pancreas, and gallbladder[cite: 239]."
        },
        {
          "name": "Large Intestine (Colon)",
          "description": "Home to billions of gut bacteria that digest fiber, produce vitamins, and help regulate immune function[cite: 242]."
        }
      ]
    },
    "commonMyths": {
      "title": "Common Myths About Gut Health",
      "myths": [
        { "myth": "A healthy gut just means good digestion.", "reality": "Fact: Your gut does much more than digest food—it impacts your immune system, brain function, and overall well-being[cite: 263]." },
        { "myth": "Probiotics alone can fix gut health.", "reality": "Fact: While probiotics help, a balanced diet rich in fiber, prebiotics, and diverse nutrients is essential for optimal gut function[cite: 266]." },
        { "myth": "Gut issues are always caused by food.", "reality": "Fact: Stress, lack of sleep, and antibiotics can disrupt gut bacteria, leading to digestive problems[cite: 269]." }
      ]
    },
    "howToKeepHealthy": {
      "title": "How to Keep Your Gut Healthy",
      "summary": "Maintaining a balanced gut isn't complicated—it starts with simple lifestyle changes[cite: 279]:",
      "tips": [
        { "title": "Eat a Diverse Diet", "description": "Include fiber-rich foods like vegetables, fruits, whole grains, and legumes[cite: 281]. Consume fermented foods like yogurt, kimchi, sauerkraut, and kombucha to boost good bacteria[cite: 282]. Limit processed foods, excess sugar, and artificial sweeteners, which can harm gut bacteria[cite: 284]." },
        { "title": "Stay Hydrated", "description": "Drinking enough water promotes digestion, nutrient absorption, and detoxification[cite: 286]." },
        { "title": "Manage Stress", "description": "Chronic stress disrupts gut bacteria[cite: 288]. Practice deep breathing, meditation, or exercise to keep your gut-brain connection strong[cite: 288]." },
        { "title": "Get Enough Sleep", "description": "Poor sleep weakens the gut barrier, leading to inflammation and digestive problems[cite: 291]." },
        { "title": "Avoid Unnecessary Antibiotics", "description": "Antibiotics kill both good and bad bacteria, leading to imbalances[cite: 293]. Always consult a doctor before taking them[cite: 293]." }
      ]
    },
    "conclusion": "Maintaining a balanced gut is crucial for overall health, influencing everything from digestion and immunity to mood. Simple lifestyle changes like eating a diverse diet, managing stress, and getting enough sleep can significantly improve your gut health and well-being."
  },
  "muscle-arm": {
    "title": "Musculoskeletal System: The Framework of Human Movement",
    "introduction": "The musculoskeletal system is the foundation of human movement, providing support, mobility, and protection to vital organs[cite: 534]. It consists of bones, muscles, joints, tendons, ligaments, and connective tissues, all working together to enable motion and maintain posture[cite: 535].",
    "howItWorks": {
      "title": "Understanding the Musculoskeletal System",
      "summary": "The musculoskeletal system is an integrated network where bones provide a structural foundation, muscles generate the power for motion, and various connective tissues like joints, tendons, and ligaments facilitate movement and stability.",
      "parts": [
        {
          "name": "Bones",
          "description": "Bones form the skeletal framework of the body, supporting organs and enabling movement[cite: 540]. They are also involved in mineral storage and blood cell production[cite: 541]."
        },
        {
          "name": "Muscles",
          "description": "Muscles generate force for movement, posture maintenance, and internal functions like circulation and digestion[cite: 547]."
        },
        {
          "name": "Joints",
          "description": "Joints connect bones and allow different types of movement, from hinge-like motion in the knees to rotational movement in the shoulders[cite: 544]."
        },
        {
          "name": "Ligaments",
          "description": "Ligaments stabilize joints and prevent excessive motion[cite: 550]."
        },
        {
          "name": "Tendons",
          "description": "Tendons link muscles to bones, enabling movement[cite: 550]."
        }
      ]
    },
    "howToKeepHealthy": {
      "title": "How to Keep Your Musculoskeletal System Healthy",
      "summary": "A strong and healthy musculoskeletal system is vital for mobility and overall well-being. Here are some tips to maintain it:",
      "tips": [
        { "title": "Exercise Regularly", "description": "Strength training and stretching keep muscles strong and joints flexible[cite: 569]." },
        { "title": "Eat a Balanced Diet", "description": "Include calcium, vitamin D, and protein for strong bones and muscles[cite: 570]." },
        { "title": "Stay Active", "description": "Avoid prolonged sitting; movement keeps joints lubricated[cite: 572]." },
        { "title": "Maintain Good Posture", "description": "Proper alignment reduces stress on muscles and joints[cite: 573]." }
      ]
    },
    "conclusion": "The musculoskeletal system plays a crucial role in mobility, stability, and overall health[cite: 574]. By understanding how it functions and taking preventative measures, you can ensure long-term bone, muscle, and joint health[cite: 575]."
  }
};

function OrganExpandArticlePage() {
  const { type } = useParams();
  
  // Get the organ data based on the type parameter
  const organDataForType = organData[type] || organData.brain;

  return (
    <OrganExpandArticle 
      data={organDataForType} 
      organType={type} 
    />
  );
}

export default OrganExpandArticlePage; 