
var scores,roundscore,activeplayer,dice;
var dice_img = document.querySelector('#dom');
var dice_img1 = document.querySelector('#dom1');
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

scores =[0,0];
roundscore = 0;
activeplayer=0;
var last;
var input ; 

var winingscore;


dice_img.style.display='none';
dice_img1.style.display='none';

document.querySelector('#roll').addEventListener('click',function(){
    dice = Math.floor(Math.random()*6) +1;
    dice1 = Math.floor(Math.random()*6) +1;
   
    dice_img.style.display='block';
    dice_img1.style.display='block';
    dice_img.src ='dice'+dice+'.png';
    dice_img1.src ='dice'+dice1+'.png';
    
    if(dice!==1 && dice1!==1 ){
     roundscore +=dice +dice1;
     document.getElementById('current-'+ activeplayer).textContent=roundscore;
     
    }
    else{
    
     nextplayer();
    }

 last=dice;
 console.log(last);
   

});

document.querySelector('#hold').addEventListener('click',function(){
    scores[activeplayer]+=roundscore;
    
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    input=document.querySelector('#input').value;   
if(input){
    winingscore=input;
}
else{
    winingscore=100;
}

if(scores[activeplayer]>=winingscore){
document.querySelector('#name-'+activeplayer).textContent='winner';
}
else{
    nextplayer();
}
   

});


function nextplayer(){
    activeplayer === 0 ? activeplayer =1  :activeplayer = 0;
    console.log(activeplayer); 

    roundscore = 0;
    
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('.d').classList.toggle('active');
    document.querySelector('.player-2').classList.toggle('active');
    document.getElementById('dom').style.display="none";
    document.getElementById('dom1').style.display="none";
}


