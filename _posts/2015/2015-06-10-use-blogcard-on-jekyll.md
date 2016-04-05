---
layout: post
title: "自分のサイト上で外部リンクをFacebookの画像つきリンクっぽく表示する方法"
description: "サイトをOGP対応にしたので、SNSから格好良くリンクされるようになった。しかし自分の記事から外部のリンクを同じように素敵に表示する方法はないのか調べてみた。"
category: Creative
image: http://giantech.jp/assets/images/20150610/blogcard_hatena.png
tags: [Hack, ハック, Jekyll, OGP, JavaScript, BlogCard, ブログカード]
---

## 自分のサイトでもOGPを取得してリンクを格好よく表示させたい！

OGPの設定をしたので、ようやくSNSでリンクをシェアすると画像やサマリが表示されるようになった。しかし今度は自分の記事の中でも、外部のリンクを貼り付けた時に、fb上の表示のようになってくれると嬉しいと考えた。

調べてみると、どうもはてなブログで**ブログカード**という機能で、外部のリンクを格好よく表示しているらしい。OGPにも対応しているそうだ。そうそう、こういう感じに表示したい！！

![はてなブログカード](/assets/images/20150610/blogcard_hatena.png "はてなブログカード")

といっても、この機能ははてなブログの中で使える機能だ。Jekyll on Github Pagesの環境で実現する方法はないだろうか？

{% include blogcard.html site="staff.hatenablog.com" url="http://staff.hatenablog.com/entry/2014/09/05/143600" image="http://f.st-hatena.com/images/fotolife/h/hatenablog/20140905/20140905122313.png" title="「ブログカード」をOGPなどに対応しました。さまざまなWebページをコンパクトに整形して掲載できます - はてなブログ開発ブログ" desc="はてなブログでは、先日公開した「ブログカード」を拡張し、インターネットの一般的なWebサイトに対応しました。URLを貼るだけで、さまざまなWebページをコンパクトな「ブログカード」形式で紹介することができます。「ブログカード」は、ブログに掲載する記事のタイトルや概要、アイキャッチ画像などを読みやすくまとめて表示する埋め込み形式です。今回の改善では、ソーシャルメディアのシェアで参照されるOGP（Open Graph Protocol）をはじめとして、Webページに記述されているmeta要素などのデータを利用し、はてなブログ外の任意のWebサイトに対応しました。これまでのリリースでは、はてなブログ…" %}

## はてなブログ以外でも使える？

更に調べてみると、このブログカード形式を、はてなブログ以外でも利用できるようにした方がいた。

{% include blogcard.html site="mbdb.jp" url="http://mbdb.jp/hacks/hatenablog-blogcard-ogp-correspondence.html" image="http://mbdb.jp/wp-content/uploads/2014/09/hatena-blog-600x315.jpg" title="はてなブログのブログカードがOGPに対応! はてなブログ以外もブログカードスタイルになるぞ" desc="はてなブログのブログカードが拡張され、OGPにも対応しました。これによりOGPが設定されているサイトは、ブログカード形式でリンクを貼ることができるようになります。" %}

> 要はiframeのsrcではてなブログのエンドポイントURLにパラメータで、取得したいサイトのURLを加えるだけです。

とある。

> これならChromeの「Create Link」やFirefoxの「Make Link」を使うことで、毎回iframeを手動で記述しなくても、サクリとコピペで利用できますね。

とあるので、実際にやってみたら、本当にブログカード形式で表示することができた。

「よし。これでオッケー」と思っていたが、そうは問屋が降ろさなかった。

## フォースは参照先にあり

上記の記事をよく読んでいくと、以下のような記述があった。

> リファラーを見ていて気づいたんですが、ブログカードでリンクを挿入すると、参照先がhttp://hatenablog.com/となり、リンク先ブログのアクセス解析からは自分が発リンクしたことが伝わりません。
> WordPressのピンバックはもちろん、Google Analyticsのトラックバックからもログを参照できないので、「それは嫌だなぁ」という人は普通にリンクを挿入したほうが良いと思います。

つまり、**ブログカードの表示はすべてhatenablog.com経由になるので、自分の記事からリンクを貼っても、参照先からはhatenablogから参照されているようにしか見えない**ということだ。これはちょっと残念。

