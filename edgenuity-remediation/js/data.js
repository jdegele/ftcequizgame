// Edgenuity Remediation Hub - Course Data
// High School Math and Science Courses (Florida Aligned)

const courseData = {
    math: {
        name: "Mathematics",
        courses: [
            {
                id: "algebra1",
                name: "Algebra 1",
                grade: "9th Grade",
                description: "Linear and exponential relationships, equations, and data analysis",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Foundations of Algebra",
                        quizTopics: ["Real Numbers", "Order of Operations", "Variables & Expressions", "Properties of Real Numbers"],
                        activities: [
                            {
                                type: "video",
                                title: "Real Numbers Review",
                                description: "Review the number system including integers, rationals, and irrationals",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/example1",
                                    notes: "Key concepts: Natural numbers, whole numbers, integers, rational numbers, irrational numbers. Remember: Rational numbers can be written as fractions, irrational numbers cannot."
                                }
                            },
                            {
                                type: "practice",
                                title: "Practice Quiz: Real Numbers & Properties",
                                description: "Test your understanding of real number classifications and properties",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which of the following is an irrational number?",
                                            choices: ["3/4", "0.5", "√2", "-7"],
                                            answer: "√2",
                                            explanation: "√2 cannot be expressed as a fraction of two integers, making it irrational. Its decimal never terminates or repeats."
                                        },
                                        {
                                            question: "What is the result of -5 + (-3)?",
                                            choices: ["-8", "8", "-2", "2"],
                                            answer: "-8",
                                            explanation: "Adding two negative numbers: -5 + (-3) = -8. When adding negatives, add the absolute values and keep the negative sign."
                                        },
                                        {
                                            question: "Which property is shown: 3(x + 2) = 3x + 6?",
                                            choices: ["Commutative", "Associative", "Distributive", "Identity"],
                                            answer: "Distributive",
                                            explanation: "The distributive property states that a(b + c) = ab + ac. Here, 3 is distributed to both x and 2."
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
                                    instructions: "Solve each expression using the correct order of operations (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction).",
                                    problems: [
                                        "1. 3 + 4 × 2 = ?",
                                        "2. (5 + 3) × 2 = ?",
                                        "3. 12 ÷ 4 + 2² = ?",
                                        "4. 15 - 3 × (2 + 1) = ?",
                                        "5. 2³ + 4 × 3 - 1 = ?"
                                    ],
                                    answers: ["11", "16", "7", "6", "19"]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Linear Equations",
                        quizTopics: ["One-Step Equations", "Two-Step Equations", "Multi-Step Equations", "Equations with Variables on Both Sides"],
                        activities: [
                            {
                                type: "video",
                                title: "Solving Linear Equations",
                                description: "Step-by-step guide to solving equations",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/example2",
                                    notes: "Remember: What you do to one side, you must do to the other! Goal: Isolate the variable."
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
                                        },
                                        {
                                            question: "Solve for x: 4x - 7 = 2x + 9",
                                            choices: ["x = 1", "x = 8", "x = 2", "x = 16"],
                                            answer: "x = 8",
                                            explanation: "4x - 7 = 2x + 9 → 2x = 16 → x = 8"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Linear Inequalities",
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
                                        },
                                        {
                                            question: "Solve: 3x + 5 ≤ 20",
                                            choices: ["x ≤ 5", "x ≤ 15", "x ≥ 5", "x < 5"],
                                            answer: "x ≤ 5",
                                            explanation: "3x + 5 ≤ 20 → 3x ≤ 15 → x ≤ 5"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Linear Functions",
                        quizTopics: ["Slope", "Slope-Intercept Form", "Graphing Linear Functions", "Writing Linear Equations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Slope and Linear Functions",
                                description: "Calculate slope and work with linear functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Find the slope between points (2, 3) and (6, 11)",
                                            choices: ["2", "4", "8", "1/2"],
                                            answer: "2",
                                            explanation: "Slope = (y₂ - y₁)/(x₂ - x₁) = (11 - 3)/(6 - 2) = 8/4 = 2"
                                        },
                                        {
                                            question: "What is the slope and y-intercept of y = 3x - 5?",
                                            choices: ["slope = 3, y-int = -5", "slope = -5, y-int = 3", "slope = 3, y-int = 5", "slope = -3, y-int = -5"],
                                            answer: "slope = 3, y-int = -5",
                                            explanation: "In y = mx + b form, m is the slope (3) and b is the y-intercept (-5)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Systems of Equations",
                        quizTopics: ["Graphing Systems", "Substitution Method", "Elimination Method", "Applications"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Systems of Equations",
                                description: "Solve systems using various methods",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Solve the system: y = 2x + 1 and y = -x + 7",
                                            choices: ["(2, 5)", "(3, 7)", "(1, 3)", "(4, 9)"],
                                            answer: "(2, 5)",
                                            explanation: "Set equations equal: 2x + 1 = -x + 7 → 3x = 6 → x = 2. Then y = 2(2) + 1 = 5."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit6",
                        name: "Unit 6: Exponents and Exponential Functions",
                        quizTopics: ["Laws of Exponents", "Exponential Growth", "Exponential Decay"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Exponents",
                                description: "Apply exponent rules and work with exponential functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Simplify: x³ · x⁵",
                                            choices: ["x⁸", "x¹⁵", "x²", "2x⁸"],
                                            answer: "x⁸",
                                            explanation: "When multiplying with same base, add exponents: x³ · x⁵ = x³⁺⁵ = x⁸"
                                        },
                                        {
                                            question: "Simplify: (x²)⁴",
                                            choices: ["x⁶", "x⁸", "x²", "4x²"],
                                            answer: "x⁸",
                                            explanation: "When raising a power to a power, multiply exponents: (x²)⁴ = x²ˣ⁴ = x⁸"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit7",
                        name: "Unit 7: Polynomials",
                        quizTopics: ["Adding/Subtracting Polynomials", "Multiplying Polynomials", "Factoring"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Polynomials",
                                description: "Perform operations with polynomials",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Multiply: (x + 3)(x + 5)",
                                            choices: ["x² + 8x + 15", "x² + 15", "x² + 8x + 8", "2x + 8"],
                                            answer: "x² + 8x + 15",
                                            explanation: "Use FOIL: x² + 5x + 3x + 15 = x² + 8x + 15"
                                        },
                                        {
                                            question: "Factor: x² + 7x + 12",
                                            choices: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x - 3)(x - 4)"],
                                            answer: "(x + 3)(x + 4)",
                                            explanation: "Find two numbers that multiply to 12 and add to 7: 3 and 4. So (x + 3)(x + 4)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit8",
                        name: "Unit 8: Quadratic Functions",
                        quizTopics: ["Graphing Parabolas", "Solving Quadratics", "Quadratic Formula"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Quadratics",
                                description: "Work with quadratic functions and equations",
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
                        id: "unit9",
                        name: "Unit 9: Data Analysis",
                        quizTopics: ["Mean, Median, Mode", "Box Plots", "Scatter Plots", "Line of Best Fit"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Data Analysis",
                                description: "Analyze and interpret data",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Find the median of: 3, 7, 9, 12, 15",
                                            choices: ["7", "9", "9.2", "12"],
                                            answer: "9",
                                            explanation: "The median is the middle value when data is ordered. Here, 9 is in the middle position."
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
                description: "Congruence, similarity, trigonometry, and geometric proofs",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Foundations of Geometry",
                        quizTopics: ["Points, Lines, Planes", "Segments and Angles", "Angle Relationships", "Basic Constructions"],
                        activities: [
                            {
                                type: "video",
                                title: "Basic Geometric Terms",
                                description: "Learn the building blocks of geometry",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/geo1",
                                    notes: "Points have no dimension, lines extend infinitely in both directions, rays extend infinitely in one direction, segments have two endpoints."
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
                                        },
                                        {
                                            question: "Two angles are complementary. One is 37°. What is the other?",
                                            choices: ["143°", "53°", "37°", "63°"],
                                            answer: "53°",
                                            explanation: "Complementary angles sum to 90°. So 90° - 37° = 53°"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Transformations",
                        quizTopics: ["Translations", "Reflections", "Rotations", "Dilations", "Symmetry"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Transformations",
                                description: "Identify and apply geometric transformations",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which transformation slides a figure without rotating or flipping it?",
                                            choices: ["Reflection", "Rotation", "Translation", "Dilation"],
                                            answer: "Translation",
                                            explanation: "A translation slides every point of a figure the same distance and direction."
                                        },
                                        {
                                            question: "A dilation with scale factor 2 will:",
                                            choices: ["Make the figure half as large", "Make the figure twice as large", "Rotate the figure 180°", "Flip the figure"],
                                            answer: "Make the figure twice as large",
                                            explanation: "Scale factor > 1 enlarges the figure. Scale factor 2 doubles all lengths."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Parallel Lines & Transversals",
                        quizTopics: ["Parallel Line Properties", "Angle Pairs", "Proving Lines Parallel"],
                        activities: [
                            {
                                type: "video",
                                title: "Parallel Lines Cut by a Transversal",
                                description: "Understanding angle relationships with parallel lines",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/geo2",
                                    notes: "Corresponding angles are equal, alternate interior angles are equal, alternate exterior angles are equal, consecutive interior angles are supplementary."
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
                                        },
                                        {
                                            question: "Consecutive interior angles formed by parallel lines and a transversal are:",
                                            choices: ["Congruent", "Complementary", "Supplementary", "Equal to 90°"],
                                            answer: "Supplementary",
                                            explanation: "Consecutive (same-side) interior angles are supplementary, meaning they add up to 180°."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Triangles",
                        quizTopics: ["Triangle Classification", "Triangle Sum Theorem", "Exterior Angle Theorem", "Triangle Congruence (SSS, SAS, ASA, AAS)"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Triangle Properties",
                                description: "Work with triangle theorems and congruence",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "The three angles of a triangle measure 45°, 65°, and x°. Find x.",
                                            choices: ["70°", "80°", "90°", "110°"],
                                            answer: "70°",
                                            explanation: "Triangle angles sum to 180°: 45 + 65 + x = 180, so x = 70°"
                                        },
                                        {
                                            question: "Which postulate proves triangles congruent using two sides and the included angle?",
                                            choices: ["SSS", "SAS", "ASA", "AAS"],
                                            answer: "SAS",
                                            explanation: "SAS (Side-Angle-Side) uses two sides and the angle between them."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Right Triangles & Trigonometry",
                        quizTopics: ["Pythagorean Theorem", "Special Right Triangles", "Sine, Cosine, Tangent"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Right Triangles",
                                description: "Apply the Pythagorean theorem and trigonometric ratios",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "In a right triangle with legs 3 and 4, what is the hypotenuse?",
                                            choices: ["5", "6", "7", "12"],
                                            answer: "5",
                                            explanation: "a² + b² = c² → 3² + 4² = 9 + 16 = 25 → c = 5"
                                        },
                                        {
                                            question: "In a 45-45-90 triangle, if one leg is 6, what is the hypotenuse?",
                                            choices: ["6", "6√2", "12", "3√2"],
                                            answer: "6√2",
                                            explanation: "In a 45-45-90 triangle, hypotenuse = leg × √2 = 6√2"
                                        },
                                        {
                                            question: "SOH-CAH-TOA: Sine equals:",
                                            choices: ["Adjacent/Hypotenuse", "Opposite/Hypotenuse", "Opposite/Adjacent", "Hypotenuse/Opposite"],
                                            answer: "Opposite/Hypotenuse",
                                            explanation: "SOH: Sine = Opposite/Hypotenuse"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit6",
                        name: "Unit 6: Quadrilaterals",
                        quizTopics: ["Parallelograms", "Rectangles, Rhombi, Squares", "Trapezoids", "Properties and Proofs"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Quadrilaterals",
                                description: "Identify quadrilaterals and their properties",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which quadrilateral has all sides congruent and all angles 90°?",
                                            choices: ["Rectangle", "Rhombus", "Square", "Parallelogram"],
                                            answer: "Square",
                                            explanation: "A square is both a rectangle (4 right angles) and a rhombus (4 equal sides)."
                                        },
                                        {
                                            question: "The diagonals of a parallelogram:",
                                            choices: ["Are perpendicular", "Are congruent", "Bisect each other", "Are parallel"],
                                            answer: "Bisect each other",
                                            explanation: "In all parallelograms, the diagonals bisect each other (cut each other in half)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit7",
                        name: "Unit 7: Circles",
                        quizTopics: ["Parts of Circles", "Central and Inscribed Angles", "Arc Length", "Area of Sectors"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Circles",
                                description: "Work with circle properties and measurements",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "An inscribed angle is half of:",
                                            choices: ["The radius", "The diameter", "Its intercepted arc", "The circumference"],
                                            answer: "Its intercepted arc",
                                            explanation: "The Inscribed Angle Theorem states that an inscribed angle is half the measure of its intercepted arc."
                                        },
                                        {
                                            question: "Find the area of a circle with radius 5 (use π ≈ 3.14)",
                                            choices: ["15.7", "31.4", "78.5", "25"],
                                            answer: "78.5",
                                            explanation: "Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.5"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit8",
                        name: "Unit 8: Area and Volume",
                        quizTopics: ["Area of Polygons", "Surface Area", "Volume of Prisms, Cylinders, Cones, Spheres"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Area and Volume",
                                description: "Calculate area, surface area, and volume",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Find the volume of a rectangular prism: length=4, width=3, height=5",
                                            choices: ["12", "35", "60", "47"],
                                            answer: "60",
                                            explanation: "Volume = length × width × height = 4 × 3 × 5 = 60 cubic units"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit9",
                        name: "Unit 9: Similarity",
                        quizTopics: ["Similar Polygons", "AA Similarity", "Proportions in Similar Figures"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Similarity",
                                description: "Work with similar figures and proportions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Two triangles are similar. The first has sides 3, 4, 5. The second has a shortest side of 6. What is the longest side?",
                                            choices: ["8", "10", "12", "15"],
                                            answer: "10",
                                            explanation: "Scale factor = 6/3 = 2. Longest side = 5 × 2 = 10"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit10",
                        name: "Unit 10: Probability",
                        quizTopics: ["Theoretical Probability", "Compound Events", "Permutations and Combinations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Probability",
                                description: "Calculate probabilities of events",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A bag has 3 red and 5 blue marbles. What is P(red)?",
                                            choices: ["3/8", "5/8", "3/5", "1/2"],
                                            answer: "3/8",
                                            explanation: "P(red) = favorable outcomes / total outcomes = 3/8"
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
                description: "Advanced functions, polynomials, logarithms, and complex numbers",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Equations and Inequalities",
                        quizTopics: ["Absolute Value Equations", "Absolute Value Inequalities", "Literal Equations"],
                        activities: [
                            {
                                type: "video",
                                title: "Absolute Value Equations",
                                description: "Solving equations with absolute value",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/alg2-1",
                                    notes: "Remember: |x| = a means x = a OR x = -a. Always check for extraneous solutions!"
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
                                        },
                                        {
                                            question: "Solve: |2x + 1| < 5",
                                            choices: ["x < 2", "-3 < x < 2", "x > -3", "x < -3 or x > 2"],
                                            answer: "-3 < x < 2",
                                            explanation: "|2x + 1| < 5 means -5 < 2x + 1 < 5, so -6 < 2x < 4, giving -3 < x < 2"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Linear Functions and Systems",
                        quizTopics: ["Linear Functions Review", "Systems of Equations", "Systems of Inequalities", "Linear Programming"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Systems",
                                description: "Solve systems of equations and inequalities",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Solve: 2x + y = 7 and x - y = 2",
                                            choices: ["(3, 1)", "(2, 3)", "(1, 5)", "(4, -1)"],
                                            answer: "(3, 1)",
                                            explanation: "Adding equations: 3x = 9, so x = 3. Then 3 - y = 2, so y = 1."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Quadratic Functions",
                        quizTopics: ["Graphing Parabolas", "Vertex Form", "Factoring", "Completing the Square", "Quadratic Formula"],
                        activities: [
                            {
                                type: "video",
                                title: "The Quadratic Formula",
                                description: "Using the quadratic formula to solve any quadratic equation",
                                icon: "&#127909;",
                                content: {
                                    videoUrl: "https://www.youtube.com/embed/alg2-2",
                                    notes: "x = (-b ± √(b² - 4ac)) / 2a. The discriminant (b² - 4ac) tells you how many solutions exist."
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
                                        },
                                        {
                                            question: "What is the discriminant of x² + 4x + 4 = 0?",
                                            choices: ["0", "8", "16", "-16"],
                                            answer: "0",
                                            explanation: "Discriminant = b² - 4ac = 16 - 16 = 0. This means one repeated real solution."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Polynomials",
                        quizTopics: ["Polynomial Operations", "Factoring Polynomials", "Polynomial Division", "Remainder and Factor Theorems"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Polynomial Operations",
                                description: "Add, subtract, multiply, and divide polynomials",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Multiply: (x + 2)(x² - 2x + 4)",
                                            choices: ["x³ + 8", "x³ - 8", "x³ + 4x + 8", "x³ - 4x - 8"],
                                            answer: "x³ + 8",
                                            explanation: "This is the sum of cubes pattern: (a + b)(a² - ab + b²) = a³ + b³"
                                        },
                                        {
                                            question: "If P(x) = x³ - 2x + 1, find P(2)",
                                            choices: ["5", "9", "1", "-3"],
                                            answer: "5",
                                            explanation: "P(2) = 2³ - 2(2) + 1 = 8 - 4 + 1 = 5"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Rational Expressions",
                        quizTopics: ["Simplifying Rational Expressions", "Multiplying/Dividing", "Adding/Subtracting", "Solving Rational Equations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Rational Expressions",
                                description: "Work with algebraic fractions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Simplify: (x² - 9)/(x + 3)",
                                            choices: ["x - 3", "x + 3", "x² - 3", "Cannot simplify"],
                                            answer: "x - 3",
                                            explanation: "(x² - 9)/(x + 3) = (x+3)(x-3)/(x+3) = x - 3"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit6",
                        name: "Unit 6: Radical Functions",
                        quizTopics: ["Simplifying Radicals", "Operations with Radicals", "Solving Radical Equations", "Rational Exponents"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Radicals",
                                description: "Simplify and solve with radicals",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Simplify: √50",
                                            choices: ["5√2", "25√2", "2√5", "10√5"],
                                            answer: "5√2",
                                            explanation: "√50 = √(25 × 2) = √25 × √2 = 5√2"
                                        },
                                        {
                                            question: "Write x^(2/3) in radical form",
                                            choices: ["∛x²", "√x³", "(√x)³", "³√x"],
                                            answer: "∛x²",
                                            explanation: "x^(2/3) = ∛x² = (∛x)². The denominator is the index, numerator is the power."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit7",
                        name: "Unit 7: Exponential and Logarithmic Functions",
                        quizTopics: ["Exponential Functions", "Logarithms", "Properties of Logarithms", "Solving Exponential/Log Equations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Logarithms",
                                description: "Work with exponential and logarithmic functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Evaluate: log₂(8)",
                                            choices: ["2", "3", "4", "8"],
                                            answer: "3",
                                            explanation: "log₂(8) = 3 because 2³ = 8"
                                        },
                                        {
                                            question: "Expand: log(xy²)",
                                            choices: ["log x + log y²", "log x + 2log y", "log x × 2log y", "2log(xy)"],
                                            answer: "log x + 2log y",
                                            explanation: "log(xy²) = log x + log y² = log x + 2log y"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit8",
                        name: "Unit 8: Sequences and Series",
                        quizTopics: ["Arithmetic Sequences", "Geometric Sequences", "Series and Summation"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Sequences",
                                description: "Work with arithmetic and geometric sequences",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Find the 10th term: 3, 7, 11, 15, ...",
                                            choices: ["39", "43", "35", "47"],
                                            answer: "39",
                                            explanation: "This is arithmetic with d = 4. a₁₀ = 3 + (10-1)(4) = 3 + 36 = 39"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit9",
                        name: "Unit 9: Trigonometry",
                        quizTopics: ["Trig Ratios", "Unit Circle", "Graphing Trig Functions"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Trigonometry",
                                description: "Work with trigonometric functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is sin(30°)?",
                                            choices: ["1/2", "√2/2", "√3/2", "1"],
                                            answer: "1/2",
                                            explanation: "sin(30°) = 1/2 is a special angle value to memorize."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit10",
                        name: "Unit 10: Statistics and Probability",
                        quizTopics: ["Normal Distribution", "Standard Deviation", "Probability"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Statistics",
                                description: "Analyze data using statistical methods",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "In a normal distribution, approximately what percent of data falls within 1 standard deviation of the mean?",
                                            choices: ["50%", "68%", "95%", "99%"],
                                            answer: "68%",
                                            explanation: "The 68-95-99.7 rule: About 68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "mca",
                name: "Math for College Algebra (MCA)",
                grade: "12th Grade",
                description: "College-prep algebra: functions, equations, and modeling (Florida B.E.S.T.)",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Algebraic Expressions and Equations",
                        quizTopics: ["Laws of Exponents", "Polynomial Expressions", "Rational Expressions", "Radical Expressions"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Exponent Laws",
                                description: "Master the laws of exponents with numerical and algebraic expressions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Simplify: (2x³y²)³",
                                            choices: ["6x⁹y⁶", "8x⁹y⁶", "2x⁹y⁶", "8x⁶y⁵"],
                                            answer: "8x⁹y⁶",
                                            explanation: "(2x³y²)³ = 2³ × x⁹ × y⁶ = 8x⁹y⁶"
                                        },
                                        {
                                            question: "Simplify: x⁻² × x⁵",
                                            choices: ["x³", "x⁻¹⁰", "x⁷", "x⁻³"],
                                            answer: "x³",
                                            explanation: "x⁻² × x⁵ = x⁻²⁺⁵ = x³"
                                        },
                                        {
                                            question: "Simplify: (x⁴/x⁷)²",
                                            choices: ["x⁻⁶", "x⁶", "x⁻³", "1/x⁶"],
                                            answer: "x⁻⁶",
                                            explanation: "(x⁴/x⁷)² = (x⁻³)² = x⁻⁶ or 1/x⁶"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Functions",
                        quizTopics: ["Function Notation", "Domain and Range", "Function Operations", "Inverse Functions", "Composition of Functions"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Functions",
                                description: "Work with function notation, inverses, and composition",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "If f(x) = 2x + 3 and g(x) = x², find (f ∘ g)(2)",
                                            choices: ["11", "14", "49", "7"],
                                            answer: "11",
                                            explanation: "(f ∘ g)(2) = f(g(2)) = f(4) = 2(4) + 3 = 11"
                                        },
                                        {
                                            question: "Find the inverse of f(x) = 3x - 6",
                                            choices: ["f⁻¹(x) = (x+6)/3", "f⁻¹(x) = 3x + 6", "f⁻¹(x) = x/3 + 6", "f⁻¹(x) = (x-6)/3"],
                                            answer: "f⁻¹(x) = (x+6)/3",
                                            explanation: "y = 3x - 6 → x = 3y - 6 → x + 6 = 3y → y = (x+6)/3"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Linear and Absolute Value Functions",
                        quizTopics: ["Linear Functions", "Absolute Value Functions", "Piecewise Functions", "Systems of Linear Equations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Linear and Absolute Value",
                                description: "Model with linear, absolute value, and piecewise functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "The graph of f(x) = |x - 2| + 3 has its vertex at:",
                                            choices: ["(2, 3)", "(-2, 3)", "(2, -3)", "(3, 2)"],
                                            answer: "(2, 3)",
                                            explanation: "The vertex form |x - h| + k has vertex (h, k). Here h = 2, k = 3."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Quadratic Functions",
                        quizTopics: ["Graphing Quadratics", "Completing the Square", "Quadratic Formula", "Applications"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Quadratics",
                                description: "Analyze and apply quadratic functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Convert to vertex form: f(x) = x² - 6x + 5",
                                            choices: ["(x-3)² - 4", "(x-3)² + 4", "(x+3)² - 4", "(x-6)² + 5"],
                                            answer: "(x-3)² - 4",
                                            explanation: "Complete the square: x² - 6x + 9 - 9 + 5 = (x-3)² - 4"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Polynomial Functions",
                        quizTopics: ["Polynomial Operations", "Factoring", "Zeros of Polynomials", "End Behavior"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Polynomials",
                                description: "Work with polynomial functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is the end behavior of f(x) = -2x³ + 5x?",
                                            choices: ["Up left, down right", "Down left, up right", "Up both ends", "Down both ends"],
                                            answer: "Up left, down right",
                                            explanation: "Odd degree with negative leading coefficient: rises left, falls right."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit6",
                        name: "Unit 6: Rational Functions",
                        quizTopics: ["Simplifying Rational Expressions", "Solving Rational Equations", "Asymptotes"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Rational Functions",
                                description: "Analyze and solve with rational functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Find the vertical asymptote of f(x) = 3/(x - 4)",
                                            choices: ["x = 4", "x = -4", "y = 4", "y = 0"],
                                            answer: "x = 4",
                                            explanation: "Vertical asymptotes occur where the denominator equals zero: x - 4 = 0, so x = 4."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit7",
                        name: "Unit 7: Exponential Functions",
                        quizTopics: ["Exponential Growth/Decay", "Compound Interest", "Solving Exponential Equations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Exponential Functions",
                                description: "Model with exponential functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A population doubles every 5 years. If P₀ = 100, what is P after 15 years?",
                                            choices: ["200", "400", "800", "1600"],
                                            answer: "800",
                                            explanation: "After 15 years = 3 doubling periods: 100 × 2³ = 100 × 8 = 800"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit8",
                        name: "Unit 8: Logarithmic Functions",
                        quizTopics: ["Logarithm Properties", "Solving Logarithmic Equations", "Change of Base"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Logarithms",
                                description: "Work with logarithmic functions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Solve: log₃(x) = 4",
                                            choices: ["x = 12", "x = 64", "x = 81", "x = 7"],
                                            answer: "x = 81",
                                            explanation: "log₃(x) = 4 means 3⁴ = x, so x = 81"
                                        },
                                        {
                                            question: "Condense: 2log(x) + log(y) - log(z)",
                                            choices: ["log(x²y/z)", "log(2xy/z)", "log(x²yz)", "log((x+y)/z)"],
                                            answer: "log(x²y/z)",
                                            explanation: "2log(x) = log(x²), then log(x²) + log(y) = log(x²y), and log(x²y) - log(z) = log(x²y/z)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "mcla",
                name: "Math for College Liberal Arts (MCLA)",
                grade: "12th Grade",
                description: "Real-world math: functions, geometry, data analysis, and logic (Florida B.E.S.T.)",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Linear Functions and Applications",
                        quizTopics: ["Linear Equations", "Slope and Rate of Change", "Linear Models", "Systems of Equations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Linear Applications",
                                description: "Apply linear functions to real-world situations",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A phone plan costs $30/month plus $0.10 per text. Write a cost function C(t) for t texts.",
                                            choices: ["C(t) = 30t + 0.10", "C(t) = 0.10t + 30", "C(t) = 30.10t", "C(t) = 30 - 0.10t"],
                                            answer: "C(t) = 0.10t + 30",
                                            explanation: "The cost is $30 (fixed) plus $0.10 per text: C(t) = 0.10t + 30"
                                        },
                                        {
                                            question: "What does the slope represent in a linear cost function?",
                                            choices: ["Fixed cost", "Total cost", "Rate of change/cost per unit", "Initial value"],
                                            answer: "Rate of change/cost per unit",
                                            explanation: "Slope represents the rate of change - how much the cost increases per additional unit."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Exponential Functions and Applications",
                        quizTopics: ["Exponential Growth", "Exponential Decay", "Compound Interest", "Modeling"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Exponential Applications",
                                description: "Model growth and decay in real-world contexts",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "You invest $1000 at 5% annual interest compounded annually. What is the balance after 3 years?",
                                            choices: ["$1150.00", "$1157.63", "$1150.50", "$1152.50"],
                                            answer: "$1157.63",
                                            explanation: "A = P(1 + r)ⁿ = 1000(1.05)³ = 1000(1.157625) ≈ $1157.63"
                                        },
                                        {
                                            question: "A car depreciates 15% per year. Starting at $20,000, which function models its value?",
                                            choices: ["V(t) = 20000(0.85)ᵗ", "V(t) = 20000(1.15)ᵗ", "V(t) = 20000 - 0.15t", "V(t) = 20000(0.15)ᵗ"],
                                            answer: "V(t) = 20000(0.85)ᵗ",
                                            explanation: "15% decay means multiplying by 0.85 each year: V(t) = 20000(0.85)ᵗ"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Geometry in the Real World",
                        quizTopics: ["Perimeter and Area", "Surface Area and Volume", "Similar Figures and Scale", "Geometric Modeling"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Geometric Applications",
                                description: "Apply geometry to solve real-world problems",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A room is 12 ft by 15 ft. How much carpet (in square feet) is needed?",
                                            choices: ["27 sq ft", "54 sq ft", "180 sq ft", "360 sq ft"],
                                            answer: "180 sq ft",
                                            explanation: "Area = length × width = 12 × 15 = 180 square feet"
                                        },
                                        {
                                            question: "A map has scale 1 inch = 50 miles. If two cities are 3.5 inches apart on the map, what is the actual distance?",
                                            choices: ["150 miles", "175 miles", "100 miles", "200 miles"],
                                            answer: "175 miles",
                                            explanation: "Actual distance = 3.5 × 50 = 175 miles"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Data Analysis",
                        quizTopics: ["Measures of Center", "Measures of Spread", "Data Displays", "Interpreting Data"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Data Analysis",
                                description: "Analyze and interpret univariate and bivariate data",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Data set: 2, 5, 5, 7, 8, 9, 12. Find the median.",
                                            choices: ["5", "7", "6.86", "8"],
                                            answer: "7",
                                            explanation: "With 7 values, the median is the 4th value (middle): 7"
                                        },
                                        {
                                            question: "Which measure of center is most affected by outliers?",
                                            choices: ["Median", "Mode", "Mean", "Range"],
                                            answer: "Mean",
                                            explanation: "The mean uses all values in calculation, so extreme values (outliers) pull it up or down."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Probability",
                        quizTopics: ["Basic Probability", "Compound Events", "Conditional Probability", "Expected Value"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Probability",
                                description: "Calculate and apply probability concepts",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A deck has 52 cards. P(drawing a heart)?",
                                            choices: ["1/52", "1/13", "1/4", "1/2"],
                                            answer: "1/4",
                                            explanation: "13 hearts in 52 cards: P(heart) = 13/52 = 1/4"
                                        },
                                        {
                                            question: "Two fair coins are flipped. P(both heads)?",
                                            choices: ["1/2", "1/4", "1/3", "2/4"],
                                            answer: "1/4",
                                            explanation: "P(H) × P(H) = 1/2 × 1/2 = 1/4"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit6",
                        name: "Unit 6: Logic and Set Theory",
                        quizTopics: ["Set Operations", "Venn Diagrams", "Logical Statements", "Conditional Statements"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Logic and Sets",
                                description: "Work with sets and logical reasoning",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find A ∩ B",
                                            choices: ["{1, 2, 3, 4, 5, 6}", "{3, 4}", "{1, 2, 5, 6}", "{1, 2}"],
                                            answer: "{3, 4}",
                                            explanation: "A ∩ B (intersection) contains elements in BOTH sets: {3, 4}"
                                        },
                                        {
                                            question: "What is the contrapositive of 'If it rains, then the ground is wet'?",
                                            choices: ["If the ground is wet, then it rains", "If it doesn't rain, the ground is not wet", "If the ground is not wet, then it doesn't rain", "It rains and the ground is wet"],
                                            answer: "If the ground is not wet, then it doesn't rain",
                                            explanation: "Contrapositive: negate both parts and reverse. If not Q, then not P."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit7",
                        name: "Unit 7: Financial Mathematics",
                        quizTopics: ["Simple Interest", "Compound Interest", "Loans and Payments", "Budgeting"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Financial Math",
                                description: "Apply math to financial decisions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Simple interest: Principal=$500, Rate=4%, Time=3 years. Find interest earned.",
                                            choices: ["$20", "$60", "$600", "$560"],
                                            answer: "$60",
                                            explanation: "I = Prt = 500 × 0.04 × 3 = $60"
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
                id: "physical-science",
                name: "Physical Science",
                grade: "9th Grade",
                description: "Introduction to chemistry and physics concepts",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Introduction to Science",
                        quizTopics: ["Scientific Method", "Measurement", "Lab Safety"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Scientific Method",
                                description: "Understand the steps of scientific inquiry",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is the correct order of the scientific method?",
                                            choices: ["Hypothesis, Question, Experiment, Conclusion", "Question, Hypothesis, Experiment, Conclusion", "Experiment, Question, Hypothesis, Conclusion", "Question, Experiment, Hypothesis, Conclusion"],
                                            answer: "Question, Hypothesis, Experiment, Conclusion",
                                            explanation: "The scientific method starts with a question, then forming a hypothesis, testing it with an experiment, and drawing conclusions."
                                        },
                                        {
                                            question: "A hypothesis must be:",
                                            choices: ["Proven true", "Testable", "Complex", "Published"],
                                            answer: "Testable",
                                            explanation: "A hypothesis must be testable through experimentation or observation."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Matter and Its Properties",
                        quizTopics: ["States of Matter", "Physical vs Chemical Properties", "Density"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Properties of Matter",
                                description: "Classify matter and identify properties",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which is a chemical property?",
                                            choices: ["Color", "Density", "Flammability", "Melting point"],
                                            answer: "Flammability",
                                            explanation: "Flammability describes how a substance reacts with oxygen - it's a chemical property because it involves chemical change."
                                        },
                                        {
                                            question: "Calculate density: mass = 40g, volume = 8 cm³",
                                            choices: ["5 g/cm³", "320 g/cm³", "0.2 g/cm³", "48 g/cm³"],
                                            answer: "5 g/cm³",
                                            explanation: "Density = mass/volume = 40g / 8cm³ = 5 g/cm³"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Atomic Structure",
                        quizTopics: ["Atoms", "Subatomic Particles", "Atomic Number and Mass"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Atoms",
                                description: "Understand atomic structure",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Which subatomic particle has no charge?",
                                            choices: ["Proton", "Electron", "Neutron", "Ion"],
                                            answer: "Neutron",
                                            explanation: "Protons are positive, electrons are negative, and neutrons have no charge (neutral)."
                                        },
                                        {
                                            question: "An atom has 6 protons. What element is it?",
                                            choices: ["Oxygen", "Carbon", "Nitrogen", "Helium"],
                                            answer: "Carbon",
                                            explanation: "The atomic number (number of protons) identifies the element. Carbon has 6 protons."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: The Periodic Table",
                        quizTopics: ["Periodic Table Organization", "Groups and Periods", "Element Properties"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Periodic Table",
                                description: "Navigate and understand the periodic table",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Elements in the same column (group) have:",
                                            choices: ["Same number of protons", "Similar chemical properties", "Same mass", "Same number of neutrons"],
                                            answer: "Similar chemical properties",
                                            explanation: "Elements in the same group have the same number of valence electrons, giving them similar chemical properties."
                                        },
                                        {
                                            question: "Which group contains the noble gases?",
                                            choices: ["Group 1", "Group 17", "Group 18", "Group 2"],
                                            answer: "Group 18",
                                            explanation: "Noble gases (He, Ne, Ar, Kr, Xe, Rn) are in Group 18, the rightmost column."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Chemical Bonding",
                        quizTopics: ["Ionic Bonds", "Covalent Bonds", "Metallic Bonds"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Chemical Bonds",
                                description: "Understand how atoms bond together",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "In an ionic bond, electrons are:",
                                            choices: ["Shared equally", "Transferred", "Destroyed", "Created"],
                                            answer: "Transferred",
                                            explanation: "In ionic bonds, electrons are transferred from one atom to another, creating ions."
                                        },
                                        {
                                            question: "NaCl is an example of what type of compound?",
                                            choices: ["Covalent", "Ionic", "Metallic", "Organic"],
                                            answer: "Ionic",
                                            explanation: "NaCl (table salt) is formed when sodium transfers an electron to chlorine, creating an ionic bond."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit6",
                        name: "Unit 6: Chemical Reactions",
                        quizTopics: ["Types of Reactions", "Balancing Equations", "Conservation of Mass"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Chemical Reactions",
                                description: "Identify and balance chemical reactions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "In a balanced equation, what is conserved?",
                                            choices: ["Energy only", "Mass only", "Both mass and atoms", "Neither"],
                                            answer: "Both mass and atoms",
                                            explanation: "The Law of Conservation of Mass states that matter cannot be created or destroyed. Atoms are rearranged, not created or destroyed."
                                        },
                                        {
                                            question: "Balance: _H₂ + _O₂ → _H₂O",
                                            choices: ["1, 1, 1", "2, 1, 2", "2, 2, 2", "1, 2, 2"],
                                            answer: "2, 1, 2",
                                            explanation: "2H₂ + O₂ → 2H₂O. This gives 4 H atoms and 2 O atoms on each side."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit7",
                        name: "Unit 7: Motion",
                        quizTopics: ["Speed and Velocity", "Acceleration", "Graphing Motion"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Motion",
                                description: "Describe and calculate motion",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A car travels 150 km in 3 hours. What is its average speed?",
                                            choices: ["450 km/h", "50 km/h", "153 km/h", "147 km/h"],
                                            answer: "50 km/h",
                                            explanation: "Speed = distance/time = 150 km / 3 h = 50 km/h"
                                        },
                                        {
                                            question: "What is the difference between speed and velocity?",
                                            choices: ["No difference", "Velocity includes direction", "Speed is faster", "Velocity is always positive"],
                                            answer: "Velocity includes direction",
                                            explanation: "Speed is a scalar (magnitude only), velocity is a vector (magnitude and direction)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit8",
                        name: "Unit 8: Forces",
                        quizTopics: ["Types of Forces", "Newton's Laws", "Gravity and Friction"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Forces",
                                description: "Understand forces and Newton's Laws",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Newton's First Law describes:",
                                            choices: ["F = ma", "Action-reaction pairs", "Inertia", "Gravity"],
                                            answer: "Inertia",
                                            explanation: "Newton's First Law (Law of Inertia): An object at rest stays at rest, and an object in motion stays in motion unless acted upon by a force."
                                        },
                                        {
                                            question: "A 5 kg object accelerates at 3 m/s². What is the net force?",
                                            choices: ["8 N", "15 N", "1.67 N", "2 N"],
                                            answer: "15 N",
                                            explanation: "F = ma = 5 kg × 3 m/s² = 15 N"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit9",
                        name: "Unit 9: Energy",
                        quizTopics: ["Forms of Energy", "Energy Transformations", "Conservation of Energy"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Energy",
                                description: "Understand energy and its transformations",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A ball at the top of a hill has maximum:",
                                            choices: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"],
                                            answer: "Potential energy",
                                            explanation: "At the top, the ball has maximum gravitational potential energy due to its height."
                                        },
                                        {
                                            question: "Energy can be:",
                                            choices: ["Created", "Destroyed", "Transferred or transformed", "Lost forever"],
                                            answer: "Transferred or transformed",
                                            explanation: "The Law of Conservation of Energy: Energy cannot be created or destroyed, only transferred or transformed."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit10",
                        name: "Unit 10: Waves",
                        quizTopics: ["Wave Properties", "Sound Waves", "Light and the EM Spectrum"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Waves",
                                description: "Understand wave behavior and properties",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Wavelength is:",
                                            choices: ["The height of a wave", "The distance between two crests", "The speed of a wave", "The number of waves per second"],
                                            answer: "The distance between two crests",
                                            explanation: "Wavelength is the distance from one point on a wave to the corresponding point on the next wave (crest to crest)."
                                        },
                                        {
                                            question: "Sound waves are what type of wave?",
                                            choices: ["Transverse", "Longitudinal", "Electromagnetic", "Surface"],
                                            answer: "Longitudinal",
                                            explanation: "Sound waves are longitudinal waves where particles vibrate parallel to the direction of energy transfer."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: "biology",
                name: "Biology",
                grade: "10th Grade",
                description: "Life science, cells, genetics, and ecosystems",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Cell Structure and Function",
                        quizTopics: ["Cell Theory", "Organelles", "Cell Transport", "Prokaryotes vs Eukaryotes"],
                        activities: [
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
                                            explanation: "In eukaryotic cells, DNA is contained within the membrane-bound nucleus."
                                        },
                                        {
                                            question: "Which structure is found in plant cells but NOT animal cells?",
                                            choices: ["Nucleus", "Cell wall", "Mitochondria", "Ribosome"],
                                            answer: "Cell wall",
                                            explanation: "Plant cells have a rigid cell wall made of cellulose; animal cells only have a cell membrane."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Genetics and Heredity",
                        quizTopics: ["DNA Structure", "Punnett Squares", "Inheritance Patterns", "Mutations"],
                        activities: [
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
                                            question: "What are the base pairing rules for DNA?",
                                            choices: ["A-T and G-C", "A-G and T-C", "A-C and G-T", "A-U and G-C"],
                                            answer: "A-T and G-C",
                                            explanation: "In DNA, Adenine pairs with Thymine (A-T) and Guanine pairs with Cytosine (G-C)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Photosynthesis and Cellular Respiration",
                        quizTopics: ["Photosynthesis Process", "Cellular Respiration", "ATP Production", "Energy Flow"],
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
                                            explanation: "Photosynthesis uses carbon dioxide and water (with light energy) to produce glucose and oxygen."
                                        },
                                        {
                                            question: "Where does cellular respiration primarily occur?",
                                            choices: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
                                            answer: "Mitochondria",
                                            explanation: "Cellular respiration occurs in the mitochondria, producing ATP from glucose."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Ecology",
                        quizTopics: ["Ecosystems", "Food Webs", "Energy Pyramids", "Biogeochemical Cycles"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Ecology",
                                description: "Understand ecosystem interactions",
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
                        id: "unit5",
                        name: "Unit 5: Evolution",
                        quizTopics: ["Natural Selection", "Evidence for Evolution", "Adaptations"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Evolution",
                                description: "Understand evolutionary processes",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Natural selection acts on:",
                                            choices: ["Individuals", "Populations", "Species", "Ecosystems"],
                                            answer: "Populations",
                                            explanation: "Natural selection causes changes in populations over time, not in individuals during their lifetime."
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
                grade: "11th Grade",
                description: "Atomic structure, chemical reactions, and stoichiometry",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Atomic Structure",
                        quizTopics: ["Atomic Models", "Electron Configuration", "Quantum Numbers"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Atomic Structure",
                                description: "Understand atomic structure and electron configuration",
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
                                            question: "What is the electron configuration of oxygen (atomic number 8)?",
                                            choices: ["1s² 2s² 2p⁴", "1s² 2s⁶", "1s⁸", "2s² 2p⁶"],
                                            answer: "1s² 2s² 2p⁴",
                                            explanation: "Oxygen has 8 electrons: 2 in 1s, 2 in 2s, and 4 in 2p."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Periodic Trends",
                        quizTopics: ["Atomic Radius", "Ionization Energy", "Electronegativity"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Periodic Trends",
                                description: "Understand trends in the periodic table",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Atomic radius generally increases:",
                                            choices: ["Left to right across a period", "Down a group", "Both directions", "Neither direction"],
                                            answer: "Down a group",
                                            explanation: "Atomic radius increases down a group (more electron shells) and decreases across a period (more protons pulling electrons closer)."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit3",
                        name: "Unit 3: Chemical Bonding",
                        quizTopics: ["Ionic Bonds", "Covalent Bonds", "Lewis Structures", "VSEPR Theory"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Chemical Bonding",
                                description: "Identify bond types and molecular shapes",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What type of bond forms between sodium (Na) and chlorine (Cl)?",
                                            choices: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
                                            answer: "Ionic",
                                            explanation: "Sodium (metal) transfers an electron to chlorine (nonmetal), creating Na⁺ and Cl⁻ ions."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Stoichiometry",
                        quizTopics: ["Mole Concept", "Balancing Equations", "Mole Ratios", "Limiting Reactants"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Stoichiometry",
                                description: "Balance equations and calculate quantities",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "How many moles of H₂O are produced when 2 moles of H₂ react with excess O₂? (2H₂ + O₂ → 2H₂O)",
                                            choices: ["1 mole", "2 moles", "4 moles", "0.5 moles"],
                                            answer: "2 moles",
                                            explanation: "The ratio of H₂ to H₂O is 2:2 or 1:1, so 2 moles of H₂ produces 2 moles of H₂O."
                                        },
                                        {
                                            question: "How many particles are in 1 mole?",
                                            choices: ["6.022 × 10²³", "6.022 × 10²²", "3.011 × 10²³", "1.0 × 10²⁴"],
                                            answer: "6.022 × 10²³",
                                            explanation: "Avogadro's number: 1 mole = 6.022 × 10²³ particles."
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Acids and Bases",
                        quizTopics: ["pH Scale", "Strong vs Weak Acids/Bases", "Neutralization"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Acids and Bases",
                                description: "Understand acid-base chemistry",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A solution with pH 3 is:",
                                            choices: ["Neutral", "Acidic", "Basic", "Cannot determine"],
                                            answer: "Acidic",
                                            explanation: "pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic. pH 3 is acidic."
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
                description: "Mechanics, energy, waves, electricity, and magnetism",
                units: [
                    {
                        id: "unit1",
                        name: "Unit 1: Kinematics",
                        quizTopics: ["Speed and Velocity", "Acceleration", "Kinematic Equations", "Projectile Motion"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Kinematics",
                                description: "Solve motion problems",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A car accelerates from rest at 2 m/s². What is its velocity after 5 seconds?",
                                            choices: ["2.5 m/s", "5 m/s", "10 m/s", "25 m/s"],
                                            answer: "10 m/s",
                                            explanation: "v = v₀ + at = 0 + (2)(5) = 10 m/s"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit2",
                        name: "Unit 2: Forces and Newton's Laws",
                        quizTopics: ["Newton's Laws", "Free Body Diagrams", "Friction", "Circular Motion"],
                        activities: [
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
                        name: "Unit 3: Energy, Work, and Power",
                        quizTopics: ["Work", "Kinetic Energy", "Potential Energy", "Conservation of Energy", "Power"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Energy",
                                description: "Calculate work and energy",
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
                    },
                    {
                        id: "unit4",
                        name: "Unit 4: Momentum",
                        quizTopics: ["Momentum", "Impulse", "Conservation of Momentum", "Collisions"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Momentum",
                                description: "Calculate momentum and analyze collisions",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "What is the momentum of a 3 kg object moving at 4 m/s?",
                                            choices: ["7 kg·m/s", "12 kg·m/s", "0.75 kg·m/s", "1.33 kg·m/s"],
                                            answer: "12 kg·m/s",
                                            explanation: "p = mv = (3 kg)(4 m/s) = 12 kg·m/s"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit5",
                        name: "Unit 5: Waves and Sound",
                        quizTopics: ["Wave Properties", "Sound Waves", "Doppler Effect", "Standing Waves"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Waves",
                                description: "Understand wave properties and behavior",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "A wave has frequency 50 Hz and wavelength 2 m. What is its speed?",
                                            choices: ["25 m/s", "100 m/s", "52 m/s", "48 m/s"],
                                            answer: "100 m/s",
                                            explanation: "v = fλ = (50 Hz)(2 m) = 100 m/s"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "unit6",
                        name: "Unit 6: Electricity",
                        quizTopics: ["Electric Charge", "Circuits", "Ohm's Law", "Series and Parallel"],
                        activities: [
                            {
                                type: "practice",
                                title: "Practice Quiz: Electricity",
                                description: "Analyze circuits and apply Ohm's Law",
                                icon: "&#9999;",
                                content: {
                                    questions: [
                                        {
                                            question: "Using Ohm's Law, if V = 12V and R = 4Ω, what is I?",
                                            choices: ["3 A", "48 A", "8 A", "0.33 A"],
                                            answer: "3 A",
                                            explanation: "I = V/R = 12V / 4Ω = 3 A"
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
