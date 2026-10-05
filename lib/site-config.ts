export const navItems = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Professeurs IA", href: "#teachers" },
  { label: "Quiz", href: "#quiz" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const teachers = [
  {
    name: "Nova",
    role: "Coach futuriste",
    accent: "from-cyan-400 to-blue-600",
    description:
      "Un professeur motivant qui transforme la progression en challenge quotidien et récompense chaque avancée.",
    specialty: "IA, logique et méthodologie",
    level: "Débutant à avancé",
  },
  {
    name: "Luna",
    role: "Mentor social",
    accent: "from-pink-400 to-violet-600",
    description:
      "Des explications simples, vivantes et connectées au quotidien pour rendre l'apprentissage plus naturel.",
    specialty: "Langues, communication et culture",
    level: "Tous niveaux",
  },
  {
    name: "Alex",
    role: "Coach gaming",
    accent: "from-amber-400 to-orange-600",
    description:
      "Un guide qui transforme les objectifs en missions, défis et niveaux pour garder la motivation.",
    specialty: "Mathématiques, logique et résolution",
    level: "Intermédiaire à expert",
  },
  {
    name: "Atlas",
    role: "Expert scientifique",
    accent: "from-emerald-400 to-teal-600",
    description:
      "Un formateur rigoureux qui privilégie la précision, les preuves et les liens scientifiques.",
    specialty: "Sciences et méthodes de raisonnement",
    level: "Intermédiaire à expert",
  },
];

export const featureHighlights = [
  {
    title: "Apprentissage personnalisé",
    description:
      "Chaque parcours s'adapte à votre niveau, vos objectifs et votre rythme de progression.",
  },
  {
    title: "Quiz et révision",
    description:
      "Générez des évaluations intelligentes et recevez des recommandations ciblées en temps réel.",
  },
  {
    title: "Professeurs IA",
    description:
      "Choisissez un coach qui correspond à votre style et à la matière que vous souhaitez maîtriser.",
  },
  {
    title: "Progression motivante",
    description:
      "XP, badges, séries et classements pour donner du sens à chaque apprentissage quotidien.",
  },
];

export const pricingTiers = [
  {
    name: "Gratuit",
    price: "0 €",
    description: "Pour commencer à apprendre sans pression.",
    features: ["Accès limité à l'IA", "Quiz de base", "XP et badges", "Quelques professeurs"],
    featured: false,
  },
  {
    name: "Premium",
    price: "7,99 €",
    period: "/ mois",
    description: "Pour aller plus loin avec un accompagnement intelligent.",
    features: [
      "IA avancée",
      "Scanner de devoirs",
      "Professeurs personnalisés",
      "Révisions sur mesure",
      "Plus de conversations",
    ],
    featured: true,
  },
];

export const faqItems = [
  {
    question: "Mylifestudy est-il adapté aux examens ?",
    answer:
      "Oui. La plateforme est pensée pour préparer les examens avec un suivi personnalisé, des quiz, des fiches de révision et des conseils IA ciblés.",
  },
  {
    question: "Peut-on utiliser plusieurs matières ?",
    answer:
      "Oui. La plateforme est conçue pour explorer n’importe quelle matière, du plus simple au plus avancé, avec des parcours adaptatifs.",
  },
  {
    question: "Les réponses IA restent-elles pédagogiques ?",
    answer:
      "Oui. L’IA explique les notions dans un style qui s’adapte au niveau de l’utilisateur et privilégie l’apprentissage pas à pas.",
  },
  {
    question: "Le projet est-il prêt pour la suite ?",
    answer:
      "La structure actuelle fournit une base solide pour ajouter l’authentification, le dashboard, les APIs, le multilingue et l’IA externe.",
  },
];
