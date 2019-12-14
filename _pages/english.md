---
title: English 
permalink: /english
english-index: true
---

I've digitized some of my lessons from my days as an English teacher. 

I keep getting requests to edit these and and more. There's more to come in 2020! 

Follow my separate [English guides RSS feed](/feed/english-guides.xml "English Guides RSS") for occasional updates. 


## English Guides 

{% for english-guide in site.english-guides reversed %}
[{{english-guide.title}}]({{english-guide.url}})
{% endfor %}