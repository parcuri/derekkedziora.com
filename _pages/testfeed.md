---
title: Test Feed
permalink: /test-feed
---

{%- for post in site.posts -%}
{%- if post.testfeed -%}

{{ content }}

{%- endif -%}
{%- endfor -%}