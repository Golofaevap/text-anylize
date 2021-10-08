// node latin "aaa sasdf AAAAA "

// const _ = require("lodash");

let myLogger = null;

try {
    if (Logger) myLogger = Logger;
    else {
        myLogger = console;
    }
} catch (error) {
    myLogger = console;
    console.log(myLogger);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function changeText(text, invis = 0) {
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
    const B = ["B" /* lat */, "В" /* cyr */, "Ḇ", "Ḅ"];
    const C = ["C" /* lat */, "С" /* cyr */, "Ç"];
    const D = ["D" /* lat */, "D" /* lat */, "D" /* lat */, "Ḑ", "Ḏ", "Ḋ", "ⅅ"];
    const E = ["E" /* lat */, "Е" /* cyr */, "È", "É", "Ê", "Ë"];
    const F = ["F" /* lat */, "F" /* lat */, "F" /* lat */, "Ḟ"];
    const G = ["G" /* lat */, "G" /* lat */, "G" /* lat */, "Ḡ"];
    const H = [
        "H" /* lat */,
        "Н" /* cyr */,
        "H" /* lat */,
        "Н" /* cyr */,
        "H" /* lat */,
        "Н" /* cyr */,
        "H" /* lat */,
        "Н" /* cyr */,
        "Ң",
    ];
    const I = ["I" /* lat */, "I" /* lat */, "I" /* lat */, "Ị"];
    const J = ["J" /* lat */];
    const K = [
        "K" /* lat */,
        "К" /* cyr */,
        "Ҝ",
        "K" /* lat */,
        "К" /* cyr */,
        "Ҝ",
        "K" /* lat */,
        "К" /* cyr */,
        "Ҝ",
        "K" /* lat */,
        "К" /* cyr */,
        "Ҝ",
        "K" /* lat */,
        "К" /* cyr */,
        "Ҝ",
        "Ҟ",
        "Ҡ",
        "Қ",
    ];
    const L = ["L" /* lat */, "L" /* lat */, "L" /* lat */, "Ḷ", "Ḻ"];
    const M = ["M" /* lat */, "М" /* cyr */, "M" /* lat */, "М" /* cyr */, "Ṃ"];
    const N = ["N" /* lat */, "N" /* lat */, "N" /* lat */, "Ṉ", "Ṇ"];
    const O = [
        "O" /* lat */,
        "О" /* cyr */,
        "O" /* lat */,
        "О" /* cyr */,
        "Ọ",
        "Ѳ",
        "Ѻ",
    ];
    const P = ["P" /* lat */, "Р" /* cyr */, "P" /* lat */, "Р" /* cyr */, "Ṗ"];
    const Q = ["Q" /* lat */, "Ԛ"];
    const R = ["R" /* lat */];
    const S = ["S" /* lat */, "S" /* lat */, "S" /* lat */, "Ṣ", "Ṡ"];
    const T = ["T" /* lat */, "Т" /* cyr */, "T" /* lat */, "Т" /* cyr */, "Ṯ"];
    const U = ["U" /* lat */, "U" /* lat */, "Ụ", "Ṳ"];
    const V = ["V" /* lat */, "V" /* lat */, "Ṿ"];
    const W = ["W" /* lat */, "W" /* lat */, "Ԝ", "Ẅ"];
    const X = ["X" /* lat */, "Х" /* cyr */, "Ẍ"];
    const Y = ["Y" /* lat */, "Y" /* lat */, "Ẏ"];
    const Z = ["Z" /* lat */, "Z" /* lat */, "Ẕ"];
    const a = [
        "a" /* lat */,
        "а" /* cyr */,
        "a" /* lat */,
        "а" /* cyr */,
        "ạ",
        // "ấ",
    ];
    const b = ["b" /* lat */, "b" /* lat */, "ḅ", "ḇ"];
    const c = ["c" /* lat */, "с" /* cyr */, "c" /* lat */, "с" /* cyr *//*, "ḉ"*/];
    const d = ["d" /* lat */, "d" /* lat */, "d" /* lat */, "ḏ"];
    const e = ["e" /* lat */, "е" /* cyr */];
    const f = ["f" /* lat */, "f" /* lat */, "ḟ"];
    const g = ["g" /* lat */, "g" /* lat */, "g" /* lat */, "ḡ"];
    const h = ["h" /* lat */, "h" /* lat */, "h" /* lat */, "ḥ", "ḧ", "ḩ"];
    const i = ["i" /* lat */, "i" /* lat */, "i" /* lat */, "ḯ"];
    const j = ["j" /* lat */];
    const k = ["k" /* lat */, "k" /* lat */, "k" /* lat */, "ḳ", "ḵ"];
    const l = ["l" /* lat */, "l" /* lat */, "l" /* lat */, "ḻ", "ḽ"];
    const m = ["m" /* lat */, "m" /* lat */, "m" /* lat */, "ṃ", "ḿ"];
    const n = ["n" /* lat */, "n" /* lat */, "n" /* lat */, "ṅ", "ṉ"];
    const o = ["o" /* lat */, "o" /* lat */, "o" /* lat */, "о" /* cyr */, "օ"];
    const p = ["p" /* lat */, "p" /* lat */, "p" /* lat */, "р" /* cyr */];
    const q = ["q" /* lat */, "q" /* lat */, "q" /* lat */, "ԛ", "զ"];
    const r = ["r" /* lat */, "r" /* lat */, "r" /* lat */, "ṙ", "ṛ", "ṟ"];
    const s = ["s" /* lat */, "s" /* lat */, "s" /* lat */, "ṣ"];
    const t = ["t" /* lat */, "t" /* lat */, "t" /* lat */, "ṯ"];
    const u = ["u" /* lat */, "u" /* lat */, "u" /* lat */, "ṳ"];
    const v = ["v" /* lat */, "v" /* lat */, "v" /* lat */, "ṿ"];
    const w = ["w" /* lat */, "w" /* lat */, "w" /* lat */, "ԝ", "ẅ"];
    const x = ["x" /* lat */, "x" /* lat */, "x" /* lat */, "х" /* cyr */, "ẍ"];
    const y = ["y" /* lat */, "y" /* lat */, "y" /* lat */, "у" /* cyr */, "ỵ"];
    const z = ["z" /* lat */, "z" /* lat */, "z" /* lat */, "ẕs"];

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

    var string = "";
    for (var idx = 0; idx < text.length; idx++) {
        //   if (text[i] === " ") {
        //       continue;
        if (!latin[text[idx]]) {
            string += text[idx];
            continue;
        }
        var newLetter = "" + shuffleArray(latin[text[idx]])[0];
        //   myLogger.log(newLetter.charCodeAt(0), _.shuffle(latin[text[i]]));
        string += newLetter;
    }
    myLogger.log(string);

    if (invis) {
        for (var idx = 0; idx < invis; idx++) {
            var index = Math.round(Math.random() * string.length);
            string =
                string.slice(0, index) +
                String.fromCharCode(847) +
                string.slice(index);
        }
    }
    myLogger.log(string, string.length);
    return string;
}

var args = process.argv;

var text = "" + args[2];
var invis = Number(args[3]);

changeText(text, invis);

module.exports = changeText;

biｔｃo in