window.cipher = {

  encode: (offsetB, messageB) => {
    offsetB = parseInt(offsetB)
    let encodeC ='';
    for ( let i = 0; i < messageB.length; i++) {
      const ascii = messageB[i].chartCodeAt();
      const formula = (ascii - 65 + offsetB) % 26 + 65;
      let encodeMessage = String.fromCharCode(formula);
      encodeC += encodeMessage
      }
      //console.log(encodeC)
      return encodeC
    }
    
  }
  

  decode: () => {

  }

  //const algo = () => {}

  //return(decodeMessage )