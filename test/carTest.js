const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2


// describe("#shouldBuyCar()", function() {

//   it("should return false if it's a hatchback", function() {
//     const car = {
//       type: "hatchback"
//     };
//     const shouldBuy = shouldBuyCar(car);
//     assert.isFalse(shouldBuy);
//   });

// });


// describe("#shouldBuyCar()", function() {

//   it("should return true when the car is pink", function() {
//     const car = {
//       color: "pink"
//     };
//     const shouldBuy = shouldBuyCar(car);
//     assert.isTrue(shouldBuy);
//   });

// });



// describe("#shouldBuyCar()", function() {

//   it("should return false when there are no details about the car", function() {
//     const car = {
//       details: ""
//     };
//     const shouldBuy = shouldBuyCar(car);
//     assert.isFalse(shouldBuy);
//   });

// });

// describe("#shouldBuyCar()", function() {

//   it("should return false when the car is a hatchback and pink", function() {
//     const car = {
//       type: "hatchback", color: "pink"
//     };

//     const shouldBuy = shouldBuyCar(car);
//     assert.isFalse(shouldBuy);
//   });

// });

describe("#shouldBuyCar()", function() {

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litres100km: "6 litres/100km", underequal: "$5000"
    };

    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

});



