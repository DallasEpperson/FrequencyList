function GrabGenericFreqs(tableElement, groupName, mode, shift, bandwidth){
    var ret = [];
    for(var i=1; i<tableElement.rows.length; i++){ //skipping header row
        var row = tableElement.rows[i];
        var thisFreqCell = $(row.cells[0]).text();
        var thisName = $(row.cells[4]).text();
        var thisFrequency = (parseFloat(thisFreqCell)*1000000);
        ret.push({
            IsFavourite: true,
            Name: thisName,
            GroupName: groupName,
            Frequency: thisFrequency,
            DetectorType: mode,
            Shift: shift,
            FilterBandwidth: bandwidth
        });
    }
    return ret;
}