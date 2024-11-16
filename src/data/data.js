import {
  homeschooling,
  aLevels,
  qualifiedTeachers,
  affordableExcellence,
  tutorMatching,
  triumphantTales,
  customBuiltLMS,
  computer,
  math,
  physics,
  chemistry,
  history,
  biology,
  english,
  french,
  psychology,
  business,
  mathsSub,
  chemistrySub,
  biologySub,
  physicsSub,
  businessSub,
  englishSub,
  psychologySub,
  computerSub,
  historySub,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  fbIcon,
  instaIcon,
  linkedIn,
  sub1,
  sub2,
  sub3,
  sub4,
  sub8,
  sub7,
  sub9,
  sub10,
  sub11,
  sub12,
  britishImg,
  americanImg,
  ibImg,
  frenchCurr,
  indianCurr,
  price1,
  price2,
  price3,
} from "../assets/img/images";

const navigationData = {
  Main: [
    { title: "Home", to: "/" },
    { title: "About Us", to: "/about-us" },
    { title: "Subjects", to: "/courses" },
    { title: "Testimonials", to: "/testimonials" },
    { title: "Pricing", to: "/pricing" },
    { title: "Join As a Tutor", to: "/join-as-a-tutor" },
    // { title: "Taking a Demo", to: "/free-demo" },
    { title: "Contact Us", to: "/contact-us" },
    { title: "FAQs", to: "/faqs" },
  ],
  "What We Teach": [
    { title: "Key Stage 1", to: "/keystage1" },
    { title: "Key Stage 2", to: "/keystage2" },
    { title: "Key Stage 3", to: "/keystage3" },
    { title: "GCSE", to: "/gcse" },
    { title: "A-levels", to: "/a-level" },
    { title: "Homeschooling Support", to: "/homeschooling" },
  ],
  Subjects: [
    { title: "Maths", to: "/maths" },
    { title: "Physics", to: "/physics" },
    { title: "Chemistry", to: "/chemistry" },
    { title: "Biology", to: "/biology" },
    { title: "Business", to: "/business" },
    { title: "Computer Science", to: "/computer" },
    { title: "English", to: "/english" },
    { title: "French", to: "/french" },
    { title: "Psychology", to: "/psychology" },
    { title: "History", to: "/history" },
  ],
};

const reasons = [
  {
    wholeTitle: "Bespoke Tutor Matching",
    firstTitle: "Bespoke",
    secondTitle: "Tutor Matching",
    description:
      "Unlike other, we don't just list tutors. We handpick the best teachers for your child. It's like having a personal academic concierge!",
    icon: tutorMatching,
  },
  {
    wholeTitle: "Triumphant Tales",
    firstTitle: "Triumphant",
    secondTitle: "Tales",
    description:
      "Don't just take our word for it. Hear from our customers from around the world",
    icon: triumphantTales,
  },
  {
    wholeTitle: "Affordable Excellence",
    firstTitle: "Affordable",
    secondTitle: "Excellence",
    description:
      "Top-tier education shouldn't come with a top-tier price tag. With us, you get the best, for less",
    icon: affordableExcellence,
  },
  {
    wholeTitle: "Qualified Teachers Only",
    firstTitle: "Qualified",
    secondTitle: "Teachers Only",
    description:
      "While others might hire students, we're a bit more selective. Only qualified teachers make it onto our highway",
    icon: qualifiedTeachers,
  },
  {
    wholeTitle: "Custom Built LMS",
    firstTitle: "Custom",
    secondTitle: "Built LMS",
    description:
      "Our LMS provide seamless learning experience with integrated video, white-board, file sharing, home-work tracking and more",
    icon: customBuiltLMS,
  },
];

const numbers = [
  {
    title: "Parent",
    spanTitle: "Satisfaction",
    count: 95,
    suffix: "%",
  },
  {
    title: "A+ & A",
    spanTitle: "Grades",
    count: 75,
    suffix: "%",
  },
  {
    title: "Faculty",
    spanTitle: "Pool",
    count: 500,
    suffix: "+",
  },
  {
    title: "Countries",
    spanTitle: "Covered",
    count: 15,
    suffix: "+",
  },
];

