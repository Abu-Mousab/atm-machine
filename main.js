import inquirer from "inquirer";
let mybalance = 10000;
let myPin = 1234;
console.log("Welcome to Code With Mousab - ATM MACHINE:");
let PinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter Your PinCode",
    }
]);
if (PinAnswer.Pin === myPin) {
    console.log("Pin is Correct !Login Successfully:");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select Your Choice",
            choices: ["Withdrawl Amount", "Check Balance",]
        }
    ]);
    if (operationAnswer.operation === "Withdrawl Amount") {
        let withdrawAnswer = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a Withdrawl Method",
                choices: ["Fast Cash", "Enter Amount"],
            }
        ]);
        if (withdrawAnswer.withdrawMethod === "Fast Cash") {
            let fastcashAnswer = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000"],
                }
            ]);
            if (fastcashAnswer.fastCash > mybalance) {
                console.log("Insufficient Balance:");
            }
            else {
                mybalance -= fastcashAnswer.fastCash;
                console.log(`${fastcashAnswer.fastCash} Withdraw Successfully:`);
                console.log(`your remaining balance is ${mybalance}`);
            }
        }
        else if (withdrawAnswer.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the Amount to Withdrawl"
                }
            ]);
            if (amountAns.amount > mybalance) {
                console.log("Insufficient Balance");
            }
            else {
                mybalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully:`);
                console.log(`"your Remaining Balance is ${mybalance}`);
            }
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`your Account Balance is ${mybalance}`);
    }
}
else {
    console.log("Pin is Incorrect!Try Again:");
}
// import inquirer from "inquirer";
// let totalBalance = 10000;
// let pinNumber = 1234;
// let pinEntered = await inquirer.prompt(
//     [
//         {
//             name: "pin",
//             message: "Enter Your 4 Digit Pin Code",
//             type: "number"
//         }
//     ]
// )
// if (pinEntered.pin === pinNumber) {
//     console.log("Correct Pin Code");
//     let atmQuestion = await inquirer.prompt(
//         [
//             {
//                 name: "accountType",
//                 message: "Please Select Account Type",
//                 type: "list",
//                 choices: ["Current Account", "Saving Account"]
//             },
//             {
//                 name: "transMethod",
//                 message: "Select Your Transcation Method",
//                 type: "list",
//                 choices: ["Cash Withdrawal", "Fast Cash"]
//             }
//         ]
//     )
//     console.log(atmQuestion);
//     if(atmQuestion.transMethod === "Cash Withdrawal") {
//         let cashwithdrawAmount = await inquirer.prompt(
//             [
//                 {
//                     name: "withdrawal",
//                     message: "Enter Your Amount To Withdraw",
//                     type: "number"
//                 }
//             ]
//         )
//         if (totalBalance >= cashwithdrawAmount.withdrawal) {
//             totalBalance -= cashwithdrawAmount.withdrawal
//             console.log(`Your Balance is ${totalBalance}`);
//         } else {
//             console.log("Insufficent Balance");   
//         }
//     } else {
//         let fastcashAmount = await inquirer.prompt(
//             [
//                 {
//                     name: "fastCash",
//                     message: "Select The Amount You Want To Withdraw",
//                     type: "list",
//                     choices: ["1000", "3000", "5000"]
//                 }
//             ]
//         )   
//         if(totalBalance >= fastcashAmount.fastCash){
//             totalBalance -= fastcashAmount.fastCash
//             console.log(`Your Total Balance Is ${totalBalance}`);        
//         } else {
//             console.log("Insufficient Balance");          
//         }
//     }   
// }
