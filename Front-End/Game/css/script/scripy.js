function start_game(){
console.log('start_game works')
}
function hit() {
score++;

}
function miss() {
 score--;
 document.title ='Score ${score}';
 console.log('miss works');
}

let score = 0;
