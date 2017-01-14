// For grabbing freqs from http://www.radioreference.com/apps/db/?sid=429 and importing into sdr#

function GrabFreqs(tableElement){
  var ret = [];
  var name = "";
  for(var i=1; i<tableElement.rows.length; i++){ //skipping header row
    var row = tableElement.rows[i];
    var thisNameCell = $.trim($(row.cells[1]).text());
    if (thisNameCell !== '') name = thisNameCell;
    for(var c=3; c<row.cells.length; c++){
      var thisFreqCell = $.trim($(row.cells[c]).text());
      if (thisFreqCell !== ''){
        var specialFreq = '';
        var lastChar = thisFreqCell[thisFreqCell.length - 1];
        if (lastChar === 'a') {specialFreq = " (Alternate Control)"; thisFreqCell = thisFreqCell.substring(0, thisFreqCell.length-1);}
        if (lastChar === 'c') {specialFreq = " (Control)"; thisFreqCell = thisFreqCell.substring(0, thisFreqCell.length-1);}
        var thisFrequency = (parseFloat(thisFreqCell)*1000000); // Mhz to hz
        ret.push({
          IsFavourite: true,
          Name: name + specialFreq, 
          GroupName: "Palmetto 800",
          Frequency: thisFrequency,
          DetectorType: "NFM",
          Shift: 0,
          FilterBandwidth: 12500
        });
      }
    }
  }
  ret.sort(function(a,b){
    return a.Frequency == b.Frequency ? 0 : +(a.Frequency > b.Frequency) || -1;
  });
  return ret;
}

var freqArray = GrabFreqs($(".rrtable")[2]);
var freqXML = TranslateToXML(freqArray);
