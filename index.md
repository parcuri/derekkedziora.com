---
title: "Derek Kedziora"
og-type: website
layout: home
index: true
home-link: false
---


I'm a language geek, UX writer, bibliophile and recovering English teacher.

I blog about my skepticism of the [tech world](/blog/tags#tech "Tech") I find myself in, [meditation](/blog/tags#meditation), [books](/blog/tags#books) and more. 

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