// http://www.radioreference.com/apps/db/?aid=7731

var freqArray = GrabGenericFreqs($(".rrtable")[0], "Citizens Band", "AM", -125000000, 10000);
var freqXML = TranslateToXML(freqArray);