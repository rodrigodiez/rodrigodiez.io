---
layout: default
title:  "Blog"
permalink: /blog.html
---

<h3 class="page-header">Recent posts</h3>

<ul class="list-unstyled">
{% for post in site.posts %}
    <li>
        <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }} <a href="{{ post.url | prepend: site.baseurl }}">... read more</a></p>
    </li>

    <hr>
{% endfor %}
</ul>
