---
title: "Derek Kedziora"
og-type: website
layout: index
---

I’m a Kyiv-based content designer and occasional blogger. 

Have a few minutes? [Check out my blog](/blog).

Learning English or improving your writing? My [English guides](/english) are for you. 

This site is undergoing a complete redesign in the open. [See my progress](/redesign). 

You can also read more [about me](/about), take a look at my [portfolio](/portfolio), see what I’m doing [now](/now), the things I [use](/uses), what I’m [reading](/reading) or how I [built this site](/colophon). 


## What’s New Around Here 

<ul class="listing">
{% assign i = 0 %}
{% for post in site.posts %}
{%- unless post.unlisted -%}
{%- assign i = i | plus: 1 -%}
{%- include blog-listing.html -%}
{% endunless %}
{%- if i == 3 -%}
{%- break -%}
{%- endif -%}
{% endfor %}
</ul>

[All Posts](/blog)

<!---

## Highlights

[Data Driven Marketing in a Web of Fake Data](/blog/fake-data) and [Self-Driving Cars Are Corporate FOMO](/blog/glomar-cars) are my most popular stories on Medium. 

[Dark Mode Revisited](/blog/dark-mode-revisited) gets the most traffic from search engines. 

I get the most emails about [Ten Days of Meditation at Suan Mokkh](/blog/suan-mokkh-retreat) and [Meditation Retreat at Dipabhāvan](/blog/dipibhavan-retreat).  

My real life friends ask me about my [English Guides](/english "English Guides") the most. 
--> 