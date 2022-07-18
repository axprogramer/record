const firebaseConfig = {
    apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
    authDomain: "teachingrecord-6b575.firebaseapp.com",
    databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
    projectId: "teachingrecord-6b575",
    storageBucket: "teachingrecord-6b575.appspot.com",
    messagingSenderId: "1097574891233",
    appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
  };
  now = new Date();
  randomNum = '';
  randomNum += Math.round(Math.random() * 2);
  randomNum += Math.round(Math.random() * 2);
  randomNum += now.getTime().toString().slice(-2);
  document.getElementById("myID").value = randomNum;
  
  firebase.initializeApp(firebaseConfig);

  var recordADB = firebase.database().ref('recordA');
  document.getElementById('body').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    var week = getElementVal('myWeek');
    var date = getElementVal('myDate');
    var pay = getElementVal('myPay');
    var other = getElementVal('myOther');
    var id = getElementVal('myID');
    window.location.reload();

    saveData(week,date,pay,other,id);

  }
const saveData = (week, date,pay,other,id) => {
    var newData = recordADB.push();
    newData.set({
        week: week,
        date: date,
        pay: pay,
        other: other,
        id: id,
    });
};
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
function selectAllData(){
  document.getElementById('tbody1').innerHTML="";
  studentN0=0;
  firebase.database().ref('recordA').once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(CurrentRecord){
        var week = CurrentRecord.val().week;
        var date = CurrentRecord.val().date;
        var pay = CurrentRecord.val().pay;
        var other = CurrentRecord.val().other;
        var id = CurrentRecord.val().id;
        addItemsToTable(week, date,pay,other,id);
      }
    );
  });
}
window.onload = selectAllData;
var studentN0;
var stdList = [];
function addItemsToTable(week,date,pay,other,id){
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  stdList.push([week,date,pay,other,id]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = week;
  td2.innerHTML = date;
  td3.innerHTML = pay;
  td4.innerHTML = id;
  td5.innerHTML = other;

  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);

  var ControlDiv = document.createElement("div");
  td2.innerHTML = `<button type="button" class="button-11" onclick="Fillbox(${studentN0})">${date}</button>`;
  trow.appendChild(ControlDiv);
  tbody.appendChild(trow);
}

var Mweek = document.getElementById('myWeek');
var Mdate = document.getElementById('myDate');
var Mpay = document.getElementById('myPay');
var Mother = document.getElementById('myOther');
var Mid = document.getElementById('myID');

var BtnSubmit = document.getElementById('mySubmit');
var BtnUpdate = document.getElementById('myUpdate');
var BtnDele = document.getElementById('myDele');


function Fillbox(index){
  if(index==null){
    BtnSubmit.style.display='inline-block';
    BtnUpdate.style.display='none';
    BtnDele.style.display='none';
  }
  else{
    --index;
    Mweek.value = stdList[index][0];
    Mdate.value = stdList[index][1];
    Mpay.value = stdList[index][2];
    Mother.value = stdList[index][3];
    Mid.value = stdList[index][4];
    BtnSubmit.style.display='none';
    BtnUpdate.style.display='inline-block';
    BtnDele.style.display='inline-block';

  }
}

function AddStd(){
  firebase.database().ref("recordA/"+Mid.value).set(
    {
      week: Mweek.value,
      date: Mdate.value,
      pay: Mpay.value,
      id: Mid.value,
      other: Mother.value,
    }, 
  )
  selectAllData();
  window.location.reload();

}
function UpStd(){
  firebase.database().ref("recordA/"+Mid.value).update(
    {
      week: Mweek.value,
      date: Mdate.value,
      pay: Mpay.value,
      other: Mother.value,
    }, 
  )
  selectAllData();
  window.location.reload();

}
function DelStd(){
  firebase.database().ref("recordA/"+Mid.value).remove().then(
    function(){
      selectAllData();
      window.location.reload();
   
    }
  )


}
function DelStdAll(){
  firebase.database().ref("recordA").remove();

      window.location.reload();
}