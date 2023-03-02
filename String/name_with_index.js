function nameWithCharIndex(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i] + " : " + i);
  }
}

let names = "abhishek";

nameWithCharIndex(names);

function nameRec(name, i, n) {
  if (i >= n) return;
  console.log(name[i] + "-" + i);
  nameRec(name, i + 1, n);
}
let myName = "abhishek";
let n = myName.length;
nameRec(myName, 0, n);
