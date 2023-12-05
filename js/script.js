let marks = -56


for (i=0; i<=100; i++)
if (marks>=80 && marks<=100) {
    console.log("You Got A+")
}
else if (marks>=70 && marks<80) {
    console.log("You Got A")
}
else if (marks>=60 && marks<70) {
    console.log("You Got B")
}
else if (marks>=50 && marks<60) {
    console.log("You Got C")
}
else if (marks>=40 && marks<50) {
    console.log("You Got D")
}
else if (marks>=33 && marks<40) {
    console.log("You Got E")
}
else if (marks>=0 && marks<33) {
    console.log("Fail")
}
else{
    console.log("Marks Invalid")
}
