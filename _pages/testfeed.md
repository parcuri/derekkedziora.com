---
title: Test Feed
permalink: /testfeed
---
{%- assign counter = 0 -%}

{%- for post in site.posts -%}

{%- if post.now -%}

{%- assign counter = counter | plus: 1 -%}

{%- if counter == 1 -%} 
{{ post.content }}

—&thinsp;*{{ post.when }}*
{%- endif -%}

{%- endif -%}
{%- endfor -%}

<h2>Previously…</h2>

{%- for post in site.posts -%}

{%- if post.now -%}

{%- assign counter = counter | plus: 1 -%}

{%- if counter > 1 -%}

<h3>{{ post.when }}</h3>

{{ post.content }} 
{%- endif -%}


{%- endif -%}
{%- endfor -%}