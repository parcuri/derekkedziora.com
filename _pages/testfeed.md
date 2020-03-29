---
title: Test Feed
permalink: /testfeed
---

{%- for post in site.posts -%}
{%- if post.testfeed -%}
{{ content }} 1
{%- endif -%}
{%- endfor -%}