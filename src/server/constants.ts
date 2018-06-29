export const PORT: string = process.env.PORT || "8000";
export const PLAYER_MAX_NUMBER: number = Number(process.env.PLAYER_MAX_NUMBER) || 6;
export const ROTATION_MAX_NUMBER: number = Number(process.env.ROUTATION_MAX_NUMBER) || 21; // 各cardListのlengthの総和/人数/3
export const ROUND = {
  NO_START: 0,
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  END: 4
};

export const rareCardList: { name: string, cardURL: string, cardID: string }[] =
  [
    {name: "カオス・ソルジャー －開闢の使者－", cardURL: "4HZgkF5eTAsS", cardID: "4HZgkF5eTAsS-1"},
    {name: "カオス・ソルジャー －開闢の使者－", cardURL: "4HZgkF5eTAsS", cardID: "4HZgkF5eTAsS-2"},
    {name: "カオス・ソルジャー －開闢の使者－", cardURL: "4HZgkF5eTAsS", cardID: "4HZgkF5eTAsS-3"},
    {name: "氷結界の龍 トリシューラ", cardURL: "AHWIVNomv6qk", cardID: "AHWIVNomv6qk-1"},
    {name: "氷結界の龍 トリシューラ", cardURL: "AHWIVNomv6qk", cardID: "AHWIVNomv6qk-2"},
    {name: "氷結界の龍 トリシューラ", cardURL: "AHWIVNomv6qk", cardID: "AHWIVNomv6qk-3"},
    {name: "冥府の使者ゴーズ", cardURL: "iCaifmLTp1-U", cardID: "iCaifmLTp1-U-1"},
    {name: "冥府の使者ゴーズ", cardURL: "iCaifmLTp1-U", cardID: "iCaifmLTp1-U-2"},
    {name: "冥府の使者ゴーズ", cardURL: "iCaifmLTp1-U", cardID: "iCaifmLTp1-U-3"},
    {name: "アストログラフ・マジシャン", cardURL: "3X8TyrGsuqpX", cardID: "3X8TyrGsuqpX-1"},
    {name: "アストログラフ・マジシャン", cardURL: "3X8TyrGsuqpX", cardID: "3X8TyrGsuqpX-2"},
    {name: "アストログラフ・マジシャン", cardURL: "3X8TyrGsuqpX", cardID: "3X8TyrGsuqpX-3"},
    {name: "マジェスペクター・ユニコーン", cardURL: "8lRGMkORsh1F", cardID: "8lRGMkORsh1F-1"},
    {name: "マジェスペクター・ユニコーン", cardURL: "8lRGMkORsh1F", cardID: "8lRGMkORsh1F-2"},
    {name: "マジェスペクター・ユニコーン", cardURL: "8lRGMkORsh1F", cardID: "8lRGMkORsh1F-3"},
    {name: "ブラック・ホール", cardURL: "iVIsWINQHhCU", cardID: "iVIsWINQHhCU-1"},
    {name: "ブラック・ホール", cardURL: "iVIsWINQHhCU", cardID: "iVIsWINQHhCU-2"},
    {name: "ブラック・ホール", cardURL: "iVIsWINQHhCU", cardID: "iVIsWINQHhCU-3"},
    {name: "大嵐", cardURL: "T1Tr04WCwUZB", cardID: "T1Tr04WCwUZB-1"},
    {name: "大嵐", cardURL: "T1Tr04WCwUZB", cardID: "T1Tr04WCwUZB-2"},
    {name: "大嵐", cardURL: "T1Tr04WCwUZB", cardID: "T1Tr04WCwUZB-3"},
    {name: "天使の施し", cardURL: "3WwyBFMDBeSX", cardID: "3WwyBFMDBeSX-1"},
    {name: "天使の施し", cardURL: "3WwyBFMDBeSX", cardID: "3WwyBFMDBeSX-2"},
    {name: "天使の施し", cardURL: "3WwyBFMDBeSX", cardID: "3WwyBFMDBeSX-3"},
    {name: "遺言状", cardURL: "gBlS4qH4o_1n", cardID: "gBlS4qH4o_1n-1"},
    {name: "遺言状", cardURL: "gBlS4qH4o_1n", cardID: "gBlS4qH4o_1n-2"},
    {name: "遺言状", cardURL: "gBlS4qH4o_1n", cardID: "gBlS4qH4o_1n-3"},
    {name: "聖なるバリア －ミラーフォース－", cardURL: "4Sq6hpEqdAsS", cardID: "4Sq6hpEqdAsS-1"},
    {name: "聖なるバリア －ミラーフォース－", cardURL: "4Sq6hpEqdAsS", cardID: "4Sq6hpEqdAsS-2"},
    {name: "聖なるバリア －ミラーフォース－", cardURL: "4Sq6hpEqdAsS", cardID: "4Sq6hpEqdAsS-3"},
    {name: "激流葬", cardURL: "8lTB9DmqJh1F", cardID: "8lTB9DmqJh1F-1"},
    {name: "激流葬", cardURL: "8lTB9DmqJh1F", cardID: "8lTB9DmqJh1F-2"},
    {name: "激流葬", cardURL: "8lTB9DmqJh1F", cardID: "8lTB9DmqJh1F-3"},
    {name: "神の宣告", cardURL: "vEkresPusEmF", cardID: "vEkresPusEmF-1"},
    {name: "神の宣告", cardURL: "vEkresPusEmF", cardID: "vEkresPusEmF-2"},
    {name: "神の宣告", cardURL: "vEkresPusEmF", cardID: "vEkresPusEmF-3"}
  ];

