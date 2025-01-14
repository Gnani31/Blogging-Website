const tech_blogs = [
    {
        "publisherName": "NextGen Tech",
        "title": "Blockchain Beyond Cryptocurrency: Transforming Industries",
        "paragraph": "Blockchain technology, originally synonymous with cryptocurrencies like Bitcoin, has evolved to become a game-changer in various industries. In supply chain management, healthcare, and real estate, blockchain is ensuring greater transparency and efficiency.",
        "publishedDate": "Jan 5, 2025",
        "likes": 420,
        "comments": 38
    },
    {
        "publisherName": "TechSavvy Insights",
        "title": "Exploring the Future of Quantum Computing",
        "paragraph": "Quantum computing is rapidly advancing from theoretical research to real-world applications. With its potential in fields such as cryptography, medicine, and logistics, quantum computing is poised to solve problems that classical computers cannot.",
        "publishedDate": "Dec 3, 2024",
        "likes": 130,
        "comments": 15
    },
    {
        "publisherName": "FutureTech Today",
        "title": "5G Networks: The Backbone of Smart Cities",
        "paragraph": "The rollout of 5G networks is set to revolutionize not only mobile connectivity but also the infrastructure of smart cities. By providing ultra-fast internet speeds and ultra-low latency, 5G is enabling cities to become more connected and efficient.",
        "publishedDate": "Dec 4, 2024",
        "likes": 140,
        "comments": 20
    },
    {
        "publisherName": "Digital Innovators",
        "title": "AI and the Transformation of Personalized Healthcare",
        "paragraph": "AI has made significant strides in the healthcare sector, particularly in the development of personalized medicine. By analyzing large datasets of genetic and health information, AI systems are helping doctors create tailored treatment plans for patients.",
        "publishedDate": "Dec 5, 2024",
        "likes": 150,
        "comments": 25
    },
    {
        "publisherName": "Ethan Turner",
        "title": "Augmented Reality’s Role in Revolutionizing Education",
        "paragraph": "Augmented reality (AR) is poised to change the way we learn and teach. By blending the virtual and physical worlds, AR has the potential to create immersive and interactive educational experiences, helping students visualize complex concepts.",
        "publishedDate": "Dec 6, 2024",
        "likes": 160,
        "comments": 30
    },
    {
        "publisherName": "Liam Harris",
        "title": "How Autonomous Vehicles Will Reshape Urban Mobility",
        "paragraph": "Autonomous vehicles (AVs) are set to transform urban mobility. With the rise of self-driving cars, buses, and trucks, the dynamics of transportation in cities are evolving, offering new solutions for traffic congestion, accidents, and environmental impact.",
        "publishedDate": "Dec 7, 2024",
        "likes": 170,
        "comments": 35
    },
    {
        "publisherName": "Grace Porter",
        "title": "The Evolution of Smart Wearables in Health and Fitness",
        "paragraph": "Smart wearables are no longer just for fitness enthusiasts. These devices are becoming essential tools for health monitoring and disease prevention, enabling individuals to track everything from heart rate and sleep patterns to blood oxygen levels.",
        "publishedDate": "Dec 8, 2024",
        "likes": 180,
        "comments": 40
    },
    {
        "publisherName": "Lucas Mitchell",
        "title": "The Rise of Edge Computing in IoT Networks",
        "paragraph": "Edge computing is revolutionizing how data is processed in IoT (Internet of Things) networks. By processing data closer to the source, edge computing reduces latency, saves bandwidth, and enables real-time decision-making for IoT devices.",
        "publishedDate": "Dec 9, 2024",
        "likes": 190,
        "comments": 45
    },
    {
        "publisherName": "Sophie Bennett",
        "title": "Cybersecurity in the Age of Digital Transformation",
        "paragraph": "As organizations undergo digital transformation, they are increasingly exposed to cyber threats. This article explores the evolving cybersecurity landscape, focusing on advanced threat detection, multi-layered security protocols, and employee training.",
        "publishedDate": "Dec 10, 2024",
        "likes": 200,
        "comments": 50
    },
    {
        "publisherName": "Aiden Clark",
        "title": "The Growth of the Green Tech Industry",
        "paragraph": "Green technology is gaining traction as the world faces increasing environmental challenges. From renewable energy solutions to sustainable agriculture and waste management, green tech is playing a crucial role in combating climate change and promoting sustainability.",
        "publishedDate": "Dec 11, 2024",
        "likes": 210,
        "comments": 55
    },
    {
        "publisherName": "Chloe Reed",
        "title": "The Future of Robotics in Manufacturing",
        "paragraph": "Robots are increasingly becoming a staple of modern manufacturing processes. Automation powered by robotics is improving efficiency, reducing costs, and enhancing product quality across industries, particularly in assembly and precision tasks.",
        "publishedDate": "Dec 12, 2024",
        "likes": 220,
        "comments": 60
    },
    {
        "publisherName": "Max Harrison",
        "title": "The Power of Artificial Intelligence in Climate Modeling",
        "paragraph": "Artificial intelligence is enhancing our ability to predict and understand climate change. By processing vast amounts of data from satellites, sensors, and climate models, AI is enabling more accurate and timely climate predictions.",
        "publishedDate": "Dec 13, 2024",
        "likes": 230,
        "comments": 65
    },
    {
        "publisherName": "Emma Foster",
        "title": "Navigating the Future of 3D Printing in Healthcare",
        "paragraph": "3D printing technology is revolutionizing healthcare by enabling the creation of custom prosthetics, implants, and even human tissues. This technology promises to reduce costs, improve patient outcomes, and speed up recovery times.",
        "publishedDate": "Dec 14, 2024",
        "likes": 240,
        "comments": 70
    },
    {
        "publisherName": "Oliver King",
        "title": "Smart Homes: The Future of Residential Living",
        "paragraph": "Smart home technology is rapidly evolving, transforming how we live. From intelligent lighting systems to voice-activated appliances, smart homes are becoming more energy-efficient, secure, and convenient.",
        "publishedDate": "Dec 15, 2024",
        "likes": 250,
        "comments": 75
    },
    {
        "publisherName": "Victoria Lee",
        "title": "The Impact of 3D Reality in Virtual Environments",
        "paragraph": "3D reality in virtual environments is reshaping industries such as gaming, entertainment, and even real estate. By creating immersive experiences, 3D reality technologies are changing the way we interact with digital worlds.",
        "publishedDate": "Dec 16, 2024",
        "likes": 260,
        "comments": 80
    },
    {
        "publisherName": "Ryan Scott",
        "title": "The Future of Space Exploration with Private Companies",
        "paragraph": "Private companies are taking the lead in space exploration, driving innovation and reducing the cost of space missions. Companies like SpaceX, Blue Origin, and Virgin Galactic are changing the way we view space travel and research.",
        "publishedDate": "Dec 17, 2024",
        "likes": 270,
        "comments": 85
    },
    {
        "publisherName": "TechGuru",
        "title": "The Rise of Artificial Intelligence in Everyday Life",
        "paragraph": "Artificial intelligence (AI) has become a transformative force in our modern world. From virtual assistants like Alexa and Siri to advanced data analytics, AI is reshaping industries.",
        "publishedDate": "Jan 1, 2025",
        "likes": 512,
        "comments": 45
    },
    {
        "publisherName": "Isabelle Gray",
        "title": "How Blockchain is Reinventing Data Security",
        "paragraph": "Blockchain technology is gaining traction in the cybersecurity space. By decentralizing data storage and creating transparent systems, blockchain ensures data integrity and reduces vulnerabilities in online transactions.",
        "publishedDate": "Dec 18, 2024",
        "likes": 280,
        "comments": 90
    },
    {
        "publisherName": "Daniel Reed",
        "title": "Robotic Process Automation in Business Operations",
        "paragraph": "Robotic Process Automation (RPA) is transforming business operations by automating repetitive and manual tasks, enabling companies to increase efficiency and reduce operational costs.",
        "publishedDate": "Dec 19, 2024",
        "likes": 290,
        "comments": 95
    },
    {
        "publisherName": "Sophia Mitchell",
        "title": "The Evolution of Artificial Intelligence in Creativity",
        "paragraph": "Artificial intelligence is now playing a key role in creative industries such as art, music, and film. From AI-generated paintings to algorithm-driven movie scripts, AI is breaking new ground in creativity.",
        "publishedDate": "Dec 20, 2024",
        "likes": 300,
        "comments": 100
    }
];

