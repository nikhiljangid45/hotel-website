function countVowlu(str){
    let count=0;
    for(chr of str){
     if(chr === "a" ||
      chr ==="i" ||
      chr === "o"  ||
      chr === "e" ||
      chr === "u"){
        count++;
        console.log(chr);

      }
    }
       console.log(count);

}

countVowlu("nikhiljangid");