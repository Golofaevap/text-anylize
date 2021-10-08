if (typeof require !== "undefined") XLSX = require("xlsx");
/* output format determined by filename */

var wb = XLSX.utils.book_new();
var ws_data = [];
for (let i = 0; i <= 930; i++) {
    const row1 = [];
    const row2 = [];
    const row3 = [];
    let string = "" + i * 30 + " - " + (i + 1) * 100 + " | ";
    for (let j = 0; j < 30; j++) {
        number = i * 30 + j;
        const symbol = String.fromCharCode(number);
        row1.push(number);
        row2.push(symbol);
        row1.push(" ");
        row2.push(" ");
        row3.push(" ");
        row3.push(" ");
        string += " " + symbol + "";
    }
    ws_data.push(row1);
    ws_data.push(row2);
    ws_data.push(row3);
    console.log(string);
}

var ws_name = "SheetJS";

/* make worksheet */

var ws = XLSX.utils.aoa_to_sheet(ws_data);

/* Add the worksheet to the workbook */
XLSX.utils.book_append_sheet(wb, ws, ws_name);

XLSX.writeFile(wb, "out.xlsx");
/* at this point, out.xlsb is a file that you can distribute */

const A = [
    "A" /* lat */,
    "A" /* lat */,
    "A" /* lat */,
    "A" /* lat */,
    "A" /* lat */,
    "A" /* lat */,
    "А" /* cyr */,
    "А" /* cyr */,
    "А" /* cyr */,
    "А" /* cyr */,
    "А" /* cyr */,
    "А" /* cyr */,
    "À",
    "Á",
    "Â",
    "Ã",
    "Ä",
    "Å",
];
const B = ["B" /* lat */, "В" /* cyr */];
const C = ["C" /* lat */, "С" /* cyr */, "Ç"];
const D = ["D" /* lat */];
const E = ["E" /* lat */, "Е" /* cyr */, "È", "É", "Ê", "Ë"];
const F = ["F" /* lat */];
const G = ["G" /* lat */];
const H = ["H" /* lat */, "Н" /* cyr */];
const I = ["I" /* lat */];
const J = ["J" /* lat */];
const K = ["K" /* lat */, "К" /* cyr */];
const L = ["L" /* lat */];
const M = ["M" /* lat */, "М" /* cyr */];
const N = ["N" /* lat */];
const O = ["O" /* lat */, "О" /* cyr */];
const P = ["P" /* lat */, "Р" /* cyr */];
const Q = ["Q" /* lat */];
const R = ["R" /* lat */];
const S = ["S" /* lat */];
const T = ["T" /* lat */, "Т" /* cyr */];
const U = ["U" /* lat */];
const V = ["V" /* lat */];
const W = ["W" /* lat */];
const X = ["X" /* lat */, "Х" /* cyr */];
const Y = ["Y" /* lat */];
const Z = ["Z" /* lat */];
const a = ["a" /* lat */, "а" /* cyr */];
const b = ["b" /* lat */];
const c = ["c" /* lat */, "с" /* cyr */];
const d = ["d" /* lat */];
const e = ["e" /* lat */, "е" /* cyr */];
const f = ["f" /* lat */];
const g = ["g" /* lat */];
const h = ["h" /* lat */];
const i = ["i" /* lat */];
const j = ["j" /* lat */];
const k = ["k" /* lat */];
const l = ["l" /* lat */];
const m = ["m" /* lat */];
const n = ["n" /* lat */];
const o = ["o" /* lat */, "о" /* cyr */];
const p = ["p" /* lat */, "р" /* cyr */];
const q = ["q" /* lat */];
const r = ["r" /* lat */];
const s = ["s" /* lat */];
const t = ["t" /* lat */];
const u = ["u" /* lat */];
const v = ["v" /* lat */];
const w = ["w" /* lat */];
const x = ["x" /* lat */, "х" /* cyr */];
const y = ["y" /* lat */, "у" /* cyr */];
const z = ["z" /* lat */];

const latin = {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
};
