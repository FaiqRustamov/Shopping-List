let myList = ["bananas", "milk", "apples", "redbull"];
 // verilen list
const btnAdd = document.querySelector("#addNew"); //add element
const output = document.querySelector(".output"); //output
const newItem = document.querySelector("#addItem");//add item to list
//var changetype=JSON.parse(jsontype)
btnAdd.addEventListener("click", function () {
    if (newItem.value) {
        myList.push(newItem.value);
        build();
        newItem.value="";
    }
}) /* this function for add element to list 

*/
window.onload = build; //page loading calling this function
function build() {
  
    output.innerHTML = "<h2> My List </h2>"
    const tbl = document.createElement("table");
    for (let i = 0; i < myList.length; i++) {
        const row = document.createElement("tr");
        row.ind = i;
        const cell1 = document.createElement('td');
        cell1.innerHTML = myList[i];
        row.appendChild(cell1);
        const cell2 = document.createElement('td');
        const span1 = document.createElement("span");
        span1.innerText = "Delete";
        span1.addEventListener("click", function () {
            console.log(myList[i]);
            //let temp=this.closest("tr").ind;
            let itemOut = myList.splice(i, 1);
            build();
        }) // append element in a table
        cell2.appendChild(span1);
        const span2 = document.createElement("span");
        span2.innerText = "Edit"; //edit button for change element 
        span2.addEventListener('click',function() {
           let tempEle=row.firstElementChild;
           const newInput=document.createElement('input');
           newInput.value=tempEle.innerText;
           newInput.focus();
           tempEle.innerHTML=""
           tempEle.appendChild(newInput);
           newInput.addEventListener("blur",function(){
               tempEle.innerHTML=newInput.value;
               row.style.backgroundColor="White";
               myList[i]=newInput.value;
               
           })
        })
        var jsontype=JSON.stringify(myList);
        var changetype=JSON.parse(jsontype)
        cell2.appendChild(span2);
        row.appendChild(cell2);
        tbl.appendChild(row);
    }
    

   console.log(changetype);
    output.appendChild(tbl);
}