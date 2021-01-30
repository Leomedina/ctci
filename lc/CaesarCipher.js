function caesarCipherEncryptor(string, key) {
  for(let i of string){
    let code = string.charCodeAt(i);
    console.log(String.fromCharCode(code));
  };
};


console.log(caesarCipherEncryptor("az", 3));