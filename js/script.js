const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

document.querySelectorAll('.project-card[data-project-url]').forEach(card => {
  const url = card.dataset.projectUrl;

  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    window.open(url, '_blank', 'noopener');
  });

  card.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
      e.preventDefault();
      window.open(url, '_blank', 'noopener');
    }
  });
});

// ---------- i18n ----------
const translations = {
  en: {
    navAbout: "About",
    navStack: "Tech Stack",
    navProjects: "Projects",
    heroGreeting: "Hi there, I'm",
    heroRole: "Junior Software Developer | Applied AI & Automation | Cloud Computing",
    heroBio: "I am a Computer Science student and a Junior Software Developer passionate about building intelligent solutions. My current focus lies in designing and deploying AI Agents, streamlining workflows, and leveraging Cloud environments to solve real-world business challenges.",
    aboutTitle: "About Me",
    aboutP1: "Constantly exploring Prompt Engineering, Software Architecture, and Generative AI to aggregate value, scale solutions, and innovate within the AI and Cloud ecosystems.",
    aboutEduTitle: "B.S. in Computer Science",
    aboutEduDesc: "Anhembi Morumbi University (Expected Nov 2027)",
    aboutWorkTitle: "Junior Software Developer",
    aboutWorkDesc: "Currently working @ Gentrop",
    aboutSpecTitle: "Specialized in Applied AI",
    aboutSpecDesc: "Developing and automating AI Agents using Python and GCP.",
    aboutGoalTitle: "Goal",
    aboutGoalDesc: "To continuously aggregate value and innovate within the AI ecosystem.",
    aboutTeachTitle: "Development & English Teacher",
    aboutTeachDesc: "CNA+ (02/2024–04/2025), leading 15+ classes in programming logic, game dev and English",
    stackTitle: "Tech Stack & Tools",
    stackLang: "Languages",
    stackCloud: "AI & Cloud",
    stackTools: "Tools & VC",
    stackLangs: "Languages Spoken",
    langPt: "Portuguese (Native)",
    langEn: "English (C1)",
    langEs: "Spanish (A2)",
    projectsTitle: "Featured Projects",
    projectsDesc: "While my current professional focus is on AI and Cloud ecosystems, I enjoy building interactive web applications, games, and utility tools that challenge my logic and UI/UX skills.",
    proj1Desc: "A digital adaptation of the \"Pitágoras\" board game. This mathematical party game features both Singleplayer and Local Multiplayer modes, focusing on engaging gameplay and dynamic interactions.",
    proj2Desc: "A utility calculator designed to optimize planning for the Diamond Casino Heist in Grand Theft Auto Online (GTAO). It demonstrates practical DOM manipulation and logic to help players calculate and maximize their in-game outcomes.",
    footerQuote: "\"Building scalable solutions to solve real-world problems.\""
  },
  pt: {
    navAbout: "Sobre",
    navStack: "Tecnologias",
    navProjects: "Projetos",
    heroGreeting: "Olá, eu sou",
    heroRole: "Desenvolvedor de Software Júnior | IA Aplicada e Automação | Cloud Computing",
    heroBio: "Sou estudante de Ciência da Computação e Desenvolvedor de Software Júnior, apaixonado por criar soluções inteligentes. Meu foco atual está na arquitetura e implantação de Agentes de IA, otimização de fluxos de trabalho e uso de ambientes em Nuvem para resolver desafios reais de negócios.",
    aboutTitle: "Sobre Mim",
    aboutP1: "Explorando constantemente Engenharia de Prompt, Arquitetura de Software e IA Generativa para agregar valor, escalar soluções e inovar dentro dos ecossistemas de IA e Nuvem.",
    aboutEduTitle: "Bacharelado em Ciência da Computação",
    aboutEduDesc: "Universidade Anhembi Morumbi (Previsão: Nov 2027)",
    aboutWorkTitle: "Desenvolvedor de Software Júnior",
    aboutWorkDesc: "Trabalhando atualmente na Gentrop",
    aboutSpecTitle: "Especializado em IA Aplicada",
    aboutSpecDesc: "Desenvolvendo e automatizando Agentes de IA usando Python e GCP.",
    aboutGoalTitle: "Objetivo",
    aboutGoalDesc: "Agregar valor continuamente e inovar no ecossistema de Inteligência Artificial.",
    aboutTeachTitle: "Professor de Desenvolvimento e Inglês",
    aboutTeachDesc: "CNA+ (02/2024–04/2025), lecionando para mais de 15 turmas: lógica de programação, dev de jogos e inglês",
    stackTitle: "Tecnologias e Ferramentas",
    stackLang: "Linguagens",
    stackCloud: "IA e Cloud",
    stackTools: "Ferramentas e Versionamento",
    stackLangs: "Idiomas",
    langPt: "Português (Nativo)",
    langEn: "Inglês (C1)",
    langEs: "Espanhol (A2)",
    projectsTitle: "Projetos em Destaque",
    projectsDesc: "Embora meu foco profissional atual seja em ecossistemas de IA e Cloud, gosto de construir aplicações web interativas, jogos e utilitários que desafiam minha lógica e habilidades de UI/UX.",
    proj1Desc: "Uma adaptação digital do jogo de tabuleiro 'Pitágoras'. Este jogo matemático de grupo possui modos Singleplayer e Multiplayer Local, focando em jogabilidade envolvente e interações dinâmicas.",
    proj2Desc: "Uma calculadora utilitária projetada para otimizar o planejamento do Golpe ao Cassino Diamond em Grand Theft Auto Online (GTAO). Demonstra manipulação prática do DOM e lógica para ajudar jogadores a calcular e maximizar seus resultados no jogo.",
    footerQuote: "\"Construindo soluções escaláveis para resolver problemas do mundo real.\""
  }
};

let currentLang = 'en';

const langToggle = document.getElementById('langToggle');
const langToggleMobile = document.getElementById('langToggleMobile');

function setLanguage(lang) {
  currentLang = lang;

  langToggle.textContent = lang === 'en' ? 'PT-BR' : 'EN-US';
  langToggleMobile.textContent = lang === 'en' ? 'PT' : 'EN';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function toggleLang() {
  setLanguage(currentLang === 'en' ? 'pt' : 'en');
}

langToggle.addEventListener('click', toggleLang);
langToggleMobile.addEventListener('click', toggleLang);

setLanguage('en');