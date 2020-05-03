---
title: "What I'm Doing" 
description: "What I'm currently up to"
permalink: /now
layout: default
---

{%- assign counter = 0 -%}

{%- for post in site.posts -%}

{%- if post.now -%}

{%- assign counter = counter | plus: 1 -%}

{%- if counter == 1 -%}

{%- assign dateOfPost = {{post.date | date: "%d"}} -%}

{%- if dateOfPost == "01" or dateOfPost == "21" or dateOfPost == "31" -%}
	{%- assign ordinalEnding = "st" -%}
{%- elsif dateOfPost == "02" or dateOfPost == "22" -%}
	{%- assign ordinalEnding = "nd" -%}
{%- elsif dateOfPost == "03" or dateOfPost == "23" -%}
	{%- assign ordinalEnding = "rd" -%}
{%- else %}
	{%- assign ordinalEnding = "th" -%}
{%- endif %}


{%- assign firstDigitDofP = dateOfPost | slice: 0 -%}

{%- if firstDigitDofP == "0" -%}
	{%- assign prettyDateOfPost = dateOfPost | slice: 1 -%}
{%- else -%}
	{%- assign prettyDateOfPost = dateOfPost -%}
{%- endif -%}

<header>
<h1>{{ page.title }}</h1>
<time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B" }} {{prettyDateOfPost}}{{ ordinalEnding }}, {{ post.date | date: "%Y" }}</time>
</header>


{{ post.content }}

{%- endif -%}
{%- endif -%}

{% endfor %}


## Previously

{% assign counter = 0 %}

{% for post in site.posts %}

{%- if post.now -%}

{%- assign counter = counter | plus: 1 -%}

{% if counter > 1 %}

[{{post.when}}]({{post.url}})

{% endif %}


{%- endif -%}
{%- endfor -%}




