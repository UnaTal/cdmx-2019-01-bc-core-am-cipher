window.cipher = {

  encode: (offset, message) => {
    for ( let i = 0; i<message.length; i++) {
      const ascii = message.chartCodeAt(i);
      const formula = (ascii - 65 + offset) % 26 + 65;
      const messageEncode = message.fromCharCode(formula);
      const result += messageEncode;
      }
    }
    console.log(offset, message)
    return result;
  }
  

  decode: () => {

  }

  const algo = () => {}

  return(decodeMessage )