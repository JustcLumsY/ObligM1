show();
function show() {
   init();
}


function init() {
    
    let svgInnerHtml = '';

    for (let tall = 0; tall < numbers.length; tall++) {
        svgInnerHtml += createBar(numbers[tall], tall + 1);
    }
    contentDiv.innerHTML = `
    
        <svg  id="chart" width="500" viewBox="0 0 80 60">
        
        ${svgInnerHtml}
        
        </svg><br/>
        
        <i>Valgt stolpe:</i> <i id="chosenBarnumber">${chosenBar}</i>
        <br />
        <i>Verdi:</i>
        <input type="number" id="tall" min="0" max="10" oninput="inputValue = this.value" />
        <hr />
        
        <button class="btn" onclick="addBar()">Legg til stolpe</button>
        
        <button class="btn" id="changeBtn" ${disabled ? "disabled" : ""} onclick="changeBar()">Endre valgt stolpe</button>
        
        <button class="btn" id="removeBtn" ${disabled ? "disabled" : ""} onclick="deleteBar()">Fjerne valgt stolpe</button><br />

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
    console.log(chosenBar, barNo);
    let borderStyle = chosenBar == barNo ? 'stroke: black' : '';
    return `
    <rect id="rect${barNo}" onclick="select(${barNo})"

        width="${width}" 
        height="${height}"
        x="${x}" y="${y}" 
        fill="${color}"
       style="${borderStyle}"
        >
        
    </rect>
            `;
             
}
// stroke="black"
// stroke-opacity="0"
function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}




        

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(20, 100);
// ctx.lineTo(70, 100);
// ctx.strokeStyle = "black";
// ctx.stroke();

