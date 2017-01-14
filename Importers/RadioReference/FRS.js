// http://www.radioreference.com/apps/db/?aid=7732

var freqArray = GrabGenericFreqs($(".rrtable")[0], "Family Radio Service", "NFM", 0, 12500);
var freqXML = TranslateToXML(freqArray);