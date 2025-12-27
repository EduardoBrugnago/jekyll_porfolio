// Language Toggle System
const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      blog: "Blog",
      documentation: "Documentação"
    },
    footer: {
      coded_with: "com",
      by: "por",
      theme: "tema"
    },
    landing: {
      description: "Designer de jogos e desenvolvedor Full Stack. Apaixonado por criar jogos e experiências digitais incríveis."
    },
    about: {
      title: "Sobre Mim",
      greeting: "Oi eu sou o",
      intro_p1: "Sou bacharel em Design de Jogos, com experiência prática como programador e game designer. Possuo conhecimentos em desenvolvimento de back-end com Java (Spring Boot, Node e Netty) e front-end com CSS, HTML e TypeScript (ReactJS, React Native), além de desenvolvimento de jogos com Unity e Godot. Tenho experiência com metodologias ágeis, treinamento e orientação de estagiários e profissionais juniores.",
      intro_p2: "Meu diferencial é a versatilidade entre desenvolvimento web, mobile e jogos, com habilidade para adaptação e rápida absorção de novas tecnologias para necessidades específicas de cada projeto. Sou apaixonado por inovação e desafios, busco sempre conhecer bem cada área no desenvolvimento de jogos e web pra facilitar a comunicação e ter uma noção melhor de escopo na hora de planejar e desenvolver.",
      game_dev_skills: "Game Dev. Skills",
      programming_skills: "Programming Skills"
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      blog: "Blog",
      documentation: "Documentation"
    },
    footer: {
      coded_with: "with",
      by: "by",
      theme: "theme"
    },
    landing: {
      description: "Game designer and Full Stack developer. \n Passionate about creating amazing games and digital experiences."
    },
    about: {
      title: "About Me",
      greeting: "Hi, I'm",
      intro_p1: "I have a bachelor's degree in Game Design, with practical experience as a programmer and game designer. I have knowledge in back-end development with Java (Spring Boot, Node, and Netty) and front-end with CSS, HTML, and TypeScript (ReactJS, React Native), as well as game development with Unity and Godot. I have experience with agile methodologies, training and mentoring interns and junior professionals.",
      intro_p2: "My strength is versatility across web, mobile, and game development, with the ability to adapt and quickly absorb new technologies for the specific needs of each project. I'm passionate about innovation and challenges, always seeking to understand each area of game and web development well to facilitate communication and have a better sense of scope when planning and developing.",
      game_dev_skills: "Game Dev. Skills",
      programming_skills: "Programming Skills"
    }
  }
};

// Get current language from localStorage or default to Portuguese
let currentLang = localStorage.getItem('language') || 'pt';

// Function to update all translations on the page
function updateTranslations(lang) {
  // Update elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[lang];

    keys.forEach(k => {
      value = value ? value[k] : '';
    });

    if (value) {
      element.textContent = value;
    }
  });

  // Update skills and timeline with data-lang attributes
  updateSkillsAndTimeline(lang);

  // Update language toggle button
  updateLanguageButton(lang);
}

// Function to update skills and timeline based on language
function updateSkillsAndTimeline(lang) {
  // Update elements with data-lang-pt and data-lang-en
  document.querySelectorAll('[data-lang-pt]').forEach(element => {
    const ptValue = element.getAttribute('data-lang-pt');
    const enValue = element.getAttribute('data-lang-en');
    element.textContent = lang === 'pt' ? ptValue : enValue;
  });
}

// Function to update language toggle button
function updateLanguageButton(lang) {
  const langToggler = document.getElementById('language-toggler');
  if (langToggler) {
    langToggler.innerHTML = lang === 'pt'
      ? '<i class="fas fa-language"></i> EN'
      : '<i class="fas fa-language"></i> PT';
  }
}

// Function to toggle language
function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('language', currentLang);
  updateTranslations(currentLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateTranslations(currentLang);
});
