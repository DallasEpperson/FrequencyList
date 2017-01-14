// http://www.radioreference.com/apps/db/?aid=7733

var freqArray = GrabGenericFreqs($(".rrtable")[0], "Multi-Use Radio Service", "NFM", 0, 12500);
var freqXML = TranslateToXML(freqArray);