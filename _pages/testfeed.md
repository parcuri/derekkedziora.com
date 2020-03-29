---
title: Test Feed
permalink: /testfeed
---

{%- for post in site.posts -%}
{%- if post.testfeed -%}

{{ content }}

{%- endif -%}
{%- endfor -%}