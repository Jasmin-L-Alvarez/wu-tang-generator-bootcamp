const firstRandom = ['Slicing', 'Foreign', 'Iron', 'Apex', 'DaGreat', 'First', 'Smackin','Old', 'Masta', 'Beacon', 'Method', 'Slimmy', 'Childish','Best', 'Flash', 'Boogie', 'Buggy', 'Booger', 'Bashin', 'Saint', 'Golden', 'Bronze', 'Its', 'Lit', 'Legend', 'Private', 'Hairy', 'Oxygen', 'Wrinkle', 'Credit', 'Sweet', 'Bull'];

console.log(firstRandom);

const secondRandom = ['Foot', 'Gold','Thang', 'Phat', 'Gambino', 'Chorizo', 'DaGreat', 'Woogie', 'BoxTapper', 'Knight', 'Elastic', 'Freeway', 'Herby', 'Thugger', 'Baddest', 'Hottie', 'Savage', 'Ravisher', 'Lavisher', 'Dapper', 'DirtyDan', 'SlikTalker', 'SlickBreath', 'Rebooster', 'Filthy', 'GReedy', 'HarshFam', 'Yapping', 'Magical', 'Gawdy', 'Lordo', 'Dummbo'];
console.log(secondRandom);

const test = `${firstRandom[2]} ${secondRandom[2]}`;

console.log(test);
let index = 0
// let result = document.createName.innerHTML = 'test'
//For all the inputs with a class name of .answer we want the value of for each input name it ans
document.querySelectorAll('.answer').forEach(ans =>{
//
  ans.addEventListener('click', e =>{
    console.log(e.target.value);
    let indexValue = Number(e.target.value)
    index = index + indexValue
    console.log(index);
  })

})
document.querySelector('.submit').addEventListener('click', getRapName)
document.querySelector('.reset').addEventListener('click', reset)

function getRapName() {

  let firstA = +document.querySelector('#oneA').value
  let firstB = +document.querySelector('#oneB').value
  let firstC = +document.querySelector('#oneC').value

  let secondA = +document.querySelector('#twoA').value
  let secondB = +document.querySelector('#twoB').value
  let secondC = +document.querySelector('#twoC').value

  let thirdA = +document.querySelector('#threeA').value
  let thirdB = +document.querySelector('#threeB').value
  let thirdC = +document.querySelector('#threeC').value

  let fourthA = +document.querySelector('#fourA').value
  let fourthB = +document.querySelector('#fourB').value
  let fourthC = +document.querySelector('#fourC').value

  let fifthA = +document.querySelector('#fiveA').value
  let fifthB = +document.querySelector('#fiveB').value
  let fifthC = +document.querySelector('#fiveC').value

  console.log(firstA + firstB + firstC + secondA + secondB + secondC + thirdA + thirdB + thirdC + fourthA + fourthB + fourthC + fifthA + fifthB + fifthC);
  // let name = Number(firstA) + Number(secondQ) + Number(thirdQ) + Number(fourthQ) + Number(fifthQ)
  // let nameChanger = name + 5
  let nameChanger = firstA + firstB + firstC + secondA + secondB + secondC + thirdA + thirdB + thirdC + fourthA + fourthB + fourthC + fifthA + fifthB + fifthC;

  let result = document.createElement('p')

  console.log(firstRandom[index] + " " + secondRandom[index])
  document.getElementById('name').innerText = firstRandom[index] + " " + secondRandom[index]
  // document.querySelector('.answerBox').appendChild(result) = firstRandom[nameChanger] + " " + secondRandom[nameChanger]
}
function reset(){
  location.reload();
  console.log(rest);
}
