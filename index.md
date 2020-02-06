---
title: "Derek Kedziora"
og-type: website
index: true
nav-title: true
---

Hey, there! 👋

I’m Derek Kedziora: an American in Kyiv, UX writer, former English teacher and all around geek.

## Highlights

[Data Driven Marketing in a Web of Fake Data](/blog/fake-data) and [Self-Driving Cars Are Corporate FOMO](/blog/glomar-cars) are my most popular stories on Medium. 

[Dark Mode Revisited](/blog/dark-mode-revisited) gets the most traffic from search engines. 

I get the most emails about [Ten Days of Meditation at Suan Mokkh](/blog/suan-mokkh-retreat) and [Meditation Retreat at Dipabhāvan](/blog/dipibhavan-retreat).  

My real life friends ask me about my [English Guides](/english "English Guides") the most. 

## Latest blog posts
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
