/*const calculatesi=()=>{
    const principal = Number(document.getElementById(`principal`).value);
    const rate = Number(document.getElementById(`rate`).value);
    const time = Number(document.getElementById(`time`).value);
    const result = document.getElementById(`output`)

    

    output.innerHtML= `
    <h3>The si is   ${((principal*rate*time)/100)}.${si.toFixed(2)};
    `
    const si= document.write("simple Interest="+ simple_interest);
}*/

function si() {
    var p = parseInt (document.getElementById("p").value);
    
    var r = parseInt (document.getElementById("r").value);
    
    var t = parseInt (document.getElementById("t").value);
    
    var si = p*r/100*t;
    
    document.getElementById("res").innerHTML=si.toFixed(2);
    
    alert("Click ok! for your answer")
}