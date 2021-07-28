var inputBill = document.querySelector("#bill-amount");
var btnBillNext = document.querySelector("#btn-bill-value");
var inputCash = document.querySelector("#cash-amount");
var btnCashNext = document.querySelector("#btn-cash-value");
var notes= document.querySelector("#notes");
var cashInput = document.querySelector("#cash-input");
var changeOutput = document.querySelector("#change-output");

const arrayNotes = [200,100,50,10,5,2,1];

btnBillNext.addEventListener("click", function clickHandler(){
    console.log(inputBill.value);

    if(inputBill.value >= 1){
        btnBillNext.style.display = "none";
        cashInput.style.display = "block";
        btnCashNext.addEventListener("click", function clickHandler(){
            console.log(inputCash.value);
        
            if(inputCash.value >= inputBill.value){
                
                changeOutput.style.display = "block";
                btnCashNext.style.display = "none";
                let noteCount = 0;
                let returnAmount = inputCash.value - inputBill.value;
                console.log(returnAmount);

                // for(let i=0;i<arrayNotes.length;i++){
                    
                //     if(returnAmount >= arrayNotes[i]){
                        
                //         for(returnAmount;returnAmount >= arrayNotes[i];){
                //         returnAmount = returnAmount - arrayNotes[i];
                    
                //         console.log(arrayNotes[i]);
                //         console.log(returnAmount);
                //         document.getElementById("notes").innerHTML = arrayNotes[i] + noteCount++;
                //         }
                        
                //     }
                // }
            

                for(let i=0;i<arrayNotes.length;i++){
                   
                    if(returnAmount >= arrayNotes[i]){
                        
                        let arrayValue = arrayNotes[i];
                        console.log(arrayValue);
                        
                        let remainder = Math.floor(returnAmount / arrayValue) ;
                        console.log(remainder);

                        var notesAndCount=document.createElement("H4");
                var message=document.createTextNode(arrayValue + "  "+ "|" + " "+remainder );
                notesAndCount.appendChild(message);
                document.body.appendChild(notesAndCount);


                        for(returnAmount;returnAmount >= arrayNotes[i];){
                             returnAmount = returnAmount - arrayNotes[i];
                        }
                    }

                }

            }
            else{
                console.log("test fail");
                var newHeading=document.createElement("H3");
                var message=document.createTextNode("Cash amount is less than Bill amount !");
                newHeading.appendChild(message);
                document.body.appendChild(newHeading);
            }
        })
    }
    else{
        console.log("test fail");
        var newHeading=document.createElement("H3");
        var message=document.createTextNode("Enter valid bill amount !");
        newHeading.appendChild(message);
        document.body.appendChild(newHeading);
    }
})