const subjectsOffering = [
  {
    title: "Maths",
    tagLine:
      "Paving The Way with smart online tutoring solutions for GCSE & A-Levels",
    mainImg: math,
    heroImg: mathsSub,
    img: sub1,
    bg: "bg-[#515151]",
    description:
      "Build strong analytical and problem-solving skills with a focus on foundational and advanced mathematical concepts, setting the stage for academic success.",
    slug: "maths",
    to: "/maths",
    generalData: [
      "Focuses On Developing numerical, analytical, and problem-solving skills",
      "Covers Foundational To Advanced Topics Like arithmetic, algebra, geometry, and calculus",
      "Essential for fields such as science, engineering, finance, and technology",
      "Builds logical reasoning and critical thinking capabilities",
      "Prepares students for further studies and practical applications in various careers",
    ],
    generalLearningOutcome: [
      "Gain a strong foundation in mathematical concepts and operations",
      "Develop logical reasoning and problem-solving skills",
      "Apply mathematics to real-world situations and other disciplines",
      "Improve confidence in handling numerical data and complex calculations",
      "Prepare for advanced studies in math-intensive fields",
      "Build analytical skills for making informed, data-driven decisions",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to numbers, counting, and basic arithmetic operations",
          "Learning to recognize shapes, patterns, and sequences",
          "Understanding measurements and simple data representation",
          "Encouraging problem-solving through everyday examples",
          "Building a strong foundation for further mathematical studies",
        ],
        learningOutcomes: [
          "Master counting, addition, and subtraction with numbers up to 20",
          "Recognize and describe common 2D and 3D shapes",
          "Understand basic measurement concepts (length, weight, time)",
          "Identify patterns and complete simple sequences",
          "Apply math to everyday situations, such as sorting objects by size",
          "Develop confidence in early mathematical thinking and reasoning",
        ],
      },
      "key-stage-2": {
        description: [
          "Building on arithmetic with multiplication, division, and fractions",
          "Introduction to basic algebra and geometry concepts",
          "Exploring data collection, representation, and interpretation",
          "Developing skills in logical reasoning and problem-solving",
          "Laying the groundwork for more advanced mathematical studies",
        ],
        learningOutcomes: [
          "Master multiplication, division, and working with fractions",
          "Develop understanding of basic algebraic expressions",
          "Explore properties of shapes, symmetry, and simple transformations",
          "Interpret data from graphs and charts",
          "Apply problem-solving strategies to multi-step math problems",
          "Prepare for the transition to Key Stage 3 mathematics",
        ],
      },
      "key-stage-3": {
        description: [
          "Expanding on algebraic, geometric, and statistical concepts",
          "Developing proficiency in handling ratios, percentages, and proportions",
          "Introduction to equations, inequalities, and geometric constructions",
          "Preparation for GCSE mathematics with foundational skills",
          "Applying mathematical concepts to real-life scenarios",
        ],
        learningOutcomes: [
          "Master algebraic manipulation and solve linear equations",
          "Understand geometric properties and relationships",
          "Apply ratios, percentages, and proportional reasoning",
          "Interpret and analyze data sets in various representations",
          "Solve complex word problems with mathematical reasoning",
          "Build a foundation for success in GCSE mathematics",
        ],
      },
      gcse: {
        description: [
          "Comprehensive secondary education qualification in mathematics",
          "Covers core topics in algebra, geometry, trigonometry, and statistics",
          "Develops analytical and problem-solving skills in mathematics",
          "Prepares students for A-levels or vocational qualifications",
          "Recognized by universities and employers in various fields",
        ],
        learningOutcomes: [
          "Master core mathematical concepts across algebra and geometry",
          "Develop skills in trigonometric functions and their applications",
          "Analyze and interpret statistical data effectively",
          "Solve real-world problems using advanced mathematical techniques",
          "Prepare for advanced studies in mathematics or related subjects",
          "Achieve proficiency for employment or further education",
        ],
      },
      "a-levels": {
        description: [
          "Advanced level qualification focusing on pure and applied mathematics",
          "In-depth study of calculus, algebra, mechanics, and statistics",
          "Essential for university courses in mathematics, engineering, and physics",
          "Develops high-level problem-solving and analytical skills",
          "Provides a strong foundation for STEM careers",
        ],
        learningOutcomes: [
          "Master advanced algebraic techniques and calculus",
          "Understand and apply statistical methods and probability",
          "Develop skills in mechanics for mathematical modeling",
          "Solve complex mathematical problems with logical reasoning",
          "Prepare for university-level mathematics and related fields",
          "Develop critical thinking skills essential for scientific inquiry",
        ],
      },
      ib: {
        description: [
          "Rigorous international program in mathematics with SL and HL options",
          "Emphasis on analytical skills, modeling, and mathematical inquiry",
          "Covers calculus, probability, algebra, and functions",
          "Develops skills for academic research and problem-solving",
          "Prepares students for university-level studies in STEM fields",
        ],
        learningOutcomes: [
          "Master advanced mathematical concepts and techniques",
          "Apply mathematical models to solve real-world problems",
          "Develop skills in statistical analysis and probability",
          "Engage in research through a mathematical exploration project",
          "Prepare for university-level STEM courses",
          "Gain an international perspective on mathematical applications",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible curriculum designed to suit individual learning paces",
          "Focus on core mathematical concepts with customizable content",
          "Encourages practical, hands-on learning experiences",
          "Promotes independent and self-guided study skills",
          "Prepares students for standardized exams or personal goals",
        ],
        learningOutcomes: [
          "Master foundational to advanced mathematical topics as per chosen curriculum",
          "Develop problem-solving skills through tailored activities",
          "Apply math concepts to real-life situations in a personalized way",
          "Build confidence in independent learning and study habits",
          "Achieve readiness for standardized exams or specific goals",
          "Cultivate an interest and understanding of mathematics at one’s own pace",
        ],
      },
    },
  },
  {
    title: "Physics",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    mainImg: physics,
    heroImg: physicsSub,
    img: sub2,
    bg: "bg-[#F46322]",
    description:
      "Explore the principles of energy, matter, and the universe, gaining insights into the natural laws that govern our world and inspire scientific discovery.",
    slug: "physics",
    to: "/physics",
    generalData: [
      "Study of the natural world, covering matter, energy, forces, and motion",
      "Foundation for understanding physical phenomena and scientific principles",
      "Essential for fields like engineering, technology, environmental science, and medicine",
      "Develops analytical and experimental skills for observing and interpreting data",
      "Prepares students for advanced studies and applications in various STEM fields",
    ],
    generalLearningOutcome: [
      "Gain a foundational understanding of physical principles and laws",
      "Develop skills in scientific inquiry and experimental techniques",
      "Apply physics concepts to real-world scenarios and problem-solving",
      "Improve analytical thinking and quantitative reasoning",
      "Prepare for advanced studies in physics, engineering, and other sciences",
      "Build a lifelong curiosity and appreciation for the physical world",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to basic physics concepts, like motion and light",
          "Exploration of everyday materials and their properties",
          "Simple observations of forces, energy, and sound",
          "Hands-on experiments to develop curiosity about the world",
          "Foundation for future studies in physical science",
        ],
        learningOutcomes: [
          "Understand simple concepts of light and sound",
          "Explore basic forces like push and pull",
          "Identify materials and their observable properties",
          "Recognize changes in motion and basic energy forms",
          "Develop curiosity and observation skills through experiments",
          "Build foundational knowledge for further physics studies",
        ],
      },
      "key-stage-2": {
        description: [
          "Introduction to forces, energy, and simple machines",
          "Basic study of electricity, magnetism, and circuits",
          "Exploration of Earth and space concepts",
          "Hands-on activities to understand physical phenomena",
          "Building blocks for higher-level physics concepts",
        ],
        learningOutcomes: [
          "Understand types of forces and simple machines",
          "Explore basic principles of electricity and magnetism",
          "Identify energy types and their transformations",
          "Learn basic astronomy and Earth’s position in space",
          "Develop observation and experimental skills",
          "Prepare for more complex physics concepts in later stages",
        ],
      },
      "key-stage-3": {
        description: [
          "Introduction to foundational physics concepts, like forces, waves, and heat",
          "Development of experimental skills and scientific thinking",
          "Introduction to simple equations and quantitative analysis",
          "Preparation for GCSE Physics with core principles",
          "Exploring practical applications of physics in everyday life",
        ],
        learningOutcomes: [
          "Master foundational concepts in mechanics, waves, and thermodynamics",
          "Understand and apply basic physics equations",
          "Develop skills in scientific experimentation and measurement",
          "Interpret data and identify relationships between variables",
          "Recognize physics applications in the real world",
          "Prepare for the transition to GCSE Physics",
        ],
      },
      gcse: {
        description: [
          "Comprehensive study of physics, covering mechanics, waves, energy, and atomic physics",
          "Focus on scientific principles, theories, and problem-solving",
          "Preparation for A-level Physics and other advanced studies",
          "Foundation for STEM careers requiring analytical skills",
          "Hands-on lab experiments to reinforce theoretical understanding",
        ],
        learningOutcomes: [
          "Understand key concepts in forces, energy, and waves",
          "Apply physics equations to solve real-world problems",
          "Develop practical lab skills and data analysis techniques",
          "Analyze atomic and nuclear phenomena",
          "Prepare for A-levels or technical and vocational pathways",
          "Build critical thinking skills essential for scientific inquiry",
        ],
      },
      "a-levels": {
        description: [
          "Advanced study of physics with an emphasis on mechanics, electromagnetism, and quantum physics",
          "In-depth exploration of complex topics, including electricity and thermodynamics",
          "Preparation for university courses in physics, engineering, and related fields",
          "Focus on analytical skills, mathematical modeling, and problem-solving",
          "Develops high-level skills for scientific research and innovation",
        ],
        learningOutcomes: [
          "Master advanced physics topics in mechanics and electromagnetism",
          "Apply calculus and mathematical modeling to physical problems",
          "Understand principles of quantum mechanics and thermodynamics",
          "Develop experimental and analytical skills in physics research",
          "Prepare for university-level physics and related disciplines",
          "Build proficiency for careers in engineering, physics, and technology",
        ],
      },
      ib: {
        description: [
          "Rigorous international physics program with SL and HL options",
          "Emphasizes scientific inquiry, mathematical modeling, and experimental skills",
          "Covers a broad range of physics topics including mechanics, electricity, and nuclear physics",
          "Develops critical thinking and independent research skills",
          "Prepares students for university studies and global STEM careers",
        ],
        learningOutcomes: [
          "Master core physics concepts and advanced analytical techniques",
          "Develop proficiency in experimental design and data analysis",
          "Apply physics principles to real-world problems and research projects",
          "Engage in independent research through the Internal Assessment project",
          "Prepare for university studies in physics and related fields",
          "Build a global perspective on physics applications and technologies",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible curriculum tailored to individual learning needs and pace",
          "Focus on foundational to advanced physics topics with a practical approach",
          "Encourages hands-on learning and real-world applications",
          "Covers key physics areas like mechanics, waves, and energy",
          "Prepares students for standardized exams or personal goals in physics",
        ],
        learningOutcomes: [
          "Master key physics concepts at a self-guided pace",
          "Develop experimental and observational skills through practical activities",
          "Apply physics concepts to real-world situations",
          "Prepare for standardized exams in physics or personal learning goals",
          "Build confidence in scientific inquiry and analysis",
          "Foster a passion and curiosity for understanding the physical world",
        ],
      },
    },
  },
  {
    title: "Chemistry",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    mainImg: chemistry,
    heroImg: chemistrySub,
    img: sub3,
    bg: "bg-[#515151]",
    description:
      "Dive into the study of substances, their properties, and reactions, uncovering the building blocks of life in this engaging and interactive chemistry course.",
    slug: "chemistry",
    to: "/chemistry",
    generalData: [
      "Study of matter, chemical reactions, and the properties of substances",
      "Essential for understanding biological, environmental, and material sciences",
      "Foundation for fields like medicine, engineering, environmental science, and pharmacology",
      "Develops laboratory and analytical skills for interpreting chemical data",
      "Prepares students for advanced studies in STEM fields and applications in various industries",
    ],
    generalLearningOutcome: [
      "Gain a foundational understanding of chemical principles and reactions",
      "Develop skills in laboratory techniques and data analysis",
      "Apply chemistry concepts to real-world scenarios and problem-solving",
      "Improve critical thinking and quantitative reasoning",
      "Prepare for advanced studies in chemistry, biochemistry, and related fields",
      "Build a lifelong curiosity and appreciation for the chemical sciences",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to simple concepts of materials and their properties",
          "Observations of common materials like metals, wood, and plastic",
          "Simple experiments to understand basic changes like melting and dissolving",
          "Foundation for curiosity and awareness of chemical changes",
          "Preparation for future exploration of chemical science",
        ],
        learningOutcomes: [
          "Recognize common materials and their basic properties",
          "Understand simple changes, such as melting and dissolving",
          "Observe and describe materials in everyday environments",
          "Develop basic observational skills in a scientific context",
          "Build foundational knowledge for further chemistry studies",
        ],
      },
      "key-stage-2": {
        description: [
          "Introduction to states of matter, simple reactions, and mixtures",
          "Basic understanding of reversible and irreversible changes",
          "Exploration of elements and compounds in everyday materials",
          "Hands-on activities to foster interest in chemical changes",
          "Building blocks for understanding more complex chemical concepts",
        ],
        learningOutcomes: [
          "Understand solids, liquids, and gases and their behaviors",
          "Differentiate between reversible and irreversible changes",
          "Identify elements and compounds in everyday substances",
          "Develop basic skills in observing and describing chemical reactions",
          "Prepare for more complex chemistry topics in later stages",
        ],
      },
      "key-stage-3": {
        description: [
          "Introduction to atomic structure, elements, compounds, and reactions",
          "Understanding of the periodic table and chemical bonding",
          "Development of experimental skills and scientific thinking",
          "Preparation for GCSE Chemistry with core principles",
          "Exploration of practical applications of chemistry in daily life",
        ],
        learningOutcomes: [
          "Master foundational concepts of atomic structure and bonding",
          "Understand chemical reactions and the periodic table",
          "Develop skills in scientific experimentation and observation",
          "Interpret data and understand the impact of chemical processes",
          "Recognize chemistry’s role in everyday life and industries",
          "Prepare for the transition to GCSE Chemistry",
        ],
      },
      gcse: {
        description: [
          "Comprehensive study of chemistry, covering atomic structure, bonding, and organic chemistry",
          "Focus on chemical reactions, energy changes, and quantitative chemistry",
          "Preparation for A-level Chemistry and other advanced studies",
          "Foundation for STEM careers requiring analytical skills",
          "Hands-on lab experiments to reinforce theoretical understanding",
        ],
        learningOutcomes: [
          "Understand key concepts in bonding, reactions, and organic chemistry",
          "Apply quantitative methods to solve chemical problems",
          "Develop practical lab skills and data analysis techniques",
          "Analyze energy changes in chemical reactions",
          "Prepare for A-levels or technical and vocational pathways",
          "Build critical thinking skills essential for scientific inquiry",
        ],
      },
      "a-levels": {
        description: [
          "Advanced study of chemistry with an emphasis on organic, inorganic, and physical chemistry",
          "In-depth exploration of reaction kinetics, equilibrium, and thermodynamics",
          "Preparation for university courses in chemistry, medicine, and related fields",
          "Focus on analytical skills, laboratory techniques, and scientific research",
          "Develops high-level skills for scientific innovation and experimentation",
        ],
        learningOutcomes: [
          "Master advanced chemistry topics in organic and physical chemistry",
          "Apply quantitative and theoretical models to chemical problems",
          "Understand reaction mechanisms and kinetics",
          "Develop experimental skills for university-level research",
          "Prepare for careers in chemistry, medicine, and pharmaceuticals",
          "Build proficiency for scientific research and laboratory work",
        ],
      },
      ib: {
        description: [
          "Rigorous international chemistry program with SL and HL options",
          "Emphasizes scientific inquiry, laboratory skills, and data analysis",
          "Covers a broad range of chemistry topics including thermodynamics, organic chemistry, and biochemistry",
          "Develops critical thinking and independent research skills",
          "Prepares students for university studies and global STEM careers",
        ],
        learningOutcomes: [
          "Master core chemistry concepts and advanced analytical techniques",
          "Develop proficiency in laboratory techniques and data analysis",
          "Apply chemical principles to real-world problems and research projects",
          "Engage in independent research through the Internal Assessment project",
          "Prepare for university studies in chemistry and related fields",
          "Build a global perspective on chemical applications and innovations",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible curriculum tailored to individual learning needs and pace",
          "Focus on foundational to advanced chemistry topics with a practical approach",
          "Encourages hands-on learning and real-world applications",
          "Covers key chemistry areas like atomic structure, reactions, and bonding",
          "Prepares students for standardized exams or personal goals in chemistry",
        ],
        learningOutcomes: [
          "Master key chemistry concepts at a self-guided pace",
          "Develop experimental and observational skills through practical activities",
          "Apply chemistry concepts to real-world situations",
          "Prepare for standardized exams in chemistry or personal learning goals",
          "Build confidence in scientific inquiry and analysis",
          "Foster a passion and curiosity for understanding chemical processes",
        ],
      },
    },
  },
  {
    title: "English",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    heroImg: englishSub,
    mainImg: english,
    img: sub8,
    bg: "bg-[#F46322]",
    description:
      "Develop language skills, critical analysis, and a love for literature through comprehensive studies that strengthen communication and interpretation.",
    slug: "english",
    to: "/english",
    generalData: [
      "Study of language, literature, and communication skills",
      "Explores grammar, vocabulary, reading comprehension, and writing styles",
      "Foundational for effective communication in personal and professional settings",
      "Develops analytical, creative, and critical thinking abilities",
      "Preparation for further studies in humanities, journalism, and social sciences",
    ],
    generalLearningOutcome: [
      "Master core language skills for effective communication",
      "Develop strong reading comprehension and writing abilities",
      "Analyze literary works and understand diverse perspectives",
      "Improve critical thinking and interpretive skills",
      "Gain confidence in expressing ideas clearly and creatively",
      "Prepare for advanced studies in literature, language, and communication",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to basic language and literacy skills",
          "Focus on phonics, simple vocabulary, and sentence structure",
          "Development of reading comprehension through short stories",
          "Building confidence in speaking and listening activities",
          "Laying a strong foundation for future literacy skills",
        ],
        learningOutcomes: [
          "Recognize letters and basic sounds (phonics)",
          "Form simple sentences and understand basic grammar",
          "Develop early reading skills and comprehension",
          "Engage in conversations and express simple ideas",
          "Build a love for reading and storytelling",
        ],
      },
      "key-stage-2": {
        description: [
          "Expansion of reading, writing, and language skills",
          "Introduction to grammar, punctuation, and sentence structure",
          "Exploration of longer texts and basic literary analysis",
          "Development of creative writing and storytelling skills",
          "Preparation for more complex reading and writing tasks",
        ],
        learningOutcomes: [
          "Understand sentence structure and basic punctuation",
          "Read and analyze short texts with comprehension",
          "Write short essays and creative pieces",
          "Develop vocabulary and descriptive language skills",
          "Build confidence in presenting ideas and stories",
        ],
      },
      "key-stage-3": {
        description: [
          "Introduction to literary analysis and diverse genres",
          "Focus on advanced grammar, vocabulary, and essay writing",
          "Analysis of themes, characters, and plot in literary texts",
          "Development of persuasive and argumentative writing",
          "Preparation for GCSE English with foundational skills",
        ],
        learningOutcomes: [
          "Analyze themes and characters in various texts",
          "Master complex sentence structures and grammar",
          "Develop skills in persuasive and descriptive writing",
          "Interpret texts with a critical understanding",
          "Prepare for transition to GCSE English studies",
        ],
      },
      gcse: {
        description: [
          "Comprehensive study of literature, language, and composition",
          "Focus on analytical reading and critical interpretation",
          "Exploration of poetry, prose, and drama across genres",
          "Preparation for advanced studies in English and related fields",
          "Development of structured essay writing and argumentation skills",
        ],
        learningOutcomes: [
          "Analyze complex texts and interpret literary techniques",
          "Develop structured essays and argumentative writing",
          "Understand and appreciate various genres of literature",
          "Apply critical thinking to analyze themes and contexts",
          "Prepare for A-level English or humanities pathways",
        ],
      },
      "a-levels": {
        description: [
          "Advanced study of English language, literature, and critical theory",
          "In-depth analysis of literary movements, themes, and genres",
          "Focus on comparative literature and extended essays",
          "Preparation for university-level English and related fields",
          "Develops high-level analytical, interpretive, and communication skills",
        ],
        learningOutcomes: [
          "Master complex analysis of literary texts and theories",
          "Develop sophisticated written and oral communication skills",
          "Interpret texts with a historical and cultural perspective",
          "Prepare for university studies in English, humanities, or social sciences",
          "Enhance skills for careers in writing, journalism, and education",
        ],
      },
      ib: {
        description: [
          "Rigorous international English program with options in SL and HL",
          "Emphasis on cultural perspectives and comparative analysis",
          "Exploration of texts from various cultures and historical contexts",
          "Development of independent research and analytical skills",
          "Preparation for global studies in literature, media, and communication",
        ],
        learningOutcomes: [
          "Analyze and compare texts across cultural perspectives",
          "Develop strong research and presentation skills",
          "Engage in independent literary inquiry and analysis",
          "Prepare for university-level studies in global literature",
          "Build a global understanding of language and culture",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible curriculum tailored to individual learning goals",
          "Focus on foundational to advanced language and literature skills",
          "Encourages a love for reading, creative writing, and comprehension",
          "Covers grammar, vocabulary, and literary analysis at various levels",
          "Prepares students for standardized exams or personal growth",
        ],
        learningOutcomes: [
          "Master reading comprehension and analytical skills at a personalized pace",
          "Develop creative and expository writing abilities",
          "Understand and apply grammar and vocabulary in writing",
          "Prepare for standardized exams or personalized learning goals",
          "Foster a lifelong love of reading and expression",
        ],
      },
    },
  },
  {
    title: "Biology",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    mainImg: biology,
    heroImg: biologySub,
    img: sub4,
    bg: "bg-[#515151]",
    description:
      "Understand the wonders of life, from microscopic cells to complex ecosystems, through in-depth learning about living organisms and their environments.",
    slug: "biology",
    to: "/biology",
    generalData: [
      "Study of life, organisms, and their environments",
      "Covers cell biology, genetics, ecology, evolution, and physiology",
      "Foundational for understanding human health, environment, and biodiversity",
      "Develops critical thinking and analytical skills for scientific investigation",
      "Preparation for careers in healthcare, environmental science, and research",
    ],
    generalLearningOutcome: [
      "Understand fundamental biological principles and concepts",
      "Develop practical skills in scientific observation and experimentation",
      "Analyze and interpret biological data",
      "Apply biological knowledge to real-world environmental and health issues",
      "Prepare for advanced studies in biological sciences and related fields",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to basic biological concepts and living things",
          "Focus on understanding plants, animals, and their environments",
          "Learning about the human body and basic needs for life",
          "Observation and exploration of nature and living organisms",
          "Building curiosity and foundational knowledge in life sciences",
        ],
        learningOutcomes: [
          "Identify common plants and animals in various habitats",
          "Understand basic body parts and their functions",
          "Recognize the needs of living organisms (food, water, shelter)",
          "Describe simple life cycles of plants and animals",
          "Engage in observation and description of the natural world",
        ],
      },
      "key-stage-2": {
        description: [
          "Expansion on topics of plant and animal biology",
          "Introduction to human body systems and their functions",
          "Exploration of ecosystems, food chains, and life cycles",
          "Development of basic scientific inquiry and observation skills",
          "Preparation for more complex biological studies in Key Stage 3",
        ],
        learningOutcomes: [
          "Understand the structure and function of basic body systems",
          "Identify and describe plant and animal life cycles",
          "Explore ecosystems and food chains",
          "Engage in simple experiments and observations",
          "Build foundational knowledge for further biological study",
        ],
      },
      "key-stage-3": {
        description: [
          "Introduction to cell biology, genetics, and human physiology",
          "Deeper exploration of ecosystems and environmental impact",
          "Study of plant and animal adaptations and diversity",
          "Preparation for GCSE Biology with foundational scientific skills",
          "Development of experimental skills and critical thinking",
        ],
        learningOutcomes: [
          "Understand cell structure and basic genetic principles",
          "Analyze relationships in ecosystems and biodiversity",
          "Study human anatomy and functions of organ systems",
          "Conduct simple experiments and analyze data",
          "Prepare for transition to GCSE-level biological studies",
        ],
      },
      gcse: {
        description: [
          "Comprehensive study of cellular biology, genetics, and ecology",
          "Introduction to human biology, physiology, and health",
          "Exploration of evolution, environmental science, and ecosystems",
          "Preparation for advanced biological studies and careers in science",
          "Development of analytical skills through data interpretation and lab work",
        ],
        learningOutcomes: [
          "Master core biological concepts and lab techniques",
          "Analyze genetic principles and inheritance patterns",
          "Understand ecological relationships and human environmental impact",
          "Develop scientific reasoning and problem-solving skills",
          "Prepare for A-level Biology or related scientific fields",
        ],
      },
      "a-levels": {
        description: [
          "In-depth study of advanced biology topics including biochemistry, genetics, and evolution",
          "Detailed focus on molecular biology, physiology, and ecology",
          "Preparation for university studies in biology, medicine, or life sciences",
          "Development of high-level analytical, research, and practical skills",
          "Foundational knowledge for careers in healthcare, research, and biotechnology",
        ],
        learningOutcomes: [
          "Master advanced topics in genetics, molecular biology, and biochemistry",
          "Analyze complex biological processes and their applications",
          "Conduct in-depth lab experiments and research projects",
          "Apply critical thinking to real-world biological issues",
          "Prepare for university-level biology and related fields",
        ],
      },
      ib: {
        description: [
          "Rigorous international biology program with SL and HL options",
          "Emphasis on cellular biology, ecology, genetics, and physiology",
          "Focus on scientific inquiry, research, and experimental design",
          "Preparation for global studies in biology, health sciences, and environmental science",
          "Development of critical thinking and independent learning skills",
        ],
        learningOutcomes: [
          "Analyze biological processes with a global perspective",
          "Develop strong research and experimental skills",
          "Interpret and present scientific data effectively",
          "Prepare for university-level studies in biology and health sciences",
          "Build an understanding of biological concepts with international applications",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible biology curriculum tailored to individual learning goals",
          "Covers foundational to advanced biology topics",
          "Focus on practical experimentation, observation, and data analysis",
          "Emphasis on the application of biology to everyday life and the environment",
          "Preparation for standardized exams or personal growth",
        ],
        learningOutcomes: [
          "Develop core knowledge in cellular biology, genetics, and ecology",
          "Conduct experiments and record observations independently",
          "Apply biological knowledge to environmental and health issues",
          "Prepare for standardized exams or personal learning goals",
          "Foster a lifelong interest in biological sciences and the natural world",
        ],
      },
    },
  },
  {
    title: "Business ",
    tagLine:
      "Paving the way with smart online tutoring solutions for IGCSE & A-Levels",
    mainImg: business,
    heroImg: businessSub,
    img: sub7,
    bg: "bg-[#F46322]",
    description:
      "Learn the essentials of business operations, management, and strategy, equipping you with tools to navigate and succeed in the modern business landscape.",
    slug: "business",
    to: "/business",
    generalData: [
      "Foundation for understanding business operations, management, and decision-making processes.",
      "Explores areas including entrepreneurship, finance, marketing, and organizational behavior.",
      "Essential for students interested in pursuing careers in business, management, or entrepreneurship.",
      "Develops critical thinking, problem-solving, and communication skills.",
      "Provides a strong base for further studies in business, economics, and related fields.",
    ],
    generalLearningOutcome: [
      "Understand fundamental business concepts and principles.",
      "Develop practical skills in management, finance, and marketing.",
      "Apply business theories to real-world scenarios and case studies.",
      "Analyze the impact of business decisions on society and the economy.",
      "Enhance critical thinking and decision-making abilities.",
      "Prepare for advanced studies or careers in business and related areas.",
    ],
    content: {
      gcse: {
        description: [
          "Introduction to key business concepts and terminology.",
          "Exploration of different business structures and organizational setups.",
          "Understanding the fundamentals of marketing, finance, and human resources.",
          "Focus on the economic environment and its impact on business.",
          "Development of analytical skills through real-life case studies.",
          "Preparation for further study in business and related subjects.",
        ],
        learningOutcomes: [
          "Understand core business functions and processes.",
          "Analyze the role of stakeholders in a business environment.",
          "Apply basic financial concepts such as revenue, cost, and profit.",
          "Evaluate marketing strategies and product life cycles.",
          "Develop skills in managing people and understanding organizational behavior.",
          "Prepare for business-related assessments and higher education courses.",
        ],
      },
      "a-levels": {
        description: [
          "In-depth exploration of business theories, models, and strategies.",
          "Analysis of business functions, including operations, finance, and marketing.",
          "Study of business decision-making processes and strategic planning.",
          "Understanding the global business environment and its challenges.",
          "Preparation for university-level courses and professional careers in business.",
          "Focus on developing analytical and evaluative skills through case studies.",
        ],
        learningOutcomes: [
          "Master business analysis and strategic decision-making.",
          "Understand financial management, including budgeting and financial statements.",
          "Develop advanced marketing strategies and market analysis skills.",
          "Evaluate the impact of global economic trends on business operations.",
          "Apply theoretical knowledge to practical business situations.",
          "Prepare for careers in business, management, and entrepreneurship.",
        ],
      },
      ib: {
        description: [
          "Comprehensive study of business management at Standard and Higher Levels.",
          "Focus on decision-making, organizational planning, and ethical considerations.",
          "Exploration of business strategy, finance, and human resource management.",
          "In-depth study of international business issues and market dynamics.",
          "Includes a research project to develop practical and analytical skills.",
          "Preparation for university-level business programs and careers in global business.",
        ],
        learningOutcomes: [
          "Analyze complex business scenarios and propose solutions.",
          "Develop a deep understanding of finance, marketing, and HR functions.",
          "Apply ethical considerations to business decision-making.",
          "Evaluate the impact of globalization on business operations and strategies.",
          "Conduct independent research and analyze business data.",
          "Prepare for advanced studies in international business and management.",
        ],
      },
      "home-schooling": {
        description: [
          "Customized homeschooling program focused on foundational and advanced business concepts.",
          "Covers key areas such as entrepreneurship, finance, marketing, and economics.",
          "Emphasis on real-world applications through business projects and case studies.",
          "Flexible learning schedule tailored to the student's pace and interests.",
          "Prepares students for college-level business courses and entrepreneurial ventures.",
          "Supports development of critical thinking, decision-making, and financial literacy.",
        ],
        learningOutcomes: [
          "Gain a strong foundation in essential business disciplines.",
          "Develop entrepreneurial skills and small business management knowledge.",
          "Understand financial literacy concepts, including budgeting and investing.",
          "Analyze market dynamics, consumer behavior, and marketing strategies.",
          "Explore the impact of business on society and the global economy.",
          "Prepare for advanced study or careers in business-related fields.",
        ],
      },
    },
  },
  {
    title: "Computer",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    mainImg: computer,
    heroImg: computerSub,
    img: sub9,
    bg: "bg-[#515151]",
    description:
      "Discover the foundations of computing, programming, and data analysis, preparing for a thriving career in today’s technology-driven world.",
    slug: "computer",
    to: "/computer",
    generalData: [
      "Exploration of computational thinking, programming, and problem-solving",
      "Covers fundamental principles of algorithms, data structures, and system design",
      "Prepares students for technology-driven careers in a rapidly evolving field",
      "Develops logical reasoning, analytical skills, and creativity in digital environments",
      "Provides a foundation for further studies in computer science, software development, and engineering",
    ],
    generalLearningOutcome: [
      "Understand core principles of computer science and programming",
      "Develop problem-solving skills through computational thinking",
      "Apply coding skills to build and troubleshoot software solutions",
      "Analyze, design, and optimize algorithms for various tasks",
      "Prepare for advanced studies and technology-oriented careers",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to basic concepts of computing and digital literacy",
          "Focus on understanding algorithms and sequences",
          "Learning simple coding through block-based programming",
          "Understanding safety and responsibility in digital environments",
          "Building curiosity and foundational skills in computing",
        ],
        learningOutcomes: [
          "Recognize and follow basic algorithms and sequences",
          "Develop logical thinking and sequencing skills through play",
          "Create basic programs using visual coding tools",
          "Understand digital safety and responsible online behavior",
          "Gain confidence in using computers and digital tools",
        ],
      },
      "key-stage-2": {
        description: [
          "Building on foundational programming and computational skills",
          "Introduction to algorithms, variables, and basic problem-solving",
          "Learning coding through block-based and simple text programming",
          "Understanding the role of computers in everyday tasks and problem-solving",
          "Developing early critical thinking and logical reasoning skills",
        ],
        learningOutcomes: [
          "Use algorithms to solve simple problems",
          "Create basic programs with loops, conditionals, and variables",
          "Understand how computers work and their role in society",
          "Develop safe and responsible online practices",
          "Prepare for transition to more complex computational thinking",
        ],
      },
      "key-stage-3": {
        description: [
          "Introduction to more complex algorithms, data representation, and programming concepts",
          "Focus on developing problem-solving and logical reasoning skills",
          "Exploration of hardware, software, and networks",
          "Preparation for GCSE Computer Science with foundational skills in Python or similar languages",
          "Building analytical thinking and understanding of digital systems",
        ],
        learningOutcomes: [
          "Create algorithms for simple and complex tasks",
          "Develop programming skills in languages like Python",
          "Understand basic computer architecture and data representation",
          "Analyze and troubleshoot code for efficiency and accuracy",
          "Prepare for GCSE-level studies in computer science",
        ],
      },
      gcse: {
        description: [
          "Comprehensive study of computer science including algorithms, programming, and data representation",
          "Introduction to data structures, binary, and computer systems",
          "Preparation for advanced studies in programming and software development",
          "Development of strong problem-solving skills and logical thinking",
          "Exposure to real-world applications and career pathways in tech",
        ],
        learningOutcomes: [
          "Master core programming concepts and data structures",
          "Analyze and optimize algorithms for problem-solving",
          "Understand binary systems, computer architecture, and networking",
          "Develop proficiency in programming languages like Python or Java",
          "Prepare for A-levels in Computer Science or technology-related fields",
        ],
      },
      "a-levels": {
        description: [
          "In-depth study of advanced computer science topics including algorithms, data structures, and software development",
          "Detailed focus on computational thinking, system design, and project management",
          "Preparation for university studies in computer science, engineering, and technology",
          "Development of analytical and technical skills for solving complex problems",
          "Foundation for careers in software engineering, data science, and AI",
        ],
        learningOutcomes: [
          "Master advanced programming and algorithmic skills",
          "Develop complex software solutions and manage projects",
          "Apply data structures and system design principles effectively",
          "Analyze computational problems and optimize solutions",
          "Prepare for university-level studies in computer science",
        ],
      },
      ib: {
        description: [
          "Rigorous international computer science curriculum with SL and HL options",
          "Emphasis on system fundamentals, computational thinking, and programming",
          "Focus on practical applications, project work, and ethical considerations",
          "Preparation for global careers and studies in computer science and technology",
          "Development of high-level analytical, coding, and problem-solving skills",
        ],
        learningOutcomes: [
          "Analyze and solve computational problems with a global perspective",
          "Develop strong programming and system analysis skills",
          "Understand ethical and social implications of technology",
          "Prepare for university-level computer science courses",
          "Build a foundation in research and independent project management",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible computer science curriculum tailored to individual learning goals",
          "Covers topics from basic programming to system design and cybersecurity",
          "Focus on practical skills in coding, algorithms, and computational thinking",
          "Prepares students for standardized exams or personal projects",
          "Emphasis on fostering creativity, independence, and technical skills",
        ],
        learningOutcomes: [
          "Develop strong foundational knowledge in programming",
          "Understand data structures, algorithms, and system fundamentals",
          "Gain proficiency in one or more programming languages",
          "Apply computational thinking to everyday and real-world problems",
          "Prepare for standardized exams or personal career goals in technology",
        ],
      },
    },
  },

  {
    title: "History",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    mainImg: history,
    heroImg: historySub,
    img: sub10,
    bg: "bg-[#F46322]",
    description:
      "Explore significant events, cultures, and movements from the past, gaining a deeper understanding of how historical forces shape our world today.",
    slug: "history",
    to: "/history",
    generalData: [
      "Exploration of significant events, people, and developments across different time periods and cultures",
      "Develops understanding of human experiences, societal changes, and cultural evolution",
      "Promotes critical thinking, research skills, and an understanding of cause and effect",
      "Prepares students to understand contemporary issues within historical contexts",
      "Provides a foundation for further studies in history, politics, sociology, and international relations",
    ],
    generalLearningOutcome: [
      "Gain an understanding of key historical events and their impact",
      "Develop analytical skills to interpret historical sources and perspectives",
      "Learn to identify patterns and themes across different periods and regions",
      "Cultivate empathy and a nuanced understanding of different cultures and time periods",
      "Prepare for advanced studies in history, politics, and social sciences",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to basic historical concepts and vocabulary",
          "Focus on understanding time, sequence, and simple timelines",
          "Exploration of significant figures, events, and traditions in history",
          "Development of basic inquiry skills using stories and artifacts",
          "Building curiosity and foundational knowledge of the past",
        ],
        learningOutcomes: [
          "Recognize and discuss past events and people of importance",
          "Understand concepts of time and sequence in historical context",
          "Describe significant historical figures and their contributions",
          "Gain basic skills in exploring historical artifacts and stories",
          "Develop curiosity about history and its relevance to today",
        ],
      },
      "key-stage-2": {
        description: [
          "Expansion of knowledge about British and world history",
          "Introduction to different historical periods and key events",
          "Learning how societies, cultures, and technologies have evolved",
          "Building skills in analyzing historical sources and understanding change",
          "Developing early critical thinking and chronological understanding",
        ],
        learningOutcomes: [
          "Identify and explain key events and figures in British and world history",
          "Understand how societies and cultures have changed over time",
          "Use basic sources to ask and answer questions about the past",
          "Begin to analyze causes and effects of historical events",
          "Prepare for further studies in history with a broader perspective",
        ],
      },
      "key-stage-3": {
        description: [
          "Deeper exploration of British, European, and world history",
          "Focus on themes such as conflict, innovation, and societal change",
          "Development of skills in evaluating primary and secondary sources",
          "Understanding historical contexts, consequences, and interpretations",
          "Preparation for GCSE History with analytical and evaluative skills",
        ],
        learningOutcomes: [
          "Analyze and interpret significant historical events and movements",
          "Evaluate sources for reliability and bias",
          "Understand how history is constructed and interpreted",
          "Build strong written and verbal communication skills in historical analysis",
          "Prepare for GCSE-level history and advanced historical study",
        ],
      },
      gcse: {
        description: [
          "Comprehensive study of modern and ancient history, covering multiple regions",
          "Focus on themes like power, conflict, and society",
          "Emphasis on historical interpretation, analysis, and evidence evaluation",
          "Preparation for higher education in history, law, and social sciences",
          "Development of critical thinking and research skills",
        ],
        learningOutcomes: [
          "Master key historical events, periods, and themes across British and global history",
          "Analyze historical sources critically, understanding their context and limitations",
          "Develop the ability to construct well-argued, evidence-based responses",
          "Understand different historical interpretations and perspectives",
          "Prepare for A-level History or related fields in higher education",
        ],
      },
      "a-levels": {
        description: [
          "In-depth study of specific historical periods and themes",
          "Exploration of primary and secondary sources with rigorous analysis",
          "Focus on complex historical debates and historiography",
          "Preparation for university-level history and social sciences",
          "Development of advanced research, argumentation, and analytical skills",
        ],
        learningOutcomes: [
          "Develop expertise in interpreting historical sources and constructing arguments",
          "Analyze complex historical events and themes with an understanding of historiography",
          "Gain proficiency in evaluating and synthesizing diverse historical perspectives",
          "Construct evidence-based, sophisticated essays and analyses",
          "Prepare for university-level history, law, politics, and related studies",
        ],
      },
      ib: {
        description: [
          "Rigorous global history curriculum with SL and HL options",
          "Emphasis on historical analysis, primary sources, and global perspectives",
          "Includes comparative studies across different cultures and time periods",
          "Preparation for global careers and studies in history and social sciences",
          "Development of high-level research, writing, and analytical skills",
        ],
        learningOutcomes: [
          "Analyze historical sources within a global and comparative framework",
          "Develop strong research skills through an internal assessment project",
          "Understand complex historical concepts, theories, and perspectives",
          "Construct and defend well-reasoned arguments in historical analysis",
          "Prepare for university-level history and related fields",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible history curriculum tailored to individual learning goals",
          "Covers a broad range of historical topics from ancient to modern history",
          "Focus on building analytical, research, and critical thinking skills",
          "Prepares students for standardized exams or personal interests",
          "Emphasis on developing a deep understanding of human history and culture",
        ],
        learningOutcomes: [
          "Develop foundational knowledge across various historical periods and regions",
          "Analyze primary and secondary sources to form historical interpretations",
          "Gain proficiency in constructing historical arguments and essays",
          "Understand the impact of historical events on contemporary issues",
          "Prepare for standardized exams or further studies in history and social sciences",
        ],
      },
    },
  },
  {
    title: "French",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    mainImg: french,
    heroImg: frenchCurr,
    img: sub11,
    bg: "bg-[#515151]",
    description:
      "Learn the French language and culture, building communication skills while exploring the rich literary and artistic heritage of the Francophone world.",
    slug: "french",
    to: "/french",
    generalData: [
      "Fundamental language for international communication, diplomacy, and global culture",
      "Covers essential language skills including listening, speaking, reading, and writing",
      "Explores cultural elements of French-speaking countries around the world",
      "Builds a strong foundation for advanced language studies and intercultural understanding",
      "Prepares students for global opportunities in travel, education, and careers",
    ],
    generalLearningOutcome: [
      "Develop basic to advanced French language proficiency in communication",
      "Understand and appreciate French-speaking cultures and global diversity",
      "Build confidence in language skills for everyday and formal contexts",
      "Enhance cognitive skills through language learning and critical thinking",
      "Prepare for further studies in French language, literature, and cultural studies",
    ],
    content: {
      "key-stage-1": {
        description: [
          "Introduction to basic French vocabulary and expressions",
          "Focus on listening and repeating simple words and phrases",
          "Engagement with songs, stories, and visual aids to support language acquisition",
          "Emphasis on building curiosity and enthusiasm for language learning",
          "Learning foundational greetings, numbers, colors, and everyday items",
        ],
        learningOutcomes: [
          "Understand and use basic greetings and courtesy phrases",
          "Recognize and name common objects, colors, and numbers",
          "Repeat simple phrases with accurate pronunciation",
          "Build confidence and enjoyment in learning a new language",
          "Develop early listening and comprehension skills in French",
        ],
      },
      "key-stage-2": {
        description: [
          "Expansion of vocabulary and introduction to basic grammar structures",
          "Focus on listening, speaking, and reading short sentences",
          "Learning simple conversations and question-answer exchanges",
          "Introduction to French cultural aspects through songs, games, and stories",
          "Building a foundation for more complex language skills in higher stages",
        ],
        learningOutcomes: [
          "Engage in simple conversations and respond to basic questions",
          "Read and write short sentences using familiar vocabulary",
          "Recognize common French expressions and phrases",
          "Understand basic grammar concepts like gender and verb forms",
          "Gain cultural awareness of French-speaking countries",
        ],
      },
      "key-stage-3": {
        description: [
          "Development of reading, writing, speaking, and listening skills",
          "Focus on conversational phrases, verb conjugations, and grammar",
          "Introduction to more complex sentence structures and vocabulary",
          "Cultural studies of French-speaking countries and traditions",
          "Preparation for GCSE with foundational language skills",
        ],
        learningOutcomes: [
          "Hold short conversations in French on everyday topics",
          "Read and understand simple French passages",
          "Write paragraphs using correct grammar and vocabulary",
          "Expand vocabulary to include common verbs and expressions",
          "Gain a broader cultural understanding of the French-speaking world",
        ],
      },
      gcse: {
        description: [
          "Comprehensive study of the French language focusing on fluency and accuracy",
          "Development of skills in reading, writing, speaking, and listening",
          "Introduction to more complex vocabulary, tenses, and grammar structures",
          "Emphasis on practical communication for travel, work, and social interactions",
          "Preparation for higher education or careers involving French proficiency",
        ],
        learningOutcomes: [
          "Develop conversational fluency for a range of real-life situations",
          "Master reading and understanding of longer French texts",
          "Write essays and structured responses with grammatical accuracy",
          "Understand and use complex tenses and sentence structures",
          "Prepare for A-level or other advanced French language studies",
        ],
      },
      "a-levels": {
        description: [
          "In-depth study of French language, literature, and culture",
          "Focus on advanced grammar, vocabulary, and cultural topics",
          "Development of analytical skills through reading literature and media",
          "Preparation for university-level French studies or careers requiring fluency",
          "Emphasis on mastering oral and written proficiency for formal and informal contexts",
        ],
        learningOutcomes: [
          "Achieve fluency in speaking and writing on a range of topics",
          "Analyze and interpret French texts, films, and media",
          "Master advanced grammar, including subjunctive and conditional moods",
          "Engage in discussions and debates using sophisticated language",
          "Prepare for university or careers in translation, teaching, and international relations",
        ],
      },
      ib: {
        description: [
          "Rigorous French language program at Standard Level (SL) and Higher Level (HL)",
          "Emphasis on cultural awareness, critical thinking, and communication skills",
          "Incorporation of French literature, media, and global issues",
          "Preparation for university studies and international careers",
          "Development of high-level language skills across multiple contexts",
        ],
        learningOutcomes: [
          "Achieve proficiency in discussing complex topics in French",
          "Interpret and analyze diverse French-language texts and media",
          "Write structured, analytical essays on social and cultural themes",
          "Engage in discussions with cultural sensitivity and linguistic accuracy",
          "Prepare for university and careers in international fields",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible, individualized French curriculum based on learner’s goals",
          "Covers essential language skills with a focus on practical application",
          "Introduction to French-speaking cultures, traditions, and expressions",
          "Preparation for standardized tests or personal learning milestones",
          "Emphasis on building conversational, reading, and writing skills",
        ],
        learningOutcomes: [
          "Develop basic to intermediate conversational skills in French",
          "Read and understand texts suitable to the learner's proficiency level",
          "Write short essays and responses with attention to grammar and structure",
          "Gain cultural insight into French-speaking regions and their diversity",
          "Prepare for exams or milestones in French language acquisition",
        ],
      },
    },
  },
  {
    title: "Psychology",
    tagLine:
      "Paving the way with smart online tutoring solutions for gcse & A-Levels",
    mainImg: psychology,
    heroImg: psychologySub,
    img: sub12,
    bg: "bg-[#F46322]",
    description:
      "Explore the science of behavior and the mind, delving into human emotions, cognition, and motivation to better understand mental processes.",
    slug: "psychology",
    to: "/psychology",
    generalData: [
      "Explores the science of human behavior and mental processes",
      "Focuses on theories, research methods, and real-world applications",
      "Encompasses areas such as cognitive, developmental, social, and clinical psychology",
      "Promotes understanding of individual and group behavior",
      "Prepares students for further studies in psychology, mental health, and social sciences",
    ],
    generalLearningOutcome: [
      "Understand fundamental concepts and theories in psychology",
      "Develop analytical and critical thinking skills through research methods",
      "Apply psychological knowledge to real-life situations and issues",
      "Gain insight into human behavior and mental processes",
      "Prepare for advanced studies or careers in psychology, counseling, and social work",
    ],
    content: {
      "key-stage-3": {
        description: [
          "Introduction to basic psychological concepts and ideas",
          "Focus on understanding individual behavior and mental processes",
          "Engagement with introductory topics such as memory, emotions, and perception",
          "Use of case studies, observations, and basic research methods",
          "Builds curiosity and foundational understanding of psychology",
        ],
        learningOutcomes: [
          "Understand basic concepts like memory, learning, and emotion",
          "Recognize psychological influences on behavior and thought processes",
          "Engage in simple research activities and observations",
          "Build early analytical and critical thinking skills",
          "Develop curiosity and respect for mental diversity and wellbeing",
        ],
      },
      gcse: {
        description: [
          "Exploration of core areas such as developmental, social, and biological psychology",
          "Focus on scientific inquiry and psychological research methods",
          "Application of psychological theories to everyday issues",
          "Examination of mental health and individual differences",
          "Preparation for further studies in psychology and related fields",
        ],
        learningOutcomes: [
          "Understand key theories and studies in cognitive, social, and biological psychology",
          "Develop skills in designing, conducting, and analyzing psychological research",
          "Apply psychological concepts to real-world contexts and personal experiences",
          "Gain insight into factors affecting mental health and behavior",
          "Prepare for A-level or other advanced psychology studies",
        ],
      },
      "a-levels": {
        description: [
          "In-depth study of psychological approaches, issues, and debates",
          "Advanced understanding of research methods and data analysis",
          "Examination of psychological disorders and therapeutic approaches",
          "Engagement with topics such as aggression, memory, and social influence",
          "Preparation for university studies or careers in psychology and mental health",
        ],
        learningOutcomes: [
          "Master advanced concepts in cognitive, social, and biological psychology",
          "Conduct complex psychological research with data interpretation",
          "Understand and evaluate psychological treatments and therapies",
          "Analyze ethical issues and debates in psychological studies",
          "Prepare for university or professional training in psychology",
        ],
      },
      ib: {
        description: [
          "Comprehensive study of psychology at Standard Level (SL) and Higher Level (HL)",
          "Focus on cultural, ethical, and scientific perspectives in psychology",
          "Examination of topics like cognitive processes, human relationships, and mental health",
          "Application of psychology in global and cross-cultural contexts",
          "Preparation for university studies and careers in psychology, research, and mental health",
        ],
        learningOutcomes: [
          "Analyze psychological research and apply it in cross-cultural contexts",
          "Understand complex cognitive and behavioral processes",
          "Evaluate ethical considerations in psychological research",
          "Develop critical thinking through analysis of psychological theories",
          "Prepare for university studies in psychology and global mental health fields",
        ],
      },
      "home-schooling": {
        description: [
          "Flexible, self-paced psychology curriculum with customizable topics",
          "Covers essential concepts and introduces foundational theories",
          "Focus on key areas like cognitive psychology, mental health, and development",
          "Encourages critical thinking through independent research projects",
          "Preparation for standardized exams or personal learning goals in psychology",
        ],
        learningOutcomes: [
          "Understand key psychological concepts and perspectives",
          "Apply theories to understand personal and social behavior",
          "Develop research skills through independent or guided projects",
          "Build analytical skills through case studies and self-reflection",
          "Prepare for exams or further learning in psychology and mental health",
        ],
      },
    },
  },
];

