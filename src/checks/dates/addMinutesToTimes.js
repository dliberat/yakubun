function addMinutesToSimpleENTimes(target) {
  return target.replace(/\s([1]?[0-9])([ap]m)|^([1]?[0-9])([ap]m)/g, ' $1$3:00$2$4');
}

export default addMinutesToSimpleENTimes;
