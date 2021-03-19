const darkGreen = "#8cd38b";
const DarkerGreen = "#34b233";
const lightGreen = "#ade0ad";
const lightGrey = "#f7fafa";

let counter = 0;
function addElement() {
    var html = '<input type="range"  name="width' +     counter + '" min="40" max="200" value="40" oninput="this.form.widthPlus' + counter + '.value=this.value" />' +
        '<input type="number" name="widthPlus' + counter + '" min="40" max="200" value="40" oninput="this.form.width'     + counter + '.value=this.value" />';
    $(".outerContainer").append(html);
    counter++;
}

let volume = document.getElementById("volume");
console.log(volume);