let x=["amol","ror","dsk"];
let y=[... x,"Ankush","Ananda"];
let z=[... y,"Enter","Number"];
let z1=[... z,"Rsk","Daughter"];
console.log(z1);
var para=""
for(var i=0;i<z1.length;i++){
    // console.log(z1[i]);
    // para=para+z1[i]+ " ";
    para +=z1+[i]+" ";
    console.log(para)

}