// node cyr "aaa sasdf AAAAA "

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
    const cyr = {
        А: [
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
        ],
        Б: ["Б"],
        В: ["B" /* lat */, "В" /* cyr */, "Ḇ", "Ḅ"],
        Г: ["Г"],
        Д: ["Д"],
        Е: ["E" /* lat */, "Е" /* cyr */, "È", "É", "Ê", "Ë"],
        Ж: ["Ж"],
        З: ["З"],
        И: ["И"],
        Й: ["Й"],
        К: [
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
        ],
        Л: ["Л"],
        М: ["M" /* lat */, "М" /* cyr */, "M" /* lat */, "М" /* cyr */, "Ṃ"],
        Н: [
            "H" /* lat */,
            "Н" /* cyr */,
            "H" /* lat */,
            "Н" /* cyr */,
            "H" /* lat */,
            "Н" /* cyr */,
            "H" /* lat */,
            "Н" /* cyr */,
            "Ң",
        ],
        О: [
            "O" /* lat */,
            "О" /* cyr */,
            "O" /* lat */,
            "О" /* cyr */,
            "Ọ",
            "Ѳ",
            "Ѻ",
        ],
        П: ["П"],
        Р: ["P" /* lat */, "Р" /* cyr */, "P" /* lat */, "Р" /* cyr */, "Ṗ"],
        С: ["C" /* lat */, "С" /* cyr */, "Ç"],
        Т: ["T" /* lat */, "Т" /* cyr */, "T" /* lat */, "Т" /* cyr */, "Ṯ"],
        У: ["У"],
        Ф: ["Ф"],
        Х: ["X" /* lat */, "Х" /* cyr */, "Ẍ"],
        Ц: ["Ц"],
        Ч: ["Ч"],
        Ш: ["Ш"],
        Щ: ["Щ"],
        Ъ: ["Ъ"],
        Ы: ["Ы"],
        Ь: ["Ь"],
        Э: ["Э"],
        Ю: ["Ю"],
        Я: ["Я"],
        а: [
            "a" /* lat */,
            "а" /* cyr */,
            "a" /* lat */,
            "а" /* cyr */,
            "ạ",
            "ấ",
        ],
        б: ["б"],
        в: ["в"],
        г: ["г"],
        д: ["д"],
        е: ["e" /* lat */, "е" /* cyr */],
        ж: ["ж"],
        з: ["з"],
        и: ["и"],
        й: ["й"],
        к: ["к"],
        л: ["л"],
        м: ["м"],
        н: ["н"],
        о: ["o" /* lat */, "o" /* lat */, "o" /* lat */, "о" /* cyr */, "օ"],
        п: ["п"],
        р: ["p" /* lat */, "p" /* lat */, "p" /* lat */, "р" /* cyr */],
        с: ["c" /* lat */, "с" /* cyr */, "c" /* lat */, "с" /* cyr */, "ḉ"],
        т: ["т"],
        у: ["y" /* lat */, "y" /* lat */, "y" /* lat */, "у" /* cyr */, "ỵ"],
        ф: ["ф"],
        х: ["x" /* lat */, "x" /* lat */, "x" /* lat */, "х" /* cyr */, "ẍ"],
        ц: ["ц"],
        ч: ["ч"],
        ш: ["ш"],
        щ: ["щ"],
        ъ: ["ъ"],
        ы: ["ы"],
        ь: ["ь"],
        э: ["э"],
        ю: ["ю"],
        я: ["я"],
    };

    //   const args = process.argv;

    //   let text = "" + args[2];
    var string = "";
    // console.log(cyr);
    for (var i = 0; i < text.length; i++) {
        //   if (text[i] === " ") {
        //       continue;
        if (!cyr[text[i]]) {
            string += text[i];
            continue;
        }
        var newLetter = "" + shuffleArray(cyr[text[i]])[0];
        //   console.log(newLetter.charCodeAt(0), _.shuffle(latin[text[i]]));
        string += newLetter;
    }
    myLogger.log(string);

    //   const invis = Number(args[3]);

    if (invis) {
        for (var i = 0; i < invis; i++) {
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

const args = process.argv;
var text = "" + args[2];
const invis = Number(args[3]);

changeText(text, invis);

module.exports = changeText;
