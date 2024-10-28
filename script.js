function console_send(){
    let input = document.getElementById('type-console');
    if(input.value == "clear"){
        document.getElementById('console-scrollback').innerHTML = "";
        input.value ="";
        return 0;
    }
    let textSent = document.createElement('a');
    textSent.innerText = input.value +"\n";
    document.getElementById('console-scrollback').appendChild(textSent);
    input.value = "";
}