//********
//*      *
//*      *
//*      *
//*      *
//*      *
//*      *
//********

for(let hori=1;hori<=10;hori++){
  let a="";
    for(verti=1;verti<=10;verti++){
      if(hori==1 || hori==10){
        a=a+"*";
      }else if(verti ==1 || verti == 10){
        a=a+"*";
      }else{
        a=a+" ";
      }
    }console.log(a)
}