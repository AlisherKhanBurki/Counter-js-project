
const count_lab= document.getElementById('count_lab');
const dec_btn = document.getElementById('dec_btn');
const inc_btn = document.getElementById('inc_btn'); 
const reset_btn = document.getElementById('reset_btn');

let count = 0;

inc_btn.onclick = function(){
    count++;
    count_lab.textContent = count;
}

dec_btn.onclick = function(){
    count--;
    count_lab.textContent = count;
}

reset_btn.onclick = function(){
    count = 0;
    count_lab.textContent = count;
}

