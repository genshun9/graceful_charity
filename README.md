# graceful_charity

## カード紹介

```
《天使の施し/Graceful Charity》

通常魔法（禁止カード）
自分のデッキからカードを３枚ドローし、その後手札を２枚選択して捨てる。
```

## 使い方
- ツールを使う時は[ゲンシュンドラフトオンラインツールの使い方](how_to_use.md)を参照。

- 開発時
```
# ライブラリのインストール
npm i

# クライアント側のコンパイル(parcelによる常時コンパイル)
npm run client-compile

# サーバ側のコンパイル及びサーバ起動
npm run server-compile

# ブラウザで以下のURLを開く
localhost:8000
```

## 設計思想メモ

### ver_α
- client
    - typescript/react/react-redux。ビルドはparcelを使う。
    - model/reducer/actionは、PlayerとApplicationの2つを実装。
        - Playerは、プレイヤー自身による操作、プレイヤーに関する情報を保持する。
        - Applicationは、websocketによるviewの状態や、プレイヤー全員の情報を保持する。
        - ところが、PlayerやApplicationどっち？という状態もあって、この分け方は微妙な気がする。
    - viewについては、container/componentを使った。
        - containerを使う使わないのジャッジは、dispatchの有無で判断してみた、stateを渡すだけのcomponentはcontainerは用意しないようにした。
    - websocketについて
        - AppContainerという最上流のcontainerで、最初の接続をする。
        - AppComponentのComponentWillMountの時点で、いろいろな購読をする。
        - websocketは状態ではないので、reducerには持たせず。親containerから徐々に渡してく方式にした。
        - react-reduxとsocket.ioは[こちら](https://github.com/raineroviir/react-redux-socketio-chat)を参考にした。
- server
    - typescript/express/http。ビルドはtscを使う。
    - modelのみ実装。websocketのメソッド毎に、controllerで分けたい。

### ver_1
- 新しい概念
    - clientとserverに共通する概念や定数をcommonに定義して、それらをextendsやimportするようにしてみた。
    - clientとserverのやり取りするオブジェクトの型を用意して、それぞれdtoとして変換してみた。
    - singletonを綺麗に実装しようと試みたが、anyにしないと実装できなかったので、一旦諦める。以下参考にしたサイト。
        - [typescriptでsingleton](https://qiita.com/tonkotsuboy_com/items/225d08e915a57777c9dc)
        - [継承可能なsingletonメモ](https://qiita.com/mutsuyuki/items/2a97ac896507899749d5)
        - [protectedを使った解決方法](https://github.com/Microsoft/TypeScript/issues/2341)
- serverについて
    - index.tsにまとめて書いていたので、controllerとキャッシュを操作するdataStoreに分離してみた。

### ver_2
- 新しい概念
    - ブラウザを誤って閉じてもreducerの状態をlocalStorageに保存する機能を実装。
    - redux-localstorage-simpleというライブラリで全て解決した。

## 課題
### elmの断念について
- elmとsocket.ioの相性が悪く、★が最も多い[socketioライブラリ](mgold/elm-socketio)がelm-langのv0.18に対応していないので、elmをやめる。
    - ここは、socker.ioとのやりとりはjs側で実装し、それよりあとをelmで実装する、というパターンを用いればelmで実装できた可能性はある。

### react周りについて
- react/react-redux/redux周りのライブラリを最新で動かすと動かないので、半年分バージョンを下げてみた（react: 0.14.7, react-dom: 0.14.7, react-redux: 4.4.0）。
    - 結局、react-bootstrapを導入するに当たり、prop-typesでエラーが発生したので、最新まで上げた。

### socket-io周りについて
- socketioがつながらなかったが[こちら](https://qiita.com/kanjishima/items/5342eca62e8d5de30ccb)を読んで解消した。
    - expressではなく、httpサーバをlistenする必要があった。
- 各actionとsocket-ioの繋ぎ込みが便利なので、socker-ioをreducer内で管理しようとしてた。
    - 各containerのmapDispatchToPropsで、socket-ioとtextを引数にactionへ渡すボイラープレートが増えた。
    - 便利ではなかった話と、reducerは状態を表している部分なので、やめる。
    - コンポーネントの最上段で定義をし、そこから子コンポーネントへ流すように実装した。
- parcelで常時ビルドしているが、そうするとwebsocketの接続エラーが無限に発生してブラウザがstack-overflowになることが多々あった。
    - なので、コード変更する際、ブラウザを消したり、serverを落としたり、作業効率悪かった。。

### parcelについて
- parcelで出力されるjsがランダムな名前なので、dist配下のjsを取得するように、<object>タグを使ってみた。
    - その結果、謎ではあるが「スタイルが高さ156pxに固定されてしまう」現象が発生。
    - entry.jsが、parcelから出力されるjs名をべた書きで参照することで、object対応せずに済ませた。
- 実装を終えて、翌日コーディングする時、再度parcelで出力すると謎のエラー(react周り)がよく発生した。
    - distや.cache配下のディレクトリを削除して再度ビルドし直すと治ったので、作業効率低下。
- typescriptで実装しているが、parcelのコンパイル、結構ガバガバであった。 
    - webpack.config.jsを必要としない魅力はあるが、上記の理由により、parcelはやめたほうが良さそう。

## v2.0の開発アイテム
- レア枠は表示してほしい（本当に必要？）。
- 誰でも起動できるコマンド、手引き。

## 更新履歴
- 6/16 Initial Commit
- 6/30 ver_α版リリース
- 7/12 ver_1_0版リリース