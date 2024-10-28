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
    document.addEventListener("keyup", () => {
        /* Their Linked In Answer
        const container = document.getElementById("container");
        const colorList = document.getElementById("color-list");
        container.removeChild(colorList);
        */
       // My Answer
       const colorList = document.getElementById("color-list");
       colorList.remove();
    });
}
// Problem - 3
/*
 On drop down selection - onchange display the selected value
*/
myFavoriteShowSelect.dispatchEvent(new window.Event('change'));
function displayMessageOnChange(document) {
    // Your code goes here.
    const divresult = document.getElementById("result");
    const selectOptions = document.getElementById("favorite-tv-show");
    /* Their answer
    selectOptions.addEventListener("change", (event) => {
        //const selectedText = selectOptions.options[selectOptions.selectedIndex];
        divresult.innerHTML = "Your selection changed to: " + event.target.value;
    });
    */
   // My Answer
    selectOptions.addEventListener("change", () => {
        const selectedText = selectOptions.options[selectOptions.selectedIndex];
        divresult.innerHTML = "Your selection changed to: " + selectedText.text;
    });
}