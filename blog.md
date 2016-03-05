---
layout: default
title:  "Blog"
permalink: /blog
---

<h3 class="page-header">Recent posts</h3>

<ul class="list-unstyled">
{% for post in site.posts %}
    <li>
        <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        {{ post.excerpt }}
    </li>
{% endfor %}
</ul>