// const self_improvement_blogs = [
//     {
//         "publisherName": "SelfGrowth 1",
//         "title": "Practical Steps for Lifelong Self-Improvement: Unlocking Your Potential",
//         "paragraph": "            Self-improvement is a lifelong journey, and strategy 1 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>            Strategy 1 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.        ",
//         "publishedDate": "Nov 1, 2024",
//         "likes": 215,
//         "comments": 4
//     },
//     {
//         "publisherName": "SelfGrowth 2",
//         "title": "Self-Improvement Strategy 2: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 2 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 2 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 2, 2024",
//         "likes": 230,
//         "comments": 8
//     },
//     {
//         "publisherName": "SelfGrowth 3",
//         "title": "Self-Improvement Strategy 3: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 3 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 3 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 3, 2024",
//         "likes": 245,
//         "comments": 12
//     },
//     {
//         "publisherName": "SelfGrowth 4",
//         "title": "Self-Improvement Strategy 4: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 4 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 4 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 4, 2024",
//         "likes": 260,
//         "comments": 16
//     },
//     {
//         "publisherName": "SelfGrowth 5",
//         "title": "Self-Improvement Strategy 5: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 5 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 5 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 5, 2024",
//         "likes": 275,
//         "comments": 20
//     },
//     {
//         "publisherName": "SelfGrowth 6",
//         "title": "Self-Improvement Strategy 6: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 6 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 6 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 6, 2024",
//         "likes": 290,
//         "comments": 24
//     },
//     {
//         "publisherName": "SelfGrowth 7",
//         "title": "Self-Improvement Strategy 7: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 7 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 7 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 7, 2024",
//         "likes": 305,
//         "comments": 28
//     },
//     {
//         "publisherName": "SelfGrowth 8",
//         "title": "Self-Improvement Strategy 8: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 8 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 8 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 8, 2024",
//         "likes": 320,
//         "comments": 32
//     },
//     {
//         "publisherName": "SelfGrowth 9",
//         "title": "Self-Improvement Strategy 9: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 9 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 9 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 9, 2024",
//         "likes": 335,
//         "comments": 36
//     },
//     {
//         "publisherName": "SelfGrowth 10",
//         "title": "Self-Improvement Strategy 10: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 10 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 10 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 10, 2024",
//         "likes": 350,
//         "comments": 40
//     },
//     {
//         "publisherName": "SelfGrowth 11",
//         "title": "Self-Improvement Strategy 11: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 11 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 11 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 11, 2024",
//         "likes": 365,
//         "comments": 44
//     },
//     {
//         "publisherName": "SelfGrowth 12",
//         "title": "Self-Improvement Strategy 12: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 12 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 12 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 12, 2024",
//         "likes": 380,
//         "comments": 48
//     },
//     {
//         "publisherName": "SelfGrowth 13",
//         "title": "Self-Improvement Strategy 13: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 13 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 13 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 13, 2024",
//         "likes": 395,
//         "comments": 52
//     },
//     {
//         "publisherName": "SelfGrowth 14",
//         "title": "Self-Improvement Strategy 14: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 14 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 14 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 14, 2024",
//         "likes": 410,
//         "comments": 56
//     },
//     {
//         "publisherName": "SelfGrowth 15",
//         "title": "Self-Improvement Strategy 15: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 15 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 15 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 15, 2024",
//         "likes": 425,
//         "comments": 60
//     },
//     {
//         "publisherName": "SelfGrowth 16",
//         "title": "Self-Improvement Strategy 16: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 16 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 16 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 16, 2024",
//         "likes": 440,
//         "comments": 64
//     },
//     {
//         "publisherName": "SelfGrowth 17",
//         "title": "Self-Improvement Strategy 17: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 17 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 17 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 17, 2024",
//         "likes": 455,
//         "comments": 68
//     },
//     {
//         "publisherName": "SelfGrowth 18",
//         "title": "Self-Improvement Strategy 18: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 18 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 18 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 18, 2024",
//         "likes": 470,
//         "comments": 72
//     },
//     {
//         "publisherName": "SelfGrowth 19",
//         "title": "Self-Improvement Strategy 19: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 19 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 19 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 19, 2024",
//         "likes": 485,
//         "comments": 76
//     },
//     {
//         "publisherName": "SelfGrowth 20",
//         "title": "Self-Improvement Strategy 20: Unlocking Your Potential",
//         "paragraph": "\n            Self-improvement is a lifelong journey, and strategy 20 delves into practical ways to achieve personal growth.<br><br>\n            Start by identifying your strengths and weaknesses. Self-awareness is key to understanding where improvements are needed.<br><br>\n            Next, set realistic and measurable goals. Break down long-term aspirations into smaller, manageable steps, celebrating each milestone.<br><br>\n            Developing positive habits is crucial. Consistency in actions like journaling, exercising, or meditating can bring transformative changes over time.<br><br>\n            Surround yourself with supportive people who inspire growth. Engage in constructive conversations, seek feedback, and embrace challenges.<br><br>\n            Remember, setbacks are part of the process. Instead of being discouraged, treat failures as learning opportunities.<br><br>\n            Finally, practice gratitude and mindfulness. Appreciating the present moment while working toward your goals creates a balanced approach to self-improvement.<br><br>\n            Strategy 20 emphasizes that small, consistent efforts lead to significant personal transformation. Every step forward brings you closer to the best version of yourself.\n        ",
//         "publishedDate": "Nov 20, 2024",
//         "likes": 500,
//         "comments": 80
//     }
// ];

