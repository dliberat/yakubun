/* Convert all double-byte numbers in the source text
to single-byte numbers. */

function replacer(ch) {
  return String.fromCharCode(ch.charCodeAt(0) - 0xfee0);
}

function fullWidthToHalf(string) {
  return string.replace(/[\uff01-\uff5e]/g, replacer);
}

function preprocess(doc) {
  const keys = Object.keys(doc);
  keys.forEach((element) => {
    doc[element].source = fullWidthToHalf(doc[element].source);
  });

  return doc;
}

export default preprocess;