export const monsterCardList: { name: string, cardURL: string, cardID: string }[] =
  [
    {name: "フォトン・スラッシャー", cardURL: "r3kzHcoM5fgy", cardID: "r3kzHcoM5fgy-1"},
    {name: "フォトン・スラッシャー", cardURL: "r3kzHcoM5fgy", cardID: "r3kzHcoM5fgy-2"},
    {name: "フォトン・スラッシャー", cardURL: "r3kzHcoM5fgy", cardID: "r3kzHcoM5fgy-3"},
    {name: "ジェネクス・ニュートロン", cardURL: "pCMWKzptYyX2", cardID: "pCMWKzptYyX2-1"},
    {name: "ジェネクス・ニュートロン", cardURL: "pCMWKzptYyX2", cardID: "pCMWKzptYyX2-2"},
    {name: "ジェネクス・ニュートロン", cardURL: "pCMWKzptYyX2", cardID: "pCMWKzptYyX2-3"},
    {name: "矮星竜プラネター", cardURL: "fQ2qyWtK7j7a", cardID: "fQ2qyWtK7j7a-1"},
    {name: "矮星竜プラネター", cardURL: "fQ2qyWtK7j7a", cardID: "fQ2qyWtK7j7a-2"},
    {name: "矮星竜プラネター", cardURL: "fQ2qyWtK7j7a", cardID: "fQ2qyWtK7j7a-3"},
    {name: "ライトロード・アサシン ライデン", cardURL: "kqhLDWYrvhhk", cardID: "kqhLDWYrvhhk-1"},
    {name: "ライトロード・アサシン ライデン", cardURL: "kqhLDWYrvhhk", cardID: "kqhLDWYrvhhk-2"},
    {name: "ライトロード・アサシン ライデン", cardURL: "kqhLDWYrvhhk", cardID: "kqhLDWYrvhhk-3"},
    {name: "ライトロード・マジシャン ライラ", cardURL: "otYpurbA-BkB", cardID: "otYpurbA-BkB-1"},
    {name: "ライトロード・マジシャン ライラ", cardURL: "otYpurbA-BkB", cardID: "otYpurbA-BkB-2"},
    {name: "ライトロード・マジシャン ライラ", cardURL: "otYpurbA-BkB", cardID: "otYpurbA-BkB-3"},
    {name: "ライトロード・モンク エイリン", cardURL: "TQnrWxfF3pDB", cardID: "TQnrWxfF3pDB-1"},
    {name: "ライトロード・モンク エイリン", cardURL: "TQnrWxfF3pDB", cardID: "TQnrWxfF3pDB-2"},
    {name: "ライトロード・モンク エイリン", cardURL: "TQnrWxfF3pDB", cardID: "TQnrWxfF3pDB-3"},
    {name: "ライトロード・ハンター ライコウ", cardURL: "BXi3xFc1QbQA", cardID: "BXi3xFc1QbQA-1"},
    {name: "ライトロード・ハンター ライコウ", cardURL: "BXi3xFc1QbQA", cardID: "BXi3xFc1QbQA-2"},
    {name: "ライトロード・ハンター ライコウ", cardURL: "BXi3xFc1QbQA", cardID: "BXi3xFc1QbQA-3"},
    {name: "虹クリボー", cardURL: "IDj_yk25AxNF", cardID: "IDj_yk25AxNF-1"},
    {name: "虹クリボー", cardURL: "IDj_yk25AxNF", cardID: "IDj_yk25AxNF-2"},
    {name: "虹クリボー", cardURL: "IDj_yk25AxNF", cardID: "IDj_yk25AxNF-3"},
    {name: "エフェクト・ヴェーラー", cardURL: "tI75vNFy-IDy", cardID: "tI75vNFy-IDy-1"},
    {name: "エフェクト・ヴェーラー", cardURL: "tI75vNFy-IDy", cardID: "tI75vNFy-IDy-2"},
    {name: "エフェクト・ヴェーラー", cardURL: "tI75vNFy-IDy", cardID: "tI75vNFy-IDy-3"},
    {name: "巌征竜－レドックス", cardURL: "Xz84w8oIWac2", cardID: "Xz84w8oIWac2-1"},
    {name: "巌征竜－レドックス", cardURL: "Xz84w8oIWac2", cardID: "Xz84w8oIWac2-2"},
    {name: "巌征竜－レドックス", cardURL: "Xz84w8oIWac2", cardID: "Xz84w8oIWac2-3"},
    {name: "ゴブリンドバーグ", cardURL: "w-8eEg_xMmBM", cardID: "w-8eEg_xMmBM-1"},
    {name: "ゴブリンドバーグ", cardURL: "w-8eEg_xMmBM", cardID: "w-8eEg_xMmBM-2"},
    {name: "ゴブリンドバーグ", cardURL: "w-8eEg_xMmBM", cardID: "w-8eEg_xMmBM-3"},
    {name: "カメンレオン", cardURL: "9y8RxUvDx4ly", cardID: "9y8RxUvDx4ly-1"},
    {name: "カメンレオン", cardURL: "9y8RxUvDx4ly", cardID: "9y8RxUvDx4ly-2"},
    {name: "カメンレオン", cardURL: "9y8RxUvDx4ly", cardID: "9y8RxUvDx4ly-3"},
    {name: "ＴＧ ラッシュ・ライノ", cardURL: "ynGqqv0cfY_A", cardID: "ynGqqv0cfY_A-1"},
    {name: "ＴＧ ラッシュ・ライノ", cardURL: "ynGqqv0cfY_A", cardID: "ynGqqv0cfY_A-2"},
    {name: "ＴＧ ラッシュ・ライノ", cardURL: "ynGqqv0cfY_A", cardID: "ynGqqv0cfY_A-3"},
    {name: "トリオンの蟲惑魔", cardURL: "wO2y4UG_supM", cardID: "wO2y4UG_supM-1"},
    {name: "トリオンの蟲惑魔", cardURL: "wO2y4UG_supM", cardID: "wO2y4UG_supM-2"},
    {name: "トリオンの蟲惑魔", cardURL: "wO2y4UG_supM", cardID: "wO2y4UG_supM-3"},
    {name: "Ｘ－セイバー エアベルン", cardURL: "1CBfXa0pTwHU", cardID: "1CBfXa0pTwHU-1"},
    {name: "Ｘ－セイバー エアベルン", cardURL: "1CBfXa0pTwHU", cardID: "1CBfXa0pTwHU-2"},
    {name: "Ｘ－セイバー エアベルン", cardURL: "1CBfXa0pTwHU", cardID: "1CBfXa0pTwHU-3"},
    {name: "クレーンクレーン", cardURL: "gTCfgaW4T_1n", cardID: "gTCfgaW4T_1n-1"},
    {name: "クレーンクレーン", cardURL: "gTCfgaW4T_1n", cardID: "gTCfgaW4T_1n-2"},
    {name: "クレーンクレーン", cardURL: "gTCfgaW4T_1n", cardID: "gTCfgaW4T_1n-3"},
    {name: "工作列車シグナル・レッド", cardURL: "D4eTKeKQsLwM", cardID: "D4eTKeKQsLwM-1"},
    {name: "工作列車シグナル・レッド", cardURL: "D4eTKeKQsLwM", cardID: "D4eTKeKQsLwM-2"},
    {name: "工作列車シグナル・レッド", cardURL: "D4eTKeKQsLwM", cardID: "D4eTKeKQsLwM-3"},
    {name: "カードガンナー", cardURL: "R3x6Y057xHdN", cardID: "R3x6Y057xHdN-1"},
    {name: "カードガンナー", cardURL: "R3x6Y057xHdN", cardID: "R3x6Y057xHdN-2"},
    {name: "カードガンナー", cardURL: "R3x6Y057xHdN", cardID: "R3x6Y057xHdN-3"},
    {name: "ダンディライオン", cardURL: "apC4XWoNY9Y7", cardID: "apC4XWoNY9Y7-1"},
    {name: "ダンディライオン", cardURL: "apC4XWoNY9Y7", cardID: "apC4XWoNY9Y7-2"},
    {name: "ダンディライオン", cardURL: "apC4XWoNY9Y7", cardID: "apC4XWoNY9Y7-3"},
    {name: "ＴＧ ストライカー", cardURL: "NoBKUyJ_bvPA", cardID: "NoBKUyJ_bvPA-1"},
    {name: "ＴＧ ストライカー", cardURL: "NoBKUyJ_bvPA", cardID: "NoBKUyJ_bvPA-2"},
    {name: "ＴＧ ストライカー", cardURL: "NoBKUyJ_bvPA", cardID: "NoBKUyJ_bvPA-3"},
    {name: "メタモルポット", cardURL: "LdKqQDc_Cxll", cardID: "LdKqQDc_Cxll-1"},
    {name: "メタモルポット", cardURL: "LdKqQDc_Cxll", cardID: "LdKqQDc_Cxll-2"},
    {name: "メタモルポット", cardURL: "LdKqQDc_Cxll", cardID: "LdKqQDc_Cxll-3"},
    {name: "グローアップ・バルブ", cardURL: "k0VAOv2Z8i5k", cardID: "k0VAOv2Z8i5k-1"},
    {name: "グローアップ・バルブ", cardURL: "k0VAOv2Z8i5k", cardID: "k0VAOv2Z8i5k-2"},
    {name: "グローアップ・バルブ", cardURL: "k0VAOv2Z8i5k", cardID: "k0VAOv2Z8i5k-3"},
    {name: "勇炎星－エンショウ", cardURL: "VqxoetGD3gty", cardID: "VqxoetGD3gty-1"},
    {name: "勇炎星－エンショウ", cardURL: "VqxoetGD3gty", cardID: "VqxoetGD3gty-2"},
    {name: "勇炎星－エンショウ", cardURL: "VqxoetGD3gty", cardID: "VqxoetGD3gty-3"},
    {name: "暗炎星－ユウシ", cardURL: "uJc8WO3NwSgB", cardID: "uJc8WO3NwSgB-1"},
    {name: "暗炎星－ユウシ", cardURL: "uJc8WO3NwSgB", cardID: "uJc8WO3NwSgB-2"},
    {name: "暗炎星－ユウシ", cardURL: "uJc8WO3NwSgB", cardID: "uJc8WO3NwSgB-3"},
    {name: "フレムベル・ヘルドッグ", cardURL: "4cwyDQCrF7mS", cardID: "4cwyDQCrF7mS-1"},
    {name: "フレムベル・ヘルドッグ", cardURL: "4cwyDQCrF7mS", cardID: "4cwyDQCrF7mS-2"},
    {name: "フレムベル・ヘルドッグ", cardURL: "4cwyDQCrF7mS", cardID: "4cwyDQCrF7mS-3"},
    {name: "予言僧 チョウレン", cardURL: "zszgStGHyVjM", cardID: "zszgStGHyVjM-1"},
    {name: "予言僧 チョウレン", cardURL: "zszgStGHyVjM", cardID: "zszgStGHyVjM-2"},
    {name: "予言僧 チョウレン", cardURL: "zszgStGHyVjM", cardID: "zszgStGHyVjM-3"},
    {name: "ゲリラカイト", cardURL: "hj4-qdMHB6jU", cardID: "hj4-qdMHB6jU-1"},
    {name: "ゲリラカイト", cardURL: "hj4-qdMHB6jU", cardID: "hj4-qdMHB6jU-2"},
    {name: "ゲリラカイト", cardURL: "hj4-qdMHB6jU", cardID: "hj4-qdMHB6jU-3"},
    {name: "稲荷火", cardURL: "4spFvJMud7mS", cardID: "4spFvJMud7mS-1"},
    {name: "稲荷火", cardURL: "4spFvJMud7mS", cardID: "4spFvJMud7mS-2"},
    {name: "稲荷火", cardURL: "4spFvJMud7mS", cardID: "4spFvJMud7mS-3"},
    {name: "ジュラック・ヴェロー", cardURL: "3DYatUtpHj2X", cardID: "3DYatUtpHj2X-1"},
    {name: "ジュラック・ヴェロー", cardURL: "3DYatUtpHj2X", cardID: "3DYatUtpHj2X-2"},
    {name: "ジュラック・ヴェロー", cardURL: "3DYatUtpHj2X", cardID: "3DYatUtpHj2X-3"},
    {name: "ジュラック・グアイバ", cardURL: "d0tfKmVACLDN", cardID: "d0tfKmVACLDN-1"},
    {name: "ジュラック・グアイバ", cardURL: "d0tfKmVACLDN", cardID: "d0tfKmVACLDN-2"},
    {name: "ジュラック・グアイバ", cardURL: "d0tfKmVACLDN", cardID: "d0tfKmVACLDN-3"},
    {name: "ローンファイア・ブロッサム", cardURL: "0TcXgoblSpwp", cardID: "0TcXgoblSpwp-1"},
    {name: "ローンファイア・ブロッサム", cardURL: "0TcXgoblSpwp", cardID: "0TcXgoblSpwp-2"},
    {name: "ローンファイア・ブロッサム", cardURL: "0TcXgoblSpwp", cardID: "0TcXgoblSpwp-3"},
    {name: "氷帝メビウス", cardURL: "DUjYb6FfJ_CM", cardID: "DUjYb6FfJ_CM-1"},
    {name: "氷帝メビウス", cardURL: "DUjYb6FfJ_CM", cardID: "DUjYb6FfJ_CM-2"},
    {name: "氷帝メビウス", cardURL: "DUjYb6FfJ_CM", cardID: "DUjYb6FfJ_CM-3"},
    {name: "ジゴバイト", cardURL: "ABVwQYwsI6qk", cardID: "ABVwQYwsI6qk-1"},
    {name: "ジゴバイト", cardURL: "ABVwQYwsI6qk", cardID: "ABVwQYwsI6qk-2"},
    {name: "ジゴバイト", cardURL: "ABVwQYwsI6qk", cardID: "ABVwQYwsI6qk-3"},
    {name: "スノーマンイーター", cardURL: "MFdFFYDigkr2", cardID: "MFdFFYDigkr2-1"},
    {name: "スノーマンイーター", cardURL: "MFdFFYDigkr2", cardID: "MFdFFYDigkr2-2"},
    {name: "スノーマンイーター", cardURL: "MFdFFYDigkr2", cardID: "MFdFFYDigkr2-3"},
    {name: "黄泉ガエル", cardURL: "Zz0MJjFNkIwX", cardID: "Zz0MJjFNkIwX-1"},
    {name: "黄泉ガエル", cardURL: "Zz0MJjFNkIwX", cardID: "Zz0MJjFNkIwX-2"},
    {name: "黄泉ガエル", cardURL: "Zz0MJjFNkIwX", cardID: "Zz0MJjFNkIwX-3"},
    {name: "風帝ライザー", cardURL: "4YcQ-6xHm7mS", cardID: "4YcQ-6xHm7mS-1"},
    {name: "風帝ライザー", cardURL: "4YcQ-6xHm7mS", cardID: "4YcQ-6xHm7mS-2"},
    {name: "風帝ライザー", cardURL: "4YcQ-6xHm7mS", cardID: "4YcQ-6xHm7mS-3"},
    {name: "霞の谷のファルコン", cardURL: "rPma36pRzKey", cardID: "rPma36pRzKey-1"},
    {name: "霞の谷のファルコン", cardURL: "rPma36pRzKey", cardID: "rPma36pRzKey-2"},
    {name: "霞の谷のファルコン", cardURL: "rPma36pRzKey", cardID: "rPma36pRzKey-3"},
    {name: "裏風の精霊", cardURL: "KzNfACnXSWRa", cardID: "KzNfACnXSWRa-1"},
    {name: "裏風の精霊", cardURL: "KzNfACnXSWRa", cardID: "KzNfACnXSWRa-2"},
    {name: "裏風の精霊", cardURL: "KzNfACnXSWRa", cardID: "KzNfACnXSWRa-3"},
    {name: "幻獣機テザーウルフ", cardURL: "NFoPCbq8bchA", cardID: "NFoPCbq8bchA-1"},
    {name: "幻獣機テザーウルフ", cardURL: "NFoPCbq8bchA", cardID: "NFoPCbq8bchA-2"},
    {name: "幻獣機テザーウルフ", cardURL: "NFoPCbq8bchA", cardID: "NFoPCbq8bchA-3"},
    {name: "幻獣機ブラックファルコン", cardURL: "eowaageRRX1S", cardID: "eowaageRRX1S-1"},
    {name: "幻獣機ブラックファルコン", cardURL: "eowaageRRX1S", cardID: "eowaageRRX1S-2"},
    {name: "幻獣機ブラックファルコン", cardURL: "eowaageRRX1S", cardID: "eowaageRRX1S-3"},
    {name: "デブリ・ドラゴン", cardURL: "fgZQqGjj9qMa", cardID: "fgZQqGjj9qMa-1"},
    {name: "デブリ・ドラゴン", cardURL: "fgZQqGjj9qMa", cardID: "fgZQqGjj9qMa-2"},
    {name: "デブリ・ドラゴン", cardURL: "fgZQqGjj9qMa", cardID: "fgZQqGjj9qMa-3"},
    {name: "音響戦士サイザス", cardURL: "5RLST51RAKjX", cardID: "5RLST51RAKjX-1"},
    {name: "音響戦士サイザス", cardURL: "5RLST51RAKjX", cardID: "5RLST51RAKjX-2"},
    {name: "音響戦士サイザス", cardURL: "5RLST51RAKjX", cardID: "5RLST51RAKjX-3"},
    {name: "音響戦士ギータス", cardURL: "w4tg7Sr4Xo2M", cardID: "w4tg7Sr4Xo2M-1"},
    {name: "音響戦士ギータス", cardURL: "w4tg7Sr4Xo2M", cardID: "w4tg7Sr4Xo2M-2"},
    {name: "音響戦士ギータス", cardURL: "w4tg7Sr4Xo2M", cardID: "w4tg7Sr4Xo2M-3"},
    {name: "音響戦士ピアーノ", cardURL: "OtCu4Uzi2dVn", cardID: "OtCu4Uzi2dVn-1"},
    {name: "音響戦士ピアーノ", cardURL: "OtCu4Uzi2dVn", cardID: "OtCu4Uzi2dVn-2"},
    {name: "音響戦士ピアーノ", cardURL: "OtCu4Uzi2dVn", cardID: "OtCu4Uzi2dVn-3"},
    {name: "トラゴエディア", cardURL: "5VZHK1LPabfX", cardID: "5VZHK1LPabfX-1"},
    {name: "トラゴエディア", cardURL: "5VZHK1LPabfX", cardID: "5VZHK1LPabfX-2"},
    {name: "トラゴエディア", cardURL: "5VZHK1LPabfX", cardID: "5VZHK1LPabfX-3"},
    {name: "ダーク・シムルグ", cardURL: "HeW0Jac1PmlN", cardID: "HeW0Jac1PmlN-1"},
    {name: "ダーク・シムルグ", cardURL: "HeW0Jac1PmlN", cardID: "HeW0Jac1PmlN-2"},
    {name: "ダーク・シムルグ", cardURL: "HeW0Jac1PmlN", cardID: "HeW0Jac1PmlN-3"},
    {name: "カオス・ソーサラー", cardURL: "wRFcnMqY2upM", cardID: "wRFcnMqY2upM-1"},
    {name: "カオス・ソーサラー", cardURL: "wRFcnMqY2upM", cardID: "wRFcnMqY2upM-2"},
    {name: "カオス・ソーサラー", cardURL: "wRFcnMqY2upM", cardID: "wRFcnMqY2upM-3"},
    {name: "邪帝ガイウス", cardURL: "oLt3srQOzBkB", cardID: "oLt3srQOzBkB-1"},
    {name: "邪帝ガイウス", cardURL: "oLt3srQOzBkB", cardID: "oLt3srQOzBkB-2"},
    {name: "邪帝ガイウス", cardURL: "oLt3srQOzBkB", cardID: "oLt3srQOzBkB-3"},
    {name: "シャドール・ドラゴン", cardURL: "SnMR0cyyOTa7", cardID: "SnMR0cyyOTa7-1"},
    {name: "シャドール・ドラゴン", cardURL: "SnMR0cyyOTa7", cardID: "SnMR0cyyOTa7-2"},
    {name: "シャドール・ドラゴン", cardURL: "SnMR0cyyOTa7", cardID: "SnMR0cyyOTa7-3"},
    {name: "霊滅術師 カイクウ", cardURL: "65Rdh-BgNYLX", cardID: "65Rdh-BgNYLX-1"},
    {name: "霊滅術師 カイクウ", cardURL: "65Rdh-BgNYLX", cardID: "65Rdh-BgNYLX-2"},
    {name: "霊滅術師 カイクウ", cardURL: "65Rdh-BgNYLX", cardID: "65Rdh-BgNYLX-3"},
    {name: "黒き森のウィッチ", cardURL: "54ZdK39gyQIX", cardID: "54ZdK39gyQIX-1"},
    {name: "黒き森のウィッチ", cardURL: "54ZdK39gyQIX", cardID: "54ZdK39gyQIX-2"},
    {name: "黒き森のウィッチ", cardURL: "54ZdK39gyQIX", cardID: "54ZdK39gyQIX-3"},
    {name: "カゲトカゲ", cardURL: "-u9ibK5prlSp", cardID: "-u9ibK5prlSp-1"},
    {name: "カゲトカゲ", cardURL: "-u9ibK5prlSp", cardID: "-u9ibK5prlSp-2"},
    {name: "カゲトカゲ", cardURL: "-u9ibK5prlSp", cardID: "-u9ibK5prlSp-3"},
    {name: "Ａ・ジェネクス・バードマン", cardURL: "nz01_o57eHG7", cardID: "nz01_o57eHG7-1"},
    {name: "Ａ・ジェネクス・バードマン", cardURL: "nz01_o57eHG7", cardID: "nz01_o57eHG7-2"},
    {name: "Ａ・ジェネクス・バードマン", cardURL: "nz01_o57eHG7", cardID: "nz01_o57eHG7-3"},
    {name: "ＢＦ－疾風のゲイル", cardURL: "tUoz8Zz3D8Zy", cardID: "tUoz8Zz3D8Zy-1"},
    {name: "ＢＦ－疾風のゲイル", cardURL: "tUoz8Zz3D8Zy", cardID: "tUoz8Zz3D8Zy-2"},
    {name: "ＢＦ－疾風のゲイル", cardURL: "tUoz8Zz3D8Zy", cardID: "tUoz8Zz3D8Zy-3"},
    {name: "ＴＧ ワーウルフ", cardURL: "bTwnPudEt86a", cardID: "bTwnPudEt86a-1"},
    {name: "ＴＧ ワーウルフ", cardURL: "bTwnPudEt86a", cardID: "bTwnPudEt86a-2"},
    {name: "ＴＧ ワーウルフ", cardURL: "bTwnPudEt86a", cardID: "bTwnPudEt86a-3"},
    {name: "彼岸の悪鬼 スカラマリオン", cardURL: "Uxl8mpr84pz2", cardID: "Uxl8mpr84pz2-1"},
    {name: "彼岸の悪鬼 スカラマリオン", cardURL: "Uxl8mpr84pz2", cardID: "Uxl8mpr84pz2-2"},
    {name: "彼岸の悪鬼 スカラマリオン", cardURL: "Uxl8mpr84pz2", cardID: "Uxl8mpr84pz2-3"},
    {name: "クリッター", cardURL: "TNlhZPL93M0B", cardID: "TNlhZPL93M0B-1"},
    {name: "クリッター", cardURL: "TNlhZPL93M0B", cardID: "TNlhZPL93M0B-2"},
    {name: "クリッター", cardURL: "TNlhZPL93M0B", cardID: "TNlhZPL93M0B-3"},
    {name: "魔界発現世行きデスガイド", cardURL: "3wrrR_81R4BX", cardID: "3wrrR_81R4BX-1"},
    {name: "魔界発現世行きデスガイド", cardURL: "3wrrR_81R4BX", cardID: "3wrrR_81R4BX-2"},
    {name: "魔界発現世行きデスガイド", cardURL: "3wrrR_81R4BX", cardID: "3wrrR_81R4BX-3"},
    {name: "ゾンビキャリア", cardURL: "Gqu-l4LZhtbN", cardID: "Gqu-l4LZhtbN-1"},
    {name: "ゾンビキャリア", cardURL: "Gqu-l4LZhtbN", cardID: "Gqu-l4LZhtbN-2"},
    {name: "ゾンビキャリア", cardURL: "Gqu-l4LZhtbN", cardID: "Gqu-l4LZhtbN-3"},
    {name: "絶対王 バック・ジャック", cardURL: "UbinpEbv4pz2", cardID: "UbinpEbv4pz2-1"},
    {name: "絶対王 バック・ジャック", cardURL: "UbinpEbv4pz2", cardID: "UbinpEbv4pz2-2"},
    {name: "絶対王 バック・ジャック", cardURL: "UbinpEbv4pz2", cardID: "UbinpEbv4pz2-3"}
  ];