const blogs = [...tech_blogs];




document.getElementById('close').addEventListener('click',() => {
    document.getElementById('categories').style.visibility = 'hidden';
});
document.getElementById('nav_close').addEventListener('click',() => {
    document.getElementById('side_nav').style.visibility = 'hidden';
});
document.getElementById('nav_button').addEventListener('click',() => {
    document.getElementById('side_nav').style.visibility = 'visible';
    document.getElementById('side_nav').style.display = 'flex';
});
document.getElementById('menu_icon').addEventListener('click',() => {
    document.getElementById('categories').style.visibility = 'visible';
});

// const publication = document.querySelectorAll('.publication');
// const title = document.querySelectorAll('.title');
// const para = document.querySelectorAll('.para');
// const date = document.querySelectorAll('.date');
// const likes = document.querySelectorAll('.likes');
// const comments = document.querySelectorAll('.comments');

// for(let i = 0;i < 6;i++)
// {
//     publication[i].innerHTML = `Published by ${blogs[Math.floor(Math.random() * blogs.length)].publisherName}`;
//     date[i].textContent = blogs[Math.floor(Math.random() * blogs.length)].publishedDate;
//     title[i].textContent = blogs[Math.floor(Math.random() * blogs.length)].title;
//     likes[i].textContent = blogs[Math.floor(Math.random() * blogs.length)].likes;
//     comments[i].textContent = blogs[Math.floor(Math.random() * blogs.length)].comments;
//     para[i].textContent = blogs[Math.floor(Math.random() * blogs.length)].paragraph;
// }


