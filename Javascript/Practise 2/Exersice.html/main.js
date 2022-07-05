let main = document.querySelector("#main");

console.dir(document.body.children.main);

main.children[0].innerHTML += <p>new paragraph</p>;

let text = main.children[1].children[1].children[1].children[0].children[2].textContent;
console.log(text);