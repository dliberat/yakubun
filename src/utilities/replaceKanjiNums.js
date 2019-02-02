function replaceKanjiNums(string) {
  return string
    .replace(/\u5341\u4E00/g, '11')
    .replace(/\u5341\u4E8C/g, '12')
    .replace(/\u5341\u4E09/g, '13')
    .replace(/\u5341\u56DB/g, '14')
    .replace(/\u5341\u4E94/g, '15')
    .replace(/\u5341\u516D/g, '16')
    .replace(/\u5341\u4E03/g, '17')
    .replace(/\u5341\u516B/g, '18')
    .replace(/\u5341\u4E5D/g, '19')
    .replace(/\u4E8C\u5341/g, '20')
    .replace(/\uFF12|\u4E8C/g, '2')
    .replace(/\uFF13|\u4E09/g, '3')
    .replace(/\uFF14|\u56DB/g, '4')
    .replace(/\uFF15|\u4E94/g, '5')
    .replace(/\uFF16|\u516D/g, '6')
    .replace(/\uFF17|\u4E03/g, '7')
    .replace(/\uFF18|\u516B/g, '8')
    .replace(/\uFF19|\u4E5D/g, '9')
    .replace(/\uFF10/g, '0');
}

export default replaceKanjiNums;
