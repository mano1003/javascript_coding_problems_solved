// Problem - 1
/*
 On Enter Key Press - Add color in color array to the list Element under ul element in HTML file
*/

document.dispatchEvent(new window.KeyboardEvent('keydown'), {keyCode: 13});
const colors = ['red', 'blue', 'purple'];
function displayColorList(document) {
    document.addEventListener("keydown", () => {
        let ulElement = document.getElementById("color-list");
        forEach((colors)=>{
            const liElement = document.createElement("li");
            liElement.textContent = colors;
            ulElement.appendChild(liElement);
        })
    })
}

// Problem - 2
/*
 On Spacebar Press - Remove color-list li Element
*/

document.dispatchEvent(new window.KeyboardEvent('keyup', {keyCode: 32}));
function removeColorList(document) {
    // Your code goes here.
    const colorList = document.getElementById("color-list");
    colorList.remove();
    document.write();
}