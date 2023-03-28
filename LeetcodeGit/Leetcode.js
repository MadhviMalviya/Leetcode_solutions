//1.Roman to Integer 

const romanToInt= function (s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let i=0;i<s.length;i++){
        let currentInt=romanToInt[s.charAt(i)] 
        let nextInt=romanToInt[s.charAt(i+1)]

        if(currentInt>= nextInt){
            total+=currentInt;
        }else{
            total+=(nextInt-currentInt)
            i++;
        }
    }
    }

//2.Longest Common Prefix

function commonPrefix(str) {
if(str.length==0){
    return " "
}
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
       if(str[0][i]!=str[j][i]){
        return str[0].slice(0,i)
       }
        
    }
}
  return str[0]  
}

//3.Valid Parenthesis

function isValid(p) {
    let newarr=[]
    for(let i=0;i<p.length;i++){
        let top=newarr[newarr.length-1]
if(p[i]=="(" ||p[i]=="{"||p[i]=="["){
    newarr.push(p[i])
}
else if(p[i]==')'&& top=='('||p[i]=='}'&&top=='{'||p[i]==']'&& top=='['){
    newarr.pop()
}
else return false
    } 
    if(newarr.length==0){
        return true
    }
    if(newarr.length!=0){
        return false
    }
    
}




//4.find the index of first occurance in a string

function name(strr,word) {
    for (let i = 0; i < strr.length; i++) {
        if(strr[i]===word[0]){
            return strr.search(word)
        }  
    }
    return -1  
}

//5.Length of Last word

function lenfthOfLastWord(string) {
    if (string.length==0) 
        return 0;

    let arr=string.trim().split(" ")
    return arr[arr.length-1].length
}