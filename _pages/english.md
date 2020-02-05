---
title: English 
permalink: /english
english-index: true
nav-title: true
---

Teaching English as a foreign language was my full-time gig until I switched to writing at the end of 2016.  

I digitized a few of my lessons, but I plan to add more and clean up the existing ones of one of 2020 resolutions that I likely won’t fufill. Anyway, updates are coming…follow my [English Guide RSS feed](/feed/english-guides.xml "English Guides RSS") for new guides. 

## English Guides 

{% for english-guide in site.english-guides reversed %}
[{{english-guide.title}}]({{english-guide.url}})
{% endfor %}