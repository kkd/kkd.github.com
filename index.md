---
layout: page
title: "愛媛で、いきてま！"
description: "I'm living at Ehime."
---

{% for post in site.posts offset: 0 limit: 3 %}
  <h2><a href="{{post.url}}">{{post.title}}</a></h2>
  <p>{{ post.content }}</p>
{% endfor %}
