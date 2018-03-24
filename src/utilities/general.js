import { replaceAllFromArray } from 'yakubun-utils';

function metalogger() {

}

function addMinutesToSimpleENTimes(target) {
  return target.replace(/\s([1]?[0-9])([ap]m)|^([1]?[0-9])([ap]m)/g, ' $1$3:00$2$4');
}

function replaceDoubleByteNums(string) {
  const numArr = [
    ['\u5341\u4E00', '11'],
    ['\u5341\u4E8C', '12'],
    ['\u5341\u4E09', '13'],
    ['\u5341\u56DB', '14'],
    ['\u5341\u4E94', '15'],
    ['\u5341\u516D', '16'],
    ['\u5341\u4E03', '17'],
    ['\u5341\u516B', '18'],
    ['\u5341\u4E5D', '19'],
    ['\u4E8C\u5341', '20'],
    ['\uFF10', '0'],
    ['\uFF11', '1'],
    ['\uFF12', '2'],
    ['\uFF13', '3'],
    ['\uFF14', '4'],
    ['\uFF15', '5'],
    ['\uFF16', '6'],
    ['\uFF17', '7'],
    ['\uFF18', '8'],
    ['\uFF19', '9'],
    ['\u4E8C', '2'],
    ['\u4E09', '3'],
    ['\u56DB', '4'],
    ['\u4E94', '5'],
    ['\u516D', '6'],
    ['\u4E03', '7'],
    ['\u516B', '8'],
    ['\u4E5D', '9'],
  ];

  return replaceAllFromArray(numArr, string, 'gi');
}

export {
  addMinutesToSimpleENTimes,
  replaceDoubleByteNums,
  metalogger,
};
