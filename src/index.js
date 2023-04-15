function minNum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    }
    return min;
}

function maxNum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function Accumulator (num) {
  this.number = num,

  this.increment = function() {
      console.log(++this.number);
  },

  this.decrement = function() {
      console.log(--this.number);
  }
}

function CancelableAccumulator(num) {
  Accumulator.call(this, num);
  this.clear = function() {
      console.log (this.number = num)
  }
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype)


// const firstNum = prompt("Put the first number");
// const secondNum = prompt("Put the second number");

function calculation() {
    if (firstNum === '' || secondNum === '') {
        alert('Error, you need to put something to run');
    } else if (Number(firstNum) == firstNum && Number(secondNum) == secondNum){
        sum(firstNum, secondNum);
        subtraction(firstNum, secondNum);
        multiplication(firstNum, secondNum);
        division(firstNum, secondNum);
    } else {
        alert('You need to put number, nothing else')
    }
}

calculation()

function sum(a, b) {
    alert("Sum: " + (Number(a) + Number(b)));
}

function subtraction(a, b) {
    if (a < b) {
        if (confirm('Are you sure you want to run this operation?')){
            alert("Subtraction: " + (Number(a) - Number(b)));
        } else {
            return
        }
    } else {
        alert("Subtraction: " + (Number(a) - Number(b)));
    }
}

function multiplication(a, b) {
    alert("Multiplication: " + (Number(a) * Number(b)));
}

function division(a, b) {
    if (b === 0) {
        alert(`Error, you can't devide on 0`);
    } else {
        alert("Division: " + (Number(a) / Number(b)));
    }
}

const imgCV = document.querySelector('img');

imgCV.addEventListener('click', () => {
    imgCV.classList.toggle("img_cv")
});
