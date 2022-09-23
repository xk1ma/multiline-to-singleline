let displayResult = (text) => {
    document.getElementById("singleline").innerText = text;
}

let removeTabs = (text) => {
    return text.replace("\n", " ");
};

let removeSpaces = (text) => {
    return text.replace(/\s+/g, " "); 
};

let convertMultiline = (i) => {
    let multiline = i.target.value;

    (/[\n\t]/gm).test(multiline) ? multiline = removeTabs(multiline) : multiline = removeSpaces(multiline);
    (/\s/g).test(multiline) ? multiline = removeSpaces(multiline) : displayResult(multiline);

    displayResult(multiline);
};

let multiarea = document.getElementById("multiline");
multiarea.addEventListener("input", convertMultiline);