const curriculumOffering = [
  {
    heroImg: britishImg,
    title: "Key Stage 1",
    tagLine:
      "Foster early academic development with our engaging Key Stage 1 curriculum, designed to build a strong foundation for your child’s learning journey.",
    content: [
      "The early years of a child’s education are crucial. At Tuition Highway, we understand the importance of nurturing a genuine love for learning during Key Stage 1. Our tutors are dedicated to ensuring that young learners grasp the basics of numeracy, literacy, and other foundational subjects in a supportive and engaging environment.",
      "Key Stage 1 marks the beginning of formal education for children aged between 5 and 7. It’s a phase where students are introduced to core subjects like Mathematics, English, and Science. This stage sets the tone for future learning, making it essential to have a strong foundation. A positive experience during these years can foster a lifelong love for learning, while challenges can be addressed early to ensure future academic success.",
      "At Tuition Highway, our approach to Key Stage 1 tuition is holistic. We focus not just on academic achievement but also on developing soft skills like curiosity, critical thinking, and confidence. Our tutors employ interactive teaching methods, using visual aids, storytelling, and practical exercises to make lessons engaging. We believe in personalized learning, understanding that each child is unique. Regular assessments help us tailor our teaching methods to suit individual needs, ensuring that every student gets the attention they deserve.",
      "Choosing the right tuition service for your child’s foundational years is paramount. At Tuition Highway, we pride ourselves on:",
      "Experienced Tutors Our educators are not just knowledgeable but also have a passion for teaching young learners.",
      "Flexible Scheduling We understand the busy schedules of parents and offer flexible timings for lessons.",
      "Interactive Learning Our lessons are designed to be interactive, ensuring that students remain engaged and enjoy their learning journey.",
      "Affordable Rates Quality education shouldn’t break the bank. Our rates are competitive, ensuring every child has access to top-tier education.",
      "Embark on a rewarding educational journey with Tuition Highway. Let’s build a strong foundation for your child’s academic future together.",
    ],
    slug: "keystage1",
    to: "/keystage1",
  },
  {
    heroImg: americanImg,
    title: "Key Stage 2",
    tagLine:
      "Empower your child’s learning with our Key Stage 2 curriculum, offering a comprehensive approach to mastering essential subjects and skills.",
    content: [
      "The journey of academic exploration truly takes off during Key Stage 2. At Tuition Highway, we’re committed to guiding students aged 7 to 11 through this critical phase, ensuring they build upon their foundational skills and develop a robust understanding of core subjects.",
      "Key Stage 2 is a transformative period in a student’s academic journey. It’s during these years that students delve deeper into subjects like Mathematics, English, Science, and Humanities. They’re introduced to more complex concepts, and the groundwork for future examinations begins. Ensuring a solid grasp during this stage is paramount for future academic achievements",
      "Tuition Highway’s approach to Key Stage 2 is comprehensive and student-centric. We believe in fostering an environment where questions are encouraged, and curiosity is kindled. Our tutors employ a mix of traditional teaching methods and innovative techniques, ensuring lessons are both informative and engaging. Personalized assessments allow us to identify each student’s strengths and areas for improvement, tailoring our teaching methods accordingly.",
      "Diverse Curriculum Beyond the basics, we introduce students to a range of topics, ensuring a well-rounded education.",
      "Interactive Lessons From digital tools to hands-on experiments, our lessons are designed to captivate young minds.",
      "Feedback & Progress Reports Regular updates keep parents in the loop, ensuring collaborative efforts in a child’s education.",
      "Dedicated Support Our tutors are always available for additional support, ensuring no student feels left behind.",
      "With Tuition Highway, ensure your child’s academic journey during Key Stage 2 is both enriching and rewarding. Let’s shape the future together.",
    ],
    slug: "keystage2",
    to: "/keystage2",
  },
  {
    heroImg: ibImg,
    title: "Key Stage 3",
    tagLine:
      "Prepare your child for academic success with our Key Stage 3 curriculum, laying the groundwork for future GCSE and A-level excellence.",
    content: [
      "Key Stage 3 marks a pivotal transition in a student’s academic trajectory. At Tuition Highway, we’re dedicated to guiding students aged 11 to 14, ensuring they’re well-prepared for the rigours of GCSE and beyond.",
      "Key Stage 3 acts as a bridge between primary education and the more specialized subjects of Key Stage 4. Students delve into a broader curriculum, exploring subjects in greater depth. It’s during these years that foundational knowledge is consolidated, and students begin to identify areas of interest that might shape their future academic choices.",
      "At Tuition Highway, we recognize the diverse challenges of Key Stage 3. Our tutors, experts in their respective fields, provide targeted guidance. We employ a blend of structured lessons and exploratory discussions, encouraging students to think critically and engage actively with the material. Regular assessments ensure that learning objectives are met and that students are on track for success.",
      "Broad Spectrum Learning We cover the entire Key Stage 3 curriculum, ensuring no topic is left untouched.",
      "Skill Development Beyond academics, we focus on developing essential skills like research, presentation, and analytical thinking.",
      "Engaging Materials Our resources, from interactive modules to detailed study guides, enhance the learning experience",
      "Consistent Support With regular feedback sessions, we ensure students and parents are always informed about progress.",
      "Tuition Highway is committed to making Key Stage 3 a foundation of confidence and knowledge for every student. Join us in crafting a brighter academic future.",
    ],
    slug: "keystage3",
    to: "/keystage3",
  },

  {
    heroImg: indianCurr,
    title: "GCSE",
    tagLine:
      "Achieve academic excellence with our structured GCSE curriculum, offering expert guidance and preparation for success in key subjects.",
    content: [
      "The GCSEs stand as a significant milestone in a student’s academic journey. At Tuition Highway, our mission is to ensure that students not only achieve their desired grades but also gain a deep understanding of their chosen subjects.",
      "GCSEs determine the next steps in education, influencing A-level choices and university admissions. Achieving strong grades opens doors to further academic opportunities and lays the groundwork for future success.",
      "Our GCSE tuition is comprehensive and tailored to individual exam boards and subjects. We focus on both content mastery and exam technique. Mock exams, regular assessments, and feedback sessions ensure students are exam-ready. Our tutors, well-versed in the curriculum, provide insights and strategies that can make the difference between a good grade and an outstanding one.",
      "Subject Specialists Our tutors are experts in their respective GCSE subjects, ensuring in-depth guidance.",
      "Exam Strategies Beyond knowledge, we equip students with effective revision techniques and exam strategies.",
      "Personalised Plans Tailored study plans cater to individual strengths and areas for improvement.",
      "Supportive Environment We foster a positive learning environment, ensuring students approach their exams with confidence.",
      "With Tuition Highway, GCSE success is not just a goal; it’s an expectation. Let’s achieve academic excellence together.",
    ],
    slug: "gcse",
    to: "/gcse",
  },
  {
    heroImg: aLevels,
    title: "A-levels",
    tagLine:
      "Excel in your academic pursuits with our A-level curriculum, providing in-depth knowledge and preparation for top university admissions.",
    content: [
      "A-levels are the gateway to higher education and a world of opportunities. At Tuition Highway, we’re dedicated to ensuring students not only achieve top grades but also gain a profound understanding of their chosen subjects, setting them up for university success.",
      "A-levels are the culmination of school education, determining university placements and future career paths. These qualifications require a deep understanding of subjects, critical thinking, and the ability to synthesize knowledge. Achieving excellence at this stage is paramount for opening doors to prestigious universities and courses.",
      "Tuition Highway’s A-level tuition is comprehensive, tailored, and results-driven. Our tutors, experts in their respective fields, provide in-depth guidance on complex topics. We emphasize understanding over rote learning, fostering analytical and evaluative skills. Regular assessments, mock exams, and feedback sessions ensure students are well-prepared for their final examinations.",
      "Depth and Breadth Our tutors cover the entire A-level curriculum in depth, ensuring no stone is left unturned.",
      "University Preparation Beyond the curriculum, we offer guidance on university applications, personal statements, and interview preparations.",
      "Interactive Learning Engaging lessons, discussions, and debates enhance understanding and retention.",
      "Consistent Support From the start of the course to the final exam, we’re with our students every step of the way.",
      "Embark on your A-level journey with Tuition Highway and unlock a world of academic and career opportunities. Together, we achieve more.",
    ],
    slug: "a-level",
    to: "/a-level",
  },

  {
    heroImg: homeschooling,
    title: "Homeschooling Support",
    tagLine:
      "Unlock your child’s potential with our tailored homeschooling support, offering expert tutoring and flexible learning plans for every subject.",
    content: [
      "Homeschooling offers a unique and personalized approach to education. At Tuition Highway, we provide comprehensive support for homeschooling families, ensuring students receive a well-rounded education tailored to their individual needs and aspirations.",
      "Homeschooling allows for a customised educational experience, catering to individual learning styles, paces, and interests. It offers flexibility, a personal touch, and the opportunity to delve deeper into subjects of interest. With the right guidance, homeschooling can lead to exceptional academic outcomes and a love for self-directed learning.",
      "Tuition Highway’s homeschooling support is holistic and adaptive. We offer bespoke lesson plans, resources, and guidance. Our tutors work closely with families to understand individual goals, curating a curriculum that aligns with both academic standards and personal interests. Regular assessments ensure progress, and feedback sessions keep the learning journey on track.",
      "Personalised Curriculum We design learning paths that cater to individual strengths, weaknesses, and interests.",
      "Diverse Resources Access to a plethora of online resources, interactive modules, and comprehensive study materials.",
      "Flexible Timings Learn at your own pace, on your own schedule, without compromising on quality.",
      "Community Interaction Opportunities for group lessons, discussions, and social interactions to complement individual learning.",
      "With Tuition Highway, homeschooling becomes a journey of discovery, growth, and excellence. Let’s shape a unique educational path together.",
    ],
    slug: "homeschooling",
    to: "/homeschooling",
  },
];

