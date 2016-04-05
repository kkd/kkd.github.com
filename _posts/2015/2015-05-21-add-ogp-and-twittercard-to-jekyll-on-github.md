---
layout: post
title: "Jekyll on Github に OGP/TwitterCardを対応させた"
description: "このサイトはながらくOGP対応しておらず、fb上で悲しい表示しかされていなかったので、JekyllベースのブログにOGPと（TwitterCard）の対応をした。"
category: Creative
image: http://giantech.jp/assets/images/20150521/sns.jpg
tags: [jekyll, OGP, Tool, ツール, facebook, web]
---

<img src="/assets/images/20150521/sns.jpg" alt="Eyecatch"/>

## きっかけ

このサイトは[Jekyll Bootstrap](http://jekyllbootstrap.com/)ベースでテンプレートを生成した後、カスタマイズしたものをGithub Pagesに置いて公開していた。[Jekyll](http://jekyllrb.com/)単体では標準ではOGPに対応しておらず、プラグインもなさげだったので、OGP非対応のまま数年が過ぎていた。当初はあまり気にしていなかったが、さすがにこのままでは格好悪いよね、ということでOGP対応に取り組むことにした。

## 参考にしたサイト

* [OGPの設定とかSNS関係のところ修正した](http://kawaken.github.io/memo/2013/08/30/OGP%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A8%E3%81%8BSNS%E9%96%A2%E4%BF%82%E3%81%AE%E3%81%A8%E3%81%93%E3%82%8D%E4%BF%AE%E6%AD%A3%E3%81%97%E3%81%9F.html)
* [Open Graph for Jekyll](https://gist.github.com/pathawks/1406355)
* [WebサイトにOpen Graph Protocol (OGP) 設定を追加する](http://www.agilegroup.co.jp/technote/magnolia-ogp.html)

## やったこと

上記のサイトのスニペットをベースに、トップページの場合と、各記事の場合の２パターンで、それぞれog:type、og:image、og:descriptionの内容を切り換えるように設定した。

og:imageについては、アイキャッチの画像を入れている場合と、入れていない場合があるので、記事毎のメタ情報でimageタグが指定していたらその画像を、そうでない場合はサイトのロゴを表示するようにした。

最初はogp.html内でif文書いてケース分けしていたが、かなり見苦しいので、各ケースをextract fileしてogp.htmlではincludeだけするようにした。

ogp.html:

{% raw %}
    <meta property="og:type" content="{% include ogp/type.html %}" />
    <meta property="og:url" content="{{ site.url }}{{ page.url }}" />
    <meta property="og:description" content="{% include ogp/desc.html %}" />
    <meta property="og:site_name" content="{{ site.title }}" />
    <meta property="og:title" content="{% include ogp/title.html %}" />
    <meta property="og:image" content="{% include ogp/image.html %}" />
    <meta property="article:published_time" content="{% include ogp/date.html %}" />
    <meta property="article:author" content="http://www.facebook.com/{{ site.author.facebook }}" />
{% endraw %}



ogp/image.html(実際には改行は含めていない):
{% raw %}
    {% if page.image %}
        {% capture page_image %}{{ page.image }}{% endcapture %}
    {% else %}
        {% capture page_image %}{{ site.url }}/assets/logo.png"{% endcapture %}
    {% endif %}
    {{ page_image }}
{% endraw %}

ogp/type.html(実際には改行は含めていない):

{% raw %}
    {% if page.title == site.title %}
        {% capture page_type %}website{% endcapture %}
    {% else %}
        {% capture page_type %}article{% endcapture %}
    {% endif %}
    {{ page_type }}
{% endraw %}

## ついでにTwitterCard

元々はOGP対応だけしようと思っていたが、ついでにTwitterCardにも対応した。OGPのインクルードファイルを利用して以下のように記載。

twittercard.html:

{% raw %}
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@kkd">
    <meta name="twitter:title" content="{% include ogp/title.html %}">
    <meta name="twitter:url" content="{{ site.url }}{{ page.url }}">
    <meta name="twitter:description" content="{% include ogp/desc.html  %}">
    <meta name="twitter:image" content="{% include ogp/image.html %}">
{% endraw %}

## キャッシュが残っていて困った

既にfb上で投稿した記事については、FacebookのDebuggerで確認してもOGP対応されて表示されなかったし、デバッガ上でFetch new scrape informationをしても駄目。半ば諦めていたが、POST送信によるキャッシュクリアを試してみたらクリアできたみたいで一安心。以下のサイトからできた。

http://www.kagua.biz/fb/cacheclear.html

## 感想

もう少しスマートにできる気もするが、まぁ今の時点ではOGP対応ができればよかったので満足。

og:imageの指定については、ルールを決めて「画像ファイル名=記事名」とでもすれば設定しなくてもよくなりそうな気がするが、やり過ぎ感があるので今はやめておく。

しかし、こういうことをしていると、どんどん[Liquid](https://github.com/Shopify/liquid/wiki)を活用したくなってしまうが、こういったTemplate系の実装は黒魔術になりそうなのであまり手出しはしたくない。

## おまけ

この記事にJekyllのテンプレート部分をコードブロックで埋め込んだが、どうもLiquid記法の部分がエスケープされずに置換されてしまっていたためうまく表示できなかった。

LiquidでRawフォーマットで表示するには、rawタグで囲む必要があるので気をつけよう。[How to escape liquid tempalte tags](http://stackoverflow.com/questions/3426182/how-to-escape-liquid-template-tags)を参照のこと。

