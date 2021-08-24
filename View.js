show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
    
        <svg onclick="trykk()" id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        <i>Valgt stolpe:</i> <i>ingen</i>
        <br />
        <i>Verdi:</i>
        <input type="number" id="tall" min="1" max="10" oninput="inputValue = this.value" />
        <hr />
        <button class="btn" onclick="addBar()">Legg til stolpe</button>
        
        <button class="btn" onclick="changeBar()">Endre valgt stolpe</button>
        
        <button class="btn" onclick="deleteBar()">Fjerne valgt stolpe</button><br />
        <br />
        `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect width="${width}" height="${height}"
            x="${x}" y="${y}" fill="${color}"></rect>
            `;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

function trykk() {
         
    alert("!");
    
    
}

function deleteBar() {

}

function changeBar() {

}

function addBar() {}


// document.getElementById("tall").oninput = function() 
// {
   
// }