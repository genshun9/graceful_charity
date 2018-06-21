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