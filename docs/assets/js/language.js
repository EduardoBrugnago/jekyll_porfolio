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
      description: "Designer de jogos e desenvolvedor Full Stack. Apaixonado por criar jogos e experiências digitais."
    },
    about: {
      title: "Sobre Mim",
      greeting: "Oi eu sou o",
      intro_p1: "Sou bacharel em Design de Jogos, com experiência prática como programador e game designer. Possuo conhecimentos em desenvolvimento de back-end com Java (Spring Boot, Node e Netty) e front-end com CSS, HTML e TypeScript (ReactJS, React Native), além de desenvolvimento de jogos com Unity e Godot. Tenho experiência com metodologias ágeis, treinamento e orientação de estagiários e profissionais juniores.",
      intro_p2: "Meu diferencial é a versatilidade entre desenvolvimento web, mobile e jogos, com habilidade para adaptação e rápida absorção de novas tecnologias para necessidades específicas de cada projeto. Sou apaixonado por inovação e desafios, busco sempre conhecer bem cada área no desenvolvimento de jogos e web pra facilitar a comunicação e ter uma noção melhor de escopo na hora de planejar e desenvolver.",
      game_dev_skills: "Design de Jogos",
      programming_skills: "Programação"
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

let currentLang = localStorage.getItem('language') || 'pt';

async function updateTranslations(lang) {
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

  await updateSkillsAndTimeline(lang);

  updateLanguageButton(lang);
}

let skillsData = null;
let timelineData = null;

async function loadSkillsData() {
  if (!skillsData) {
    try {
      const response = await fetch('/assets/data/skills.json');
      if (!response.ok) {
        console.error('Failed to load skills.json:', response.status);
        return null;
      }
      skillsData = await response.json();
      console.log('Skills data loaded:', skillsData);
    } catch (error) {
      console.error('Error loading skills:', error);
      return null;
    }
  }
  return skillsData;
}

async function loadTimelineData() {
  if (!timelineData) {
    try {
      const response = await fetch('/assets/data/timeline.json');
      if (!response.ok) {
        console.error('Failed to load timeline.json:', response.status);
        return null;
      }
      timelineData = await response.json();
      console.log('Timeline data loaded:', timelineData);
    } catch (error) {
      console.error('Error loading timeline:', error);
      return null;
    }
  }
  return timelineData;
}

function renderSkills(skills, container, lang) {
  container.innerHTML = '';
  skills.forEach(skill => {
    const skillName = skill.name?.pt ? skill.name[lang] : skill.name;
    const skillExperience = skill.experience?.pt ? skill.experience[lang] : skill.experience;

    const skillHTML = `
      <div class="row justify-content-between align-items-center mb-3">
        <div class="col-8">
          <p class="mb-0"><i class="${skill.icon}"></i> ${skillName}</p>
        </div>
        <div class="col-4 text-right">
          <p class="mb-0 text-muted">${skillExperience}</p>
        </div>
      </div>
    `;
    container.innerHTML += skillHTML;
  });
}

function renderTimeline(timeline, container, lang) {
  container.innerHTML = '';
  timeline.forEach(item => {
    const title = item.title?.pt ? item.title[lang] : item.title;
    const description = item.description?.pt ? item.description[lang] : item.description;
    const to = item.to?.pt ? item.to[lang] : item.to;

    const timelineHTML = `
      <div class="timeline-item">
        <div class="content">
          <h2>${title}</h2>
          <h6 class="date">${item.from} — ${to}</h6>
          <p>${description}</p>
        </div>
      </div>
    `;
    container.innerHTML += timelineHTML;
  });
}

async function updateSkillsAndTimeline(lang) {
  console.log('updateSkillsAndTimeline called with lang:', lang);

  const skillContainers = document.querySelectorAll('[data-skill-type]');
  console.log('Found skill containers:', skillContainers.length);

  if (skillContainers.length > 0) {
    const skills = await loadSkillsData();
    if (skills) {
      skillContainers.forEach(container => {
        const type = container.getAttribute('data-skill-type');
        const skillsContainer = container.querySelector('.skills-container');
        console.log('Rendering skills for type:', type, 'Container found:', !!skillsContainer);
        if (skillsContainer && skills[type]) {
          renderSkills(skills[type], skillsContainer, lang);
        }
      });
    }
  }

  const timelineContainer = document.getElementById('timeline-container');
  console.log('Timeline container found:', !!timelineContainer);

  if (timelineContainer) {
    const timeline = await loadTimelineData();
    if (timeline) {
      renderTimeline(timeline, timelineContainer, lang);
    }
  }
}

function updateLanguageButton(lang) {
  const langToggler = document.getElementById('language-toggler');
  if (langToggler) {
    langToggler.innerHTML = lang === 'pt'
      ? '<i class="fas fa-language"></i> EN'
      : '<i class="fas fa-language"></i> PT';
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  localStorage.setItem('language', currentLang);
  updateTranslations(currentLang);
}

document.addEventListener('DOMContentLoaded', function() {
  updateTranslations(currentLang);
});
