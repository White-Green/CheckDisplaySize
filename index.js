function calc() {
    let size = document.getElementById("size").value;
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    document.getElementById("result").innerText = Math.round(Math.sqrt(a * a / (a * a + b * b) * size * size) * 2.54 * 100) / 100 + "cm x " + Math.round(Math.sqrt(b * b / (a * a + b * b) * size * size) * 2.54 * 100) / 100 + "cm";
}
document.getElementById("size").addEventListener("change", (_a, _b) => calc());
document.getElementById("a").addEventListener("change", (_a, _b) => calc());
document.getElementById("b").addEventListener("change", (_a, _b) => calc());
calc();