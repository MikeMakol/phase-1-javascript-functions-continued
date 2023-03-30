// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

function wrapAdjective(symbol =  "*") {
    return function (word = "special") {
        return `You are ${symbol}${word}${symbol}!` 
    }
}
console.log(wrapAdjective("%")("a dedicated programmer"));