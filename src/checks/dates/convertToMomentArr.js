import moment from 'moment-timezone';

function momentDateSort(a, b) {
  // leave elements unsorted if they are not moments
  if (!moment.isMoment(a) || !moment.isMoment(b)) {
    return 0;
  }

  // sort the moments
  if (a.isBefore(b)) {
    return -1;
  } else if (b.isBefore(a)) {
    return 1;
  }

  // if anything went wrong, leave elements unsorted
  return 0;
}

function convertToMomentArr(comparison, sourceTz, targetTz) {
  const newArr = [];

  const sourceConverter = function sourceConverter(e) {
    const element = e.slice(1, e.length - 1);
    if (sourceTz) {
      return moment.tz(element, sourceTz);
    }
    return moment(element);
  };
  const targetConverter = function targetConverter(e) {
    const element = e.slice(1, e.length - 1);
    if (targetTz) {
      return moment.tz(element, targetTz);
    }
    return moment(element);
  };

  newArr[0] = comparison[0].map(sourceConverter).sort(momentDateSort);
  newArr[1] = comparison[1].map(targetConverter).sort(momentDateSort);
  return newArr;
}

export default convertToMomentArr;
