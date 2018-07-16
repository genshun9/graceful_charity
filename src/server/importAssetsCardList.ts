const fs = require('fs');

fs.readFile('assets/inputCardList/monster.txt', {encoding: 'utf-8'}, (err1, text) => {
  if (err1) {
    throw err1
  } else {
    const outputText:{ name: string, cardURL: string, cardID: string, cardType: number}[] = [];
    const textDatas = text.split('\n').map(d => d.split(','));
    textDatas.forEach(textData => {
      for (let i =0; i < textData[2]; i++) {
        let card = {
          name: textData[0],
          cardURL: textData[1],
          cardID: `${textData[1]}-${Number(i)+1}`,
          cardType: 1
        };
        outputText.push(card);
      }
    });
    fs.writeFileSync('assets/outputCardList/monster.json', JSON.stringify(outputText), (err2) => {
      if (err2) {
        throw err2
      } else {
        console.log("出力完了");
      }
    });
  }
});

fs.readFile('assets/inputCardList/magic.txt', {encoding: 'utf-8'}, (err1, text) => {
  if (err1) {
    throw err1
  } else {
    const outputText:{ name: string, cardURL: string, cardID: string, cardType: number}[] = [];
    const textDatas = text.split('\n').map(d => d.split(','));
    textDatas.forEach(textData => {
      for (let i =0; i < textData[2]; i++) {
        let card = {
          name: textData[0],
          cardURL: textData[1],
          cardID: `${textData[1]}-${Number(i)+1}`,
          cardType: 2
        };
        outputText.push(card);
      }
    });
    fs.writeFileSync('assets/outputCardList/magic.json', JSON.stringify(outputText), (err2) => {
      if (err2) {
        throw err2
      } else {
        console.log("出力完了");
      }
    });
  }
});

fs.readFile('assets/inputCardList/trap.txt', {encoding: 'utf-8'}, (err1, text) => {
  if (err1) {
    throw err1
  } else {
    const outputText:{ name: string, cardURL: string, cardID: string, cardType: number}[] = [];
    const textDatas = text.split('\n').map(d => d.split(','));
    textDatas.forEach(textData => {
      for (let i =0; i < textData[2]; i++) {
        let card = {
          name: textData[0],
          cardURL: textData[1],
          cardID: `${textData[1]}-${Number(i)+1}`,
          cardType: 3
        };
        outputText.push(card);
      }
    });
    fs.writeFileSync('assets/outputCardList/trap.json', JSON.stringify(outputText), (err2) => {
      if (err2) {
        throw err2
      } else {
        console.log("出力完了");
      }
    });
  }
});

fs.readFile('assets/inputCardList/extra.txt', {encoding: 'utf-8'}, (err1, text) => {
  if (err1) {
    throw err1
  } else {
    const outputText:{ name: string, cardURL: string, cardID: string, cardType: number}[] = [];
    const textDatas = text.split('\n').map(d => d.split(','));
    textDatas.forEach(textData => {
      for (let i =0; i < textData[2]; i++) {
        let card = {
          name: textData[0],
          cardURL: textData[1],
          cardID: `${textData[1]}-${Number(i)+1}`,
          cardType: 4
        };
        outputText.push(card);
      }
    });
    fs.writeFileSync('assets/outputCardList/extra.json', JSON.stringify(outputText), (err2) => {
      if (err2) {
        throw err2
      } else {
        console.log("出力完了");
      }
    });
  }
});