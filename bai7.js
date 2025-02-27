var x = +prompt("");
x = x.toLocaleString('vi', {style : 'currency', currency : 'VND'});
alert(`${x}`);
// console.log(x);