const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delaytime = 100;
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}`);
  }, delaytime);
  delaytime += 200;
}