window.cipher = {
  encode: (offsetB, messageB) => {
    let offsetC = parseInt(offsetB);
    let encodeC = '';
      for ( let i = 0; i < messageB.length; i++) 
      {
        let ascii = messageB[i].charCodeAt();
        const formula = (ascii - 65 + offsetC) % 26 + 65;
        const encodeMessage = String.fromCharCode(formula);
        encodeC += encodeMessage
      }
      //console.log(encodeC)
      return encodeC;
  },

  decode: (offsetD, messageD) => {
    let offsetE = parseInt(offsetD);
    let decodeD = '';
      for ( let i = 0; i < messageD.length; i++) 
      {
        let ascii = messageD[i].charCodeAt();
        const formula2 = (ascii + 65 - offsetE) % 26 + 65;
        const decodeMessage = String.fromCharCode(formula2);
        decodeD += decodeMessage
      }
      //console.log(decodeD)
      return decodeD;
  },
};