---
title: About This Site 
description: The tech stack and approach to building this site. 
permalink: /colophon
--- 

The internet is bloated. Site are over-engineered. You don’t need React or mountain of JavaScript to display text. The content of the internet has become an SEO landfill.

This is my small way to say no to all of that. You can dive right into my [source code](https://github.com/derekkedziora/derekkedziora.com) or read why I’ve done things the way I have below.  

## Static for the Win 

This site is build with [Jekyll](https://jekyllrb.com), but it could just as easily be built with [Hugo](https://gohugo.io), [11y](https://www.11ty.dev) or a dozen other static site generators&thinsp;—&thinsp;no, not Gatsby which is so complex and fragile that it defeats the whole purpose. 

Static sites are great not only for speed, simplicity and security (I shudder to think about WordPress), they are future proof. My content is in markdown files and converted to semantic HTML. This should stay readable for decades if not centuries. The same is not true of all the content locked away in Medium, Facebook and the blogging platforms *du jour*. 

I host my site on [GitHub Pages](https://pages.github.com), because it’s fast enough and free. 

At some point I’d like to work with my own server (Digital Ocean droplet?) to get some server-side analytics and not be a freemium leech. I’m also keeping an eye on John Sundell’s [Publish](https://github.com/johnsundell/publish). If this can someday work on Swift Playgrounds on my iPad, I’m sold. 

## Useful Things I’ve Built 

My most popular blog post in organic search results is about adding a [dark mode toggle](/blog/dark-mode-revisited). 

Another popular feature that sees a fair amount of traffic and I get asked about a lot is my [random post link](/blog/Getting-Random-Post-in-Jekyll). 

## JavaScript 

The only JS this site uses is the dark / light mode toggle and the random post link. 

If you have JavaScript disabled, you’ll get the color theme that matches your system settings via a CSS media query. 

On a static site, there’s no way to generate a random post without client-side Javascript. Otherwise, all content is still viable and navigation still works. 

I’m a huge believer in accessibility and progressive enhancement. This site still works without JS enabled, with no CSS and on a screenreader.  

## Typography 

I’m a typography nerd. If you haven’t done so already, any person who produces any writing needs to buy [Butterick’s Practical Typography](https://practicaltypography.com). 

I don’t agree with everything Butterick writes. I often deal with slow internet; waiting for massive fonts to load is the last thing I want to deal with. Hence, I always use system fonts with the full understanding that I’m sacrificing beauty for the sake of speed and usability. 

If you are on an Apple device, headers are set in Gill Sans and body text in Iowan Old Style. Sorry everyone else, you’re stuck with fallbacks.