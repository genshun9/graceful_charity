import * as fs from 'fs';

// index.tsとは別のアプリケーションなので、以下汎用メソッドはutils配下におかずにここの中に閉じ込める。
/**
 * inputCardListのtextファイルから、outputCardListにjsonを出力
 * @param {string} target
 * @param {number} cardType
 * @param {boolean} isRare
 */
const writeJsonFromTextFile = (target, cardType, isRare) => {
  fs.readFile(`assets/inputCardList/${target}.txt`, {encoding: 'utf-8'}, (err1, text) => {
    if (err1) {
      throw err1
    } else {
      const outputText:{ name: string, cardURL: string, cardID: string, cardType: number}[] = [];
      const textDatas = text.split('\n').map(d => d.split(','));
      textDatas.forEach(textData => {
        for (let i =0; i < Number(textData[2]); i++) {
          let card = {
            name: textData[0],
            cardURL: textData[1],
            cardID: `${textData[1]}-${Number(i)+1}`,
            cardType: isRare ? Number(textData[3]) : cardType
          };
          outputText.push(card);
        }
      });
      fs.writeFileSync(`assets/outputCardList/${target}.json`, JSON.stringify(outputText));
    }
  });
};

writeJsonFromTextFile('monster', 1, false);
writeJsonFromTextFile('magic', 2, false);
writeJsonFromTextFile('trap', 3, false);
writeJsonFromTextFile('extra', 4, false);
writeJsonFromTextFile('rare', 0, true);