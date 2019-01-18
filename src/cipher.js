window.cipher = {

  encode: (offsetB, messageB) => {
    let offsetC = parseInt(offsetB);
    let encodeC = '';
    for ( let i = 0; i < messageB.length; i++) {
      const ascii = messageB[i].charCodeAt();
      const formula = (ascii - 65 + offsetC) % 26 + 65;
      const encodeMessage = String.fromCharCode(formula);
      encodeC += encodeMessage
      }
      //console.log(encodeC)
      return encodeC;
  }
  //console.log(encodeC);
  //document.getElementById('encode').innerHTML `Tu mensaje encriptado es ${encodeMessage}`;


  //decode: () => {

  }

  //const algo = () => {}

  //return(decodeMessage )