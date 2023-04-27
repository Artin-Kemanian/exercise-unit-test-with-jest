const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./sum.js')
test("One euro should be 1.10 dollars", function(){
    expect(fromEuroToDollar(2)).toBe(2.2);
})
test("One dollar should be 133.5 yens", function(){
    expect(fromDollarToYen(2)).toBe(267);
})
test("One yen should be 1.10 pounds", function(){
    expect(fromYenToPound(2)).toBe(0.012);
})