export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  url?: string;
};

export type Patent = {
  title: string;
  id: string;
  role: string;
  url: string;
};

export const publications: Publication[] = [
  {
    authors: "O. Kypris, A. Markham",
    title:
      "3-D Displacement Measurement for Structural Health Monitoring Using Low-Frequency Magnetic Fields",
    venue: "IEEE Sensors Journal, 17(4), 1165–1174",
    year: "2017",
    url: "https://ieeexplore.ieee.org/document/7797212",
  },
  {
    authors: "O. Kypris, T. E. Abrudan, A. C. Markham",
    title: "Magnetic Induction-Based Positioning in Distorted Environments",
    venue: "IEEE Transactions on Geoscience and Remote Sensing",
    year: "2016",
    url: "https://ieeexplore.ieee.org/document/7457622",
  },
  {
    authors: "T. E. Abrudan, O. Kypris, N. Trigoni, A. C. Markham",
    title: "Magneto-Inductive Underground Tracking: Principles and Systems",
    venue: "Underground Sensing (book chapter), Elsevier",
    year: "2018",
  },
  {
    authors: "Z. Wang, O. Kypris, A. Markham",
    title: "RePWR: Wireless Power Transfer within Reinforced Concrete",
    venue: "Proc. ENSSys",
    year: "2016",
  },
  {
    authors: "O. Kypris, I. C. Nlebedim, D. C. Jiles",
    title: "Measuring Stress Variation with Depth Using Barkhausen Signals",
    venue: "Journal of Magnetism and Magnetic Materials",
    year: "2016",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0304885316300725",
  },
  {
    authors: "O. Kypris, I. C. Nlebedim, D. C. Jiles",
    title:
      "A Model for the Barkhausen Frequency Spectrum as a Function of Applied Stress",
    venue: "Journal of Applied Physics",
    year: "2014",
    url: "https://www.researchgate.net/publication/260417426_A_model_for_the_Barkhausen_frequency_spectrum_as_a_function_of_applied_stress",
  },
];

export const patents: Patent[] = [
  {
    title:
      "Sensor and method for measuring relative 3-D displacement using low-frequency magnetic fields (structural health monitoring)",
    id: "WO2018060700A1",
    role: "Co-inventor",
    url: "https://patents.google.com/patent/WO2018060700A1",
  },
  {
    title: "Machine-learning pipeline for floor detection / indoor localization",
    id: "WO2020089593A1",
    role: "First-named inventor",
    url: "https://patents.google.com/patent/WO2020089593A1/",
  },
];

export const timeline: { when: string; what: string; where: string; url?: string }[] = [
  { when: "Now", what: "ML applications (music & audio) — building & productionizing", where: "Universal Music Group", url: "https://www.universalmusic.com/" },
  { when: "Prev", what: "Research & integration engineer — ML / computer vision", where: "iKnowHow (Innovation)", url: "https://www.iknowhow.com/" },
  { when: "Prev", what: "Core research team — indoor localization ML", where: "Navenio", url: "https://navenio.com/" },
  { when: "Postdoc", what: "Magnetic structural-health-monitoring sensors", where: "University of Oxford", url: "https://www.cs.ox.ac.uk/research/cyberphysical/" },
  { when: "PhD", what: "Magnetic Barkhausen NDE — modeling, FEM, sensing", where: "Iowa State University", url: "https://www.ece.iastate.edu/" },
];

export type Education = {
  degree: string;
  field: string;
  institution: string;
  institutionUrl: string;
  years: string;
  advisor: { name: string; url: string };
};

export const education: Education[] = [
  {
    degree: "Ph.D.",
    field: "Electrical & Computer Engineering",
    institution: "Iowa State University",
    institutionUrl: "https://www.ece.iastate.edu/",
    years: "2011 – 2015",
    advisor: {
      name: "Prof. David C. Jiles",
      url: "https://www.ece.iastate.edu/profiles/david-c-jiles/",
    },
  },
  {
    degree: "Postdoctoral Research Assistant",
    field: "Computer Science (Cyber-Physical Systems)",
    institution: "University of Oxford",
    institutionUrl: "https://www.cs.ox.ac.uk/research/cyberphysical/",
    years: "2015 – 2017",
    advisor: {
      name: "Prof. Andrew Markham",
      url: "https://www.cs.ox.ac.uk/people/andrew.markham/",
    },
  },
];
