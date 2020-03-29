---
title: Test Feed
permalink: /testfeed
---
{%- assign counter = 0 -%}

{%- for post in site.posts -%}

{%- assign counter = counter | plus: 1 -%}

{%- if post.now -%}

{%- if counter = 1 -%} 

{{ post.content }}

—&thinsp;*{{ post.when }}*

{%- endif -%}

{%- endif -%}
{%- endfor -%}