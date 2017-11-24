function quotationMarks(source, target, checkOptions, oAccumulator){
    
    var retval = null;
    var searchTerm = '".';
    var caution = 'Periods should precede quotation marks.';
    
    // style is american by default
    if(checkOptions.quotationMarks == 'UK'){
        searchTerm = '."'
        caution = 'Quotation marks should precede periods.';
    }
    
    var test = target.indexOf(searchTerm);
    
    if(test > -1){
        retval = caution;
    }
    
    return [retval, oAccumulator];
}

export {
    quotationMarks
}