# graceful_charity

## カード紹介

```
《天使の施し/Graceful Charity》

通常魔法（禁止カード）
自分のデッキからカードを３枚ドローし、その後手札を２枚選択して捨てる。
```

## 課題
- elmとsocket.ioの相性が悪く、★が最も多い[socketioライブラリ](mgold/elm-socketio)がelm-langのv0.18に対応していないので、elmをやめる。
- react/react-redux/redux周りのライブラリを最新で動かすと動かないので、半年分バージョンを下げてみた。
- react/reduxとsocket.ioは[こちら](https://github.com/raineroviir/react-redux-socketio-chat)を参考にした。
- socketioがつながらなかったが[こちら](https://qiita.com/kanjishima/items/5342eca62e8d5de30ccb)を読んで解消した。expressではなく、httpサーバをlistenする必要があった。
- 各actionとsocket-ioの繋ぎ込みが便利なので、reducer内で管理してみた。
    - 結果的に、各containerのmapDispatchToPropsで、socket-ioとtextを引数にactionへ渡すボイラープレートが増えた。
    - なので、コンポーネントの最上段で定義をし、そこから子コンポーネントへ流すように実装してみる。
- parcelで出力されるjsがランダムな名前なので、dist配下のjsを取得するように、<object>タグを使ってみた。
    - その結果、スタイルが高さ156pxに固定されてしまったので、entry.jsの名前をべた書きしてみる。
- component1つにつき、基本的にcontainer1つを用意する設計にした。
    - 単純に面倒なのと、dispatchを渡すが、stateはreducerからではなく親のstateから渡したい場合の記述方法がわからない。