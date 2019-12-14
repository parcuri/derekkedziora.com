---
title: How to Make a Tag Page in Jeykll
description: Making a tag page on a Jekyll blog is a lot harder than it ought to be
category: programming
syntax: true
---

If you don't use a plugin, creating a page that automatically sorts your blog posts by tag on Jekyll is trickier than it ought to be. I wanted a page that had a list of all tags for the site at the top. Each tag would then be a link to a section further down the page that had a list of all posts with that tag.

Here's how to do it:

## Make an array with all of your tags

Creating an array in liquid isn't elegant, but it's possible:


{% highlight liquid %}{% raw %}
{% for tag in site.tags %}
  {% assign placeHolderTag = tag | first %}
  {% assign listOfTags = listOfTags | append: placeHolderTag %}
  {% assign listOfTags = listOfTags | append: ',' %}
{% endfor %}

{% assign listOfTags = listOfTags | split: ',' | sort_natural %}
{% endraw %}{% endhighlight %}

## Generate the list of tags

Next, make the list of tags for the top of the page that link to the list of posts with that tag:

{% highlight liquid %}{% raw %}
{% for listOfTag in listOfTags %}
  <span class='no-wrap'><a class='no-wrap' href="#{{listOfTag}}">
  {{listOfTag | replace: "-", " "}}</a> |</span>
{% endfor %}{% endraw %}
{% endhighlight %}

I cleaned up the display of the tags by getting rid of hyphens and adding no wrap so that a single tag wouldn't end up on two lines.

## Generate a list of posts for each tag

The last step is creating a list of posts for each tag and making it possible to navigate to each tag from the top of the page:

{% highlight liquid %}{% raw %}
{% for listOfTag in listOfTags %}
<h3 id='{{listOfTag}}'>{{listOfTag | replace: "-", " "}}</h3>
  <ul style="list-style-type: none">
    {% for post in site.posts %}
      {% if post.tags contains listOfTag %}
        <li><a href="{{post.url}}">{{post.title}}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}{% endraw %}
{% endhighlight %}

The element id will match the tag from the list at the top of the page. You can fiddle with the display options, but I prefer a plain unsorted list.

## Voila

Copy, paste and customize this code to get a tag page for your Jekyll blog. Here's [my tag page](/blog/tags).