const curricula = [
  {
    title: "AQA",
  },
  {
    title: "Edexcel",
  },
  {
    title: "OCR",
  },
  {
    title: "WJEC",
  },
  {
    title: "CCEA",
  },
  {
    title: "IB",
  },
  {
    title: "American",
  },
];

const testimonials = [
  {
    name: "Ms. Davies",
    review:
      "Chloe has really started to enjoy Maths again. Her confidence has grown massively, and she’s even aiming for top marks now. So pleased with the support here.",
    class: "GCSE Maths",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mr. Brown",
    review:
      "My son, Sam, has found a rhythm with his Economics studies. His tutor has been a great mentor, and he’s finally engaging with the material. Highly recommended!",
    class: "A-Level Economics",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Ms. Patel",
    review:
      "Our daughter, Ava, went from struggling in Chemistry to feeling like she’s got a real handle on it. Couldn’t be happier with the progress.",
    class: "gcse Chemistry",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mrs. Hughes",
    review:
      "Lily’s actually excited for her English Lit sessions now, which is something I never thought I’d say! Her confidence has soared, and her grades reflect that.",
    class: "A-Level English Literature",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mr. Green",
    review:
      "I’ve seen such a change in Freddie’s attitude towards his studies. He was really struggling with Physics, but now he’s feeling ready for his exams.",
    class: "gcse Physics",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Carter",
    review:
      "Having online classes has been such a lifesaver. Mia’s able to fit in her studies around her other commitments, and her grades in Maths have shot up.",
    class: "Secondary Maths",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mrs. Wallace",
    review:
      "Really impressed with the help Finn’s been getting. His Biology and Chemistry grades have jumped up, and he’s a lot more confident in school.",
    class: "GCSE Biology & Chemistry",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Thomas",
    review:
      "These sessions have made all the difference for Harry in his Economics coursework. He’s gone from feeling lost to genuinely understanding.",
    class: "A-Level Economics",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Ms. Robinson",
    review:
      "It’s brilliant how much Amelia enjoys her Science classes now. She’s understanding the material so much better and it’s showing in her grades.",
    class: "GCSE Science",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mrs. Young",
    review:
      "My son Noah actually looks forward to his Maths sessions, and that’s saying something! He’s made huge strides and is aiming for top marks now.",
    class: "Secondary Maths",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mr. Murphy",
    review:
      "Oscar’s tutor has been fantastic. He’s finally found his footing in History, and his teachers at school have noticed the improvement too.",
    class: "GCSE History",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Foster",
    review:
      "Really happy with how Sophie’s doing. She was struggling with her GCSE Physics, but now she’s on track and feeling much more positive.",
    class: "GCSE Physics",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mrs. Thompson",
    review:
      "Ethan’s grades in Chemistry have come on leaps and bounds. He’s even starting to enjoy it, which I never thought I’d hear him say!",
    class: "gcse Chemistry",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Brooks",
    review:
      "Eva’s always been a bit anxious about exams, but since joining, her confidence has really improved. She’s particularly enjoying Maths, which is a first!",
    class: "A-Level Maths",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mr. Simmonds",
    review:
      "Couldn’t ask for a better tutor for Archie. He’s much more motivated in English and actually feels like he’s learning now.",
    class: "GCSE English",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Evans",
    review:
      "The support has been incredible. Grace used to struggle with Science, but now her teachers are noticing the difference. Thank you!",
    class: "Secondary Science",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mrs. O’Connor",
    review:
      "The online classes have been so flexible, and Jamie’s really thriving in Chemistry and Biology. Couldn’t ask for more.",
    class: "GCSE Chemistry & Biology",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Johnson",
    review:
      "Megan’s Maths tutor has made all the difference. She used to dread the subject, but now she’s excelling. Forever grateful!",
    class: "gcse Maths",
    stars: 4,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mr. Shaw",
    review:
      "Max has been doing much better in his Science classes. He’s more confident and finally keeping up with the curriculum.",
    class: "Secondary Science",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mrs. Simpson",
    review:
      "My daughter Libby is really happy with her lessons. Her tutor makes everything so clear, and her marks in Economics have gone way up.",
    class: "A-Level Economics",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Ms. Price",
    review:
      "Isabella has always struggled a bit with Physics, but now she’s much more confident. The sessions have really been invaluable.",
    class: "GCSE Physics",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mrs. Grant",
    review:
      "So pleased with how well Daniel is doing. He’s gone from struggling in English Lit to absolutely loving it!",
    class: "A-Level English Literature",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mr. Barker",
    review:
      "Great improvement in Maths and Chemistry. James has found his stride, and I’m relieved to see him enjoying his studies more.",
    class: "gcse Maths & Chemistry",
    stars: 4.5,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Ross",
    review:
      "The support for Emma’s studies has been brilliant. She’s a lot more relaxed about her Biology exams now, which is a huge relief for all of us.",
    class: "A-Level Biology",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mrs. Cooper",
    review:
      "Noah’s confidence has really shot up in Economics. He’s finally getting the hang of it, and it’s all thanks to his patient tutor.",
    class: "A-Level Economics",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Howard",
    review:
      "My son, Toby, is doing so well with his Maths and Science. I’m so grateful for the personalised support he’s receiving.",
    class: "Secondary Maths & Science",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Ms. Lawrence",
    review:
      "Jess has really come out of her shell. She loves her English classes and has started contributing so much more in school.",
    class: "GCSE English",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Mr. Sanderson",
    review:
      "Leo’s enjoying his Science classes and actually finding them useful, which is a miracle in itself. Thank you for all the support!",
    class: "Secondary Science",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
  {
    name: "Mrs. Hale",
    review:
      "It’s great to see Ella so engaged in her studies. She’s found her confidence again in Physics and Chemistry.",
    class: "gcse Physics & Chemistry",
    stars: 4,
    circleColor: "bg-[#F46322]",
  },
  {
    name: "Ms. Hart",
    review:
      "The progress Tom has made in Economics is brilliant. He used to feel totally lost, but now he’s keeping up with ease.",
    class: "A-Level Economics",
    stars: 4.5,
    circleColor: "bg-[#008FBF]",
  },
];

const stepsContent = [
  {
    stepNumber: 1,
    title: "Student",
    subtitle: "Assessment",
    description: "We evaluate your current academic standing and goals.",
  },
  {
    stepNumber: 2,
    title: "Tutor",
    subtitle: "Matching",
    description:
      "We pair you with an expert tutor specialized in your subject and curriculum.",
  },
  {
    stepNumber: 3,
    title: "Personalized",
    subtitle: "Learning Plan",
    description:
      "Your tutor creates a tailored strategy to address your specific needs.",
  },
  {
    stepNumber: 4,
    title: "Regular",
    subtitle: "Sessions",
    description:
      "Attend flexible, one-on-one online sessions at times that suit you.",
  },
  {
    stepNumber: 5,
    title: "Progress",
    subtitle: "Tracking",
    description: "We continuously monitor and report on your improvement.",
  },
  {
    stepNumber: 6,
    title: "Achieve Your",
    subtitle: "Goals",
    description: "Watch your grades improve and confidence soar.",
  },
];
const thankyouSteps = [
  {
    stepNumber: 1,
    title: "Student Assessment",
    description:
      "Next, we will evaluate your current academic standing and goals to tailor our approach to your needs.",
  },
  {
    stepNumber: 2,
    title: "Tutor Matching",
    description:
      "Following the assessment, we will pair you with an expert tutor who specializes in your subject and curriculum.",
  },
  {
    stepNumber: 3,
    title: "Personalized Learning Plan",
    description:
      "Finally, your tutor will create a customized learning plan designed to help you achieve your academic objectives.",
  },
];

const tutors = [
  {
    icon: avatar2,
    name: "Mark",
    subject: "Maths",
    experience: "15 Years",
  },
  {
    icon: avatar1,
    name: "Christine",
    subject: "Physics",
    experience: "15 Years",
  },
  {
    icon: avatar3,
    name: "Viney",
    subject: "Physics",
    experience: "6 Years",
  },
  {
    icon: avatar4,
    name: "Meera",
    subject: "Chemistry",
    experience: "8 Years",
  },
  {
    icon: avatar5,
    name: "Beth",
    subject: "French",
    experience: "24 Years",
  },
  {
    icon: avatar7,
    name: "Raza",
    subject: "Business",
    experience: "10 Years",
  },
  {
    icon: avatar6,
    name: "Jane",
    subject: "Biology",
    experience: "15 Years",
  },
  {
    icon: avatar1,
    name: "Alison",
    subject: "Maths",
    experience: "15 Years",
  },
];

const plans = [
  {
    title: "FlexiLearn",
    description:
      "Perfect for students who need flexible, on-demand tutoring sessions to reinforce specific concepts or prepare for exams.",
    price: "25",
    rateType: "/per hour",
    features: ["Any subject", "Hourly Rate: £25.00"],
    imageSrc: price1,
  },
  {
    title: "DualFocus",
    description:
      "Designed for students focusing on two subjects, with consistent monthly sessions to build deeper understanding.",
    price: "160",
    rateType: "monthly",
    features: ["8 hours", "Any two subjects", "Hourly Rate: £20.00"],
    imageSrc: price2,
  },
  {
    title: "TripleMastery",
    description:
      "Ideal for students aiming to excel in three subjects, offering structured support and comprehensive guidance each month.",
    price: "210",
    rateType: "monthly",
    features: ["12 hours", "Any three subjects", "Hourly Rate: £17.50"],
    imageSrc: price3,
  },
];

const aLevelPlans = [
  {
    title: "FlexiLearn",
    description:
      "Suited for A-level students who prefer the flexibility of pay-as-you-go sessions to supplement their studies or prepare for exams.",
    price: "31.25",
    rateType: "/per hour",
    features: ["Any subject", "Hourly Rate: £31.25"],
    imageSrc: price1,
  },
  {
    title: "DualFocus",
    description:
      "Designed for A-level students focusing on two subjects, offering structured monthly sessions to provide deep understanding.",
    price: "200",
    rateType: "monthly",
    features: ["8 hours", "Any two subjects", "Hourly Rate: £25.00"],
    imageSrc: price2,
  },
  {
    title: "TripleMastery",
    description:
      "Ideal for A-level students aiming to excel in three subjects, providing comprehensive support and guidance every month.",
    price: "262",
    rateType: "monthly",
    features: ["12 hours", "Any three subjects", "Hourly Rate: £22.92"],
    imageSrc: price3,
  },
  // Add other A-Level plans here as needed
];

const faqs = [
  {
    question: "What subjects and curricula do you cover?",
    answer:
      "We cover all major subjects across gcse, A-levels, and IB curricula.",
  },
  {
    question: "How do your online tutoring sessions work?",
    answer:
      "Sessions are conducted via video conferencing, with interactive whiteboards and screen-sharing capabilities.",
  },
  {
    question: "How are online tutoring sessions conducted?",
    answer:
      "All our classes are held on our proprietary Learning Management System (LMS).",
  },
  {
    question: "What are your tutors' qualifications?",
    answer:
      "All our tutors are experienced educators with advanced degrees in their respective fields.",
  },
  {
    question: "How much does tutoring cost?",
    answer:
      "Our rates vary based on subject and level; contact us for a personalized quote.",
  },
  {
    question: "Can I change my tutor if I'm not satisfied?",
    answer:
      "Yes, we're happy to match you with a different tutor to ensure your complete satisfaction.",
  },
  {
    question: "Do you offer group tutoring sessions?",
    answer:
      "Yes, we provide both one-on-one and small group tutoring options to suit different needs and budgets",
  },
];

const products = [
  {
    title: "Join As Tutor",
    to: "/join-as-a-tutor",
  },
  // {
  //   title: "Free Demo",
  //   to: "/free-demo",
  // },
  {
    title: "About Us",
    to: "/about-us",
  },
];
const company = [
  {
    title: "Subjects",
    to: "/courses",
  },
  {
    title: "Testimonials",
    to: "/testimonials",
  },

  {
    title: "Join As Tutor",
    to: "/join-as-a-tutor",
  },
  // {
  //   title: "Free Demo",
  //   to: "/free-demo",
  // },
  {
    title: "About Us",
    to: "/about-us",
  },
];
const resources = [
  {
    title: "Privacy Policy",
    to: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    to: "/terms-conditions",
  },
  {
    title: "Pricing",
    to: "/pricing",
  },
  {
    title: "Contact Us",
    to: "/contact-us",
  },
  {
    title: "FAQs",
    to: "/faqs",
  },
];

const selectedCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See (Vatican City)",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const subjectsOffer = [
  "Maths",
  "Physics",
  "Chemistry",
  "English",
  "Biology",
  "Business",
  "Computer Science",
  "French",
  "Psychology",
  "History",
];
const goals = [
  "Improve current grades",
  "Prepare for specific exam",
  "Build confidence",
  "Catch up on missed work",
  "Get ahead of the curriculum",
];
const schedule = [
  "Twice per week (Most popular)",
  "Thrice per week",
  "Flexible schedule",
];
const time = [
  "After school (3pm - 6pm)",
  "Evening (6pm - 8pm)",
  "Weekend mornings",
  "Weekend afternoons",
];

