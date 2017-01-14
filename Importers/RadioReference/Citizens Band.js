// http://www.radioreference.com/apps/db/?aid=7731

function GrabFreqs(tableElement){
    var ret = [];
    for(var i=1; i<tableElement.rows.length; i++){ //skipping header row
        var row = tableElement.rows[i];
        var thisFreqCell = $(row.cells[0]).text();
        var thisName = $(row.cells[4]).text();
        var thisFrequency = (parseFloat(thisFreqCell)*1000000);
        ret.push({
            IsFavourite: true,
            Name: thisName,
            GroupName: "Citizens Band",
            Frequency: thisFrequency,
            DetectorType: "AM",
            Shift: -125000000,
            FilterBandwidth: 10000
        });
    }
    return ret;
}

var freqArray = GrabFreqs($(".rrtable")[0]);
var freqXML = TranslateToXML(freqArray);