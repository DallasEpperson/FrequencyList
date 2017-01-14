// http://www.radioreference.com/apps/db/?aid=7730

var freqArray = GrabGenericFreqs($(".rrtable")[0], "General Mobile Radio Service", "NFM", 0, 12500);
var freqXML = TranslateToXML(freqArray);