const packageOffer = [
  "GCSE & Secondary FlexiLearn",
  "GCSE & Secondary DualFocus",
  "GCSE & Secondary TripleMastery",
  "A-Levels FlexiLearn",
  "A-Levels DualFocus",
  "A-Levels TripleMastery",
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: state.isFocused
      ? "2px solid #38383856" // focused border color
      : "2px solid #38383856", // focused border color
    // borderBottom: "2px solid #38383856",
    padding: "0.5rem 2rem 0.5rem 0",
    borderRadius: "0",
    boxShadow: state.isFocused ? "none" : "none", // remove the blue box-shadow
    outline: "none", // remove the default focus outline
    WebkitTapHighlightColor: "transparent",
    cursor: "pointer",
    fontSize: "1rem", // text-sm in Tailwind
    lineHeight: "1.25rem",
    ...(state.selectProps.isMulti && {
      height: "80px", // Apply height only for multi-select
      overflowY: "auto", // Enable overflow only for multi-select
    }),
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#383838", // placeholder color (text-gray-400)
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#383838", // value color (text-black)
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#383838", // dropdown arrow color (text-black)
    paddingRight: "0.5rem",
    display: state.isDisabled ? "none" : "block", // hide arrow when disabled
  }),
  indicatorSeparator: () => ({ display: "none" }), // remove separator
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.375rem", // rounded-md
    border: "1px solid #38383856", // border (border-gray-300)
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // slight shadow for the dropdown
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#34ACD4" // selected background color (from your example)
      : state.isFocused
      ? "#F3F4F6" // focused background color (bg-gray-100)
      : "white",
    color: state.isSelected ? "white" : "#383838", // selected text color (text-white)
    padding: "0.5rem 1rem", // padding for options
    cursor: "pointer",
    // ":hover": {
    //   backgroundColor: "#F3F4F6", // hover background color
    // },
  }),
};

