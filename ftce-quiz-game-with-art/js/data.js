// data.js - Expanded FTCE Chemistry Question Bank (200 total)

const questions = [
  // Images will be referenced via 'image' property
  // Each image path should be accessible from your web root (e.g., /images/atomic_model.png)
  // Atomic Structure
  {
    topic: "atomic",
    question: "Which particle has no charge?",
    image: "/images/neutral_particle_diagram.png",
    choices: ["Proton", "Neutron", "Electron", "Ion"],
    answer: "Neutron",
    explanation: "Neutrons are neutral particles found in the nucleus with no electric charge."
  },
  {
    topic: "atomic",
    question: "What is the atomic number of an element?",
    choices: ["Number of protons", "Mass number", "Electrons + Neutrons", "Valence electrons"],
    answer: "Number of protons",
    explanation: "The atomic number is defined by the number of protons in an atom’s nucleus."
  },
  {
    topic: "atomic",
    question: "What determines the identity of an element?",
    choices: ["Atomic mass", "Number of neutrons", "Number of protons", "Electron configuration"],
    answer: "Number of protons",
    explanation: "The number of protons in the nucleus determines the element’s identity."
  },
  {
    topic: "atomic",
    question: "Which particle has the least mass?",
    choices: ["Proton", "Neutron", "Electron", "All equal"],
    answer: "Electron",
    explanation: "Electrons are much less massive than protons or neutrons."
  },
  {
    topic: "atomic",
    question: "Which element has 11 protons?",
    choices: ["Sodium", "Potassium", "Chlorine", "Magnesium"],
    answer: "Sodium",
    explanation: "The atomic number of sodium is 11, meaning it has 11 protons."
  },

  // Bonding
  {
    topic: "bonding",
    question: "What is a characteristic of ionic bonds?",
    choices: ["Shared electrons", "Delocalized electrons", "Transferred electrons", "Hydrogen bonding"],
    answer: "Transferred electrons",
    explanation: "Ionic bonds form when electrons are transferred from one atom to another."
  },
  {
    topic: "bonding",
    question: "Which of the following is a polar molecule?",
    image: "/images/water_polarity_diagram.png",
    choices: ["CO2", "CH4", "H2O", "Cl2"],
    answer: "H2O",
    explanation: "Water is polar due to its bent shape and polar bonds."
  },
  {
    topic: "bonding",
    question: "What type of bond holds sodium and chlorine together in NaCl?",
    choices: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    answer: "Ionic",
    explanation: "Sodium donates an electron to chlorine forming an ionic bond."
  },
  {
    topic: "bonding",
    question: "Which bond is strongest?",
    choices: ["Single", "Double", "Triple", "Hydrogen"],
    answer: "Triple",
    explanation: "Triple covalent bonds are stronger due to more shared electrons."
  },
  {
    topic: "bonding",
    question: "Which of the following is NOT a type of chemical bond?",
    choices: ["Ionic", "Covalent", "Metallic", "Nuclear"],
    answer: "Nuclear",
    explanation: "Nuclear forces bind protons and neutrons, not atoms."
  },

  // Thermodynamics
  {
    topic: "thermo",
    question: "What does ΔH represent in a chemical reaction?",
    choices: ["Entropy", "Enthalpy change", "Activation energy", "Reaction rate"],
    answer: "Enthalpy change",
    explanation: "ΔH represents heat change at constant pressure."
  },
  {
    topic: "thermo",
    question: "Which process is exothermic?",
    image: "/images/exothermic_curve.png",
    choices: ["Boiling water", "Condensation of steam", "Melting ice", "Photosynthesis"],
    answer: "Condensation of steam",
    explanation: "Condensation releases heat."
  },
  {
    topic: "thermo",
    question: "What is entropy a measure of?",
    choices: ["Heat", "Energy", "Disorder", "Work"],
    answer: "Disorder",
    explanation: "Entropy measures the disorder or randomness of a system."
  },
  {
    topic: "thermo",
    question: "Which law states that energy cannot be created or destroyed?",
    choices: ["First Law of Thermodynamics", "Second Law", "Hess's Law", "Law of Entropy"],
    answer: "First Law of Thermodynamics",
    explanation: "The First Law is the Law of Conservation of Energy."
  },
  {
    topic: "thermo",
    question: "Which unit is used to measure heat energy?",
    choices: ["Joule", "Kelvin", "Coulomb", "Mole"],
    answer: "Joule",
    explanation: "Heat is measured in joules in the SI system."
  },

  // Acids & Bases
  {
    topic: "acids",
    question: "Which pH value indicates a strong acid?",
    choices: ["1", "5", "7", "9"],
    answer: "1",
    explanation: "Strong acids have very low pH values."
  },
  {
    topic: "acids",
    question: "What is the conjugate base of HCl?",
    choices: ["Cl-", "OH-", "H2O", "H3O+"],
    answer: "Cl-",
    explanation: "Cl- is what remains when HCl loses a proton."
  },
  {
    topic: "acids",
    question: "Which is a property of acids?",
    choices: ["Slippery feel", "Bitter taste", "Turns litmus blue", "Reacts with metals"],
    answer: "Reacts with metals",
    explanation: "Acids often react with metals to produce hydrogen gas."
  },
  {
    topic: "acids",
    question: "A solution with a pH of 8 is...",
    choices: ["Acidic", "Basic", "Neutral", "Very acidic"],
    answer: "Basic",
    explanation: "Any pH above 7 is considered basic."
  },
  {
    topic: "acids",
    question: "Which of the following is a strong base?",
    choices: ["NH3", "NaOH", "CH3COOH", "H2CO3"],
    answer: "NaOH",
    explanation: "Sodium hydroxide is a strong base that dissociates completely."
  }

  // +180 More Questions to Be Added Iteratively

  // Redox
  {
    topic: "redox",
    question: "What is oxidation?",
    choices: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"],
    answer: "Loss of electrons",
    explanation: "Oxidation is defined as the loss of electrons."
  },
  {
    topic: "redox",
    question: "In a redox reaction, the substance that is reduced...",
    choices: ["Gains electrons", "Loses electrons", "Gains protons", "Loses neutrons"],
    answer: "Gains electrons",
    explanation: "Reduction is the gain of electrons."
  },
  {
    topic: "redox",
    question: "Which of the following is a reducing agent?",
    choices: ["Substance gaining electrons", "Substance losing electrons", "Inert gas", "Neutral salt"],
    answer: "Substance losing electrons",
    explanation: "A reducing agent donates electrons and is itself oxidized."
  },
  {
    topic: "redox",
    question: "What is the oxidation number of oxygen in most compounds?",
    choices: ["+2", "-2", "0", "+1"],
    answer: "-2",
    explanation: "Oxygen typically has an oxidation state of -2."
  },
  {
    topic: "redox",
    question: "What happens to the oxidation number of an element that is oxidized?",
    choices: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
    answer: "Increases",
    explanation: "Oxidation results in an increase in oxidation number."
  },

  // Nuclear Chemistry
  {
    topic: "nuclear",
    question: "What is emitted in alpha decay?",
    image: "/images/alpha_decay.png",
    choices: ["1 proton", "1 neutron", "2 protons and 2 neutrons", "1 electron"],
    answer: "2 protons and 2 neutrons",
    explanation: "Alpha particles consist of 2 protons and 2 neutrons."
  },
  {
    topic: "nuclear",
    question: "Which of the following is a beta particle?",
    choices: ["Electron", "Proton", "Neutron", "Alpha particle"],
    answer: "Electron",
    explanation: "Beta particles are high-energy electrons emitted from the nucleus."
  },
  {
    topic: "nuclear",
    question: "Which process powers the sun?",
    choices: ["Fission", "Alpha decay", "Fusion", "Ionization"],
    answer: "Fusion",
    explanation: "The sun generates energy through nuclear fusion."
  },
  {
    topic: "nuclear",
    question: "Which unit is commonly used to measure radiation exposure?",
    choices: ["Joule", "Sievert", "Mole", "Kelvin"],
    answer: "Sievert",
    explanation: "The sievert measures the biological effect of ionizing radiation."
  },
  {
    topic: "nuclear",
    question: "What is the main risk of nuclear fission?",
    choices: ["Global warming", "Radioactive waste", "Acid rain", "Carbon emissions"],
    answer: "Radioactive waste",
    explanation: "Fission creates long-lived radioactive waste that must be stored safely."
  }


  // Kinetics
  {
    topic: "kinetics",
    question: "What does the rate of a chemical reaction depend on?",
    choices: ["Color of reactants", "Presence of a catalyst", "Size of beaker", "Atomic number"],
    answer: "Presence of a catalyst",
    explanation: "Catalysts lower activation energy and increase reaction rates."
  },
  {
    topic: "kinetics",
    question: "Which factor does NOT affect the rate of a reaction?",
    choices: ["Temperature", "Concentration", "Surface area", "Atomic mass"],
    answer: "Atomic mass",
    explanation: "Atomic mass doesn’t directly affect the reaction rate."
  },
  {
    topic: "kinetics",
    question: "What is the unit of a zero-order reaction rate constant?",
    choices: ["mol/L·s", "s⁻¹", "L/mol·s", "mol²/L²·s"],
    answer: "mol/L·s",
    explanation: "Zero-order rate laws have units of concentration/time."
  },
  {
    topic: "kinetics",
    question: "What is the effect of increasing temperature on reaction rate?",
    choices: ["Decreases", "No change", "Increases", "Depends on pressure"],
    answer: "Increases",
    explanation: "Higher temperatures increase particle energy and frequency of collisions."
  },
  {
    topic: "kinetics",
    question: "What does a reaction mechanism describe?",
    choices: ["Overall energy", "Stepwise molecular changes", "Color change", "Atomic mass"],
    answer: "Stepwise molecular changes",
    explanation: "A mechanism breaks down a reaction into elementary steps."
  },

  // Equilibrium
  {
    topic: "equilibrium",
    question: "What is Le Chatelier’s Principle?",
    image: "/images/le_chateliers_principle.png",
    choices: ["A way to calculate mass", "A buffer system rule", "A system shifts to minimize stress", "A redox rule"],
    answer: "A system shifts to minimize stress",
    explanation: "Le Chatelier’s Principle states that equilibrium shifts to counteract imposed changes."
  },
  {
    topic: "equilibrium",
    question: "What is true at equilibrium?",
    choices: ["Concentrations are equal", "No forward reaction", "Forward and reverse rates are equal", "Reaction has stopped"],
    answer: "Forward and reverse rates are equal",
    explanation: "At equilibrium, the rates of forward and reverse reactions are equal, not the concentrations."
  },
  {
    topic: "equilibrium",
    question: "What happens if pressure is increased in a gaseous equilibrium?",
    choices: ["Favors side with more gas", "No effect", "Favors side with fewer gas moles", "Reaction stops"],
    answer: "Favors side with fewer gas moles",
    explanation: "Increasing pressure shifts equilibrium toward fewer gas molecules."
  },
  {
    topic: "equilibrium",
    question: "What does a large Keq (>1) indicate?",
    choices: ["Reverse reaction is favored", "No reaction occurs", "Products are favored", "Reactants dominate"],
    answer: "Products are favored",
    explanation: "A large equilibrium constant means the products are more abundant."
  },
  {
    topic: "equilibrium",
    question: "Which change does NOT affect equilibrium?",
    choices: ["Temperature", "Concentration", "Pressure", "Catalyst"],
    answer: "Catalyst",
    explanation: "Catalysts speed up both directions equally; they don’t shift equilibrium."
  }
];
