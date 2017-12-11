function replacer(ch) {
  return String.fromCharCode(ch.charCodeAt(0) - 0xfee0);
}

function fullWidthToHalf(string) {
  return string.replace(/[\uff01-\uff5e]/g, replacer);
}

function preprocess(doc) {
  for (const property in doc) {
    if (doc.hasOwnProperty(property)) {
      doc[property].source = fullWidthToHalf(doc[property].source);
    }
  }

  return doc;
}

export default preprocess;
