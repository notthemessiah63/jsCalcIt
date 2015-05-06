var rtnVal = 3;
var nunRtn;
var opRtn;
var eqRtn;
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator")
var equals = document.getElementById('eq');
var clear = document.getElementById('clear');


clear = document.getElementById('clear');
 clear.addEventListener('click', function(event){
  rtnVal =this.value;
 });

 equals.addEventListener('click', function(event){
  rtnVal =this.value;
 });

for(var j=0;j<number.length;j++){
 number[j].addEventListener('click', function(event){
  rtnVal =this.value;
  return rtnVal;
 });
}

var rtnVal;
for(var j=0;j<operator.length;j++){
 operator[j].addEventListener('click', function(event){
  console.log(this.value)
  console.log("j "+j)
  var rtnVal =this.value;
  return rtnVal;
 });
}

console.log("rtnval "+rtnVal)