export const magicCardList: { name: string, cardURL: string, cardID: string }[] =
  [
    {name: "増援", cardURL: "ol48NDQWzBkB", cardID: "ol48NDQWzBkB-1"},
    {name: "増援", cardURL: "ol48NDQWzBkB", cardID: "ol48NDQWzBkB-2"},
    {name: "増援", cardURL: "ol48NDQWzBkB", cardID: "ol48NDQWzBkB-3"},
    {name: "月の書", cardURL: "yphyCHweKY_A", cardID: "yphyCHweKY_A-1"},
    {name: "月の書", cardURL: "yphyCHweKY_A", cardID: "yphyCHweKY_A-2"},
    {name: "月の書", cardURL: "yphyCHweKY_A", cardID: "yphyCHweKY_A-3"},
    {name: "禁じられた聖杯", cardURL: "JWuTaHFB0CDl", cardID: "JWuTaHFB0CDl-1"},
    {name: "禁じられた聖杯", cardURL: "JWuTaHFB0CDl", cardID: "JWuTaHFB0CDl-2"},
    {name: "禁じられた聖杯", cardURL: "JWuTaHFB0CDl", cardID: "JWuTaHFB0CDl-3"},
    {name: "光の援軍", cardURL: "MD556oaUe2G2", cardID: "MD556oaUe2G2-1"},
    {name: "光の援軍", cardURL: "MD556oaUe2G2", cardID: "MD556oaUe2G2-2"},
    {name: "光の援軍", cardURL: "MD556oaUe2G2", cardID: "MD556oaUe2G2-3"},
    {name: "帝王の烈旋", cardURL: "U_keTOfO4pz2", cardID: "U_keTOfO4pz2-1"},
    {name: "帝王の烈旋", cardURL: "U_keTOfO4pz2", cardID: "U_keTOfO4pz2-2"},
    {name: "帝王の烈旋", cardURL: "U_keTOfO4pz2", cardID: "U_keTOfO4pz2-3"},
    {name: "禁じられた聖槍", cardURL: "vIR1VwC0LDVF", cardID: "vIR1VwC0LDVF-1"},
    {name: "禁じられた聖槍", cardURL: "vIR1VwC0LDVF", cardID: "vIR1VwC0LDVF-2"},
    {name: "禁じられた聖槍", cardURL: "vIR1VwC0LDVF", cardID: "vIR1VwC0LDVF-3"},
    {name: "炎舞－「天キ」", cardURL: "mNyYTcqWDAJB", cardID: "mNyYTcqWDAJB-1"},
    {name: "炎舞－「天キ」", cardURL: "mNyYTcqWDAJB", cardID: "mNyYTcqWDAJB-2"},
    {name: "炎舞－「天キ」", cardURL: "mNyYTcqWDAJB", cardID: "mNyYTcqWDAJB-3"},
    {name: "エネミーコントローラー", cardURL: "S1Lq2xkbjuX7", cardID: "S1Lq2xkbjuX7-1"},
    {name: "エネミーコントローラー", cardURL: "S1Lq2xkbjuX7", cardID: "S1Lq2xkbjuX7-2"},
    {name: "エネミーコントローラー", cardURL: "S1Lq2xkbjuX7", cardID: "S1Lq2xkbjuX7-3"},
    {name: "ビッグバン・シュート", cardURL: "90_lClso34ly", cardID: "90_lClso34ly-1"},
    {name: "ビッグバン・シュート", cardURL: "90_lClso34ly", cardID: "90_lClso34ly-2"},
    {name: "ビッグバン・シュート", cardURL: "90_lClso34ly", cardID: "90_lClso34ly-3"},
    {name: "炎舞－「玉衝」", cardURL: "2-jc5C_hvxyk", cardID: "2-jc5C_hvxyk-1"},
    {name: "炎舞－「玉衝」", cardURL: "2-jc5C_hvxyk", cardID: "2-jc5C_hvxyk-2"},
    {name: "炎舞－「玉衝」", cardURL: "2-jc5C_hvxyk", cardID: "2-jc5C_hvxyk-3"},
    {name: "強制転移", cardURL: "hjTEbBN5RZfU", cardID: "hjTEbBN5RZfU-1"},
    {name: "強制転移", cardURL: "hjTEbBN5RZfU", cardID: "hjTEbBN5RZfU-2"},
    {name: "強制転移", cardURL: "hjTEbBN5RZfU", cardID: "hjTEbBN5RZfU-3"},
    {name: "サイクロン", cardURL: "jVteCSgyGlnS", cardID: "jVteCSgyGlnS-1"},
    {name: "サイクロン", cardURL: "jVteCSgyGlnS", cardID: "jVteCSgyGlnS-2"},
    {name: "サイクロン", cardURL: "jVteCSgyGlnS", cardID: "jVteCSgyGlnS-3"},
    {name: "貪欲な壺", cardURL: "OTr22AdTmRmn", cardID: "OTr22AdTmRmn-1"},
    {name: "貪欲な壺", cardURL: "OTr22AdTmRmn", cardID: "OTr22AdTmRmn-2"},
    {name: "貪欲な壺", cardURL: "OTr22AdTmRmn", cardID: "OTr22AdTmRmn-3"},
    {name: "精神操作", cardURL: "ELIqu7nSsHHM", cardID: "ELIqu7nSsHHM-1"},
    {name: "精神操作", cardURL: "ELIqu7nSsHHM", cardID: "ELIqu7nSsHHM-2"},
    {name: "精神操作", cardURL: "ELIqu7nSsHHM", cardID: "ELIqu7nSsHHM-3"},
    {name: "ハリケーン", cardURL: "h_3k2dXzXZfU", cardID: "h_3k2dXzXZfU-1"},
    {name: "ハリケーン", cardURL: "h_3k2dXzXZfU", cardID: "h_3k2dXzXZfU-2"},
    {name: "ハリケーン", cardURL: "h_3k2dXzXZfU", cardID: "h_3k2dXzXZfU-3"},
    {name: "おろかな埋葬", cardURL: "XPOULVFaOSY2", cardID: "XPOULVFaOSY2-1"},
    {name: "おろかな埋葬", cardURL: "XPOULVFaOSY2", cardID: "XPOULVFaOSY2-2"},
    {name: "おろかな埋葬", cardURL: "XPOULVFaOSY2", cardID: "XPOULVFaOSY2-3"},
    {name: "地砕き", cardURL: "_9du-2av158l", cardID: "_9du-2av158l-1"},
    {name: "地砕き", cardURL: "_9du-2av158l", cardID: "_9du-2av158l-2"},
    {name: "地砕き", cardURL: "_9du-2av158l", cardID: "_9du-2av158l-3"},
    {name: "死者蘇生", cardURL: "eTMHGGy7HpES", cardID: "eTMHGGy7HpES-1"},
    {name: "死者蘇生", cardURL: "eTMHGGy7HpES", cardID: "eTMHGGy7HpES-2"},
    {name: "死者蘇生", cardURL: "eTMHGGy7HpES", cardID: "eTMHGGy7HpES-3"}
  ];

