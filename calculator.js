const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (firstInput) => {
    const a = parseFloat(firstInput);

    rl.question("Enter second number: ", (secondInput) => {
        const b = parseFloat(secondInput);

        rl.question("Enter operator (+, -, *, /): ", (op) => {
            let result;

            switch (op.trim()) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    if (b !== 0) {
                        result = a / b;
                    } else {
                        console.log("Cannot divide by zero");
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log("Invalid operator");
                    rl.close();
                    return;
            }

            console.log("Result = " + result);
            rl.close();
        });
    });
});
