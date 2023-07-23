import './index.scss';
import BuildObj from "./scripts/BuildObj.js"
import OptionObj from "./scripts/OptionObj.js"

// import '@fortawesome/fontawesome-free/css/all.min.css';

async function getData (){
    const request = await fetch("/data/steamData-after2019.json")
    const respone = await request.json();
    // console.log(respone);
    const array =Object.values(respone);
    console.log(array);
    const newObj = array.reduce((obj,item)=>Object.assign(obj,{[item.name]: item}),{})
    console.log("string",newObj["Second Sight"]);
    // console.log("string",newObj["Second Sight"].price);
}
//  getData();
//pullDownList 
const operatorHash = {greaterEqual:"Greater and Equal (>=)",greater:"Greater (>)",samller:"Samller (<)"};

//frontPage
const searchBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-magnifying-glass"],"Search","searchPage","Search and display detail information by different criteria");
const compareBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-table"],"Compare","comparePage","Compare item between 2 games with table or chart");
const statisticsBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-chart-simple"],"Statistics","statistPage","Data statistics for the period");
const homeBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-house"],"Home","frontPage");
//searchCriteria
const nameInputObj = new BuildObj("input",null,null,"gameName",null,"text","Name:");
const releaseFromInputObj = new BuildObj("input",null,null,"releaseFrom",null,"month","Release From:");
const releaseToInputObj = new BuildObj("input",null,null,"releaseTo",null,"month","Release To:","2023-06");
const ratingInputObj = buildObjHelper({tag:"select",id:"operator"});
const numberInputObj = buildObjHelper({tag:"input",name:"rating", id:"operator",inputType:"number",attribute:"0.01",lableName:"Rating:"});

const searchCriteriaCreateArr = [[nameInputObj,releaseFromInputObj,releaseToInputObj]
,[[ratingInputObj,numberInputObj]]];

document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.getElementById("navBtn");
    // const btnScrollUp = document.getElementById("scrollUp");
    const frontPageBtn = document.querySelector(".frontPageBtn");
    const searchSearchArea = document.querySelector("#search-searchArea");


    function populateFrontPageBtnArea(buildObj){
        const divBtnArea = buildElement(new BuildObj("div","btnArea"));
        const spanBtnArea = buildElement(new BuildObj("span",["icon", "icon-circle"]));
        const iBtnArea = buildElement(new BuildObj("i",["icon-1", "icon-1b"].concat(buildObj.classArr)));
        const pBtnArea = buildElement(new BuildObj("p","text-6",null,null,buildObj.innerHTML));
        const h6BtnArea = buildElement(new BuildObj("h6",null,buildObj.name));

        divBtnArea.addEventListener("click", () => {
            document.getElementById(buildObj.id).scrollIntoView();
          });

        spanBtnArea.appendChild(iBtnArea);
        divBtnArea.appendChild(spanBtnArea);
        divBtnArea.appendChild(h6BtnArea);
        divBtnArea.appendChild(pBtnArea);
        frontPageBtn.appendChild(divBtnArea);
    }

    function populateFrontPageBtn() {
        populateFrontPageBtnArea(searchBtnStrBuildObj);
        populateFrontPageBtnArea(compareBtnStrBuildObj);
        populateFrontPageBtnArea(statisticsBtnStrBuildObj);
    }

    function populateNavSubBtn(buildObj) {
        const buttonNavSub =  buildElement(new BuildObj("button","navSubBtn"));
        const spanNavSub =  buildElement(new BuildObj("span","text",buildObj.name));
        const iNavSub =  buildElement(new BuildObj("i",buildObj.classArr));
        
        buttonNavSub.addEventListener("click", () => {
            document.getElementById(buildObj.id).scrollIntoView();
          });

        buttonNavSub.appendChild(iNavSub);
        buttonNavSub.appendChild(spanNavSub);
        navBtn.appendChild( buttonNavSub);
    }
    function populateNavBtn() {
        populateNavSubBtn(homeBtnStrBuildObj);
        populateNavSubBtn(searchBtnStrBuildObj);
        populateNavSubBtn(compareBtnStrBuildObj);
        populateNavSubBtn(statisticsBtnStrBuildObj);
    }

    function populateSearchPage(createStr) {
        const tableSearchArea =  buildElement(new BuildObj("table","user-input-table"));
        createStr.forEach((row) =>{
             let tr = createTableTr(row);
             tableSearchArea.appendChild(tr);
        });
        searchSearchArea.appendChild(tableSearchArea);
    }
    
    populateFrontPageBtn();
    populateNavBtn(); 
    populateSearchPage(searchCriteriaCreateArr);
});

function buildObjHelper(createHash) {
    let buildObj = new BuildObj();

    for (const key in createHash) {
        buildObj[key] = createHash[key];
    }
    return buildObj;
}

function buildElement(buildObj){
    let newElement = document.createElement(buildObj.tag);
    if (buildObj.tag === "input"){
        if (buildObj.inputType!="text")
            newElement.type = buildObj.inputType;
    }

    if (Array.isArray(buildObj.classArr)) {
        buildObj.classArr.forEach((c) =>{
            newElement.classList.add(c);
        });
    }
    else if (buildObj.classArr)
        newElement.classList.add(buildObj.classArr);
    
    if (buildObj.name)
        newElement.innerHTML = buildObj.name;
    else if (buildObj.value)
        newElement.value  = buildObj.value;
    else if (buildObj.innerHTML)
        newElement.innerHTML = buildObj.innerHTML;

    if (buildObj.tag === 'label' && buildObj.lableName) 
        newElement.setAttribute('for', buildObj.lableName);
        
    
    return newElement;
}

function createTableTr(trCreateObjArr) {
    let masterTr =  buildElement(new BuildObj("tr"));
    trCreateObjArr.forEach((tdCreateObj)=>{
        let innerTd =  createTableTd(tdCreateObj);

        if (Array.isArray(innerTd)) {
            innerTd.forEach((td)=>{
                masterTr.appendChild(td);
            });
        }
        else
            masterTr.appendChild(innerTd);
    });
    return masterTr;
}

function createTableTd(tdCreateObjArr) {
    let returnArr = [];
    if (Array.isArray(tdCreateObjArr)) {
        tdCreateObjArr.forEach((tdCreateObj)=>{
            returnArr = returnArr.concat(createTableTdHelper(tdCreateObj));
        });
    }
    else
        returnArr = returnArr.concat(createTableTdHelper(tdCreateObjArr));
    return returnArr;
}

function createTableTdHelper(tdCreateObj) {
    let returnArr = [];
    if (tdCreateObj.lableName){
        let labelmasterTd =  buildElement(new BuildObj("td"));
        let labelObj = new BuildObj("label",null,null,null,tdCreateObj.lableName,tdCreateObj.id);
        let labelTd =  buildElement(labelObj);
        labelmasterTd.appendChild(labelTd);
        returnArr.push(labelmasterTd);
    }
    let innterTd =  buildElement(tdCreateObj);
    if (returnArr.length > 0) {
        returnArr.push(innterTd);
        return returnArr;
    }
    else
        return innterTd;
}