---
title: Test Feed
permalink: /testfeed
---
{%- assign counter = 0 -%}

{%- for post in site.posts -%}

{%- increment counter -%}

{%- if post.now -%}

{%- if counter == 1 -%} 

{{ post.content }}

—&thinsp;*{{ post.when }}*

{%- endif -%}

{%- endif -%}
{%- endfor -%}