let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

function fromDollarToYen(dollar){
    return yen = dollar * 133.5
}
function fromEuroToDollar(euro){
    return dollar = euro * 1.10
}
function fromYenToPound(yen){
    return pound = yen * 0.006
}
module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound}
console.log(fromDollarToYen[3.5])