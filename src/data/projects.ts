export type Project = {
  key: string;
  title: string;
  blurb: string;
  body: string[];
  image: string;
  domain: "ML Platform" | "EM / FEM" | "Computer Vision" | "Geospatial ML";
  period: string;
  org: string;
  tags: string[];
  links: { label: string; url: string }[];
};

// Curated and reframed toward "ML Platform Engineer + EM/FEM simulation".
export const projects: Project[] = [
  {
    key: "umg-ml-serving-api",
    title: "Enterprise ML Serving API Platform",
    blurb:
      "UMG's company-wide API platform for serving ML models via async and batch inference — a centralized interface used across business units.",
    body: [
      "I co-designed and built UMG's enterprise-grade API platform for serving machine-learning models through async and batch inference, providing a single centralized interface used across the company's business units. I was involved from inception to launch (0 → 1).",
      "The system is event-driven, integrating SageMaker, Lambda, EventBridge, and Airflow. I implemented CI/CD pipelines for automatic endpoint deployment and versioned CodeArtifact packages, added CloudWatch dashboards, metrics, and structured logging for observability, and hardened reliability through strict input validation, manifest schemas, and deliberate error-propagation design.",
    ],
    image: "/images/umg-serving-api.svg",
    domain: "ML Platform",
    period: "Dec 2023 – Present",
    org: "Universal Music Group",
    tags: ["Python", "FastAPI", "AWS SageMaker", "Lambda", "EventBridge", "Docker", "Terraform", "CI/CD"],
    links: [{ label: "Universal Music Group", url: "https://umusic.com/" }],
  },
  {
    key: "umg-orchestration",
    title: "Distributed Orchestration Platform for Audio Processing",
    blurb:
      "A distributed orchestration platform running multi-step ML workflows at scale — central to UMG's global content-processing operations.",
    body: [
      "I engineered a distributed orchestration platform enabling large-scale audio and metadata processing through multi-step ML workflows, sitting at the center of UMG's global content-processing operations. Involved from inception to launch (0 → 1).",
      "I built scalable Airflow pipelines powering multi-model processing across the company and increased per-day throughput capacity by over 200% via optimized DAG concurrency and load balancing. I standardized orchestration logic, error propagation, and metadata validation across models, and designed abstractions that let new models and workflows be added with minimal friction.",
    ],
    image: "/images/umg-orchestration.svg",
    domain: "ML Platform",
    period: "Aug 2022 – Present",
    org: "Universal Music Group",
    tags: ["Airflow", "Python", "AWS S3", "Kubernetes/EKS", "Docker", "Terraform", "CI/CD"],
    links: [{ label: "Universal Music Group", url: "https://umusic.com/" }],
  },
  {
    key: "umg-audio-tagging",
    title: "Unified Audio Tagging Pipeline",
    blurb:
      "Redesign of UMG's flagship audio tagging pipeline into a unified system for classifying audio features at scale.",
    body: [
      "I led the redesign of UMG's flagship audio tagging pipeline, transforming it into a unified system for classifying a wide range of audio features. Involved from inception to launch (0 → 1).",
      "The work focused on improving throughput, reducing compute costs, and building compatibility layers for legacy systems. I introduced large-scale benchmarking to drive optimization decisions across the pipeline.",
    ],
    image: "/images/umg-audio-tagging.svg",
    domain: "ML Platform",
    period: "Jan 2023 – Jan 2025",
    org: "Universal Music Group",
    tags: ["Python", "PyTorch", "AWS Lambda", "Docker", "Terraform"],
    links: [{ label: "Universal Music Group", url: "https://umusic.com/" }],
  },
  {
    key: "umg-secure-batch",
    title: "Secure Multi-Tenant Batch Processing Platform",
    blurb:
      "A hardened, isolated multi-tenant batch platform for running rights-restricted and external-vendor workloads safely.",
    body: [
      "I built a hardened, isolated multi-tenant batch processing platform for running sensitive and external-vendor workloads. Involved from inception to launch (0 → 1).",
      "I designed isolated namespace execution with strict network policies and container security, implemented S3 streaming I/O to process assets larger than 10 GB without memory pressure, and developed deterministic retry logic, per-asset SNS notifications, and error-reporting schemas. The standardized container guidelines I authored are now adopted by external vendors integrating with UMG.",
    ],
    image: "/images/umg-secure-batch.svg",
    domain: "ML Platform",
    period: "Dec 2023 – May 2024",
    org: "Universal Music Group",
    tags: ["Python", "Kubernetes/EKS", "NetworkPolicy", "AWS S3", "Lambda", "SNS", "Airflow", "Terraform"],
    links: [{ label: "Universal Music Group", url: "https://umusic.com/" }],
  },
  {
    key: "umg-dsp-engine",
    title: "High-Performance Audio DSP Engine",
    blurb:
      "A high-performance DSP engine with C++-accelerated kernels powering beat generation, audio modulation, and creative tools.",
    body: [
      "I developed a high-performance audio DSP engine for UMG applications spanning beat generation, audio modulation, and wellness/creative tools. Involved from inception to launch (0 → 1).",
      "The project involved re-architecting DSP components with C++-accelerated kernels, designing a hybrid serialization and caching mechanism, and implementing comprehensive test suites to ensure pipeline correctness and reproducibility. The finished product shipped as Sollos.",
    ],
    image: "/images/umg-dsp.svg",
    domain: "ML Platform",
    period: "Aug 2022 – Aug 2023",
    org: "Universal Music Group",
    tags: ["C++", "Python", "Docker", "Kubernetes", "API Design", "CI/CD", "Terraform"],
    links: [{ label: "Sollos", url: "https://findsollos.com/" }],
  },
  {
    key: "jax-fem-magnetostatics",
    title: "JAX-FEM Magnetostatics Inverse Engineering",
    blurb:
      "A fully differentiable 2D magnetostatic finite-element solver in JAX that recovers a spatially varying material-permeability field from a measured multi-coil mutual-inductance matrix.",
    body: [
      "A differentiable physics project built on JAX and jax-fem. The forward model is a 2D magnetostatic finite-element solver: for an array of four air-core coils sitting just above a ferromagnetic specimen, it solves the magnetic vector-potential PDE and returns the array's 4×4 mutual-inductance matrix. The inverse problem runs that pipeline backwards — recovering the specimen's spatially varying relative permeability field purely from the measured inductances.",
      "Forward formulation: the weak form ∫ ν ∇A_z·∇v dΩ = ∫ J_z v dΩ is solved for the out-of-plane vector potential A_z, where ν = 1/(μ₀·μ_r) is the reluctivity field. Each coil is modeled as two rectangular ±J current blocks forming a dipole loop, on a QUAD4 mesh at ~200 µm resolution over a 108×32 mm domain with homogeneous Dirichlet boundaries. Mutual inductances come from the energy method, M_ij = (∫ A_z^(j)·J_z^(i) dΩ)/(I_i·I_j), evaluated at quadrature points. Everything runs in 64-bit JAX on a PETSc/MPI backend in the quasi-magnetostatic regime.",
      "The inverse solve is end-to-end differentiable: gradients flow through the linear solve via the adjoint method (jax-fem's ad_wrapper). I parameterize permeability in log-space to keep it positive and optimize with L-BFGS-B under multiple random restarts to avoid local minima.",
      "The interesting part is conditioning the loss. The strong self-inductance terms dominate the off-diagonal mutual terms by ~80× in magnitude — and therefore by ~6400× in the loss gradient — yet the off-diagonals carry the most information, since they probe long, low-spatial-frequency flux paths through the specimen. I normalize each residual by the Jacobian row norm σ_m = ‖J[m,:]‖ so every measurement contributes equally. Because the PDE is linear in ν, the Jacobian dM/d(log μ) is essentially constant across the parameter range, so σ is computed once at a nominal operating point rather than every iteration.",
    ],
    image: "/images/jax-fem-magnetostatics.png",
    domain: "EM / FEM",
    period: "Personal · 2026",
    org: "Independent",
    tags: [
      "JAX",
      "jax-fem",
      "Automatic Differentiation",
      "FEM",
      "Magnetostatics",
      "L-BFGS-B",
      "Inverse Problems",
      "PETSc",
    ],
    links: [{ label: "Built on JAX-FEM", url: "https://github.com/deepmodeling/jax-fem" }],
  },
  {
    key: "barkhausen",
    title: "Magnetic Barkhausen Spectroscopy (PhD)",
    blurb:
      "Frequency-domain model + FEM simulation for non-destructive stress depth-profiling of ferromagnetic structures.",
    body: [
      "Doctoral research at Iowa State University on magnetic non-destructive evaluation. I derived integral equations describing the attenuation of electromagnetic signals through absorbing ferromagnetic media, recovering stress as a function of depth from the Barkhausen noise spectrum — now known as the Kypris–Jiles model, independently corroborated by other research groups.",
      "I ran frequency-domain, steady-state finite-element simulations in COMSOL Multiphysics (AC/DC module), parametrized over excitation current, coil turns, and electromagnet/sample geometry, to optimize uniform magnetic excitation of the sample.",
      "End to end: analytical + numerical EM modeling, a custom sensor and acquisition system (MATLAB + LabVIEW), a CAD-designed four-point bending rig, and a MATLAB signal-processing library (FFT, autocorrelation, PSD, FIR filtering, inverse optimization for stress-depth recovery).",
    ],
    image: "/images/barkhausen.png",
    domain: "EM / FEM",
    period: "PhD",
    org: "Iowa State University",
    tags: ["COMSOL", "FEM", "MATLAB", "LabVIEW", "Inverse Problems", "DSP"],
    links: [
      {
        label: "Doctoral thesis",
        url: "https://www.researchgate.net/profile/Orfeas-Kypris/publication/324031073_Detection_of_sub-surface_stresses_in_ferromagnetic_materials_using_a_new_Barkhausen_noise_method/links/5aba1c67aca2722b97d189c5/Detection-of-sub-surface-stresses-in-ferromagnetic-materials-using-a-new-Barkhausen-noise-method.pdf",
      },
      {
        label: "Kypris–Jiles model (independent validation)",
        url: "https://www.researchgate.net/publication/322567501_Quantitative_estimation_of_nonmonotonic_residual_stress_depth-profiles_using_an_extended_Kypris-Jiles_model_of_the_magnetic_Barkhausen_noise_spectrum",
      },
    ],
  },
  {
    key: "structalyse",
    title: "Structalyse — Magnetic 3-D Displacement Sensing",
    blurb:
      "Low-frequency magnetic-field sensors that measure sub-mm 3-D displacement from inside concrete for structural health monitoring.",
    body: [
      "Research at the Department of Computer Science, University of Oxford. I led a structural-health-monitoring project embedding sensors inside the concrete matrix: low-frequency magnetic fields penetrate solid and liquid media to communicate, wirelessly power the node, and track relative 3-D displacement over time.",
      "I simulated, designed, and physically implemented the sensing technology, achieving sub-millimetre accuracy in 3-D over a 60 mm cube — solving the underlying magnetic dipole forward/inverse problem and validating against measurement.",
      "Published in top-tier IEEE venues, did public outreach (conference talks, Oxford Sparks podcast), and the technology is patent-protected (UK & Greece).",
    ],
    image: "/images/structalyse.png",
    domain: "EM / FEM",
    period: "Postdoctoral",
    org: "University of Oxford",
    tags: ["Magnetics", "Numerical Modeling", "DSP", "C", "STM32", "MATLAB"],
    links: [
      {
        label: "IEEE: 3-D displacement via low-frequency magnetic fields",
        url: "https://ieeexplore.ieee.org/document/7797212",
      },
      { label: "Patent WO2018060700A1", url: "https://patents.google.com/patent/WO2018060700A1" },
    ],
  },
  {
    key: "navenio",
    title: "Indoor Localization in GPS-Denied Environments",
    blurb:
      "Productionized ML + signal-processing pipelines deriving indoor location from WiFi and inertial data.",
    body: [
      "As a member of the core research team at Navenio (Oxford), I prototyped and productionized ETL and ML pipelines that derive the indoor location — and floor — of a smartphone user from WiFi fingerprints and inertial data.",
      "Used unsupervised learning and signal processing over large numerical/textual datasets with extensive test coverage, contributing to ~5 m mean indoor localization accuracy.",
      "First-authored a patent on the floor-detection technology I developed.",
    ],
    image: "/images/navenio.png",
    domain: "ML Platform",
    period: "Industry",
    org: "Navenio Ltd",
    tags: ["Python", "C++", "AWS", "Unsupervised Learning", "ETL", "DSP"],
    links: [
      { label: "Patent WO2020089593A1", url: "https://patents.google.com/patent/WO2020089593A1/" },
    ],
  },
  {
    key: "roboweldar",
    title: "RoboWeldAR — Cognitive Robotic Welding",
    blurb:
      "Containerized microservice platform: photogrammetry + 3-D deep learning + ROS robotic control for shipbuilding welds.",
    body: [
      "Founder and technical lead at iKnowHow. RoboWeldAR ingests photos and camera poses of a welding target, reconstructs a 3-D model via photogrammetry, and superimposes candidate weld seams using 3-D deep-learning object detection.",
      "I architected the platform as containerized cloud microservices (Docker, Docker Hub, GitHub Actions): a photogrammetry service (AliceVision Meshroom), a 3-D detection service (VoteNet), ROS-based robotic control, and a Grafana/FIWARE IoT dashboard.",
      "Led a team of 5 engineers/data scientists; solved spatial-alignment optimization (scipy) to register the generated model to the real target, achieving ~8 mm robotic welding accuracy. Open-sourced.",
    ],
    image: "/images/roboweldar.gif",
    domain: "ML Platform",
    period: "Industry",
    org: "iKnowHow",
    tags: ["Docker", "Microservices", "PyTorch", "ROS", "Open3D", "scipy"],
    links: [
      { label: "Video showcase", url: "https://youtu.be/8IxrSFlvBY4" },
      { label: "Dev tutorial", url: "https://youtu.be/zPShBs7qK9s" },
      { label: "Source", url: "https://github.com/ikh-innovation/roboweldar-rose-ap" },
    ],
  },
  {
    key: "minotaur",
    title: "Minotaur-R — CV for Nuclear Decommissioning",
    blurb:
      "Deep segmentation pipeline to detect and robotically sort irradiated springs from nuclear debris.",
    body: [
      "Lead computer-vision engineer at iKnowHow. I designed a segmentation pipeline detecting irradiated springs in a pile of nuclear debris so a robot could remove them, with post-processing to estimate occlusion and orientation for improved robotic grasping.",
      "Led a team of 3, trained deep segmentation models in Python with versioning and engineering best practices, reaching 95% picking accuracy.",
    ],
    image: "/images/minotaur.gif",
    domain: "Computer Vision",
    period: "Industry",
    org: "iKnowHow",
    tags: ["Python", "OpenCV", "TensorFlow", "Mask-RCNN"],
    links: [
      {
        label: "Write-up on Medium",
        url: "https://orphefs.medium.com/detecting-and-sorting-nuclear-waste-using-deep-convolutional-neural-networks-3ada9b402363",
      },
    ],
  },
  {
    key: "firegaze",
    title: "firegaze.ai — Crowdsourced Wildfire Detection",
    blurb:
      "Open-source forest-smoke detection: YOLOv5 model, serverless FastAPI backend, React Native app.",
    body: [
      "A personal mission project to detect forest-fire smoke early. I built the detection model (YOLOv5), a serverless FastAPI backend, and a React Native app, working to drive down false negatives where clouds resemble smoke.",
      "Aimed at being open-sourced so communities living on forest fringes can benefit at minimal cost.",
    ],
    image: "/images/firegaze.png",
    domain: "ML Platform",
    period: "Personal",
    org: "Independent",
    tags: ["YOLOv5", "PyTorch", "FastAPI", "Serverless", "React Native"],
    links: [{ label: "GitHub org", url: "https://github.com/firegaze-ai" }],
  },
  {
    key: "efd-lz",
    title: "Livelihood Zoning — Geospatial ML for Aid",
    blurb:
      "Spatiotemporal satellite-data pipelines to optimize humanitarian aid delivery in Sub-Saharan Africa.",
    body: [
      "Volunteer work with DataKind UK and Evidence for Development. I refactored and productionized feature-extraction pipelines processing spatiotemporal satellite data to inform NGO aid distribution.",
      "Implemented new feature-extraction algorithms over satellite sensor data (GDAL, rasterio, geopandas) and introduced data versioning with DVC on Azure.",
    ],
    image: "/images/livelihood-zoning.png",
    domain: "Geospatial ML",
    period: "Volunteer",
    org: "DataKind UK / EfD",
    tags: ["Python", "geopandas", "rasterio", "GDAL", "Azure", "DVC"],
    links: [{ label: "DataKind UK", url: "https://datakind.org.uk/" }],
  },
];
