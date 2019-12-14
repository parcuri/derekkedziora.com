---
title: "Derek Kedziora"
og-type: website
layout: default
index: true
---

I'm a content designer and UX writer. 

Check out my [blog](/blog "Blog") for a mix of tech, books, reflections and philosophy. 

Need help with English? After nearly a decade of teaching English as foreign language, I'm digitizing my old lessons as [English Guides](/english "English Guides").

<!--
My latest project is building a new site devoted to gathering online meditation resources. It's far from finished, but take a peak at [the Meditator's Craft](https://meditatorscraft.com "The Meditator's Craft"). 
-->

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