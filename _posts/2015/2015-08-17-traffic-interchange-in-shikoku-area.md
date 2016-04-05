---
layout: post
title: "四国内の相互交流量を分析してわかった３つのこと"
description: "国土交通省が公開している生活圏間流動表をビジュアルにマッピングしてみると、今まで知らなかった四国の姿が見えてきた。四国は本当に相互交流が盛んになってきたのだろうか？松山はどんな感じ？"
category: Lively
tags: [四国,愛媛,ローカル,交通事情,相互交流]
image: http://giantech.jp/assets/images/20150817/traffic_map_2010_四国.png
---

## はじめに

[四国は思ったよりもずっと広かった](/2015/08/13/shikoku-is-larger-than-i-thought/)という記事で、松山からの電車・自動車の移動時間についての印象を書きました。

{% include blogcard.html site="giantech.jp" url="http://giantech.jp/2015/08/13/shikoku-is-larger-than-i-thought" image="http://giantech.jp/assets/images/20150813/matsuyama_to_kouchi_routes.png" title="四国は思ったよりもずっと広かった" desc="東京から移住してみてわかった事実のひとつが、四国は広いということでした。移動時間という切り口で見た時の四国の広さとは？" %}

いろいろ調べていく中で、[四国のWikipedia](https://ja.wikipedia.org/wiki/四国)には、**以前よりも四国内での相互移動が活発になった**との記載がありました。この記載は[国土交通省・第5回全国幹線旅客純流動データ](http://www.mlit.go.jp/sogoseisaku/soukou/sogoseisaku_soukou_fr_000010.html)を元した分析結果で表も記載してありました。

元データはWebサイト上でExcelで公開してあるため、もっとビジュアルにデータ分析してみることにしました。



## データ分析について

使ったデータは[国土交通省が調査した生活圏流動表](http://www.mlit.go.jp/sogoseisaku/soukou/sogoseisaku_soukou_fr_000010.html)に公開されている、**207生活圏間流動表（出発地から目的地）【交通機関別流動表】**の2010年度のデータをRubyの[Graphviz](http://www.graphviz.org/)ライブラリである[Gviz](https://github.com/melborne/Gviz)を使って流動数マップを作成しました。

{% include blogcard.html site="www.mlit.go.jp" url="http://www.mlit.go.jp/sogoseisaku/soukou/sogoseisaku_soukou_fr_000010.html" image="http://capture.heartrails.com/100x100/?http://www.mlit.go.jp/sogoseisaku/soukou/sogoseisaku_soukou_fr_000010.html" title="総合政策：［２］　207生活圏間流動表　　出発地-目的地 - 国土交通省" desc="" %}

{% include blogcard.html site="melborne.github.io" url="http://melborne.github.io/Gviz/" image="http://capture.heartrails.com/100x100/?http://melborne.github.io/Gviz/" title="Gviz" desc="" %}

元データでは、全国のそれぞれの地域（出発地）から、全国各地への移動先（目的地）への年間の流動数を二次元データで格納しています。データは航空、鉄道、バス、船舶、乗用車等に分かれていますが、全機関の合計を対象としてデータを読み込んでいます。

全国の生活圏対象データをGraphvizを使ってそのまま表示すると大変なことになるので、開始地は四国のみに限定し、目的地はアクセス量の多い順に各TOP10まで絞り込んだ後にマップ化しています。

四国のWikipediaではTOP15を表にしていましたがノードが多く見辛いためTOP10に変更しました。（各目的地へのアクセス数や流動数は、TOP10内のアクセスの総数になるため、全データを対象にするとまた合計数が変わることはご承知ください。）

訂正(8/18)：8/17公開のデータはスクリプトのミスによりTOP11までが対象になっていたため、TOP10までのデータに各種グラフ・マップを変更しました。

訂正(8/22):8/17公開時点で対象にした1990年度の調査データ（旧手法）と、2010年度の調査データ（新手法）のまとめ方が変わるため単純な比較はできないことがわかりました。

該当サイトに旧手法での2010年度調査が公開されていたため、旧手法によるデータで1990年と2010年を比較しなおしました。そのため比較の分析・数値に若干の変更があることをご承知ください。

## 四国の生活圏

本データでは、都道府県を更に細かい**生活圏**という単位に区分けしています。全国の生活圏は[207地域生活圏](http://www.mlit.go.jp/seisakutokatsu/jyunryuudou/doc/207_Zone2005.pdf)として定義されています。四国での生活圏は以下のようになります。

![四国の生活圏](/assets/images/20150817/seikatsuken.png "四国の生活圏"){:.mid}

|県名|地域名|該当区域|
|:---|:---|:---|
|徳島|徳島|徳島市、鳴門市、小松島市、吉野川市、阿波市、美馬市、勝浦郡、名東郡、名西郡、板野郡、美馬郡|
|徳島|三好|三好市、三好郡|
|徳島|南部|阿南市、那賀郡、海部郡|
|香川|香川東部|高松市、さぬき市、東かがわ市、小豆郡、木田郡、香川郡、綾歌郡（宇多津町を除く）|
|香川|香川西部|丸亀市、坂出市、善通寺市、観音寺市、三豊市、綾歌郡（綾川町を除く）、仲多度郡|
|愛媛|松山|松山市、伊予市、東温市、上浮穴郡、伊予郡|
|愛媛|新居浜・西条|新居浜市、西条市、四国中央市|
|愛媛|今治|今治市、越智郡|
|愛媛|宇和島|宇和島市、北宇和郡、南宇和郡|
|愛媛|八幡浜・大洲|八幡浜市、大洲市、西予市、喜多郡、西宇和郡|
|高知|中央|高知市、南国市、土佐市、香南市、香美市、長岡郡、土佐郡、吾川郡、高岡郡（佐川町、越知町、日高村）|
|高知|幡多|宿毛市、土佐清水市、四万十市、幡多郡|
|高知|高幡|須崎市、高岡郡（高知中央の区域を除く）|
|高知|安芸|室戸市、安芸市、安芸郡|

## 1990年の流動数マップ

まず、1990年の時点のデータを元に流動数マップを作成しました。（クリックするとSVGで拡大表示できます）
<a href="/assets/images/20150817/traffic_map_1990_四国.svg">
![1990年の四国圏内流動数マップ](/assets/images/20150817/traffic_map_1990_四国.png "1990年の四国圏内流動数マップ"){:.mid}
</a>

線の太さは流動数が多いほど太くなり、各地域のノードは流入量が多いほど大きくしています。

1990年当時は、四国圏内からは**岡山県南への流動数**が最も多く**417万人**にも達していました。四国圏内だと、**香川東部**、**香川西部**、**愛媛：新居浜・西条**の流入量が200〜300万と比較的多く、続いて**徳島：徳島**、**愛媛：松山**が続きます。


## 2010年の流動数マップ

<a href="/assets/images/20150817/traffic_map_2010_四国.svg">
![2010年の四国圏内流動数マップ](/assets/images/20150817/traffic_map_2010_四国.png "2010年の四国圏内流動数マップ"){:.mid}
</a>

2010年になると流動数は大きく変わりました。まず1990年時点で最も多かった**岡山県南への流動数が大幅に減りました**。その代わりに増えたのが**香川東部**、**香川西部**、**徳島**です。他にも**新居浜・西条**、**高知：中央**も流動数を大きく増やしています。

生活圏人口が最も多い愛媛：松山は、流動数は1990年との比較では増加してはいますが、他地域の流動数と比べると若干控えめの印象です。

## 1990年と2010年の比較でわかること

各項目について、個別に1990年と2010年の数を比較してみました。

### 目的地の流動数の変化

<a href="/assets/images/20150817/comparing_1990_with_2010_dest.png">
![目的地への流動数の比較(1990年と2010年)](/assets/images/20150817/comparing_1990_with_2010_dest.png "目的地への流動数の比較(1990年と2010年)")
</a>

まずは、目的地毎の流動数の変化を見てみました。

グラフ化して特に目立ったのは、2010年での**香川県東部・西部**への流動数です。1990年と比較して倍以上に増えており、他の地域への流動数と比べても頭ひとつ抜けています。続いて**徳島：徳島**は、1990年と比較して**3倍を越える増加率**になります。香川東部と徳島は**相互交流が非常に盛んなこと**が流動数マップからも見て取れます。

**高知：中央**も、1990年と比較して**倍以上の増加率**になっています。愛媛県では、**愛媛：新居浜・西条**も100万人増えており、特に**香川西部**との相互交流が盛んです。

一方で、**岡山県南**、**大阪：大阪**、**広島：広島**といった周辺の都市への流動数は軒並み減少していますが、唯一、**東京：23区**への移動は微増しています。2015年時点ではLCCの就航もあり、東京へ移動する流れは更に増えていることが予想されます。

### 出発地の出発者数の変化

<a href="/assets/images/20150817/comparing_1990_with_2010_start.png">
![四国圏内の出発地毎の流動数の比較(1990年と2010年)](/assets/images/20150817/comparing_1990_with_2010_start.png "四国圏内の出発地毎の流動数の比較(1990年と2010年)")
</a>

他方、四国の各生活圏から他の生活圏に出発する流動数の変化も見てみました。

ここでも、**香川東部・西部**、**徳島**、**高知：中央**が積極的に外部へ移動しているのがよくわかります。他方、愛媛は新居浜・西条、八幡浜・大洲エリアは増加していますが、**宇和島、今治、松山は逆に減少**しています。

## データの視覚化からわかったこと

今回のデータ分析（というほどでもないですが）でわかったことを列挙しておきます。

### 四国圏内の全体の相互交流は1990年よりも増えている

四国のWikipediaの解説にもあるように、1990年と比べて、2010年は四国圏内の相互交流は増え、近隣大都市への移動が減少していることがわかりました。

ただし、大きく移動数が増えたのは、香川東部・西部、徳島、高知：中央、愛媛：新居浜・西条といった特定の地域であり、その他の地域は微増にとどまっています。

今回のデータでは、瀬戸大橋、明石海峡大橋の開通時に懸念されていた**ストロー効果**が顕著であるようには見えませんでしたが、実際にストロー効果が発生していないかどうかは不明です。このあたりは実際の住人の皮膚感覚の方が現実に近いかもしれません。

{% include blogcard.html site="ja.wikipedia.org" url="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AD%E3%83%BC%E5%8A%B9%E6%9E%9C" image="http://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tokyo_Bay_Aqua-Line.jpg/200px-Tokyo_Bay_Aqua-Line.jpg" title="ストロー効果 - Wikipedia" desc="" %}

### 特に香川・徳島は密接な相互交流が行われている

流動数マップを見て顕著だったのは**香川・徳島の相互交流が非常に活発である**ということでした。1990年時点でも交流が活発でしたが、2010年には岡山、神戸という近隣の大都市への流動数を遥かに上回る相互交流が実現されています。

また、高知も**独立独歩**というイメージがあったのですが、**高知：中央**に関しては、他地域との相互交流が多く行われていることがわかりました。

**香川・徳島、そして高知の三県は、各県の人口減少・商圏縮小が進むに連れて、より相互交流が深まっていくのでは**という印象を持ちました。

### 松山は人口の割に流動数が少ない

私が住んでいる松山エリアは、1990年に比べて流動数は微増、出発数が減少しているように、他の地域と比較して**松山が四国圏内の相互交流数が少なめ**という結果は意外でした。

同じ愛媛の新居浜・西条は、香川西部との相互交流を深めているのに対し、**松山は他の四国の地域との関わりが少ない**と言えるでしょう。

[四国は思ったよりもずっと広かった](/2015/08/13/shikoku-is-larger-than-i-thought/)でも触れましたが、高松・徳島・高知と松山との位置関係でみると、どの拠点からも若干距離が離れており、他の３拠点と比較して相互交流が進みづらい地理的制約があるとも言えます。

また、生活圏としてある程度の人口規模があるため、積極的に相互交流を進めなくても生活・商売が成り立ち、観光資源もあり、他の四国圏内ではなく他の地域、特に東京などに目を向けるという側面があるのかもしれません。

このあたりは実際に長年暮らしている住人の感想を聞いてみたいところです。

## まとめ

国土交通省のデータを分析してみて、四国は自分が想像していた以上に相互交流が活発に行われていることがわかりました。しかし相互交流が進む地域は偏っており、特に松山は人口の割りには相互交流が少ないらしいことも判明しました。

必ずしも「相互交流が盛ん・流動数が多い＝よいこと」とは限りませんが、今後は四国を１つの圏内として捉えて相互交流を増やす方向性はますます増えそうな気がします。

自分としては、愛媛：松山に住んでいるということもあり、これまでよりも**松山と他の四国圏内との相互交流を増やすことができたらもっと面白くなるのでは**と感じました。

国土交通省の調査は５年毎に行われているようなので2015年度の結果が楽しみです。その時にはまた可視化してみるつもりです。
