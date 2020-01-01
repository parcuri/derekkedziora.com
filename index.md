---
title: "Derek Kedziora"
og-type: website
layout: default
index: true
---

👋 Hey there. I’m Derek Kedziora (pronounced ken-JO-ra). 

I'm a content designer / UX writer or whatever the latest buzzword for technical writer is. Although I started out as an English teacher.   

I blog about a bunch of different things. My most popular posts  based on search engine hits and emails:  

🌗 Adding [dark mode](/blog/dark-mode-revisited) to a static site and creating a [tag page](/blog/tag-page-jekyll) with Jekyll. 

🧐 Pragmatic tech skepticism: [Data Driven Marketing in a Web of Fake Data](/blog/fake-data) and [Self-Driving Cars Are Corporate FOMO](/blog/glomar-cars).

🧘‍♂️ Meditation retreats: [Ten Days of Meditation at Suan Mokkh](/blog/suan-mokkh-retreat) and [Meditation Retreat at Dipabhāvan](/blog/dipibhavan-retreat).  

🇺🇸 My [English Guides](/english "English Guides") are a leftover lessons from my days as an English teacher. 

## Latest blog posts
{% assign i = 0 %}
{% for post in site.posts %}
{%- unless post.unlisted -%}
{%- assign i = i | plus: 1 -%}
[{{post.title}}&nbsp;»]({{post.url}} "{{post.title}}")

{% endunless %}
{%- if i == 3 -%}
{%- break -%}
{%- endif -%}
{% endfor %}