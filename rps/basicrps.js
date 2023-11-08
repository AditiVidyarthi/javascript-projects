const score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,losses:0,ties:0
};
let res='';let uMove='';let cMove='';
updateScoreElement();

function playGame(uMove){
cMove=pickCompMove();

if(uMove===cMove)
    res='Tie';
else if(uMove=='Rock')
    if(cMove=='Scissors')
        res='Win';
    else
        res='Lose';
else if(uMove=='Scissors')
    if(cMove=='Paper')
        res='Win';
    else
        res='Lose';
else if(uMove=='Paper')
    if(cMove=='Rock')
        res='Win';
    else
        res='Lose';
if(res=='Win')
    score.wins++;
else if(res=='Lose')
    score.losses++;
else
    score.ties++;

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();
//document.querySelector('.js-result').innerHTML = result;
//document.querySelector('.js-moves').innerHTML = `You ${uMove} - ${cMove} Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
document.querySelector('.js-result').innerHTML = res;
document.querySelector('.js-moves').innerHTML = `You <img src="${uMove}.jpeg" class="moveIcon"> - <img src="${cMove}.jpeg" class="moveIcon"> Computer`;
}
function pickCompMove(){
let CMove= '';
no=Math.random(1,3); 
if(0<=no && no<1/3)
    Cmove= 'Rock'
else if(1/3<=no && no<2/3)
    Cmove= 'Paper';
else
    Cmove= 'Scissors';
return Cmove;
}