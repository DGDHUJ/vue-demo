function a() {
    return "你好";
}
alert(a());
function add(l, w) {
    var area = l * w;
    return 'show' + area;
}
document.body.innerHTML = a();
document.body.innerHTML = add(12, 78);
// function area(shape: string, width: number, height: number) {
//     var area = width * height;
//     return "I'm a " + shape + " with an area of " + area + " cm squared.";
// }
// document.body.innerHTML = area("rectangle", 30, 15);
// interface Shape {
//     name: string;
//     width: number;
//     height: number;
//     color?: string;
// }
// function area(shape : Shape) {
//     var area = shape.width * shape.height;
//     return "I'm " + shape.name + " with area " + area + " cm squared";
// }
// console.log( area( {name: "rectangle", width: 30, height: 15} ) );
// console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );
// var shape = {
//     name: "rectangle",
//     popup: function() {
//         console.log('This inside popup(): ' + this.name);
//         setTimeout( () => {
//             console.log('This inside setTimeout(): ' + this.name);
//             console.log("I'm a " + this.name + "!");
//         }, 3000);
//     }
// };
// shape.popup();
//# sourceMappingURL=hello.js.map