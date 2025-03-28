
for (number = 1; number <= 100; number++) {
    
    function checkNumber(number) {
        if (number % 3 === 0 && number % 5 === 0) return `${number} é FizzBuzz`;
        if (number % 3 === 0) return `${number} é Fizz`;
        if (number % 5 === 0) return `${number} é Buzz`;
        return number;
    }

    console.log(checkNumber(number));

}



