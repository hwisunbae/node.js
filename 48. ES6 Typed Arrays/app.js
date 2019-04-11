var buffer = new ArrayBuffer(8);
// byte : 8 bits  - > 64 bits
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 10;
console.log(view);