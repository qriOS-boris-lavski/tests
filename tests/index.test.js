//Find the smallest and the biggest number of array

const numbers = [13, 0, 1, -1, 9, -9, 3, 2, 6, 10];
const nums = [-2, 0, -84, 1]

describe("Find the smallest and the biggest number of array", () => {
    const desc1 = "<p>The smallest number of array</p>";
    const desc2 = "<p>The biggest number of array</p>";

    describe(desc1, () => {
        it("should return -9", () => {
            const result = minNum(numbers);
            expect(result).toBe(-9);
        });
    });

    describe(desc2, () => {
        it("should return 13", () => {
            const result = maxNum(numbers);
            expect(result).toBe(13);
        });
    });
});


// Accumulator
describe("Accumulator", () => {
    let accumulator;
    accumulator = new Accumulator(10);
   describe("Show accumulator result", () => {
    it("should initialize with the given number", () => {
        
      expect(accumulator.number).toBe(10);
    });
  
    it("should increment the number", () => {
      accumulator.increment();
      expect(accumulator.number).toBe(11);
    });

    it("should increment the number once again", () => {
        accumulator.increment();
        expect(accumulator.number).toBe(12);
      });
  
    it("should decrement the number", function() {
      accumulator.decrement();
      expect(accumulator.number).toBe(11);
    });
   });


describe("CancelableAccumulator", () => {
    let cancelableAccumulator;

    it("should inherit from Accumulator", () => {
        cancelableAccumulator = new CancelableAccumulator(5);
    });

    it("should clear the number to the initial value", function() {
      cancelableAccumulator.increment();
      cancelableAccumulator.clear();
      expect(cancelableAccumulator.number).toBe(5);
    });

    it("should also have the increment and decrement methods from Accumulator", function() {
      cancelableAccumulator.increment();
      cancelableAccumulator.increment();
      expect(cancelableAccumulator.number).toBe(7);
      cancelableAccumulator.decrement();
      expect(cancelableAccumulator.number).toBe(6);
    });
  });
});


describe("Calculation function", function() {
    describe("If value is empty or not a number", () => {
        it("should return an error message if no values are entered", function() {
            spyOn(window, "alert");
            firstNum = "";
            secondNum = "";
            calculation();
            expect(window.alert).toHaveBeenCalledWith("Error, you need to put something to run");
          });
      
          it("should return an error message if non-numeric values are entered", function() {
            spyOn(window, "alert");
            firstNum = "kkjk";
            secondNum = 1;
            calculation();
            expect(window.alert).toHaveBeenCalledWith("You need to put number, nothing else");
          });
    });

    describe("Sum of numers", () => {
        it("return the sum of two numbers", function() {
            spyOn(window, "alert");
            sum(2, 3);
            sum(-1, 8);
            expect(window.alert).toHaveBeenCalledWith("Sum: 5");
            expect(window.alert).toHaveBeenCalledWith("Sum: 7");
        });
    });
    describe("Subtraction of numers", () => {
        it("return the subtraction of two numbers", function() {
            spyOn(window, "alert");
            subtraction(5, 2);
            expect(window.alert).toHaveBeenCalledWith("Subtraction: 3");
          });

    describe("Multiplication of numers", () => {
        it("return the multiplication of two numbers", function() {
            spyOn(window, "alert");
            multiplication(5, 2);
            expect(window.alert).toHaveBeenCalledWith("Multiplication: 10");
            });
        });
    });

    describe("Division of numers", function() {
        it("return an error if the second parameter is 0", function() {
          spyOn(window, "alert");
          division(10, 0);
          expect(window.alert).toHaveBeenCalledWith("Error, you can't devide on 0");
        });
    
        it("return the correct result of division", function() {
          spyOn(window, "alert");
          division(10, 2);
          expect(window.alert).toHaveBeenCalledWith("Division: 5");
        });
      });
});


describe("Click tester", function() {
    let imgCV;
  
    beforeEach(function() {
      imgCV = document.createElement('img');
      imgCV.id = 'imgCV';
      document.body.appendChild(imgCV);
  
      imgCV.addEventListener('click', function() {
        imgCV.classList.toggle("img_cv");
      });
    });
  
    afterEach(function() {
      document.body.removeChild(imgCV);
    });
  
    it("should add and remove the 'img_cv' class on the element", function() {
      expect(imgCV.classList.contains("img_cv")).toBe(false);
      imgCV.click();
      expect(imgCV.classList.contains("img_cv")).toBe(true);
      imgCV.click();
      expect(imgCV.classList.contains("img_cv")).toBe(false);
    });
  });