 function showDiv(id) {
  var divs = document.getElementsByClassName('active');
  for (var i = 0; i < divs.length; i++) {
divs[i].style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}
  
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

const element = document.querySelectorAll('span');
for(let i = 0; i<element.length; i++){
  element[i].style.transform = "rotate("+i*8.2+"deg)"
}



