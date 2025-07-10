const arg = Process.argv[2];
const number = number(arg);
if (!isNaN(number)) {
  console.log("My number:" + number);
}
else {
  console.log("Not a number");
}