jekyllのプラグインを作って対応することも考えたが、Github Pagesはjekyllプラグインは動作しないので、使うことができない。

さてどうしよう？

## 解決策は「自前でブログカードを生成すること」

もう少し調べていたら、ちゃんと対応している人がいた。

具体的な解決策としては、**ブックマークレットを使ってはてなブログカードライクなHTMLを生成し記事中に貼り付ける**という方法で対応していた。

{% include blogcard.html site="sakueji.com" url="http://sakueji.com/blogcard-bookmarklet/" image="http://sakueji.com/wp-content/uploads/2014/10/bookmarklet0.jpg" title="【ブログカード風】シンプルに記事をシェアするブックマークレットを作りました" desc="ブログを書くとき、記事へのリンクをどのように貼っていますか？ べた書きですか？ ShareHTMLですか？ GetTabInfoなんて拡張機能を使っている人もいらっしゃるかもしれません。 最近よく見る" %}

こちらのサイトのブックマークレットを登録して、実際に使ってブログカードのHTMLを生成してみたがうまくいったみたいだ。

## Amazonの商品はうまくいかない？

次にAmazonの商品ページについてもブログカード形式で生成しようとしたら、どうもうまくいかないようだ。具体的には、途中でタグが省略されてしまっているようだ。少しデバッグしてみたが、原因がわからないのでとりあえず放置する。

## 自前のサイトではCSSを外部化して生成するコードをスリム化する

オリジナルのブックマークレットで生成されたHTMLは、CSSのスタイルがそのまま埋め込まれているため非常に長い。いくら静的ファイルだからといって、記事中にこんなにリンクが埋め込まれるのは正直気持ち悪い。

そこで、スタイルをCSSに外部化すると、多少はスッキリすることができた。

ブックマークレット：