const socialIcons = [
  {
    icon: fbIcon,
    alt: "facebook",
    to: "https://www.facebook.com/tuitionhighway",
  },
  {
    icon: instaIcon,
    alt: "instagram",
    to: "https://www.instagram.com/tuitionhighway/",
  },
  // {
  //   icon: linkedIn,
  //   alt: "linkedIn",
  //   to: "https://www.linkedin.com/company/tuition-highway",
  // },
];

const privacyPolicyData = [
  {
    title: "Introduction",
    content:
      "This document provides an overview of the privacy practices for https://tuitionhighway.co.uk, managed by Tuition Highway, part of 4D eLearning Limited, London, UK, in compliance with applicable UAE laws.",
  },
  {
    title: "User Privacy",
    content:
      "We prioritize user privacy, ensuring that proactive measures are in place to protect personal data throughout the user’s interaction with our services.",
  },
  {
    title: "Cookies Usage",
    content:
      "Our website utilizes cookies to enhance the user experience, with the option for users to consent or decline the use of cookies on their initial visit, in line with recent legislative requirements.",
  },
  {
    title: "Data Storage and Tracking",
    content:
      "Cookies track user interactions for a personalized web experience. Users may opt out by modifying browser settings. Google Analytics is used for understanding website usage without storing personal information. External vendors may also use cookies for conversion and referral tracking.",
  },
  {
    title: "Communication Security",
    content:
      "User-provided information during website interactions is kept secure. Users engage with the website and its communication tools at their own risk. Information may be used to inform users about services or for email newsletters, with explicit consent.",
  },
  {
    title: "External Links and Adverts",
    content:
      "Users should exercise caution with external links and adverts. The website is not liable for the content or any potential damage arising from visiting such external sites.",
  },
  {
    title: "Social Media and Sharing",
    content:
      "Interactions on social media platforms are governed by the terms of those platforms. Users should be cautious when sharing personal information. Social media sharing buttons are provided for convenience but are used at the user's discretion.",
  },
  {
    title: "Shortened Social Media Links",
    content:
      "Care should be taken with shortened URLs on social media, as they may be prone to spam or hacking. The website is not liable for damages related to these links.",
  },
  {
    title: "Governing Law",
    content:
      "This privacy policy is governed by the laws of the United Arab Emirates.",
  },
  {
    title: "Miscellaneous",
    content:
      "All credit/debit cards' details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties https://tuitionhighway.co.uk will not pass any debit/credit card details to third parties. https://tuitionhighway.co.uk takes appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, https://tuitionhighway.co.uk cannot guarantee the security of any information that is disclosed online. The https://tuitionhighway.co.uk is not responsible for the privacy policies of websites to which it links. If you provide any information to such third parties different rules regarding the collection and use of your personal information may apply. You should contact these entities directly if you have any questions about their use of the information that they collect.",
  },
];

