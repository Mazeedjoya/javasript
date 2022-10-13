//    let i = 4;
//    let string = "";
//    for(n=1; n<=i; n++){  // top to boottom
//     for(m=0; m<6; m++){   // left to right 
//    string+="*-"
//     }
//     string+="\n"
//    }
//    console.log(string);

// let m = 5;
// let string = "";
// for(i=0; i<m; i++){
//     for(j=0; j<m; j++){
//         if(i===0|| i===m-1){
//             string+="*"
//         }else{
//             if(j===0|| j===m-1){
//                 string+="*"
//             }else{
//                 string+=" "
//             }
//         }
//     }
//     string+="\n";
// }

// /******
// *   *
// *   *
// *   *
// ***** */
// console.log(string);

// let m =4 , string ="";
// for(i=0; i<=m; i++){
//     for(j=0; j<=i; j++){
//         string+="*";
//     }
//     string+="\n"
// }
// console.log(string);


let n = 5 ;
let string = "";
for(let i = 0; i < n; i++){
    //print star 
    
for(let k = 0; k < n - i; k++){
    console.log(k+"\n");
    string += "*";
}
string += "\n";
}
console.log(string);