{% highlight javascript %}
javascript:(function(){javascript:(function(d,j,b,s){function r(){setTimeout(function(){(typeof jQuery=='undefined')?r():b(jQuery)},99)}(j)?b(jQuery):d.body.appendChild(d.createElement('script')).src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',r()})(document,this.jQuery,function($){var ogurl=$("meta[property='og:url']").attr("content");var ogtitle=$("meta[property='og:title']").attr("content");var ogdesc=$("meta[property='og:description']").attr("content");var ogimg=$("meta[property='og:image']:last").attr("content");var urlhost=location.host;if(ogtitle==null){ogtitle=document.title;alert(ogtitle)};if(ogurl==null){ogurl=location.href};if(ogdesc==null){ogdesc=""};if(ogimg==null){ogimg="http://capture.heartrails.com/100x100/?"+ogurl;alert(ogurl)};var card='<!--'+ogtitle+'--><div class="bc-1"><div class="bc-2"><a href="'+ogurl+'" class="bc-3"><img src="'+ogimg+'" class="bc-4"></a></div><p style="margin:0;">'+'<a href="'+ogurl+'" class="bc-5">'+ogtitle+'</a></p><p class="bc-6">'+ogdesc+'</p><div class="bc-7"><p class="bc-8"><img src="http://favicon.hatena.ne.jp/?url='+ogurl+'" class="bc-favicon">'+urlhost+'<img src="http://b.hatena.ne.jp/entry/image/'+ogurl+'" class="bc-hatebu"></p></div></div>';prompt("bc",card);});})();
{% endhighlight %}

外部化したCSS:

{% highlight css %}
div.bc-1 {
  width:100%;
  max-width:500px;
  margin:0 0 20px 0;
  background:#fff;
  border:1px solid#ccc;
  border-radius:5px;
  box-sizing:border-box;
  padding:12px;
}
div.bc-2 {
  width:100px;
  height:100px;
  float:right;
  margin:0 0 10px 10px;
  padding:0;
  position:relative;
  overflow:hidden;
}
a.bc-3 {
  position:absolute;
  width:1000%;
  left:50%;
  margin:0 0 0 -500%;
  text-align:center;
}
img.bc-4 {
  width:auto;
  height:100px;
  margin:0;
  vertical-align:middle;
  display:inline;
}
a.bc-5 {
  color:#333;
  font-weight:bold;
  text-decoration:none;
  font-size:17px;
  margin:0 0 10px 0;
  line-height:1.5;
}
p.bc-6 {
  margin:0;
  color:#666;
  font-size:11px;
  line-height:1.5;
}
div.bc-7 {
  border-top:1px solid#eee;
  clear:both;margin:10px 0 0 0;
  padding:0;
}
p.bc-8 {
  color:#999;
  margin:3px 0 0 0;
  font-size:11px;
}
img.bc-favicon {
  margin:0 5px 0 0;
  padding:0;
  border:none;
  display:inline;
  vertical-align:middle;
}
img.bc-hatebu {
  margin:0 0 0 5px;
  padding:0;
  border:none;
  display:inline;
  vertical-align:middle;
}
{% endhighlight %}

## より綺麗にするには、Jekyllのテンプレート化へ

しかし、CSSを外部化しても、やはり埋め込まれるHTMLが長いし汚い。

仕方ないのでJekyllが利用しているLiquidでテンプレート化してみた。

Liquidテンプレート:blogcard.html

{% highlight html %}
{% raw %}
<div class="bc-1">
  <div class="bc-2">
    <a href="{{ include.url }}" class="bc-3">
	  <img src="{{ include.image }}" class="bc-4">
	</a>
  </div>
  <p style="margin:0;">
    <a href="{{ include.url }}" class="bc-5">{{ include.title }}</a>
  </p>
  <p class="bc-6">{{ include.desc }}</p>
  <div class="bc-7">
    <p class="bc-8">
      <img src="http://favicon.hatena.ne.jp/?url={{ include.url }}" class="bc-favicon">{{ include.site }}<img src="http://b.hatena.ne.jp/entry/image/{{ include.url }}" class="bc-hatebu">
    </p>
  </div>
</div>
{% endraw %}
{% endhighlight %}

ブックマークレット： Generate BlogCard on Jekyll

{% highlight javascript %}
{% raw %}
	javascript:(function(){javascript:(function(d,j,b,s){function r(){setTimeout(function(){(typeof jQuery=='undefined')?r():b(jQuery)},99)}(j)?b(jQuery):d.body.appendChild(d.createElement('script')).src='//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',r()})(document,this.jQuery,function($){var ogurl=$("meta[property='og:url']").attr("content");var ogtitle=$("meta[property='og:title']").attr("content");var ogdesc=$("meta[property='og:description']").attr("content");var ogimg=$("meta[property='og:image']:last").attr("content");var urlhost=location.host;if(ogtitle==null){ogtitle=document.title;alert(ogtitle)};if(ogurl==null){ogurl=location.href};if(ogdesc==null){ogdesc=""};if(ogimg==null){ogimg="http://capture.heartrails.com/100x100/?"+ogurl;alert(ogurl)};var card='{% include blogcard.html site="'+urlhost+'" url="'+ogurl+'" image="'+ogimg+'" title="'+ogtitle+'" desc="'+ogdesc+'" %}';prompt("blogcard",card);});})();
{% endraw %}
{% endhighlight %}

これで、挿入されるリンクは、以下の程度で収まることができた。

{% highlight html %}
{% raw %}
	{% include blogcard.html site="giantech.jp" 
		url="http://giantech.jp/2015/06/04/what-origin-is-the-purpose-diagram" 
		image="http://giantech.jp/assets/images/20150604/purpose_venn_diagram_ja.png" 
		title="あの有名な「生きがいを見つけるためのベン図」はどこから来たのか？" 
		desc="SNSで話題になっていた「YOU LOVE IT & THE WORLD NEEDS IT & YOU ARE PAID FOR IT & YOU ARE GREAT AT IT = PURPOSE」の図はどこから来たのかを調べてみた。" %}
{% endraw %}
{% endhighlight %}	

これなら記事中に含まれていてもなんとか堪えられるかな？

今回のリファクタリングはこれにて完了！

## 理想形は？

理想は、ブログカード生成サービスを外部において、参照問題を解決しつつ、記事中に簡単な設定で記述できるのが一番きれいなのですが。それまたいずれ（誰かがやってくれるのでしょう...）。

