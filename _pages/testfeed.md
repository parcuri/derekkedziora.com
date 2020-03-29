---
title: Test Feed
permalink: /testfeed
---

{%- for post in site.posts -%}
{%- if post.testfeed -%}
{{ post.content }}
{%- endif -%}
{%- endfor -%}