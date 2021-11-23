var empid = document.getElementById("edit-empid");
    var empname = document.getElementById("edit-name");
    var dob = document.getElementById("edit-dob");
    var email = document.getElementById("edit-email");
    var table = document.getElementById("mytable"), rIndex;
    var trs=document.getElementsByTagName("tr");

 function deleteRow(){
                                    
                                
                                deleteindex.indexvalue.parentNode.removeChild(deleteindex.indexvalue);
                                
                                   
                                }



let obj={
    "indexvalue": 0,
    "empid":'',
    "empname":'',
    "dob":"",
    "email":"",
};
let deleteindex={
    "indexvalue":0,
};

function alertWindow(indexvalue){
var row = indexvalue.parentNode.parentNode;
deleteindex.indexvalue=row;

var r=confirm("Are you sure you want to delete this Row?");
if (r==true) {
  deleteRow();
} else {
  
}

}
 



function add_visible(){
     
   
         document.getElementById("add").style.display="inline";
        document.getElementById("add-btn").style.display="none";

}
function add_invisible(){ 
    document.getElementById("add").style.display="none";
    document.getElementById("add-btn").style.display="inline";
}

   
   function updateDetails(td){
       //example commit
    //     var empid = document.getElementById("edit-empid");
    // var empname = document.getElementById("edit-name");
    // var dob = document.getElementById("edit-dob");
    // var email = document.getElementById("edit-email");
    // var table = document.getElementById("mytable"), rIndex;
    // var trs=document.getElementsByTagName("tr");
    
    // var btn=document.getElementById("btn-update");
    
    var SelectedRow=td.parentNode.parentNode;
    console.log(SelectedRow.rowIndex);
var empid = document.getElementById("edit-empid");
    var empname = document.getElementById("edit-name");
    var dob = document.getElementById("edit-dob");
    var email = document.getElementById("edit-email");
    var table = document.getElementById("mytable"), rIndex;
    var trs=document.getElementsByTagName("tr");
    
    var rows=trs.length;
    for (var i = 1; i < rows; i++) {

  var date = new Date(SelectedRow.cells[2].innerHTML); 

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();
 var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
 

     document.getElementById("editable").style.display = "inline";
    document.getElementById("mytable").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("add-btn").style.display = "none";
    document.getElementById("add").style.display="none";
    
obj.empid=SelectedRow.cells[0].innerHTML;
obj.empname=SelectedRow.cells[1].innerHTML;
obj.dob=dateString;

obj.email=SelectedRow.cells[3].innerHTML;
empid.value = obj.empid;
    empname.value = obj.empname;
    dob.value = obj.dob;
    email.value = obj.email;
      rIndex=SelectedRow.rowIndex;
      console.log(rIndex);
      obj.indexvalue=rIndex;
 }       
 
}  



  
  
 

   




function save(){
   
    

     var empid = document.getElementById("edit-empid");
     var empname = document.getElementById("edit-name");
     var dob = document.getElementById("edit-dob");
     var email = document.getElementById("edit-email");
     var table = document.getElementById("mytable");
    var trs=document.getElementsByTagName("tr");
    var date = new Date(dob.value); 

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();

var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
   
    table.rows[obj.indexvalue].cells[0].innerHTML=empid.value;
    table.rows[obj.indexvalue].cells[1].innerHTML=empname.value;
table.rows[obj.indexvalue].cells[2].innerHTML=dateString;
table.rows[obj.indexvalue].cells[3].innerHTML=email.value;

if (empid.value == "" || empname.value=="" || dob.value==""||email.value=="" ) {
    alert("All fields are required!");
    
  }
  else{
console.log(obj.indexvalue);
    document.getElementById("editable").style.display = "none";
    document.getElementById("mytable").style.display = "table";
    document.getElementById("search").style.display = "inline";
    document.getElementById("add-btn").style.display = "inline";
    document.getElementById("add").style.display="none";
  }





}
function cancel(){
    document.getElementById("editable").style.display = "none";
    document.getElementById("mytable").style.display = "table";
    document.getElementById("search").style.display = "inline";
    document.getElementById("add-btn").style.display = "inline";
    document.getElementById("add").style.display="none";
}

