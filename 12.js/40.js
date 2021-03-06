[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur)
  },
  [1, 2]
)
// [1, 2, 0, 1, 2, 3]

// [1, 2]は初期値になる。　
// 最初のループでaccは[1, 2]でcurは[0, 1]
// それらを結合すると[1、2、0、1]
// その後[1, 2, 0, 1]のaccと[2, 3]を結合して [1, 2, 0, 1, 2, 3]になる