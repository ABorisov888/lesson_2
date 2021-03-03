function first() {
    //Что то делаем
    setTimeout( function(){
    console.log(1);
    }, 500 );
}

function second(){
    console.log(2);
}

first();
second();

function learnJS (Lang, callback) {
    console.log("Я учу " + Lang);
    callback();
}

function done() {
    console.log("Я прошёл 3й урок!")
}

learnJS ("JavaScript", done);
    