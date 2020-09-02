var suffle = function(){
var dom = Array.prototype.slice.call(document.getElementById("myUl").children);
var temp,i = dom.length-1;
while(i != -1){
let rand = Math.floor(Math.random()*i);
console.log(rand);
temp = dom[rand];
dom[rand] = dom[i];
dom[i] = temp;
i--;
}

dom.forEach(e => {
// console.log(e);
document.getElementById("myUl").appendChild(e);
})

}

var sort = function(){
Array.prototype.slice.call(document.getElementById("myUl").children).sort((e1,e2) => { return e1.innerHTML - e2.innerHTML}).forEach(e => {
document.getElementById("myUl").appendChild(e);
})
}