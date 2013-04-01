---
layout: page
title: 
description: "I'm living at Ehime."
---
{% include JB/setup %}

### ここはどこ？ / where is here?

[@kkd](http://twitter.com/kkd)がお届けする雑多な日記。 詳しくは[ABOUT](about.html)へ

ここ数年tweetばかりで長文執筆能力が低下したので頑張って日本語書かないと...

{% assign posts = site.posts %}
{% assign listing_limit = 5 %}
{% include post-listing.html %}


<!--
### Recent pages

<ul>
{% for page in site.pages offset: 0 limit: 3 %}
  <li><a href="{{page.url}}">{{page.title}}</a></li>
{% endfor %}
</ul>
 -->

<!-- {% include footer.html %}  -->
