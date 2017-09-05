---
layout: page
nav-title: Home
title: Grey Matter
permalink: /
---

A prototyping kit built on Jekyll with the Oomph Scaffold, Bourbon, Neat and Refills

## Oomph Scaffold
Pull the [latest Oomph SASS Scaffold](https://github.com/oomphinc/scss-scaffold) and insert it into this project at `_sass`. This will help ensure that the code coming out of the wireframe can be inserted right into the project as development on WordPress or Drupal begins. 

## Bourbon and Neat
These libraries/tools help get us going quicker, and are required by the Oomph SASS Scaffold. Review the ReadMe file in the Scaffold to get those libraries installed. 

## Font Awesome
We also include a CDN link to the full Font Awesome set of icons. [Reference guide is here](http://fortawesome.github.io/Font-Awesome/icons/). This helps us use icons quickly, and apply a custom set later as we define which icons we need. [A list of the icons that this project uses should be made here]({{ "icons/" | prepend: site.baseurl }}). 


# Prototyping
Oomph built this project to speed up prototyping and development. [Refills](http://refills.bourbon.io) helps us do that, but as a front end developer, you can also create your own patterns to make a living style guide. [Follow the code pattern found here]({{ "refills/" | prepend: site.baseurl }}) to get started. 


# Jekyll
Reasons to use a Jekyll Wireframe System
========================================

* Built-in local development, fast and easy `rake serve` command compiled HTML and CSS.
* Supports `.md` as well as `.html` or `.xml` files. Mix and match as needed. 
* Supports partials for repetitive elements, like header, footer and navigation. 
* Written with a clean and unobtrusive {% raw %}`{{ double brace }}`{% endraw %} syntax.
* Supports typical `if/else`, `for`, and `while` directives. 
* [Has many built in output filters](https://gist.github.com/smutnyleszek/9803727#output) to sort arrays and filter strings.
* Supports a simple date-based blog. [More details here](https://jekyllrb.com/docs/posts/). [Jekyll even supports the idea of Draft posts!](https://jekyllrb.com/docs/drafts/)
* Supports [categories and tags](https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/) with archive pages. 
* Built-in support for [syntax highlighting of code snippets](https://jekyllrb.com/docs/posts/#highlighting-code-snippets) using either Pygments or Rouge.
* [Support for data files](https://jekyllrb.com/docs/datafiles/) (CSV, JSON or YAML) to drive dynamic lists of content. 

## More Jekyll
You like? Then [check out Jekyll Bootstrap](http://jekyllbootstrap.com) for some neat ways to make an entire site with Jekyll and serve it on Github pages or your own server. 

## Cool things Jekyll templating tags do

The `unless` tag in a `forloop`: 

{% highlight ERB %}
{% raw %}
<a href="{{  file.url }}" >{{ file.name }}</a>{% unless forloop.last %}, {% endunless %}
{% endraw %}
{% endhighlight %}

Forloops also support first and last built in (no counter needed!) as seen above. 

Dump a whole variable: `{{ variable | json }}`. Supports 
