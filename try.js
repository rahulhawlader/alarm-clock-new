let p =3;

function reversArry(arry, n){
 for(let d=0; d<n; d++){
  arry.unshift(arry.pop())
 }

 return arry

}


let numberOfArrt=reversArry([30,40,50,60,70,80], p)

console.log(numberOfArrt);