export const trapCardList: { name: string, cardURL: string, cardID: string }[] =
  [
    {name: "ブレイクスルー・スキル", cardURL: "89svv2KNJCEF", cardID: "89svv2KNJCEF-1"},
    {name: "ブレイクスルー・スキル", cardURL: "89svv2KNJCEF", cardID: "89svv2KNJCEF-2"},
    {name: "ブレイクスルー・スキル", cardURL: "89svv2KNJCEF", cardID: "89svv2KNJCEF-3"},
    {name: "バージェストマ・カナディア", cardURL: "IDf7HPZbA-7F", cardID: "IDf7HPZbA-7F-1"},
    {name: "バージェストマ・カナディア", cardURL: "IDf7HPZbA-7F", cardID: "IDf7HPZbA-7F-2"},
    {name: "バージェストマ・カナディア", cardURL: "IDf7HPZbA-7F", cardID: "IDf7HPZbA-7F-3"},
    {name: "量子猫", cardURL: "_xmFCN-n-3gl", cardID: "_xmFCN-n-3gl-1"},
    {name: "量子猫", cardURL: "_xmFCN-n-3gl", cardID: "_xmFCN-n-3gl-2"},
    {name: "量子猫", cardURL: "_xmFCN-n-3gl", cardID: "_xmFCN-n-3gl-3"},
    {name: "強制脱出装置", cardURL: "UNkFXeq3jU52", cardID: "UNkFXeq3jU52-1"},
    {name: "強制脱出装置", cardURL: "UNkFXeq3jU52", cardID: "UNkFXeq3jU52-2"},
    {name: "強制脱出装置", cardURL: "UNkFXeq3jU52", cardID: "UNkFXeq3jU52-3"},
    {name: "バージェストマ・オレノイデス", cardURL: "rQx25UiP-bby", cardID: "rQx25UiP-bby-1"},
    {name: "バージェストマ・オレノイデス", cardURL: "rQx25UiP-bby", cardID: "rQx25UiP-bby-2"},
    {name: "バージェストマ・オレノイデス", cardURL: "rQx25UiP-bby", cardID: "rQx25UiP-bby-3"},
    {name: "デモンズ・チェーン", cardURL: "jtCY1XWAGlnS", cardID: "jtCY1XWAGlnS-1"},
    {name: "デモンズ・チェーン", cardURL: "jtCY1XWAGlnS", cardID: "jtCY1XWAGlnS-2"},
    {name: "デモンズ・チェーン", cardURL: "jtCY1XWAGlnS", cardID: "jtCY1XWAGlnS-3"},
    {name: "次元幽閉", cardURL: "7PT3-C0S8wGk", cardID: "7PT3-C0S8wGk-1"},
    {name: "次元幽閉", cardURL: "7PT3-C0S8wGk", cardID: "7PT3-C0S8wGk-2"},
    {name: "次元幽閉", cardURL: "7PT3-C0S8wGk", cardID: "7PT3-C0S8wGk-3"},
    {name: "バージェストマ・ディノミスクス", cardURL: "7T2NIngg8z_k", cardID: "7T2NIngg8z_k-1"},
    {name: "バージェストマ・ディノミスクス", cardURL: "7T2NIngg8z_k", cardID: "7T2NIngg8z_k-2"},
    {name: "バージェストマ・ディノミスクス", cardURL: "7T2NIngg8z_k", cardID: "7T2NIngg8z_k-3"},
    {name: "安全地帯", cardURL: "pPYDErMs4yX2", cardID: "pPYDErMs4yX2-1"},
    {name: "安全地帯", cardURL: "pPYDErMs4yX2", cardID: "pPYDErMs4yX2-2"},
    {name: "安全地帯", cardURL: "pPYDErMs4yX2", cardID: "pPYDErMs4yX2-3"},
    {name: "鳳翼の爆風", cardURL: "JfpPhAURC10l", cardID: "JfpPhAURC10l-1"},
    {name: "鳳翼の爆風", cardURL: "JfpPhAURC10l", cardID: "JfpPhAURC10l-2"},
    {name: "鳳翼の爆風", cardURL: "JfpPhAURC10l", cardID: "JfpPhAURC10l-3"},
    {name: "スキル・サクセサー", cardURL: "U0VC11tAepz2", cardID: "U0VC11tAepz2-1"},
    {name: "スキル・サクセサー", cardURL: "U0VC11tAepz2", cardID: "U0VC11tAepz2-2"},
    {name: "スキル・サクセサー", cardURL: "U0VC11tAepz2", cardID: "U0VC11tAepz2-3"},
    {name: "リビングデッドの呼び声", cardURL: "dWF6ssLJ0s0N", cardID: "dWF6ssLJ0s0N-1"},
    {name: "リビングデッドの呼び声", cardURL: "dWF6ssLJ0s0N", cardID: "dWF6ssLJ0s0N-2"},
    {name: "リビングデッドの呼び声", cardURL: "dWF6ssLJ0s0N", cardID: "dWF6ssLJ0s0N-3"},
    {name: "破壊輪", cardURL: "6NocCRPrTOoX", cardID: "6NocCRPrTOoX-1"},
    {name: "破壊輪", cardURL: "6NocCRPrTOoX", cardID: "6NocCRPrTOoX-2"},
    {name: "破壊輪", cardURL: "6NocCRPrTOoX", cardID: "6NocCRPrTOoX-3"},
    {name: "幻獣の角", cardURL: "mG0Ai07wZktB", cardID: "mG0Ai07wZktB-1"},
    {name: "幻獣の角", cardURL: "mG0Ai07wZktB", cardID: "mG0Ai07wZktB-2"},
    {name: "幻獣の角", cardURL: "mG0Ai07wZktB", cardID: "mG0Ai07wZktB-3"},
    {name: "強化蘇生", cardURL: "ZIXeKGgEF83X", cardID: "ZIXeKGgEF83X-1"},
    {name: "強化蘇生", cardURL: "ZIXeKGgEF83X", cardID: "ZIXeKGgEF83X-2"},
    {name: "強化蘇生", cardURL: "ZIXeKGgEF83X", cardID: "ZIXeKGgEF83X-3"},
    {name: "奈落の落とし穴", cardURL: "vgQdZh5XMwRF", cardID: "vgQdZh5XMwRF-1"},
    {name: "奈落の落とし穴", cardURL: "vgQdZh5XMwRF", cardID: "vgQdZh5XMwRF-2"},
    {name: "奈落の落とし穴", cardURL: "vgQdZh5XMwRF", cardID: "vgQdZh5XMwRF-3"},
    {name: "蟲惑の落とし穴", cardURL: "ko36pCbA8Czk", cardID: "ko36pCbA8Czk-1"},
    {name: "蟲惑の落とし穴", cardURL: "ko36pCbA8Czk", cardID: "ko36pCbA8Czk-2"},
    {name: "蟲惑の落とし穴", cardURL: "ko36pCbA8Czk", cardID: "ko36pCbA8Czk-3"},
    {name: "戦線復帰", cardURL: "8yiW3iVgJCEF", cardID: "8yiW3iVgJCEF-1"},
    {name: "戦線復帰", cardURL: "8yiW3iVgJCEF", cardID: "8yiW3iVgJCEF-2"},
    {name: "戦線復帰", cardURL: "8yiW3iVgJCEF", cardID: "8yiW3iVgJCEF-3"}
  ];

