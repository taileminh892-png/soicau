function soi(){
 let d = cau.value.toUpperCase().replace(/\s/g,'');
 if(!d) return alert("Nhập T hoặc X");

 for(let c of d){
  if(c!="T" && c!="X") return alert("Chỉ nhập T hoặc X");
 }

 let t = (d.match(/T/g)||[]).length;
 let x = (d.match(/X/g)||[]).length;

 let tRate = (t/d.length*100).toFixed(1);
 let xRate = (x/d.length*100).toFixed(1);

 result.innerText = `TÀI: ${tRate}% | XỈU: ${xRate}%`;

 goiy.innerText =
  t>x ? "👉 Nghiêng TÀI" :
  x>t ? "👉 Nghiêng XỈU" :
  "👉 Cân bằng";

 // streak
 let s=1;
 for(let i=d.length-1;i>0;i--){
  if(d[i]==d[i-1]) s++;
  else break;
 }

 let last=d[d.length-1];
 streak.className="streak "+last;
 streak.innerText = `🔥 ${last} x ${s}`;
}
