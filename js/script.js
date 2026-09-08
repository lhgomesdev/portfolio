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
    heroGreeting: "Hi, I'm",
    heroRole: "Junior Software Developer | Applied AI & Automation",
    heroBio: "I'm a junior software developer focused on applied AI and automation. I build AI agents and automate workflows with Python and GCP, and I like keeping things simpler than I found them.",
    aboutTitle: "About Me",
    aboutP1: "I like understanding why an agent responds the way it does, trying different architectures, and writing down what I learn along the way.",
    aboutEduTitle: "B.S. in Computer Science",
    aboutEduDesc: "Anhembi Morumbi University (Expected Nov 2027)",
    aboutWorkTitle: "Junior Software Developer",
    aboutWorkDesc: "Currently working @ Gentrop",
    aboutSpecTitle: "Specialized in Applied AI",
    aboutSpecDesc: "Building and automating AI agents with Python and GCP.",
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
    noteLabel: "on my desk right now",
    noteLabel2: "off the clock",
    noteGameDex: "Pokémon Shield (dex grind & shiny hunting)",
    projectsTitle: "Some Things I've Built",
    projectsDesc: "A mix of things I use myself, things I built to practice, and things I built because they sounded fun.",
    proj3Desc: "A personal finance tracker with support for multiple users. Built with Django, and I use it myself to keep track of my own spending.",
    proj4Desc: "A Discord bot for tabletop RPG sessions of Daggerheart: dice rolls, encounter management with autocomplete, character sheets, and a persistent Fear tracker.",
    proj1Desc: "A digital adaptation of the \"Pitágoras\" board game. This mathematical party game features both Singleplayer and Local Multiplayer modes, focusing on engaging gameplay and dynamic interactions.",
    proj2Desc: "A utility calculator designed to optimize planning for the Diamond Casino Heist in Grand Theft Auto Online (GTAO). It demonstrates practical DOM manipulation and logic to help players calculate and maximize their in-game outcomes.",
    proj5Desc: "A didactic mini-compiler built with 7 classmates for college: it translates a Portuguese, natural-language-like script into Java through the classic lexical, syntax, semantic, and code generation phases.",
    pokemonCaption: "a few personal favorites",
    pokemonCopyright: "Pokémon sprites © Nintendo / Game Freak / The Pokémon Company. Fan reference only, no affiliation."
  },
  pt: {
    navAbout: "Sobre",
    navStack: "Tecnologias",
    navProjects: "Projetos",
    heroGreeting: "Olá, eu sou",
    heroRole: "Desenvolvedor de Software Júnior | IA Aplicada e Automação",
    heroBio: "Sou desenvolvedor de software júnior, focado em IA aplicada e automação. Construo agentes de IA e automatizo fluxos de trabalho com Python e Google Cloud, e gosto de deixar as coisas mais simples do que encontrei.",
    aboutTitle: "Sobre Mim",
    aboutP1: "Gosto de entender por que um agente responde do jeito que responde, testar arquiteturas diferentes e anotar o que aprendo no processo.",
    aboutEduTitle: "Bacharelado em Ciência da Computação",
    aboutEduDesc: "Universidade Anhembi Morumbi (Previsão: Nov 2027)",
    aboutWorkTitle: "Desenvolvedor de Software Júnior",
    aboutWorkDesc: "Trabalhando atualmente na Gentrop",
    aboutSpecTitle: "Especializado em IA Aplicada",
    aboutSpecDesc: "Desenvolvendo e automatizando agentes de IA com Python e GCP.",
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
    noteLabel: "na minha mesa agora",
    noteLabel2: "fora do expediente",
    noteGameDex: "Pokémon Shield (completando a dex e caçando uns shinies)",
    projectsTitle: "Coisas que Construí",
    projectsDesc: "Uma mistura de coisas que uso de verdade, coisas que fiz pra praticar e coisas que fiz só porque pareciam divertidas.",
    proj3Desc: "Um app de controle financeiro pessoal com suporte a múltiplos usuários. Feito em Django, e uso ele mesmo pra acompanhar meus próprios gastos.",
    proj4Desc: "Um bot de Discord pra mesas de RPG de Daggerheart: rolagem de dados, gerenciamento de encontros com autocompletar, fichas de personagem e um rastreador de Medo persistente.",
    proj1Desc: "Uma adaptação digital do jogo de tabuleiro 'Pitágoras'. Este jogo matemático de grupo possui modos Singleplayer e Multiplayer Local, focando em jogabilidade envolvente e interações dinâmicas.",
    proj2Desc: "Uma calculadora utilitária projetada para otimizar o planejamento do Golpe ao Cassino Diamond em Grand Theft Auto Online (GTAO). Demonstra manipulação prática do DOM e lógica para ajudar jogadores a calcular e maximizar seus resultados no jogo.",
    proj5Desc: "Um mini-compilador didático feito com mais 7 colegas da faculdade: traduz um script em português, parecido com linguagem natural, para Java, passando pelas fases clássicas de análise léxica, sintática, semântica e geração de código.",
    pokemonCaption: "alguns dos meus favoritos",
    pokemonCopyright: "Sprites de Pokémon © Nintendo / Game Freak / The Pokémon Company. Só referência de fã, sem afiliação."
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