const termsAndConditionsData = [
  {
    title: "Introduction",
    content: [
      "4D eLearning Limited maintains the https://tuitionhighway.co.uk/ Website (“Site”).",
      "These Terms and Conditions govern the use of our online tuition services.",
    ],
    contactInformation: [
      "Email: hello@tuitionhighway.co.uk",
      "Address: 4D eLearning Limited, London, UK",
      "Contact Number: +447733091518",
    ],
  },
  {
    title: "Service Provision",
    content: [
      "Tuition Highway provides experienced tutors and arranges a free trial class for new students.",
      "If the student wishes to proceed, regular classes are scheduled.",
      "Tuition Highway does not guarantee any specific results or grades.",
      "Customers using the website who are Minor /under the age of 18 shall not register as a User of the website and shall not transact on or use the website. Instead their parents must create an account on their behalf and they will take all the responsibility as per terms and conditions.",
    ],
  },
  {
    title: "Class Scheduling and Availability",
    content: [
      "Tuition Highway reserves the right to release the slots of teachers to other students if a student takes an extended break.",
      "The schedule of classes is subject to availability and may be adjusted with prior notice.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Customers can use varied payment options provided by Tuition Highway through its payment partners. This includes bank transfers and payment through credit/debit card.",
      "Visa or MasterCard debit and credit cards in AED will be accepted for payment.",
      "Cardholders must retain a copy of transaction records and Merchant policies and rules.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "If a student does not attend a scheduled class, it will be considered a charged class.",
      "Payment is mandatory for all lessons taken.",
      "Tuition Highway provides different payment options including payment via credit/debit card through payment partners.",
      "Our onboarding team will communicate all options upon enrollment.",
      "Payment confirmation will be made through email, SMS, or WhatsApp upon transfer of funds within 24 to 48 hours.",
    ],
  },
  {
    title: "Refund/Cancellation Policy",
    content: [
      "Tuition Highway has no refund policy if the classes are taken.",
      "Refund is only possible if there was an advance payment made by the customer and Tuition Highway was unable to provide the tutor with whom the demo was conducted.",
      "Refunds will be done only through the Original Mode of Payment.",
      "Customer can cancel their requested services within 24 hours; refunds in case of advance payment will be made back to the payment solution used initially by the customer. Please allow for up to 45 days for the refund transfer to be completed.",
    ],
  },
  {
    title: "Use of Technology",
    content: [
      "Parents/guardians give consent for their children to open their camera during online classes.",
      "Students are expected to have a stable internet connection and the necessary equipment for online learning.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Tuition Highway is not liable for any indirect, incidental, or consequential damages arising out of or in connection with the use of our services.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes will be subject to the exclusive jurisdiction of the courts of the UAE.",
      "We will not trade with or provide any services to OFAC (Office of Foreign Assets Control) and sanctioned countries in accordance with the law of UAE.",
    ],
  },
  {
    title: "Amendments",
    content: [
      "Tuition Highway reserves the right to amend these Terms and Conditions at any time.",
      "Continued use of the services after such changes will constitute acceptance of the new Terms and Conditions.",
    ],
  },
  {
    title: "Contact and Communication",
    content: [
      "For any queries or concerns regarding these Terms and Conditions, please contact us at the provided email and phone number.",
    ],
  },
];

