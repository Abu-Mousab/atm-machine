import inquirer  from "inquirer";


let mybalance =10000;

let myPin = 1234;

console.log("Welcome to Code With Mousab - ATM MACHINE:");

let PinAnswer = await inquirer.prompt([
    {
        name:"Pin",
        type:"number",
        message:"Enter Your PinCode",
    }
]) 
if(PinAnswer.Pin === myPin){
    console.log("Pin is Correct !Login Successfully:");

    let operationAnswer = await inquirer.prompt([
        {
            name:"operation",
            type:"list",
            message:"Select Your Choice",
            choices:["Withdrawl Amount","Check Balance",]           
        }
    ])
    if(operationAnswer.operation === "Withdrawl Amount"){
        let withdrawAnswer = await inquirer.prompt([
            {
                name:"withdrawMethod",
                type:"list",
                message:"Select a Withdrawl Method",
                choices:["Fast Cash","Enter Amount"],
            }
       ]) 
    if (withdrawAnswer.withdrawMethod === "Fast Cash"){
        let fastcashAnswer = await inquirer.prompt([
        {
            name:"fastCash",
            type:"list",
            message:"Select Amount",
            choices:["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000"],
        }
        ])

        if(fastcashAnswer.fastCash > mybalance){
           console.log("Insufficient Balance:");         
        }

        else{
            mybalance -= fastcashAnswer.fastCash
            console.log(`${fastcashAnswer.fastCash} Withdraw Successfully:`);
            console.log(`Your remaining balance is ${mybalance}`);    
        }
    }

    else if (withdrawAnswer.withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                type: "number",
                message:"Enter the Amount to Withdrawl"
            }
        ])

        if(amountAns.amount > mybalance){
            console.log("Insufficient Balance");           
        }

        else{
            mybalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully:`);
            console.log(`"Your Remaining Balance is ${mybalance}`);          
        }
    }
    
       
}
     else if (operationAnswer.operation === "Check Balance"){
           console.log(`Your Account Balance is ${mybalance}`);
           
     }
}

else{
    console.log("Pin is Incorrect!Try Again:");    

}