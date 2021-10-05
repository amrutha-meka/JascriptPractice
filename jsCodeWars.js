function toCamelCase(str){
    // console.log(str.toLowerCase().trim().split("/[.\-_\s]/g"));
    // str.toLowerCase().trim().split("/[.\-_\s]/g").reduce((str, word) => str + word[0].toUpperCase() + word.slice(1));
 
    for(let i=0;i<=str.length;i++)
     {
       if(str[i]==='-' || str[i]==='_')
         {
           let a= str[i+1].toUpperCase();
           
           console.log(a);
           let tmp = str.split("/[.\-_\s]/g");
        
           console.log(tmp);
           

         }
     }
    console.log(str);
  }
  toCamelCase("the-stealth-warrior");



  String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}

console.log("crt/r2002_2".removeCharAt(4));