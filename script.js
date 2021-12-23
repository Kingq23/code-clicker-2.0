var code = 0
var cps = 0
var freind = 0
var freind_cost = 100
var click_amount = 1
var click_price = 5
var multipler = 1
var osborne_cost = 5000
var osborne = 0
function setid(id,text){
  document.getElementById(id).innerHTML = text

}
function getid(id){
  var returnthis = document.getElementById(id)
  return returnthis
}
function up_click() {
  if(code >= click_amount){
    code = code - click_amount
    click_amount = click_amount * 1.1
    click_price = click_price *1.5

    setid("clicker","upgrade your keyboard<br>cost:"+click_price)
    setid("mon",code) 
  }
  else{
    console.log("no")
  }
}
window.setInterval(function(){
  cps = freind + osborne * 20
  cps =parseFloat(cps.toFixed(1))
  code = code + cps
  setid("mon",code)
  setid("cps",cps)
},1000)
function epicclick(){
  code = code + click_amount
  setid("mon",code)
  
}
function freind_buy(){
  if(code >= freind_cost){
    code = code - freind_cost
    freind_cost = freind_cost * 1.1
    freind_cost = Math.round(freind_cost)
    freind = freind + 1
    setid("freind","cost:"+freind_cost)
    setid("freind_amount","you have "+freind+" freinds")
  }  
}


function osborne_buy(){
  if(code >= freind_cost){
    code = code - osborne_cost
    osborne_cost = osborne_cost * 1.1
    osborne_cost = Math.round(osborne_cost)
    osborne = osborne + 1
    setid("osborne","cost:"+osborne_cost)
    setid("osborne_amount","you have "+osborne+" freinds")
  }  
}

