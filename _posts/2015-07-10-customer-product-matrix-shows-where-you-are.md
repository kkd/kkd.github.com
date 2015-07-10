---
layout: post
title: "Cusotomer Product Matrixでプロダクトの居場所を知って戦略を立てる"
description: "顧客開発と製品開発のプロセスをマトリックスで表すことで、プロダクトがどの状況にいるのかがわかる図を考えてみたので解説してみる。役に立つかは皆さんのフィードバック次第です..."
category: Creative
image: http://giantech.jp/assets/images/20150710/cpm_failure.png
tags: [リーンスタートアップ, leanstartup, プロダクト開発, 顧客開発, アジャイル]
---

今年になって、研修の中で使用している図を２月に公開していたのですが、解説を忘れていたので５ヶ月ぶりに更新して解説してみます。

<iframe src="//www.slideshare.net/slideshow/embed_code/key/BY7YK69ENFNLup" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/kkd/customer-product-matrix" title="Customer Product Matrix" target="_blank">Customer Product Matrix</a> </strong> from <strong><a href="//www.slideshare.net/kkd" target="_blank">Takeshi Kakeda</a></strong> </div>

この図は、「スタートアップ・マニュアル」などの著作で有名なスティーブン・ブランクの顧客開発のプロセスを参考に、一般的な製品開発プロセスと顧客開発プロセスをマトリックスで表現してみました。**Customer Product Matrix**と名づけましたが、あまりよい名前ではないかもしれません。

<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=giantech-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=4798128511" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

この図では「Product Development」とありますが、ここをビジネス開発と言い換えても通用するのでご自身の文脈にしたがって読み替えてください。

（2/10アップロード版だと、Product Developemntのプロセスの右端がrevenueになっていましたが、7/10更新版ではscaleにしました。*created customer* と *scaled product*が目指す目標（revenue）をイメージしました。）


## よくある失敗パターン

典型的な失敗パターンは、このマトリックスで言う所の **assumption**のまま、上にあがらずに、横に進んでしまうパターンです。この場合は製品の**launch**までは予算などがあれば進むことができます。

しかしその後、上方向への移動（顧客開発）や、横方向への移動（スケール）がうまくいかずに終わってしまう可能性が高いです。

![失敗パターン](/assets/images/20150710/cpm_failure.png "失敗パターン"){:.mid}

## アジャイルの場合

アジャイルの場合はどうでしょうか？現在ではリーンスタートアップのプロセスとアジャイル開発のプロセスの明確な線引きは困難ですが、リーンスタートアップ以前のアジャイルのイメージは、どちらかというと、横に進みながら（develop)、上方向にも向かうというルートを描くと考えます。

理由は、すべてを最初から上方向に進むこと自体が、文脈によっては**非現実的**だと考えるからです。

![アジャイル](/assets/images/20150710/cpm_agile.png "アジャイル"){:.mid}

## リーンスタートアップの場合

リーンスタートアップの場合は、このマトリックスを横に進むのでなく、先に上方向に進もうと試行錯誤を繰り返すイメージです。一直線に上に行くのではなく、螺旋を描くように徐々に上方向へ進んでいきます。

**validation**、または、**creation**まで挙がった後、今度は横方向へ進んでいくことになります。もちろん、モデルとは異なりこちらも螺旋を描くように横に進むことになります。

もちろん、アジャイルの時と同様、プロダクトのすべてにおいて最初から上方向に上がり切るということはせずに、MVPとして絞り込んだものに対してのみ横方向へ進みます。

よりできるだけ開発を遅らせて、確実に上に挙がった（ニーズの確度が高い）もののみ一気に作るイメージです。

![リーンスタートアップ](/assets/images/20150710/cpm_lean.png "リーン"){:.mid}

## リスクはどこにあるか？

もちろん、実際の進め方はこのモデルのように直線ではいかず、ぐるぐると螺旋を描いていくはずです。

このマトリクスで言わんとするのは、**リスクはどこにあるのか？を明らかにし関係者で合意しよう**ということです。

「アジャイルがいい」「ウォータフォールがいい」と言いますが、結局のところプロセス・進め方の優越を競ってもまったく意味がありません。

問題にすべきは、*現在どのような状況なのか*、*リスクは何で、どこに潜んでいるのか*、*優先すべきはどのリスクへの対応なのか*という文脈を把握して、**その文脈に適したやり方を選択できている・選択しようとしているか**どうかだけです。

![リスクはどこか？](/assets/images/20150710/cpm_where_is_risk.png "リスクはどこか？"){:.mid}

このマトリクスをより細分化してみても良いですし、よりドメインに特化したマトリクスを作って考えてみてもよいと思います。

## まとめ

この**Customer Product Matrix**は、実際にあなたのビジネス・製品が、このマトリックス上のどこにいるのか、どのように進むべきかを考えるきっかけになればと思い考案しました。

スタート前であればどのように進むのか？すでに走り始めているのであればどこにいるのか？リスクはどこにありそうなのか？どのルートを通ればいいのか？それぞれのフェーズの満足条件、リスク、対応策を明らかにしていきながら戦略を立てるきっかけになれば幸いです。
