---
layout: page
title: About
permalink: /about/
weight: 3
---

<h1><strong><span data-i18n="about.title">Sobre Mim</span></strong></h1>

<p><span data-i18n="about.greeting">Oi eu sou o</span> <strong>{{ site.author.name }}</strong> :wave:,<br></p>

<p data-i18n="about.intro_p1">Sou bacharel em Design de Jogos, com experiência prática como programador e game designer. Possuo conhecimentos em desenvolvimento de back-end com Java (Spring Boot, Node e Netty) e front-end com CSS, HTML e TypeScript (ReactJS, React Native), além de desenvolvimento de jogos com Unity e Godot. Tenho experiência com metodologias ágeis, treinamento e orientação de estagiários e profissionais juniores.</p>

<p data-i18n="about.intro_p2">Meu diferencial é a versatilidade entre desenvolvimento web, mobile e jogos, com habilidade para adaptação e rápida absorção de novas tecnologias para necessidades específicas de cada projeto. Sou apaixonado por inovação e desafios, busco sempre conhecer bem cada área no desenvolvimento de jogos e web pra facilitar a comunicação e ter uma noção melhor de escopo na hora de planejar e desenvolver.</p>

<div class="row">
{% include about/skills.html title="<span data-i18n='about.game_dev_skills'>Game Dev. Skills</span>" type="other" %}
{% include about/skills.html title="<span data-i18n='about.programming_skills'>Programming Skills</span>" type="programming" %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
