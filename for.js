let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

for (let i = 1; i <= 50; i++) {
  let s = i.toString();
  let b = "";
  for (let a = 0; a <= s.length; a++) {
    if (s[a] == "3" || s[a] == "6" || s[a] == "9") {
      b += "짝";
    }
  }
  if (b.length > 0) {
    console.log(b);
  } else {
    console.log(i);
  }
}

let a = 425.1;
let inspect = true;
if (a == 1) {
  inspect = false;
}
for (let i = 2; i <= a; i++) {
  if (a % i == 0) {
    inspect = false;
  }
}
console.log(inspect);