let main_left = document.getElementById("main_left");

for(let i = 0;i < tech_blogs.length;i++) {

    let post = document.createElement('div'); 
    main_left.appendChild(post);
    post.className = "post";
    let publication = document.createElement('div');
    publication.className = "publication";
    publication.textContent = `Published by ${tech_blogs[i].publisherName}`;
    post.appendChild(publication);
    let title = document.createElement('h3');
    title.className = "title";
    title.textContent = tech_blogs[i].title;
    post.appendChild(title);
    let para = document.createElement('p');
    para.className = "para";
    para.textContent = tech_blogs[i].paragraph;
    post.appendChild(para);
    let bottom = document.createElement('div');
    bottom.className = "bottom";
    post.appendChild(bottom);
    let b_left = document.createElement('div');
    bottom.appendChild(b_left);
    b_left.className = "b_left";
    let date = document.createElement('div');
    let likes = document.createElement('div');
    let comments = document.createElement('div');
    b_left.appendChild(date);
    let date_i = document.createElement('i');
    date_i.classList.add("fa-solid");
    date_i.classList.add("fa-meteor");
    let date_span = document.createElement('span');
    date_span.textContent = tech_blogs[i].publishedDate;
    date.appendChild(date_i);
    date.appendChild(date_span)
    b_left.appendChild(likes);
    let likes_i = document.createElement('i');
    likes_i.classList.add("fa-regular");
    likes_i.classList.add("fa-thumbs-up");
    let likes_span = document.createElement('span');
    likes_span.textContent = tech_blogs[i].likes;
    likes.appendChild(likes_i);
    likes.appendChild(likes_span);
    b_left.appendChild(comments);
    let comments_i = document.createElement('i');
    comments_i.classList.add("fa-solid");
    comments_i.classList.add("fa-comment");
    let comments_span = document.createElement('span');
    comments_span.textContent = tech_blogs[i].comments;
    comments.appendChild(comments_i);
    comments.appendChild(comments_span);
    let b_right = document.createElement('div');
    bottom.appendChild(b_right);
    b_right.className = "b_right";
    let bookmark_div = document.createElement("div");
    let heart_div = document.createElement("div");
    let bookmark_i = document.createElement('i');
    bookmark_i.classList.add("fa-regular");
    bookmark_i.classList.add("fa-bookmark");
    bookmark_div.appendChild(bookmark_i);
    b_right.appendChild(bookmark_div)
    let heart_i = document.createElement('i');
    heart_i.classList.add("fa-regular");
    heart_i.classList.add("fa-heart");
    heart_div.appendChild(heart_i);
    b_right.appendChild(heart_div);
    bottom.appendChild(b_right);
    let bookmark = document.createElement('div');
    let heart = document.createElement('div');
    b_right.appendChild(bookmark);
    b_right.appendChild(heart);
}
