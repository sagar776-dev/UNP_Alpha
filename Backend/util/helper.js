const getCurrentDate = () => {
    let d1 = new Date();
    let day = d1.getDate() >= 10 ? d1.getDate() : "0" + d1.getDate();
    let month =
      d1.getMonth() + 1 >= 10 ? d1.getMonth() + 1 : "0" + (d1.getMonth() + 1);
    return month + "/" + day + "/" + d1.getFullYear();
  };

  const encryptAES = (text) => {
    return hash.AES.encrypt(text, config.key.toString()).toString();
  };
  
  const decryptAES = (text) => {
    //console.log(hash.AES.decrypt(text, config.key.toString()).toString());
    return hash.AES.decrypt(text, config.key.toString()).toString(hash.enc.Utf8);
  };

  module.exports = {
    getCurrentDate,
    encryptAES,
    decryptAES
  };