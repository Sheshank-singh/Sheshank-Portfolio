export const personalInfo = {
  name: "Sheshank Singh",
  title: "AI/ML Engineer",
  subtitle: "Computer Vision | Deep Learning | Explainable AI",
  tagline: "Building reliable and interpretable AI systems",
  email: "sheshanksingh2609@gmail.com",
  phone: "+919892937783",
  location: "Mumbai, India",
  linkedin: "https://linkedin.com/in/Sheshank-singh",
  github: "https://github.com/sheshanksingh2609",
  about: "Machine Learning Engineer with strong experience in computer vision, deep learning, and explainable AI. Hands-on experience in research-driven AI projects, model benchmarking, and deployment, with contributions to open-source multimodal AI systems. Passionate about building scalable, interpretable, and impactful AI solutions for real-world problems."
};

export const experience = [
  {
    id: 1,
    role: "AI/ML Research Intern",
    company: "TIH, IIT Bombay",
    duration: "Dec 2025 - Feb 2026",
    location: "Mumbai",
    description: [
      "Designed a reusable framework to standardize data preprocessing, training, and evaluation, enabling rapid adaptation to new computer vision tasks.",
      "Benchmarked and analyzed deep learning models for cotton, sugarcane, and pest classification, achieving 98% accuracy and validating prediction behaviour using Explainable AI (XAI) methods.",
      "Implemented feature-based Out-of-Distribution (OOD) detection using centroid distance in embedding space to flag unseen or anomalous inputs.",
      "Automated dataset cleaning and curation via clustering to remove noisy and irrelevant images, improving data quality and model robustness."
    ],
    skills: ["Python", "PyTorch", "TensorFlow"]
  },
  {
    id: 2,
    role: "Open Source Contributor",
    company: "Google Gemma",
    duration: "Dec 2025 - Jan 2026",
    location: "Remote",
    description: [
      "Contributed a multimodal tutorial notebook on Zero-Shot Visual Document Extraction and structured JSON generation using Gemma 3 4B-IT.",
      "Designed robust prompting strategies to mitigate modality dominance and reduce formatting failures in long-context multimodal inference.",
      "Implemented Pan-and-Scan adaptive windowing for high-resolution document processing across multiple images in a single session.",
      "Optimized inference for T4 GPUs using torch.bfloat16 and built the notebook with Hugging Face transformers and accelerate."
    ],
    skills: ["PyTorch", "Hugging Face Transformers"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Pulmonary Tuberculosis Detection System",
    date: "Jul 2025 - Nov 2025",
    description: "Built an AI pipeline for Tuberculosis detection from chest X-rays using ResUNet++ for lung segmentation (96.3% Dice) and EfficientNetB0 for classification (Recall: 0.79). Applied Grad-CAM to generate explainable heatmaps, improving clinical interpretability. Deployed a Flask-based web app on Vercel for real-time TB diagnosis and visualization.",
    tech: ["ResUNet++", "EfficientNetB0", "Flask", "Vercel"],
    github: "#" // Replace with actual link
  },
  {
    id: 2,
    title: "AI-Driven Content Moderation Web Application",
    date: "Aug 2025 - Oct 2025",
    description: "Developed a dual-mode content moderation system integrating AI automation and expert review for ethical online content filtering. Fine-tuned DistilBERT on the Jigsaw Toxic Comment Dataset, achieving an F1-macro score of 0.91. Built a microservices-based cloud architecture ensuring 1.5s average latency.",
    tech: ["DistilBERT", "React.js", "Node.js", "NeonDB"],
    github: "#"
  },
  {
    id: 3,
    title: "Employee Attrition Prediction System",
    date: "Sept 2025 - Oct 2025",
    description: "Developed a machine learning web application to predict employee attrition risk and provide interpretable insights for HR professionals. Trained Logistic Regression with 83.6% accuracy. Applied SMOTE balancing, feature scaling, and integrated SHAP explainability to identify key attrition drivers.",
    tech: ["Python", "Flask", "Scikit-learn"],
    github: "#"
  }
];

export const skills = [
  { category: "Programming Languages", items: ["Python", "C", "Java"] },
  { category: "Frameworks & Libraries", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"] },
  { category: "Domains", items: ["Computer Vision", "Deep Learning", "Explainable AI (XAI)", "NLP"] },
  { category: "Tools & Platforms", items: ["Git/GitHub", "Docker", "Google Cloud", "Microsoft Azure"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] }
];

export const achievements = [
  {
    id: 1,
    title: "1st Place – Cognition Clash: The AI-ML Showdown",
    organization: "AI-ML Cluster, VIT + CESA",
    date: "Oct 2025",
    description: "Presented “Pulmonary Tuberculosis Detection using Lung Segmentation, Classification, and Explainable AI”, recognized for innovation and clinical interpretability."
  },
  {
    id: 2,
    title: "Top 700 (Public Rank: #683/2500+) – Summer Analytics Hackathon",
    organization: "GeeksforGeeks + Consulting & Analytics Club IIT Guwahati",
    date: "June 2025",
    description: "Built a logistic regression model using noisy NDVI time-series data with feature engineering."
  },
  {
    id: 3,
    title: "3rd Place – VIT Ideathon",
    organization: "Vidyalankar Institute of Technology",
    date: "May 2024",
    description: "Designed a Smart Waste Management App using AI-based waste classification."
  },
  {
    id: 4,
    title: "2nd Place – Intercollegiate Ideathon",
    organization: "BMESI + BMSA Committee, VIT",
    date: "Oct 2023",
    description: "Developed WeCare101, a women’s safety app with real-time SOS alerts."
  }
];
