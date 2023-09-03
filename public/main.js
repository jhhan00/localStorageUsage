let prevDivId = "";
let prevSpanId = "";
let valueObj = {};

async function getInitValue() {
    return await fetch('/api/data/origin');
}

if(localStorage.getItem("value") != null || localStorage.getItem("value") != undefined) {
    localStorage.removeItem("value");
}

// 초기값 설정 - index.js에서 json값 가져오기
function init() {
    getInitValue()
        .then((r) => r.json())
        .then((data) => {
            valueObj = data;
            localStorage.setItem("value", JSON.stringify(valueObj));
        });

    // if(prevDivId != "") document.getElementById(prevDivId).classList.remove("green");
    if(prevSpanId != "") document.getElementById(prevSpanId).innerHTML = "";
}

// 활성화 된 영역 (클릭 시)
function div_click(event) {
    const divId = event.id;
    if(divId === prevDivId) return;

    let spanId = "";
    switch(divId) {
        case "tab1":
            spanId = "span1";
            break;
        case "tab2":
            spanId = "span2";
            break;
        case "tab3":
            spanId = "span3";
            break;
    }

    event.classList.add("green");
    if(prevDivId !== "") document.getElementById(prevDivId).classList.remove("green");

    const val = localStorage.getItem("value");
    let valObj = JSON.parse(val);
    valObj.value++;

    document.getElementById(spanId).innerHTML = JSON.stringify(valObj);
    if(prevSpanId !== "") document.getElementById(prevSpanId).innerHTML = "";

    prevDivId = divId;
    prevSpanId = spanId;
    localStorage.setItem("value", JSON.stringify(valObj));
}

// 새로운 값 가져오기(실제로는 서버에서 가져오는 형식이 될 듯)
function getNewValue() {
    const val = localStorage.getItem("value");
    let valObj = JSON.parse(val);
    valObj.value++;

    if(prevSpanId !== "") document.getElementById(prevSpanId).innerHTML = JSON.stringify(valObj);

    localStorage.setItem("value", JSON.stringify(valObj));
}