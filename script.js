function userSheet(){
let usersub1name = document.getElementById("usersub1name").value;
let usersub2name = document.getElementById("usersub2name").value;
let usersub3name = document.getElementById("usersub3name").value;
let usersub1total = +document.getElementById("usersub1total").value;
let usersub2total = +document.getElementById("usersub2total").value;
let usersub3total = +document.getElementById("usersub3total").value;
let userobtmarks1 = +document.getElementById("userobtmarks1").value;
let userobtmarks2 = +document.getElementById("userobtmarks2").value;
let userobtmarks3 = +document.getElementById("userobtmarks3").value;

let totalMarks = usersub1total + usersub2total + usersub3total;

let totalObtained = userobtmarks1 + userobtmarks2 + userobtmarks3; 
let totalPer = (totalObtained / (totalMarks) * 100).toFixed(1);

let grade, remarks;

if(totalPer >= 80){
    grade = "A+";
    remarks = "Excellent";
} else if(totalPer >= 70){
    grade = "A";
    remarks = "Very Good";
} else if(totalPer >= 60){
    grade = "B";
    remarks = "Good";
} else if(totalPer >= 50){
    grade = "C";
    remarks = "You need improvement";
} else{
    grade = "F";
    remarks = "Fail";
}

let sub1Percentage = ((userobtmarks1 / usersub1total) * 100).toFixed(2);
let sub2Percentage = ((userobtmarks2 / usersub2total) * 100).toFixed(2);
let sub3Percentage = ((userobtmarks3 / usersub3total) * 100).toFixed(2);

// alert(
//     "Marks Sheet \n\n" +
//     "Total Marks: " + (totalMarks) + "\n" +
//     "Marks Obtained: " + totalObtained + "\n" +
//     "Percentage: " + totalPer + "%\n" +
//     "Grade: " + grade + "\n" +
//     "Remarks: " + remarks
// );

alert("Subject     Total Marks     Obtained Marks     Percentage\n" + usersub1name + "                    " + usersub1total + "                 " + userobtmarks1 + "                           " + sub1Percentage + "%\n" + usersub2name + "                    " + usersub2total + "                 " + userobtmarks2 + "                           " + sub2Percentage + "%\n" + usersub3name + "                    " + usersub3total + "                 " + userobtmarks3 + "                           " + sub3Percentage + "%\n" + "Total             " + (totalMarks) + "                 " + totalObtained + "                           " + totalPer + "%")

}