let inputBill = document.querySelector("#bill-amount");
var btnBillNext = document.querySelector("#btn-bill-value");
let inputCash = document.querySelector("#cash-amount");
var btnCashNext = document.querySelector("#btn-cash-value");
var notes = document.querySelector("#notes");
var cashInput = document.querySelector("#cash-input");
var changeOutput = document.querySelector("#change-output");


const arrayNotes = [2000, 500, 100, 50, 10, 5, 2, 1];

btnBillNext.addEventListener("click", function clickHandler() {

    //check bill amount is not 0 or less than zero.
    if (inputBill.value >= 1) {
        btnBillNext.style.display = "none";
        cashInput.style.display = "block";
        btnCashNext.addEventListener("click", function clickHandler() {
            let newInputBill = inputBill.value;
            let newInputCash = inputCash.value;

            // check cash amount is greater than bill amount
            if (Number(newInputCash) < Number(newInputBill)) {

                var newHeading = document.createElement("H3");
                var message = document.createTextNode("Cash amount is less than Bill amount !");
                newHeading.appendChild(message);
                document.body.appendChild(newHeading);

            } else {
                changeOutput.style.display = "block";
                btnCashNext.style.display = "none";
                let returnAmount = newInputCash - newInputBill;

                // loop through array to find notes
                for (let i = 0; i < arrayNotes.length; i++) {

                    //check change amount is greater than array value
                    if (returnAmount >= arrayNotes[i]) {

                        let arrayValue = arrayNotes[i];

                        let remainder = Math.floor(returnAmount / arrayValue);

                        var notesAndCount = document.createElement("H4");
                        var message = document.createTextNode(arrayValue + "  " + "|" + " " + remainder);
                        notesAndCount.appendChild(message);
                        document.body.appendChild(notesAndCount);

                        // decrement change amount by subtracting array value
                        for (returnAmount; returnAmount >= arrayNotes[i];) {
                            returnAmount = returnAmount - arrayNotes[i];
                        }
                    }

                }
            }
        })
    } else {
        var newHeading = document.createElement("H3");
        var message = document.createTextNode("Enter valid bill amount !");
        newHeading.appendChild(message);
        document.body.appendChild(newHeading);
    }
    return inputBill;
})