// Converts array of js objects to MemoryEntry nodes
function TranslateToXML(freqArray){
  var ret = '';
  for(var i = 0; i<freqArray.length; i++){
    ret += "  <MemoryEntry>\n";
    var keys = []; for(var k in freqArray[i]) keys.push(k);
    for(var ki = 0; ki<keys.length; ki++){
      var node = keys[ki];
      ret += "    <" + node + ">" + freqArray[i][node] + "</" + node + ">\n";
    }
    ret += "  </MemoryEntry>\n";
  }
  return ret;
}