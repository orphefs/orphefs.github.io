export const profile = {
  name: "Orfeas Kypris",
  role: "Senior ML Platform Engineer",
  subRole: "Physics & computational modeling background",
  tagline:
    "I build and productionize machine-learning platforms. My approach is grounded in a physics and computational modeling background — numerical simulation, signal processing, and first-principles thinking I draw on to reason about hard problems.",
  location: "Athens, Greece",
  // Email kept split into parts so the full address never appears as a literal
  // in source or the built bundle. Assemble at runtime with getEmail().
  emailUser: "kypriso",
  emailDomain: "gmail.com",
  links: {
    github: "https://github.com/orphefs",
    linkedin: "https://www.linkedin.com/in/kypris/",
    scholar: "https://scholar.google.com/citations?user=bldiMQwAAAAJ&hl=en",
    medium: "https://orphefs.medium.com/",
    codementor: "https://www.codementor.io/@okypris",
  },
};

// Assemble the address at runtime. The "@" is built from a char code so the
// full pattern user@domain is never a literal substring in the bundle.
export const getEmail = (): string =>
  profile.emailUser + String.fromCharCode(64) + profile.emailDomain;

export const stack: { group: string; items: string[] }[] = [
  {
    group: "ml_platform",
    items: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Docker",
      "Kubernetes/EKS",
      "AWS SageMaker",
      "Lambda",
      "EventBridge",
      "Azure",
      "Airflow",
      "Terraform",
      "GitHub Actions",
      "Tekton",
      "Vault",
      "MCP servers",
    ],
  },
  {
    group: "em_fem_sim",
    items: [
      "COMSOL Multiphysics",
      "AC/DC FEM",
      "MATLAB",
      "R",
      "LabVIEW",
      "Signal Processing",
      "Numerical Modeling",
      "Inverse Problems",
    ],
  },
  {
    group: "systems",
    items: ["Python", "Go", "Linux", "Git", "Databases", "C++ (pybind)"],
  },
];
