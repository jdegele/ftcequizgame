// Edgenuity Remediation Hub - Course Data
// High School Math and Science Courses

const courseData = {
    math: {
        name: "Mathematics",
        courses: [
            {
                id: "algebra1",
                name: "Algebra 1",
                grade: "9th Grade",
                description: "Linear equations, inequalities, and functions",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Foundations of Algebra",
                        quizTopics: ["Real Numbers", "Order of Operations", "Variables & Expressions"],
                        activities: [
                            {
                                type: "video",
                                title: "Real Numbers Review",
                                description: "Review the number system including integers, rationals, and irrationals",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/example1",
                                    notes: "Key concepts: Natural numbers, whole numbers, integers, rational numbers, irrational numbers"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Real Numbers",
                                description: "Test your understanding of real number classifications",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which of the following is an irrational number?",
                                            choices: ["3/4", "0.5", "√2", "-7"],
                                            answer: "√2",
                                            explanation: "√2 cannot be expressed as a fraction of two integers, making it irrational."
                                        },
                                        {
                                            question: "What is the result of -5 + (-3)?",
                                            choices: ["-8", "8", "-2", "2"],
                                            answer: "-8",
                                            explanation: "Adding two negative numbers: -5 + (-3) = -8"
                                        }
                                    ]
                                }
                            },
                            {
                                type: "worksheet",
                                title: "Order of Operations Worksheet",
                                description: "Practice problems using PEMDAS",
                                icon: "&#128196;",
                                content: {
                                    instructions: "Solve each expression using the correct order of operations (PEMDAS).",
                                    problems: [
                                        "1. 3 + 4 × 2 = ?",
                                        "2. (5 + 3) × 2 = ?",
                                        "3. 12 ÷ 4 + 2² = ?",
                                        "4. 15 - 3 × (2 + 1) = ?"
                                    ],
                                    answers: ["11", "16", "7", "6"]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Linear Equations",
                        quizTopics: ["One-Step Equations", "Two-Step Equations", "Multi-Step Equations"],
                        activities: [
                            {
                                type: "video",
                                title: "Solving Linear Equations",
                                description: "Step-by-step guide to solving equations",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/example2",
                                    notes: "Remember: What you do to one side, you must do to the other!"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Linear Equations",
                                description: "Solve various linear equations",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Solve for x: 2x + 5 = 15",
                                            choices: ["x = 5", "x = 10", "x = 7.5", "x = 20"],
                                            answer: "x = 5",
                                            explanation: "2x + 5 = 15 → 2x = 10 → x = 5"
                                        },
                                        {
                                            question: "Solve for x: 3(x - 2) = 12",
                                            choices: ["x = 2", "x = 4", "x = 6", "x = 8"],
                                            answer: "x = 6",
                                            explanation: "3(x - 2) = 12 → x - 2 = 4 → x = 6"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Inequalities",
                        quizTopics: ["Solving Inequalities", "Graphing Inequalities", "Compound Inequalities"],
                        activities: [
                            {
                                type: "video",
                                title: "Understanding Inequalities",
                                description: "Learn how inequalities differ from equations",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/example3",
                                    notes: "Key rule: When multiplying or dividing by a negative, flip the inequality sign!"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Inequalities",
                                description: "Practice solving and graphing inequalities",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Solve: -2x > 6",
                                            choices: ["x > -3", "x < -3", "x > 3", "x < 3"],
                                            answer: "x < -3",
                                            explanation: "Dividing by -2 flips the sign: -2x > 6 → x < -3"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "geometry",
                name: "Geometry",
                grade: "10th Grade",
                description: "Shapes, proofs, and spatial reasoning",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Foundations of Geometry",
                        quizTopics: ["Points, Lines, Planes", "Segments and Angles", "Angle Relationships"],
                        activities: [
                            {
                                type: "video",
                                title: "Basic Geometric Terms",
                                description: "Learn the building blocks of geometry",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/geo1",
                                    notes: "Points have no dimension, lines extend infinitely, planes are flat surfaces"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Angle Relationships",
                                description: "Identify and solve angle relationship problems",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "If two angles are supplementary and one measures 65°, what is the other angle?",
                                            choices: ["25°", "115°", "90°", "125°"],
                                            answer: "115°",
                                            explanation: "Supplementary angles sum to 180°. So 180° - 65° = 115°"
                                        },
                                        {
                                            question: "Vertical angles are always:",
                                            choices: ["Supplementary", "Complementary", "Congruent", "Adjacent"],
                                            answer: "Congruent",
                                            explanation: "Vertical angles are formed by intersecting lines and are always equal (congruent)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Parallel Lines & Transversals",
                        quizTopics: ["Parallel Line Properties", "Angle Pairs", "Proving Lines Parallel"],
                        activities: [
                            {
                                type: "video",
                                title: "Parallel Lines Cut by a Transversal",
                                description: "Understanding angle relationships with parallel lines",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/geo2",
                                    notes: "Corresponding angles are equal, alternate interior angles are equal"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Transversal Angles",
                                description: "Find missing angles using parallel line properties",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "If corresponding angles are formed by parallel lines and a transversal, and one angle is 70°, what is the corresponding angle?",
                                            choices: ["70°", "110°", "20°", "90°"],
                                            answer: "70°",
                                            explanation: "Corresponding angles are congruent when formed by parallel lines and a transversal."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Triangles",
                        quizTopics: ["Triangle Classification", "Triangle Congruence", "Pythagorean Theorem"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Pythagorean Theorem",
                                description: "Apply the Pythagorean theorem to find missing sides",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "In a right triangle with legs 3 and 4, what is the hypotenuse?",
                                            choices: ["5", "6", "7", "12"],
                                            answer: "5",
                                            explanation: "a² + b² = c² → 3² + 4² = 9 + 16 = 25 → c = 5"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "algebra2",
                name: "Algebra 2",
                grade: "11th Grade",
                description: "Advanced functions, polynomials, and complex numbers",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Equations and Inequalities Review",
                        quizTopics: ["Absolute Value Equations", "Compound Inequalities", "Literal Equations"],
                        activities: [
                            {
                                type: "video",
                                title: "Absolute Value Equations",
                                description: "Solving equations with absolute value",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/alg2-1",
                                    notes: "Remember: |x| = a means x = a OR x = -a"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Absolute Value",
                                description: "Solve absolute value equations and inequalities",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Solve: |x - 3| = 7",
                                            choices: ["x = 10 or x = -4", "x = 10 or x = 4", "x = -10 or x = -4", "x = 10 only"],
                                            answer: "x = 10 or x = -4",
                                            explanation: "|x - 3| = 7 means x - 3 = 7 or x - 3 = -7, so x = 10 or x = -4"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Quadratic Functions",
                        quizTopics: ["Graphing Parabolas", "Factoring", "Quadratic Formula"],
                        activities: [
                            {
                                type: "video",
                                title: "The Quadratic Formula",
                                description: "Using the quadratic formula to solve any quadratic equation",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/alg2-2",
                                    notes: "x = (-b ± √(b² - 4ac)) / 2a"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Quadratic Equations",
                                description: "Solve quadratics using various methods",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Solve x² - 5x + 6 = 0 by factoring",
                                            choices: ["x = 2 or x = 3", "x = -2 or x = -3", "x = 1 or x = 6", "x = -1 or x = -6"],
                                            answer: "x = 2 or x = 3",
                                            explanation: "x² - 5x + 6 = (x - 2)(x - 3) = 0, so x = 2 or x = 3"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Polynomials",
                        quizTopics: ["Polynomial Operations", "Factoring Polynomials", "Polynomial Division"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Polynomial Operations",
                                description: "Add, subtract, and multiply polynomials",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Multiply: (x + 2)(x² - 2x + 4)",
                                            choices: ["x³ + 8", "x³ - 8", "x³ + 4x + 8", "x³ - 4x - 8"],
                                            answer: "x³ + 8",
                                            explanation: "This is the sum of cubes pattern: (a + b)(a² - ab + b²) = a³ + b³"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "precalculus",
                name: "Pre-Calculus",
                grade: "11-12th Grade",
                description: "Trigonometry, limits, and preparation for calculus",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Functions and Graphs",
                        quizTopics: ["Function Notation", "Transformations", "Inverse Functions"],
                        activities: [
                            {
                                type: "video",
                                title: "Function Transformations",
                                description: "How to shift, stretch, and reflect functions",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/precalc1",
                                    notes: "f(x - h) shifts right h units, f(x) + k shifts up k units"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Transformations",
                                description: "Identify and apply function transformations",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "How does g(x) = f(x - 3) + 2 transform f(x)?",
                                            choices: [
                                                "Right 3, Up 2",
                                                "Left 3, Up 2",
                                                "Right 3, Down 2",
                                                "Left 3, Down 2"
                                            ],
                                            answer: "Right 3, Up 2",
                                            explanation: "f(x - 3) shifts the graph 3 units right, and +2 shifts it 2 units up."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Trigonometry",
                        quizTopics: ["Unit Circle", "Trig Functions", "Trig Identities"],
                        activities: [
                            {
                                type: "video",
                                title: "The Unit Circle",
                                description: "Master the unit circle for trigonometry",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/precalc2",
                                    notes: "Key angles: 0°, 30°, 45°, 60°, 90° and their coordinates"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Unit Circle",
                                description: "Find trig values using the unit circle",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is sin(30°)?",
                                            choices: ["1/2", "√2/2", "√3/2", "1"],
                                            answer: "1/2",
                                            explanation: "On the unit circle, the point at 30° is (√3/2, 1/2). Sin is the y-coordinate, so sin(30°) = 1/2."
                                        },
                                        {
                                            question: "What is cos(45°)?",
                                            choices: ["1/2", "√2/2", "√3/2", "1"],
                                            answer: "√2/2",
                                            explanation: "At 45°, the coordinates are (√2/2, √2/2). Cos is the x-coordinate."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    science: {
        name: "Science",
        courses: [
            {
                id: "biology",
                name: "Biology",
                grade: "9-10th Grade",
                description: "Life science, cells, genetics, and ecosystems",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Cell Structure and Function",
                        quizTopics: ["Cell Theory", "Organelles", "Cell Transport"],
                        activities: [
                            {
                                type: "video",
                                title: "Cell Organelles Review",
                                description: "Review the structure and function of cell organelles",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/bio1",
                                    notes: "Key organelles: nucleus, mitochondria, ribosomes, ER, Golgi apparatus"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Cell Organelles",
                                description: "Identify organelles and their functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which organelle is known as the 'powerhouse of the cell'?",
                                            choices: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
                                            answer: "Mitochondria",
                                            explanation: "Mitochondria produce ATP through cellular respiration, providing energy for the cell."
                                        },
                                        {
                                            question: "Where is DNA found in a eukaryotic cell?",
                                            choices: ["Cytoplasm", "Ribosome", "Nucleus", "Cell Membrane"],
                                            answer: "Nucleus",
                                            explanation: "In eukaryotic cells, DNA is contained within the nucleus."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Genetics and Heredity",
                        quizTopics: ["DNA Structure", "Punnett Squares", "Inheritance Patterns"],
                        activities: [
                            {
                                type: "video",
                                title: "Punnett Squares",
                                description: "Learn to predict genetic outcomes",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/bio2",
                                    notes: "Dominant alleles (capital) mask recessive alleles (lowercase)"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Genetics",
                                description: "Solve genetics problems using Punnett squares",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "If both parents are heterozygous (Bb) for a trait, what percentage of offspring will be homozygous recessive (bb)?",
                                            choices: ["0%", "25%", "50%", "75%"],
                                            answer: "25%",
                                            explanation: "Bb × Bb gives: BB (25%), Bb (50%), bb (25%). One out of four outcomes is bb."
                                        },
                                        {
                                            question: "What is the genotype of an organism that is homozygous dominant for a trait?",
                                            choices: ["Bb", "bb", "BB", "bB"],
                                            answer: "BB",
                                            explanation: "Homozygous means both alleles are the same. Dominant uses capital letters, so BB."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Photosynthesis and Cellular Respiration",
                        quizTopics: ["Photosynthesis Process", "Cellular Respiration", "ATP Production"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Energy in Cells",
                                description: "Understand how cells produce and use energy",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is the equation for photosynthesis?",
                                            choices: [
                                                "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
                                                "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
                                                "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂",
                                                "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂"
                                            ],
                                            answer: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
                                            explanation: "Photosynthesis uses carbon dioxide and water to produce glucose and oxygen."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "chemistry",
                name: "Chemistry",
                grade: "10-11th Grade",
                description: "Atomic structure, chemical reactions, and stoichiometry",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Atomic Structure",
                        quizTopics: ["Atomic Models", "Electron Configuration", "Periodic Trends"],
                        activities: [
                            {
                                type: "video",
                                title: "Atomic Structure Review",
                                description: "Understanding protons, neutrons, and electrons",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/chem1",
                                    notes: "Atomic number = protons, Mass number = protons + neutrons"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Atomic Structure",
                                description: "Identify subatomic particles and their properties",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "An atom has 17 protons and 18 neutrons. What is its mass number?",
                                            choices: ["17", "18", "35", "1"],
                                            answer: "35",
                                            explanation: "Mass number = protons + neutrons = 17 + 18 = 35"
                                        },
                                        {
                                            question: "What determines the identity of an element?",
                                            choices: ["Number of neutrons", "Number of protons", "Number of electrons", "Mass number"],
                                            answer: "Number of protons",
                                            explanation: "The atomic number (number of protons) uniquely identifies each element."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Chemical Bonding",
                        quizTopics: ["Ionic Bonds", "Covalent Bonds", "Lewis Structures"],
                        activities: [
                            {
                                type: "video",
                                title: "Ionic vs Covalent Bonds",
                                description: "Understanding different types of chemical bonds",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/chem2",
                                    notes: "Ionic = transfer of electrons, Covalent = sharing of electrons"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Chemical Bonding",
                                description: "Identify bond types and draw Lewis structures",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What type of bond forms between sodium (Na) and chlorine (Cl)?",
                                            choices: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
                                            answer: "Ionic",
                                            explanation: "Sodium is a metal that loses an electron, chlorine is a nonmetal that gains an electron. This electron transfer creates an ionic bond."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Stoichiometry",
                        quizTopics: ["Mole Concept", "Balancing Equations", "Mole Ratios"],
                        activities: [
                            {
                                type: "video",
                                title: "The Mole Concept",
                                description: "Understanding Avogadro's number and molar mass",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/chem3",
                                    notes: "1 mole = 6.022 × 10²³ particles"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Stoichiometry",
                                description: "Balance equations and calculate mole ratios",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "How many moles of H₂O are produced when 2 moles of H₂ react with excess O₂? (2H₂ + O₂ → 2H₂O)",
                                            choices: ["1 mole", "2 moles", "4 moles", "0.5 moles"],
                                            answer: "2 moles",
                                            explanation: "The ratio of H₂ to H₂O is 2:2 or 1:1, so 2 moles of H₂ produces 2 moles of H₂O."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "physics",
                name: "Physics",
                grade: "11-12th Grade",
                description: "Motion, forces, energy, and waves",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Motion and Kinematics",
                        quizTopics: ["Speed and Velocity", "Acceleration", "Kinematic Equations"],
                        activities: [
                            {
                                type: "video",
                                title: "Kinematic Equations",
                                description: "Using equations to describe motion",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/phys1",
                                    notes: "Key equations: v = v₀ + at, d = v₀t + ½at², v² = v₀² + 2ad"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Kinematics",
                                description: "Solve motion problems using kinematic equations",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A car accelerates from rest at 2 m/s². What is its velocity after 5 seconds?",
                                            choices: ["2.5 m/s", "5 m/s", "10 m/s", "25 m/s"],
                                            answer: "10 m/s",
                                            explanation: "v = v₀ + at = 0 + (2)(5) = 10 m/s"
                                        },
                                        {
                                            question: "What is the difference between speed and velocity?",
                                            choices: [
                                                "There is no difference",
                                                "Velocity includes direction",
                                                "Speed includes direction",
                                                "Velocity is always faster"
                                            ],
                                            answer: "Velocity includes direction",
                                            explanation: "Speed is a scalar (magnitude only), while velocity is a vector (magnitude and direction)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Forces and Newton's Laws",
                        quizTopics: ["Newton's Laws", "Free Body Diagrams", "Friction"],
                        activities: [
                            {
                                type: "video",
                                title: "Newton's Three Laws",
                                description: "Understanding the laws of motion",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/phys2",
                                    notes: "1st Law: Inertia, 2nd Law: F=ma, 3rd Law: Action-Reaction"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Newton's Laws",
                                description: "Apply Newton's laws to solve force problems",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is the net force on a 10 kg object accelerating at 3 m/s²?",
                                            choices: ["3.3 N", "13 N", "30 N", "0.3 N"],
                                            answer: "30 N",
                                            explanation: "F = ma = (10 kg)(3 m/s²) = 30 N"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Energy and Work",
                        quizTopics: ["Work", "Kinetic Energy", "Potential Energy", "Conservation of Energy"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Energy",
                                description: "Calculate work, kinetic, and potential energy",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is the kinetic energy of a 2 kg object moving at 4 m/s?",
                                            choices: ["4 J", "8 J", "16 J", "32 J"],
                                            answer: "16 J",
                                            explanation: "KE = ½mv² = ½(2)(4)² = ½(2)(16) = 16 J"
                                        },
                                        {
                                            question: "A 5 kg object is lifted 3 meters. What is the change in gravitational potential energy? (g = 10 m/s²)",
                                            choices: ["15 J", "50 J", "150 J", "1.5 J"],
                                            answer: "150 J",
                                            explanation: "PE = mgh = (5)(10)(3) = 150 J"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "earth-science",
                name: "Earth Science",
                grade: "9th Grade",
                description: "Geology, meteorology, oceanography, and astronomy",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Earth's Structure",
                        quizTopics: ["Earth's Layers", "Plate Tectonics", "Rock Cycle"],
                        activities: [
                            {
                                type: "video",
                                title: "Earth's Layers",
                                description: "Understanding the structure of Earth",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/earth1",
                                    notes: "Layers: Crust, Mantle, Outer Core, Inner Core"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Earth's Structure",
                                description: "Identify Earth's layers and their properties",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which layer of Earth is liquid?",
                                            choices: ["Crust", "Mantle", "Outer Core", "Inner Core"],
                                            answer: "Outer Core",
                                            explanation: "The outer core is liquid iron and nickel, while the inner core is solid due to extreme pressure."
                                        },
                                        {
                                            question: "What type of plate boundary causes earthquakes and forms mountains?",
                                            choices: ["Divergent", "Convergent", "Transform", "Subduction only"],
                                            answer: "Convergent",
                                            explanation: "Convergent boundaries occur when plates collide, causing earthquakes and mountain formation."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Weather and Climate",
                        quizTopics: ["Atmosphere", "Weather Patterns", "Climate Zones"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Atmosphere",
                                description: "Understand weather patterns and atmospheric layers",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "In which layer of the atmosphere does weather occur?",
                                            choices: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
                                            answer: "Troposphere",
                                            explanation: "The troposphere is the lowest layer where weather occurs due to convection currents."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "environmental-science",
                name: "Environmental Science",
                grade: "11-12th Grade",
                description: "Ecosystems, human impact, and sustainability",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Ecosystems and Ecology",
                        quizTopics: ["Food Chains", "Energy Flow", "Biogeochemical Cycles"],
                        activities: [
                            {
                                type: "video",
                                title: "Energy Flow in Ecosystems",
                                description: "Understanding trophic levels and energy transfer",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/env1",
                                    notes: "Only ~10% of energy transfers between trophic levels"
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Ecosystems",
                                description: "Understand food webs and energy flow",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "If producers have 10,000 kcal of energy, how much energy is available to secondary consumers?",
                                            choices: ["10,000 kcal", "1,000 kcal", "100 kcal", "10 kcal"],
                                            answer: "100 kcal",
                                            explanation: "Using the 10% rule: Producers (10,000) → Primary consumers (1,000) → Secondary consumers (100)"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Human Impact",
                        quizTopics: ["Pollution", "Climate Change", "Resource Depletion"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Human Impact",
                                description: "Understand environmental challenges and solutions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which greenhouse gas is most responsible for human-caused climate change?",
                                            choices: ["Methane", "Carbon Dioxide", "Nitrous Oxide", "Water Vapor"],
                                            answer: "Carbon Dioxide",
                                            explanation: "While other gases have higher warming potential, CO₂ is released in the largest quantities from burning fossil fuels."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
