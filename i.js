const d = document.getElementById("xy");
const f = document.getElementById("result");

function tree() {
    const v = parseFloat(document.getElementById("x").value);
    const u = parseFloat(document.getElementById("y").value);
    const w = parseFloat(document.getElementById("z").value);

   

    const r = (v * u * w) / 100;
    const t = v + r;
    f.value = t.toFixed(4);
}

d.addEventListener("click", tree);
