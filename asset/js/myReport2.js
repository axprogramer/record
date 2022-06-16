var studentArray = [];
/// Push button for data to save
function saveData(){
    var week = document.getElementById("myWeek").value;
    var date = document.getElementById("myDate").value;
    var pay = document.getElementById("myPay").value;
    var id = document.getElementById("myID").value;

    var other = document.getElementById("myOther").value;

    var dele = document.getElementById("sSinfo").value;
    var deleMe = document.getElementById("sSinfo").value;

    inputTable(dele,week,date,pay,other,deleMe);

    //Push data to save
    var sObj = {week:week,date:date,pay:pay,id:id,other:other};
    studentArray.push(sObj);
    // Data location Name
    localStorage.myRpt = JSON.stringify(studentArray);
    window.location.reload();

}
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 2);
randomNum += Math.round(Math.random() * 2);
randomNum += now.getTime().toString().slice(-2);
document.getElementById("myID").value = randomNum;

function inputTable(dele,week,date,pay,id,other){
    var table = document.getElementById("sSinfo").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);
    cell6 = newRow.insertCell(5);

     cell1.innerHTML = week;
     cell2.innerHTML = date;
     cell3.innerHTML = pay;
     cell4.innerHTML = id;
     cell5.innerHTML = other;
     cell6.innerHTML = 
     '<button onClick="myDelete('+dele+')" class="button-6" role="button">Delete</button><button onClick="onEdit(this)" class="button-6" role="button">Edit</button>'
     
    
}

//Restore Data back
function getData(){
    if (localStorage.myRpt){
        document.getElementsByName('tbody').innerHTML = "";
        studentArray = JSON.parse(localStorage.myRpt);
        for (var i = 0 ; i < studentArray.length; i++){
            inputTable(
                i,
                studentArray[i].week,
                studentArray[i].date,
                studentArray[i].pay,
                studentArray[i].id,
                studentArray[i].other,
                )
        }
    }
}
//Restore Data for report
function getDataReport2(){
    if (localStorage.myRpt){
        document.getElementsByName('tbody').innerHTML = "";
        studentArray = JSON.parse(localStorage.myRpt);
        for (var i = 0 ; i < studentArray.length; i++){
            showData(
                studentArray[i].week,
                studentArray[i].date,
                studentArray[i].pay,
                studentArray[i].other,
                )
        }
    }
}
////Restore Data report for showing only
function showData(week,date,pay,other){
    var table = document.getElementById("sSinfo").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);

     cell1.innerHTML = week;
     cell2.innerHTML = date;
     cell3.innerHTML = pay;
     cell4.innerHTML = other;     
    
}

//Delete Data
function onDelete(dele,week,date,pay,other){
    document.getElementById("sSinfo").deleteRow(dele+1);
    studentArray.splice(dele, 1);
    localStorage.myRpt = JSON.stringify(studentArray);
    var week = document.getElementById("myWeek").value;
    var date = document.getElementById("myDate").value;
    var pay = document.getElementById("myPay").value;
    var other = document.getElementById("myOther").value;
    var dele = document.getElementById("sSinfo").value;


    selectedRow.cells[0].innerHTML = week;
    selectedRow.cells[1].innerHTML = date;
    selectedRow.cells[2].innerHTML = pay;
    selectedRow.cells[3].innerHTML = other;
   

    inputTable(dele,week,date,pay,other);

    //Push data to save
    var sObj = {week:week,date:date,pay:pay,other:other};
    studentArray.push(sObj);
    // Data location Name
    localStorage.myRpt = JSON.stringify(studentArray);


}

//Edit Data
var selectedRow = null
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("myWeek").value = selectedRow.cells[0].innerHTML;
    document.getElementById("myDate").value = selectedRow.cells[1].innerHTML;
    document.getElementById("myPay").value = selectedRow.cells[2].innerHTML;
    document.getElementById("myID").value = selectedRow.cells[3].innerHTML;
    document.getElementById("myOther").value = selectedRow.cells[4].innerHTML;

} 
//Update INFO
function onUpdate(tu){
    selectedRow = tu.parentElement.parentElement;
    var week = document.getElementById("myWeek").value;
    var date = document.getElementById("myDate").value;
    var pay = document.getElementById("myPay").value;
    var other = document.getElementById("myOther").value;

    selectedRow.cells[0].innerHTML = week;
    selectedRow.cells[1].innerHTML = date;
    selectedRow.cells[2].innerHTML = pay;
    selectedRow.cells[3].innerHTML = other;

}
let myRpt = JSON.parse(localStorage.getItem("myRpt"));
function updateQuantity(myId, week,date,pay,other){
	for(let product of myRpt){
		let getId = document.getElementById("myID").value;
		if(getId == product.id){
			myId = document.getElementById("myID").value;
			product.week = week;
            product.date = date;
			product.pay = pay;
			product.other = other;
		}
	}
	localStorage.setItem("myRpt", JSON.stringify(myRpt));
}
function updateData(){
    var week = document.getElementById("myWeek").value;
    var date = document.getElementById("myDate").value;
    var pay = document.getElementById("myPay").value;
    var other = document.getElementById("myOther").value;
	updateQuantity(1, week,date,pay,other);
    window.location.reload();
}

function myDelete(deleMe){
    document.getElementById("sSinfo").deleteRow(deleMe+1);
    studentArray.splice(deleMe, 1);
    localStorage.myRpt = JSON.stringify(studentArray);
      

}
function onClear(){
        localStorage.removeItem('myRpt');
        window.location.reload();

}

//Enter to sumit Data
document.onkeypress = keyPress;

function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 3){
    saveData();
  }
}