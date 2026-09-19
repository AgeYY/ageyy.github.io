---
layout: page
title: Paper Trending
description: Explore research topics across ICLR, ICML, and NeurIPS with paper-count trends and transparent ICLR acceptance comparisons.
permalink: /projects/paper-trending/
img: assets/img/projects/paper-trending.png
date: 2026-09-19
github: https://github.com/AgeYY/paper-trending
demo: https://ageyy.github.io/paper-trending/
demo_label: Try the demo
---

Explore how a research topic changes over time: search paper titles and abstracts,
compare yearly publication counts, and view ICLR topic-versus-overall acceptance
rates with explicit submission-pool definitions and coverage warnings.

[Try the lightweight demo](https://ageyy.github.io/paper-trending/)

The demo runs entirely in your browser using keyword search. It downloads public
paper metadata on demand and uses a fixed dataset snapshot. It has no accounts,
saved search history, or AI calls. Missing data is shown as unavailable, not zero.

![Paper Trending keyword search with publication and acceptance-rate charts]({{ '/assets/img/projects/paper-trending.png' | relative_url }}){: .img-fluid .rounded }

For AI-assisted topic interpretation, local semantic search, and PDF exports,
run the full Python application locally with your own API key. The MIT-licensed
source includes setup instructions, corpus collection tools, and the static-site
exporter. Third-party metadata retains its original rights.

[Source code and local setup](https://github.com/AgeYY/paper-trending)

[← All projects]({{ '/projects/' | relative_url }})
