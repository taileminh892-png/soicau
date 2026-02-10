let opened = true;

toggleBtn.onclick = function(){
  opened = !opened;
  botBody.style.display = opened ? "block" : "none";
  toggleBtn.innerText = opened ? "−" : "+";
}
