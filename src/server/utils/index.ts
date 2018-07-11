/**
 * 0から引数-1までの整数が、ランダムに格納された配列を返却するメソッド
 */
export const getRandomArray: (a: number) => number[] = (maxNumber: number) => {
  //生成した乱数を格納する配列を初期化
  let arr: number[] = [];
  //生成した乱数を格納している配列の長さ（生成した乱数の数）
  let arrLength: number = arr.length;
  //パラメータ maxNumber の数だけ Math.random()で乱数を発生
  for (let i = 0; i < maxNumber; i++) {
    let candidate = Math.floor(Math.random() * maxNumber);
    //今まで生成された乱数と同じ場合は再度乱数を発生
    for (let j = 0; j < arrLength; j++) {
      if (candidate === arr[j]) {
        candidate = Math.floor(Math.random() * maxNumber);
        j = -1;
      }
    }
    arr[i] = candidate;
    arrLength++;
  }
  return arr;
};

/**
 * 順序を変更したい配列と、変更したい順序(index)の配列を渡すと、配列の並びが変わるメソッド
 */
export const changeOrderArray: (a: any[], b: number[]) => any[] = (dataArray: any[], orderArray: number[]) => {
  let resultArray = [];
  orderArray.forEach(i => resultArray.push(dataArray[i]));
  return resultArray;
};