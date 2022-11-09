let p=3



function arryrevers(arry, n){

 for(let d=0; d<n; d++){
  arry.unshift(arry.pop())
 }
   return arry
}


let reversArry=arryrevers([20,30,40, 50, 60,70], p)

console.log(reversArry);