const enrollDetails = [
  {
    heading: "",
    description:
      "Welcome to Tuition Highway, your trusted partner in personalised online tutoring. We understand that every child is unique, and so should be their learning journey. ",
  },
  {
    heading: "",
    description:
      "Our experienced tutors are ready to meet your child’s individual academic needs, whether it’s building a solid foundation in a new subject or preparing for crucial examinations.",
  },
  {
    heading: "",
    description:
      "Don’t let the stress of today's competitive education system hold your child back. Take the first step towards academic success with Tuition Highway. We cater to all major international curriculums and exam boards, equipping your child with the right tools to thrive in their studies.",
  },
  {
    heading: "",
    description:
      "Complete the form to schedule a free consultation and trial lessons with our expert tutors. Remember, this initial step is completely free and it could be the turning point in your child’s academic journey.",
  },
  {
    heading: "",
    description:
      "Embark on this transformative journey with Tuition Highway today!",
  },
];
const joinTutorDetails = [
  {
    heading: "",
    description:
      "Tuition Highway is dedicated to quality education through a rigorous tutor selection process. We prioritize skilled, knowledgeable, and reliable tutors to ensure high standards of teaching. Here are the key steps in our process:",
  },
  {
    heading: "Application Screening: ",
    description:
      "We review candidates' qualifications, teaching experience, and expertise to shortlist those who meet our standards.",
  },
  {
    heading: "Interview: ",
    description:
      "Shortlisted candidates are interviewed to assess communication skills, teaching philosophy, and curriculum knowledge.",
  },
  {
    heading: "Teaching Demo: ",
    description:
      "Candidates conduct a demo to showcase their teaching style and ability to explain concepts effectively.",
  },
  {
    heading: "Reference Checks and Verification: ",
    description:
      "We verify qualifications, past experience, and conduct background checks to ensure safety.",
  },
  {
    heading: "Onboarding: ",
    description:
      "Successful candidates undergo an orientation on our platform and policies.",
  },
  {
    heading: "Ongoing Evaluation: ",
    description:
      "Tutors are continuously evaluated based on student feedback and performance.",
  },
];

const seoText = [
  {
    title: "Why Tuition Highway Stands Out Among Online Tuition Providers",
    description:
      "As one of the leading providers of online tuition, Tuition Highway is dedicated to offering tailored, high-quality tutoring services for students worldwide. Our expertise spans a wide range of subjects, ensuring that each student receives the personalized support they need to excel academically. From online maths tuition to English tuition online, our tutors are skilled professionals who focus on meeting each learner’s unique needs.",
  },
  {
    title: "Tuition Highway – Your Partner in Online Learning",
    description:
      "When searching for online tuition in the UK or globally, it’s essential to choose a provider that understands the nuances of various curriculums and educational standards. At Tuition Highway, we pride ourselves on being the go-to solution for students preparing for competitive exams like the 11 plus. Whether you’re looking for 11 plus online tuition, maths tuition online, or English tuition online, our approach ensures comprehensive support, fostering confidence and academic growth.",
  },
  {
    title: "Tailored Online Tuition for Every Age and Stage",
    description:
      "Our online tuition services are designed to cater to students of all ages, from online tuition for kids to advanced subjects for high school and college-bound students. With flexible options for online tuition classes across various subjects, including online economics tuition and biology tuition, we help students achieve their academic goals at their own pace.",
  },
  {
    title: "The Tuition Highway Difference",
    description:
      "Choosing Tuition Highway means choosing a provider committed to excellence. We understand the importance of reliable, effective tuition that not only meets but exceeds expectations. Our best 11 plus online tuition services are a testament to our dedication, guiding students through the rigors of exam preparation. Our maths and English tuition online ensures a balanced academic foundation, while our online science tuition covers key concepts in depth, from online biology tuition to physics and chemistry.",
  },
];

export {
  navigationData,
  reasons,
  numbers,
  subjectsOffering,
  testimonials,
  stepsContent,
  tutors,
  faqs,
  products,
  company,
  resources,
  selectedCountries,
  subjectsOffer,
  socialIcons,
  curricula,
  privacyPolicyData,
  termsAndConditionsData,
  enrollDetails,
  joinTutorDetails,
  seoText,
  curriculumOffering,
  customStyles,
  thankyouSteps,
  plans,
  aLevelPlans,
  packageOffer,
  goals,
  schedule,
  time,
};
