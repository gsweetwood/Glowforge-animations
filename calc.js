const plen = document.querySelectorAll("#fullname path");

for (let i = 0; i < plen.length; i++) {
  console.log(`The ${i} letter is ${plen[i].getTotalLength()}`);
}
