const age = parseInt(prompt("how lod are hou"));

if (isNaN(age) || age > 0) {
  console.log("write number");
} else if (age < 18) {
  console.log("you so young");
} else if (age >= 18 && age <= 65) {
  console.log("you can drink");
} else {
  console.log("you can't drink");
}
