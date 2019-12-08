---
title: Blog Posts
description: "The list of all of my blog posts."
blogNav: true
og-type: website
blogIndex: true
blogNav: true
permalink: /blog
---
<ul class="listing">
{%- for post in site.posts -%}
{%- unless post.unlisted -%}
  	{%- include blog-listing.html -%}
{%- endunless -%}
{%- endfor -%}
</ul>