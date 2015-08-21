---
layout: post
title: "生活圏流動数の視覚化マップ（各地域版）"
description: "国土交通省が調査した生活圏流動表を元に、地域内の相互交流の量を、全国の各地域で可視化してみた。それぞれの地域の特色が反映された結果になっている。あなたの住んでる地域はどうですか？"
category: Lively
image: http://giantech.jp/assets/images/20150819/dest_中部_2010.png
tags: [ローカル,交通事情,Graphviz,Gviz,Gruff]
---

四国についてGraphviz+Gvizで視覚化したので、他エリアについても出力してみました。

{% include blogcard.html site="giantech.jp" url="http://giantech.jp/2015/08/17/traffic-interchange-in-shikoku-area" image="http://giantech.jp/assets/images/20150817/traffic_map_2010_四国.png" title="四国内の相互交流量を分析してわかった３つのこと" desc="国土交通省が公開している生活圏間流動表をビジュアルにマッピングしてみると、今まで知らなかった四国の姿が見えてきた。四国は本当に相互交流が盛んになってきたのだろうか？松山はどんな感じ？" %}

元データは[国土交通省が調査した生活圏流動表](http://www.mlit.go.jp/sogoseisaku/soukou/sogoseisaku_soukou_fr_000010.html)の2010年版（新調査）になります。

{% include blogcard.html site="www.mlit.go.jp" url="http://www.mlit.go.jp/sogoseisaku/soukou/sogoseisaku_soukou_fr_000010.html" image="http://capture.heartrails.com/100x100/?http://www.mlit.go.jp/sogoseisaku/soukou/sogoseisaku_soukou_fr_000010.html" title="総合政策：［２］　207生活圏間流動表　　出発地-目的地 - 国土交通省" desc="" %}

ここに公開されているExcelデータをRubyの[Graphviz](http://www.graphviz.org/)ライブラリである[Gviz](https://github.com/melborne/Gviz)を使って流動数マップを作成しました。今回は[Gruff](https://github.com/topfunky/gruff)の練習も兼ねて、目的地への流動数の上位20のグラフ化もしています。集計する単位は八地方区分にて分類してあります。

{% include blogcard.html site="ja.wikipedia.org" url="https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E5%9C%B0%E5%9F%9F" image="http://capture.heartrails.com/100x100/?https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E5%9C%B0%E5%9F%9F" title="日本の地域 - Wikipedia" desc="" %}

元データは全国207生活圏同士のマトリックスデータになっていますが、本記事では以下の条件でデータを選別・集計しています。

* ある地域（東北、関東など）のある生活圏からの流動数の多い目的地のベスト10のみを集計対象
* ある地域（東北、関東など）において他地域からの流動数はカウントしていない(地域交流の視覚化が目的のため)

また、本図は国土交通省の調査データを元にプログラムで出力したものですが、プログラムの不具合等によるデータ・集計の不備について一切責任を負いかねますのでご了承ください。

## 北海道

北海道は広大なため、道北、道東、道央、道南の４つのエリアに分かれており、都道府県と同様の区分けになっており、更にその中に生活圏があります。札幌と旭川が共に生活圏流動数が大きく、相互交流も盛んなようです。

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_北海道.svg">
  ![2010年北海道の生活圏流動数](/assets/images/20150819/traffic_map_2010_北海道.png "2010年北海道の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年北海道流動数TOP20](/assets/images/20150819/dest_北海道_2010.png "2010年北海道出発数TOP20"){:.mid}

### 出発数TOP20
![2010年北海道出発数TOP20](/assets/images/20150819/start_北海道_2010.png "2010年北海道出発数TOP20"){:.mid}

## 東北

宮城:仙台と東京:23区への流動数が多いですが、岩手:盛岡、青森:南部、山形:山形も流動数が多めです。

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_東北.svg">
  ![2010年東北の生活圏流動数](/assets/images/20150819/traffic_map_2010_東北.png "2010年東北の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年東北流動数TOP20](/assets/images/20150819/dest_東北_2010.png "2010年東北出発数TOP20"){:.mid}

### 出発数TOP20
![2010年東北出発数TOP20](/assets/images/20150819/start_東北_2010.png "2010年東北出発数TOP20"){:.mid}


## 関東

東京:23区以外にも茨城:土浦、埼玉:浦和、茨城:下館・古河、群馬:前橋・高崎、群馬:桐生・太田などへの流動数が非常に多いです。また新幹線により通勤圏内になっている静岡:東部への流動数も多いです。

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_関東.svg">
  ![2010年関東の生活圏流動数](/assets/images/20150819/traffic_map_2010_関東.png "2010年関東の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年関東流動数TOP20](/assets/images/20150819/dest_関東_2010.png "2010年関東出発数TOP20"){:.mid}

### 出発数TOP20
![2010年関東出発数TOP20](/assets/images/20150819/start_関東_2010.png "2010年関東出発数TOP20"){:.mid}


## 中部

中部という地域は最も県が多く北陸、甲信越、東海が含まれており、細分化したほうがよいかもしれません。s新幹線のためか東京:23区への流動数が非常に多いです。域内だと静岡:西部と愛知:豊田、愛知:東三河、石川:加賀と富山:富山との交流が活発です。

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_中部.svg">
  ![2010_中部の生活圏流動数](/assets/images/20150819/traffic_map_2010_中部.png "2010_中部の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年中部流動数TOP20](/assets/images/20150819/dest_中部_2010.png "2010年中部出発数TOP20"){:.mid}

### 出発数TOP20
![2010年中部出発数TOP20](/assets/images/20150819/start_中部_2010.png "2010年中部出発数TOP20"){:.mid}



## 近畿

滋賀:南部と京都:京都、大阪:堺と和歌山:和歌山の相互交流が活発です。特に滋賀:南部は地域内最大の流動数になっています。

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_近畿.svg">
  ![2010年近畿の生活圏流動数](/assets/images/20150819/traffic_map_2010_近畿.png "2010年近畿の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年近畿流動数TOP20](/assets/images/20150819/dest_近畿_2010.png "2010年近畿出発数TOP20"){:.mid}

### 出発数TOP20
![2010年近畿出発数TOP20](/assets/images/20150819/start_近畿_2010.png "2010年近畿出発数TOP20"){:.mid}

## 中国
岡山:県南は広島:備後と、島根:松江は鳥取:西部との相互交流があります。広島:広島は新幹線沿線からの流動数が多いのでしょうか。

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_中国.svg">
  ![2010年中国の生活圏流動数](/assets/images/20150819/traffic_map_2010_中国.png "2010年中国の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年中国流動数TOP20](/assets/images/20150819/dest_中国_2010.png "2010年中国流動数TOP20"){:.mid}

### 出発数TOP20
![2010年中国出発数TOP20](/assets/images/20150819/start_中国_2010.png "2010年中国出発数TOP20"){:.mid}


## 四国

四国については、こちらの記事をご覧ください。

{% include blogcard.html site="giantech.jp" url="http://giantech.jp/2015/08/17/traffic-interchange-in-shikoku-area" image="http://giantech.jp/assets/images/20150817/traffic_map_2010_四国.png" title="四国内の相互交流量を分析してわかった３つのこと" desc="国土交通省が公開している生活圏間流動表をビジュアルにマッピングしてみると、今まで知らなかった四国の姿が見えてきた。四国は本当に相互交流が盛んになってきたのだろうか？松山はどんな感じ？" %}

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_四国.svg">
  ![2010年四国の生活圏流動数](/assets/images/20150819/traffic_map_2010_四国.png "2010年四国の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年四国流動数TOP20](/assets/images/20150819/dest_四国_2010.png "2010年四国流動数TOP20"){:.mid}

### 出発数TOP20
![2010年四国出発数TOP20](/assets/images/20150819/start_四国_2010.png "2010年四国出発数TOP20"){:.mid}


## 九州

佐賀:佐賀、福岡:福岡、福岡:久留米・大牟田、佐賀:佐賀、熊本:熊本、が流動数が多く相互交流も活発です。

### 2010年
<a href="/assets/images/20150819/traffic_map_2010_九州.svg">
  ![2010年九州の生活圏流動数](/assets/images/20150819/traffic_map_2010_九州.png "2010年九州の生活圏流動数"){:.mid}
</a>

### 流動数TOP20
![2010年九州流動数TOP20](/assets/images/20150819/dest_九州_2010.png "2010年九州流動数TOP20"){:.mid}

### 出発数TOP20
![2010年九州出発数TOP20](/assets/images/20150819/start_九州_2010.png "2010年九州出発数TOP20"){:.mid}

