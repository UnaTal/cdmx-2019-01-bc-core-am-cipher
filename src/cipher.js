window.cipher = {

  encode: (offsetB, messageB) => {
    offsetB = parseInt(offset2)
    let encodeC ='';
    for ( let i = 0; i < messageB.length; i++) {
      const ascii = messageB[i].chartCodeAt();
      const formula = (ascii - 65 + offset) % 26 + 65;
      let encodeMessage = String.fromCharCode(formula);
      encodeC += encodeMessage
      //result = encodeMessage;
      }
    }
    //console.log(offset, messageRecieved)
    //return encodeMessage;
  }
  

  //decode: () => {

  }

  //const algo = () => {}

  //return(decodeMessage )