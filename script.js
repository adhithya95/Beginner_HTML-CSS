
function hi()
{
var d = document.getElementById("days")
var h = document.getElementById("hours")
var m = document.getElementById("min")
var s= document.getElementById("sec")
const curryear = new Date().getFullYear();
const newyear = new Date(`January 1,${curryear+1} 00:00:00`);
const currdate = new Date()
const diff = newyear - currdate;
const x = Math.floor(diff/1000/60/60/24);
const y = Math.floor((diff/1000/60/60)%24);

const z = Math.floor((diff/1000/60)%60);

const a= Math.floor((diff/1000)%60);

d.textContent = x;
h.textContent = y;
m.textContent = z;
s.textContent = a;

}
setInterval(hi,1000);