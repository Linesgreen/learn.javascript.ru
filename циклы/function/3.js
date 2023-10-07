function ask(question, yes, no) {
    if(confirm(question)) yes() 
    else no();
}

// function showOk(){
//     alert("Вы согласны. ");
// }

// function showCancel() {
//     alert("Вы отменили выполнение");
// }

// ask("Ds согласны?", showOk, showCancel);


ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы не согласились xd"); }

    );