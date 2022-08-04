var strData = "04/08/2022";
var partesData = strData.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
console.log(data);