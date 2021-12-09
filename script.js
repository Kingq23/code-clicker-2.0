
var code = 0
var cps = 0
function set_element_id(id,text){
  document.getElementById(id).innerHTML = text
}
window.setInterval(function(){
  cps = 1
  code = code + cps

  set_element_id("mon",code)
},1000)
function click(){
  code = code + 1
  set_element_id("mon",code)
  console.log("e")
}
