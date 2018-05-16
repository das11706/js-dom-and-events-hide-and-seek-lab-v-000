
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div.target');
}

// function deepestChild(){
//   return document.getElementById('grand-node').getElementsByTagName('div')[3];
// }
function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div')[3];
}

function increaseRankBy(n){
  const rank = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = (i + parseInt(n))
}
}
