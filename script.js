//variable ElementHTML
let input=document.querySelector('input');
let newButton=document.querySelector('.new');
let list=document.querySelector('ul');
let check=document.querySelectorAll('.check');

//variable JS
let tache=input.value;

//evenement
input.addEventListener('input',function(){
    tache=input.value;
})
newButton.addEventListener('click',function(){
    ajoutSurList(tache,list);
    check=document.querySelectorAll('.check');
})
setInterval(function(){
    check.forEach(function(value){
        value.addEventListener('click',function(){
            value.innerHTML='<div class=\"fas fa-check\"></div>';
            value.parentNode.classList.add('checked');
            setTimeout(function(){
                value.parentNode.remove();
            },500)
        })
    });
},500);

//fonction
function ajoutSurList(chaine,ul){
    let li=document.createElement('li');
    li.innerHTML="<p>"+chaine+"</p><div class=\"check\"></div>";
    ul.appendChild(li);
}
