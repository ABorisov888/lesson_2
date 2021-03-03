// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// console.log(options);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойства ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 4, 5];

// arr.pop();

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push("5");

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push("5");
// arr.shift();

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift('1');

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// arr[99] = 99;
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ['first', 2, 3, 'four', 5];
// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];
// for(let key in mass) {
//     console.log(key);
// }

// let mass = [1,3,4,6,7];
// for(let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", "");
// arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['sss', 'ddd', 'aaa', 'mmm'],
//     i = arr.join(', ');

//     console.log(arr);

// let arr = ['sss', 'ddd', 'aaa', 'mmm'],
//     i = arr.join(', ');

//     console.log(i);

// let arr = ['sss', 'ddd', 'aaa', 'mmm'],
//     i = arr.sort();

//     console.log(arr);

// let arr = [1,15,4],
//     i = arr.sort();

// console.log(arr);



// let arr = [1,15,4],
//     i = arr.sort(compareNum);

//     function compareNum(a,b) {
//         return a-b;
//     }

//     console.log(arr);

//     let soldier = {
//         health: 400,
//         armor: 100
//     };

//     let john = {
//         health: 100
//     };

//     john.__proto__ = soldier;

//     console.log(john);
//     console.log(john.armor);



let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY- MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: '',
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i <2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдётся?', '');
    
            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('Всё верно');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }

    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        }else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '');
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = +prompt('Что принесёт дополнительный доход? (Перечислите через запятую', '');
            let a = prompt('Нельзя оставить строку пустой', ''),
                b = prompt('Нельзя отменить вопрос', '');

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('Всё верно');
            appData.income[a] = b;
            appData.income = items.split(', ');
        appData.income.push(prompt('Может что то ещё?'));
        appData.income.sort();
        } else {
            i = i - 1;
        }
    }
        
},







