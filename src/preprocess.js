function preprocess(doc){
    
    for (var property in doc){
        if(doc.hasOwnProperty(property)){
            doc[property].source = fullWidthToHalf(doc[property].source);
        }
    }
    
    return doc;
}

function fullWidthToHalf(string){

    var replacer = function(ch) { 
        return String.fromCharCode(ch.charCodeAt(0) - 0xfee0);
    }
    
    return string.replace(/[\uff01-\uff5e]/g, replacer);
}

export default preprocess;
