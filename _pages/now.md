---
title: Now
description: "What I'm currently up to"
permalink: /now
---

{%- assign counter = 0 -%}

{%- for post in site.posts -%}

{%- if post.now -%}

{%- assign counter = counter | plus: 1 -%}

{%- if counter == 1 -%}
 
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


