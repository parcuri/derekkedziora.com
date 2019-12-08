---
title: Blog Tags
description: "All of my blog posts sorted by tag"
blogNav: true
layout: page
tagIndex: true
permalink: /blog/tags
---

{% for category in site.categories %}
  {% assign placeHolderTag = category | first %}
  {% assign listOfTags = listOfTags | append: placeHolderTag %}
  {% assign listOfTags = listOfTags | append: ',' %}
{% endfor %}

{% assign listOfTags = listOfTags | split: ',' | sort_natural %}

{% assign tagCounter = 0 %}
{% for listOfTag in listOfTags %}
{% endfor %}
<section class="tag-lists">
<p class="tag-nav">
{% for listOfTag in listOfTags %}
<span><a href="#{{listOfTag}}">{{ listOfTag | replace: "-", "&nbsp;" }}</a></span>
{% endfor %}
</p>
</section>
{% for listOfTag in listOfTags %}
<section id='{{listOfTag}}' class="tag-lists">
<h2>{{listOfTag | replace: "-", " "}}</h2>
<ul>
{% for post in site.posts %}
{% if post.categories contains listOfTag %}
{% include blog-listing.html %}
{% endif %}
{% endfor %}
</ul>
<p><a href="#" title="All Tags" class="tag-nav">All Tags »</a></p>
</section>
{% endfor %}