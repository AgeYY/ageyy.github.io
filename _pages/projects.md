---
layout: page
title: Projects
page_title: Fun projects
permalink: /projects/
description: Small tools, research experiments, and things I build out of curiosity.
nav: true
nav_order: 3
---

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="project-list">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