export const extraCardList: { name: string, cardURL: string, cardID: string }[] =
  [
    {name: "神樹の守護獣－牙王", cardURL: "-FVRiE2eyB2p", cardID: "-FVRiE2eyB2p-1"},
    {name: "神樹の守護獣－牙王", cardURL: "-FVRiE2eyB2p", cardID: "-FVRiE2eyB2p-2"},
    {name: "閃珖竜 スターダスト", cardURL: "o-nXFUC95yUB", cardID: "o-nXFUC95yUB-1"},
    {name: "閃珖竜 スターダスト", cardURL: "o-nXFUC95yUB", cardID: "o-nXFUC95yUB-2"},
    {name: "クリムゾン・ブレーダー", cardURL: "5FsS8MhiGbfX", cardID: "5FsS8MhiGbfX-1"},
    {name: "クリムゾン・ブレーダー", cardURL: "5FsS8MhiGbfX", cardID: "5FsS8MhiGbfX-2"},
    {name: "レッド・デーモンズ・ドラゴン", cardURL: "hC26eGJxyZfU", cardID: "hC26eGJxyZfU-1"},
    {name: "レッド・デーモンズ・ドラゴン", cardURL: "hC26eGJxyZfU", cardID: "hC26eGJxyZfU-2"},
    {name: "スクラップ・ドラゴン", cardURL: "UocEty4jWXh2", cardID: "UocEty4jWXh2-1"},
    {name: "スクラップ・ドラゴン", cardURL: "UocEty4jWXh2", cardID: "UocEty4jWXh2-2"},
    {name: "クリアウィング・シンクロ・ドラゴン", cardURL: "XKNudP-vjac2", cardID: "XKNudP-vjac2-1"},
    {name: "クリアウィング・シンクロ・ドラゴン", cardURL: "XKNudP-vjac2", cardID: "XKNudP-vjac2-2"},
    {name: "ブラック・ローズ・ドラゴン", cardURL: "UCP5n8VXepz2", cardID: "UCP5n8VXepz2-1"},
    {name: "ブラック・ローズ・ドラゴン", cardURL: "UCP5n8VXepz2", cardID: "UCP5n8VXepz2-2"},
    {name: "霞の谷の雷神鬼", cardURL: "TnjuQBfk3pDB", cardID: "TnjuQBfk3pDB-1"},
    {name: "霞の谷の雷神鬼", cardURL: "TnjuQBfk3pDB", cardID: "TnjuQBfk3pDB-2"},
    {name: "月華竜 ブラック・ローズ", cardURL: "nGwEX6M6Wdr7", cardID: "nGwEX6M6Wdr7-1"},
    {name: "月華竜 ブラック・ローズ", cardURL: "nGwEX6M6Wdr7", cardID: "nGwEX6M6Wdr7-2"},
    {name: "ＢＦ－星影のノートゥング", cardURL: "zLnavG54prIM", cardID: "zLnavG54prIM-1"},
    {name: "ＢＦ－星影のノートゥング", cardURL: "zLnavG54prIM", cardID: "zLnavG54prIM-2"},
    {name: "オリエント・ドラゴン", cardURL: "nvRuON6jWG_7", cardID: "nvRuON6jWG_7-1"},
    {name: "オリエント・ドラゴン", cardURL: "nvRuON6jWG_7", cardID: "nvRuON6jWG_7-2"},
    {name: "獣神ヴァルカン", cardURL: "gVnKz7qWT_1n", cardID: "gVnKz7qWT_1n-1"},
    {name: "獣神ヴァルカン", cardURL: "gVnKz7qWT_1n", cardID: "gVnKz7qWT_1n-2"},
    {name: "瑚之龍", cardURL: "brbh-JI_Fvxa", cardID: "brbh-JI_Fvxa-1"},
    {name: "瑚之龍", cardURL: "brbh-JI_Fvxa", cardID: "brbh-JI_Fvxa-2"},
    {name: "幻層の守護者アルマデス", cardURL: "4ZXRrfk7d2RS", cardID: "4ZXRrfk7d2RS-1"},
    {name: "幻層の守護者アルマデス", cardURL: "4ZXRrfk7d2RS", cardID: "4ZXRrfk7d2RS-2"},
    {name: "超重剣聖ムサ－Ｃ", cardURL: "9zDK_hrc6jky", cardID: "9zDK_hrc6jky-1"},
    {name: "超重剣聖ムサ－Ｃ", cardURL: "9zDK_hrc6jky", cardID: "9zDK_hrc6jky-2"},
    {name: "転生竜サンサーラ", cardURL: "VPLQNP9U3Wdy", cardID: "VPLQNP9U3Wdy-1"},
    {name: "転生竜サンサーラ", cardURL: "VPLQNP9U3Wdy", cardID: "VPLQNP9U3Wdy-2"},
    {name: "Ａ・Ｏ・Ｊ カタストル", cardURL: "Y_9FGjdrMV4n", cardID: "Y_9FGjdrMV4n-1"},
    {name: "Ａ・Ｏ・Ｊ カタストル", cardURL: "Y_9FGjdrMV4n", cardID: "Y_9FGjdrMV4n-2"},
    {name: "交響魔人マエストローク", cardURL: "0LDett8w7M-p", cardID: "0LDett8w7M-p-1"},
    {name: "交響魔人マエストローク", cardURL: "0LDett8w7M-p", cardID: "0LDett8w7M-p-2"},
    {name: "エヴォルカイザー・ラギア", cardURL: "SUvXDXv-Omy7", cardID: "SUvXDXv-Omy7-1"},
    {name: "エヴォルカイザー・ラギア", cardURL: "SUvXDXv-Omy7", cardID: "SUvXDXv-Omy7-2"},
    {name: "Ｎｏ.８０ 狂装覇王ラプソディ・イン・バーサーク", cardURL: "Ga2j3RlCztbN", cardID: "Ga2j3RlCztbN-1"},
    {name: "Ｎｏ.８０ 狂装覇王ラプソディ・イン・バーサーク", cardURL: "Ga2j3RlCztbN", cardID: "Ga2j3RlCztbN-2"},
    {name: "キングレムリン", cardURL: "cXC6fG1m_64F", cardID: "cXC6fG1m_64F-1"},
    {name: "キングレムリン", cardURL: "cXC6fG1m_64F", cardID: "cXC6fG1m_64F-2"},
    {name: "ラヴァルバル・チェイン", cardURL: "c6CQ_FJ3yZKF", cardID: "c6CQ_FJ3yZKF-1"},
    {name: "ラヴァルバル・チェイン", cardURL: "c6CQ_FJ3yZKF", cardID: "c6CQ_FJ3yZKF-2"},
    {name: "ギアギガント Ｘ", cardURL: "G2Jg2Q57P9gN", cardID: "G2Jg2Q57P9gN-1"},
    {name: "ギアギガント Ｘ", cardURL: "G2Jg2Q57P9gN", cardID: "G2Jg2Q57P9gN-2"},
    {name: "彼岸の旅人 ダンテ", cardURL: "w6Knu8kuXupM", cardID: "w6Knu8kuXupM-1"},
    {name: "彼岸の旅人 ダンテ", cardURL: "w6Knu8kuXupM", cardID: "w6Knu8kuXupM-2"},
    {name: "発条機雷ゼンマイン", cardURL: "BJ29zeiHQKqA", cardID: "BJ29zeiHQKqA-1"},
    {name: "発条機雷ゼンマイン", cardURL: "BJ29zeiHQKqA", cardID: "BJ29zeiHQKqA-2"},
    {name: "虚空海竜リヴァイエール", cardURL: "_d-CHxDmP6el", cardID: "_d-CHxDmP6el-1"},
    {name: "虚空海竜リヴァイエール", cardURL: "_d-CHxDmP6el", cardID: "_d-CHxDmP6el-2"},
    {name: "神騎セイントレア", cardURL: "2_yqxgNcc-Ak", cardID: "2_yqxgNcc-Ak-1"},
    {name: "神騎セイントレア", cardURL: "2_yqxgNcc-Ak", cardID: "2_yqxgNcc-Ak-2"}
  ];