function soi(){
 let d=cau.value.toUpperCase().replace(/\s/g,'');
 if(!d) return;

 let s=1;
 for(let i=d.length-1;i>0;i--){
  if(d[i]==d[i-1]) s++;
  else break;
 }

 streakBox.innerText = "🔥 "+d[d.length-1]+" x "+s;
}
