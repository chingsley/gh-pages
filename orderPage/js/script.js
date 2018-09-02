
//get the table;
let table = document.getElementById("orderTable");
// console.log(table);

let cellTotal = document.getElementById("totalPrice");

// the addToList function adds the details of the selected item to the  selected items table
function addToList(arr) {

      //get how many elements the table already contains
      let rowCount = table.childElementCount;

      //insert a new row to contain the selected choice
       let row = table.insertRow(1 - rowCount);
       /*NOTE: (1 - rowCount) inserts the new row at the bottom of the table (as the last row),
          while (rowCount - 1) inserts the new row at the top of the table (as the first row)
        */

       //use a loop to insert the details of the selected choice
       for(let i = 0; i < arr.length; i++) {
             let cell = row.insertCell(i);

             //attach a dollar sign in front of the price
             if(i == arr.length - 2) {
                cell.innerHTML = "$"+arr[i];
                // cell.classList.add("price");
             }else {

               cell.innerHTML = arr[i];
             }
             if(i == 0) {
                   // add the "serialNo" class to the first cell of each row
                   cell.classList.add("serialNo");
             }

       }//end for

}//END addToList

// This function updates the totalprice
function updateTotalPrice() {
      let total = 0;
      let rows = table.rows;
      console.log(rows);

      //use a loop to get the price of each row item and add to the total;
      //NOTE rows[0] is the header, so it is not included
      for(let i = 1; i < rows.length; i++) {
          total += Number((rows[i].cells[3].innerHTML).slice(1));
      }

      cellTotal.innerHTML = "$"+total.toString();
      return total;
}


//get all the 'select' buttons on the orderPage
let buttons = document.querySelectorAll(".selectButtons");
// console.log(buttons);

//place a click eventlistener on each of the 'select' buttons, and call the addToList when any of these buttons are clicked
//add to item list
for(let i = 0; i < buttons.length; i++ ) {

    let button = buttons[i];
    button.addEventListener("click", function(){

        //get the div containing the clicked button
        let div = button.parentNode;
        // console.log(div);

        // get the table;
            // let table = document.getElementById("orderTable");
            // console.log(table);

           // get how many elements the table already contains (it is 1 in the beginning, represent the header row)
            let rowNo = table.rows.length;
            // we will use this number as the row number of the new row to be inserted

        //get the item name, price, and quantity in the section (or div) clicked
            /*NOTE: to know the index of the name, price and qunatity elements, I used
            the console developer tool, press f12 and examine the contents of the div
            logged out above, you will see an object called childNodes whose 1st, 5th
            and 7th elements are the itemName, price and quantity elements respectively*/
        // let rowNo = rowCount;
        let itemName = div.childNodes[1].innerHTML;
        let unitPrice =  div.childNodes[5].innerHTML;
        let quantity = div.childNodes[7].value;

        //use slice(1) to remove the dollar($) sign in unitPrice, and use Number() function to convert the value to a number
        let price = Number(unitPrice.slice(1)) * Number(quantity);
        // console.log(price.toString());

        //make sure a quantity is specified, then ...
        //call the addToList method to add the details of the selected item to the table, along with a delete button
        if(Number(quantity) > 0){
           addToList([rowNo, itemName, quantity, price, "<input type='button' class='deleteItem' value=''/>"]);
           // addToList([rowNo, itemName, quantity, price]);
           updateTotalPrice();
        } else {
            alert("please specify the quantity of items you want");
        }


        // console.log(deleteBtns.parentNode);

    });//END eventlistener for each button 'select'

}//FOR for (let i = 0; i < buttons.length; i++ ), handles the 'selection' button click event


{//DELETING ADDED ITEMS
  // let deleteBtns = document.getElementsByClassName("deleteItem");
  // //set up the click event listener for each delete button:
  // for(let i = 0; i < deleteBtns.length; i++) {
  //     deleteBtns[i].addEventListener("click", function() {
  //
  //           let x = deleteBtns[i].parentNode.parentNode;
  //           let y = deleteBtns[i].parentNode.parentElement;
  //           console.log(x);
  //
  //           //get the index of the row
  //           let index = x.rowIndex;
  //           console.log(x.rowIndex);
  //           console.log(y);
  //           console.log(y.rowIndex);
  //
  //           //delete the row containing the clicked button;
  //           table.deleteRow(index);
  //
  //           updateTotalPrice();
  //     });
  // }

}
