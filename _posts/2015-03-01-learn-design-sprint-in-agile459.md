---
layout: post
title: "Agile459でデザインスプリントを体験するワークショップをやってみた"
description: ""
category: 
tags: [agile]
---
{% include JB/setup %}

## デザインスプリントってなんだろう？

2015/03/01に[Agile459](http://agile459.github.io)にて、デザインスプリントを体験するワークショップを開催してみた。

名前は昨年くらいからなんとなく見ていたけどちゃんと調べてなかった。最近また話題になるので調べてみたら面白そうと思いとりあえず試してみたくなった。（気になったら試してみたい病）

最初は[公開されている資料](http://www.slideshare.net/takaumada/design-sprint)を読み合うくらいにしようと思ったが、恐らく参加者も自分もピンとこないか、わかったつもりになるので、実際に試すことをを中心にワークを考えてみた。主催側なので自分は参加するというより、ファシリテートに専念することに。

<iframe src="//www.slideshare.net/slideshow/embed_code/45294031" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

最初のトピック選択が非常に重要なのだが、今回はトピック選択の部分は、解決したいテーマ選択という形にした。今回の場合、実際のワークを始めてから、内容を検討したところ問題解決に画面が不要だと判断してテーマを変えるというアクシデントがあった。これは改善が必要なところ。。。

ワークについては、[安藤さんのデザインスプリント風ワーク](http://www.slideshare.net/yukio.andoh/html5-conference-2015-design-sprint)を参考にしようとしたけど、結局[馬田さん](http://www.slideshare.net/takaumada/design-sprint-process)のプロセスの資料や、[オリジナル記事](http://www.gv.com/sprint/)から辿れるブログを参考にした。計算上は３日分をできるかなと思ったけど、説明などもあり２日分でさすがに時間が尽きたのはご愛嬌。

## やってみたら案外できた！？

タイムボックスによって漸進＆高速にフィードバックループを回す重要性と、そのために個人ワークを中心に置くという発想は、思ったよりもずっとしっくり来た。特に[CrazyEights](http://www.fastcodesign.com/1672917/the-8-steps-to-creating-a-great-storyboard)は **5分で8画面をスケッチする**(1画面につき40秒) という非常にタイトなワーク。今回は二周してみたがそれでも1画面につき80秒で時間を計って「はい、次」とどんどん先に進むというプレッシャーがある。それでも全員なんとか画面のデザインできてたのに驚いた。

<iframe src="https://www.flickr.com/photos/kakeda/16109062494/in/album-72157651188881521/player/" width="320" height="240" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
（Crazy Eights中）

<iframe src="https://www.flickr.com/photos/kakeda/16730162791/in/set-72157651188881521/player/" width="320" height="240" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
（ストーリーボード作成中）

デザインスプリントは主にUI/UXに関しての実験が目的なのでコードは基本書かない。そのため、どんなロールの人でも全工程参加しやすいというメリットがある。「UXデザイナにおまかせ」という役割分担ではなく、
関係者全員の頭を使ってUXを検討していくという姿勢はスクラムぽさを感じた。(スプリントだしね)

今回は時間の都合上、本来なら５日間のうち２日間かけてやるプロセスを、２時間くらいに凝縮した。かなり無理があったのだが、それでも時間を区切って進めることで、思ったよりもずっとできることがわかった。（参加者視点だとまた違う印象があるかもしれないけど...)

<iframe src="https://www.flickr.com/photos/kakeda/16705480606/in/album-72157651188881521/player/" width="320" height="240" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
（投票のための説明中）

<iframe src="https://www.flickr.com/photos/kakeda/16109068564/in/album-72157651188881521/player/" width="320" height="240" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
（投票結果）

## 問題に対するアプローチの違い

デザインスプリントの問題意識としては

* アイデアの質を高めるためのグループワークは時間がかかりがち
* グループワークの成功はよいファシリテート依存する
* 個人ワーク中心に進めれば進行は早いがアイデアの質を高めるのは困難
* エッジなアイデアはグループワークの中で排除されがち

というものがあり、その解決策として、デザインスプリントは

* 個人ワークを中心とした最低限のグループワーク
* 厳格なタイムボックスによる時間制約
* フィードバックループによるアイデアの洗練
* 素早い意思決定プロセス（投票と責任者による決定）
* 最終日のユーザー検証に駆動されるゴール駆動

という手法をとったのだろう。

参加者の感想では、個人ワーク中心というプロセスに対して、**自分の意見がブラッシュアップされることなく選ばれることへの不安** という意見もあった。

チームの多様性を生かし、互いの意見を交換しい１人では思いもよらないものを創発するプロセスを採用しようとする場合、合意形成時間がかかることが多い。（意思決定プロセスを明確にすることで時間は短縮されるが、それでも相互の意見交換・議論の時間はある程度かかる）

この辺りのジレンマを、デザインスプリントでは、**個人がそれぞれ考えたよいアイデアを素早く実現し検証することで創発する**というプロセスを採用して解決しようとしている。

デザインスプリントを行うのであれば、根底にある **いくら時間をかけてアイデアについて話し合ったり作っても、結局はユーザーに使ってもらわないとわからない。仮説に過ぎない。** という不確実性についての問題意識を共有できていないといけないだろう。

## 画面中心の弊害？

とはいえ、疑問に感じたこともある。画面中心で考えるため、**そもそも解決したい問題はなにか？**というそもそも論が置いておかれてしまう傾向があるのかもしれない。

参加者の気づきでも「デザインした内容が、直接"解決したい課題"と繋がっていない感じ」という意見があった。(といっても、こちらのワークの進め方の問題だった可能性が高いが
)

デザインをする対象のコンセプトやビジネスモデルが明らかになっていなければ、デザインスプリントを実施しても表面上の改善に滞ってしまうだろう。そのため、デザインスプリントは、[こちらの資料のP12](http://www.slideshare.net/takaumada/lean-startup-design-sprint)にあるように他のやり方と組み合わせる必要があると思う。

また、最初に選択するトピックによっては、5日間という時間制約はそのままに、異なるプロセスを実施する必要があるとも感じた。

<iframe src="https://www.flickr.com/photos/kakeda/16109069394/in/album-72157651188881521/player/" width="320" height="240" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
（ふりかえり）

## もっと短くてもいいかも？

今回は、２時間で２日分を詰め込むというかなり強引なワークを実施したが、これをやって思ったのは、１〜２日でやりきるデザインスプリントを一週間で複数回繰り返してみたらどうか？ということだった。もちろん、プロトタイプ作成が大変かもしれないし、ユーザー検証の人数は減ってしまうが、案外いけるかもしれない。よくあるアイデアソンやハッカソンのように、２日間１セットでのプロセスデザインを試してみたいと思った。

まぁ、業務中でもコミュニティでもいいので、気になる人は試してみたらいいんじゃないでしょうか。

そして、無茶ぶりワークに参加してくれた皆さん、ありがとうございました〜。

<iframe src="https://www.flickr.com/photos/kakeda/16545270629/in/album-72157651188881521/player/" width="320" height="240" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

