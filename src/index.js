import './index.scss';
import BuildObj from "./scripts/BuildObj.js"
import OptionObj from "./scripts/OptionObj.js"
import SearchObj from "./scripts/SearchObj.js"

async function getData (){
    const request = await fetch("/data/steamData-after2019.json")
    const respone = await request.json();
    const array = Object.values(respone);
    const newObj = array.reduce((obj,item)=>Object.assign(obj,{[item.name]: item}),{})
    // console.log("string",newObj["Second Sight"]);
    return newObj;
}
document.addEventListener("DOMContentLoaded", async () => {

//pullDownList 
const operatorList = optionObjHashHelper({greaterEqual:"Greater and Equal (>=)",greater:"Greater (>)",samller:"Samller (<)"});
const languagesValue = ["English","French","German","Italian","Japanese","Korean","Russian","Simplified Chinese","Traditional Chinese"];
const languagesKey = ["Eng","Fre","Ger","Ita","Jap","Koean","Rus","SC","TC"];
const languagesList = optionObjArrHelper(languagesValue,languagesKey);
const categoriesValue = ["Co-op","Full controller support","LAN Co-op","MMO","Multi-player","Online Co-op","Online PvP","Partial Controller Support","PvP","Shared/Split Screen","Single-player","Steam Achievements"];
const categoriesKey = ["Coo","FCS","LCoo","MMO","Mp","OCoo","OPvP","PCS","PvP","SSS","SP","SA"];
const categoriesList = optionObjArrHelper(categoriesValue,categoriesKey);
const orderList = optionObjHashHelper({ratingDesc:"Rating Descending",ratingAsc:"Rating Ascending",nameDesc:"Name Descending",nameAsc:"Name Ascending",releaseDateDesc:"Release Date Descending",releaseDateAsc:"Release Date Ascending",},"orderBy");


//frontPage
const searchBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-magnifying-glass"],"Search","searchPage","Search and display detail information by different criteria");
const compareBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-table"],"Compare","comparePage","Compare item between 2 games with table or chart");
const statisticsBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-chart-simple"],"Statistics","statistPage","Data statistics for the period");
const homeBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-house"],"Home","frontPage");
//searchCriteria
const nameInputObj = new BuildObj("input",null,null,"gameName",null,"text","Name:");
const releaseFromInputObj = new BuildObj("input",null,null,"releaseFrom",null,"month","Release From:");
const releaseToInputObj = new BuildObj("input",null,null,"releaseTo",null,"month","Release To:");
const ratingInputObj = buildObjHelper({tag:"select",id:"operator",options:operatorList});
const numberInputObj = buildObjHelper({tag:"input",name:"rating", id:"rating",inputType:"number",attribute:"0.01",lableName:"Rating:"});
const languagesInputObj = buildObjHelper({tag:"select",id:"languages",options:languagesList,lableName:"Supported languages:"});
const categoriesInputObj = buildObjHelper({tag:"select",id:"categories",options:categoriesList,lableName:"Categories:"});
const orderInputObj = buildObjHelper({tag:"select",id:"orderBy",options:orderList,lableName:"Order by:"});

const searchBtnObj = buildObjHelper({tag:"button",classArr:["searchCriteriaBtn"], id:"searchBtn",innerHTML:"Search"});
const searchBtnIconObj = buildObjHelper({tag:"i",classArr:["fa-solid", "fa-magnifying-glass"]});

const searchCriteriaCreateArr = [[nameInputObj,releaseFromInputObj,releaseToInputObj]
,[[ratingInputObj,numberInputObj],languagesInputObj,categoriesInputObj],[orderInputObj,[searchBtnObj,searchBtnIconObj]]];
//searchResultList
const headerTrNameObj = buildObjHelper({tag:"input",inputType:"text",classArr:["searchListCol-150"],value:"Name",readonly:"true"});
const headerTrReleaseDateObj = buildObjHelper({tag:"input",classArr:["searchListCol-80"],inputType:"text",value:"Release Date",readonly:"true"});
const headerTrRatingObj = buildObjHelper({tag:"input",classArr:["searchListCol-80"],inputType:"text",value:"Rating",readonly:"true"});
const headerTrLanguagesObj = buildObjHelper({tag:"input",inputType:"text",value:"Languages",classArr:["searchListCol-150"],readonly:"true"});
const headerTrCategoriesObj = buildObjHelper({tag:"input",inputType:"text",classArr:["searchListCol-150"],value:"Categories",readonly:"true"});
const headerTrSelectBtnObj = buildObjHelper({tag:"button",classArr:["searchResultBtn"],innerHTML:"Select"});
const headerTrAddToCompareBtnObj = buildObjHelper({tag:"button",classArr:["searchResultBtn"],innerHTML:"Compare"});

const headerTrCreateArr = [headerTrNameObj,headerTrRatingObj,headerTrReleaseDateObj,headerTrLanguagesObj,headerTrCategoriesObj];


    const dataSet = await getData();
    const navBtn = document.getElementById("navBtn");
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

        let searchBtn = document.querySelector(".searchCriteriaBtn")
        searchBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            searchData(dataSet);
         })
    }

    function createArrHelper(headerTrCreateArr_i,data) {
        const headerTrCreateArr_new = headerTrCreateArr_i.map((element) => {
            return { ...element };
          });
        headerTrCreateArr_new[0].value = data.name;
        headerTrCreateArr_new[1].value = data.rating;
        headerTrCreateArr_new[2].value = data.release_date;
        headerTrCreateArr_new[3].value = data.supported_languages.replace(/\[|\]|'/g, "");
        headerTrCreateArr_new[4].value = data.categories.replace(/\[|\]|'/g, "");
    
        const headerTrSelectBtnObj_new = Object.assign({}, headerTrSelectBtnObj);
        headerTrSelectBtnObj_new.attribute = data.name;
        headerTrSelectBtnObj_new.onClick = function () {
            displayDetial(data.name);
        }
        headerTrCreateArr_new.push(headerTrSelectBtnObj_new)
    
        const headerTrAddToCompareBtnObj_new = Object.assign({}, headerTrAddToCompareBtnObj);
        headerTrAddToCompareBtnObj_new.attribute = data.name;
        headerTrAddToCompareBtnObj_new.onClick = function () {
            displayDetial(data.name);
        }
        headerTrCreateArr_new.push(headerTrAddToCompareBtnObj_new);
        return headerTrCreateArr_new;
    }

    
function searchData(dataSet) {
    const searchObj = searchObjArrHelper();
    if (searchObj.checkOnlyOneCriteria(0))
        return;
    if (!searchVaildation(searchObj))
        return;
    else{
        const filteredData = filterData(searchObj,dataSet);
        console.log(filteredData);
        displaySeachResult(filteredData);
    }
}

function filterData(criteria, dataSet) {
    const filteredData = Object.values(dataSet).filter((item) => {
      const releaseFrom = Date.parse(criteria.releaseFrom);
      const releaseTo = Date.parse(criteria.releaseTo);
      const gameReleaseDate = Date.parse(item.release_date);
  
      if (
        (!criteria.gameName || item.name.toLowerCase().includes(criteria.gameName.toLowerCase())) &&
        (!criteria.releaseFrom || gameReleaseDate >= releaseFrom) &&
        (!criteria.releaseTo || gameReleaseDate <= releaseTo) &&
        (!criteria.operator || (
          criteria.operator === "greaterEqual" && item.rating >= criteria.rating) ||
          (criteria.operator === "greater" && item.rating > criteria.rating) ||
          (criteria.operator === "smaller" && item.rating < criteria.rating)
        ) &&
        (!criteria.languages || criteria.languages.length === 0 || criteria.languages.includes(item.supported_languages)) &&
        (!criteria.categories || criteria.categories.length === 0 || criteria.categories.some(category => item.categories.includes(category)))
      ) {
        return true;
      }
      return false;
    });

    switch (criteria.orderBy) {
        case "ratingDesc":
            filteredData.sort((a, b) => b.rating - a.rating);
            break;
        case "ratingAsc":
            filteredData.sort((a, b) => a.rating - b.rating);
            break;
        case "nameDesc":
            filteredData.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "nameAsc":
            filteredData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "releaseDateDesc":
            filteredData.sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date));
            break;
        case "releaseDateAsc":
            filteredData.sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date));
            break;
    }

    const limitedData = filteredData.slice(0, 50);
    return limitedData;
    // return filteredData;
  }

function searchVaildation(searchObj){
    if (searchObj.releaseFrom && searchObj.releaseTo){
        if (searchObj.releaseTo < searchObj.releaseFrom){
            alert('Release To must later than Release From')
            return false;
        }
    }

    if ((searchObj.operator && !searchObj.rating)||
     (!searchObj.operator && searchObj.rating)){
        alert('Missing Operator or Rating')
            return false;
     }
    return true;
}

function displaySeachResult(filteredData) {
   const searchResultP = document.getElementById("searchResultP");
   const searchResultList = document.getElementById("searchResultList");
   searchResultList.innerHTML = "";

    if (filteredData.length === 0)
        searchResultP.innerHTML = "No result";
    else if (filteredData.length === 1){

    }
    else{
        searchResultP.innerHTML = "";
        const tableSearchResult = buildElement(new BuildObj("table"));
        const headerTrSearchResult = createTableTr(headerTrCreateArr);
        tableSearchResult.appendChild(headerTrSearchResult);

        filteredData.forEach((data)=>{
            let headerTrCreateArrWithData = createArrHelper(headerTrCreateArr,data)
            const trSearchResult = createTableTr(headerTrCreateArrWithData);
            tableSearchResult.appendChild(trSearchResult);
        });       
        searchResultList.appendChild(tableSearchResult);
    }
}

function buildElement(buildObj){
    let newElement = document.createElement(buildObj.tag);

    if (buildObj.tag === "select"){
        buildObj.options.forEach((options)=>{
            let optionElement = document.createElement("option");
            optionElement.value = options.value;
            optionElement.innerHTML = options.displayText;
            newElement.appendChild(optionElement);
        });
    }
    else if (buildObj.tag === "input"){
        if (buildObj.inputType!="text")
            newElement.type = buildObj.inputType;
    }
    else if (buildObj.tag === 'label' && buildObj.lableName) 
        newElement.setAttribute('for', buildObj.lableName);
    else if (buildObj.tag === 'button'&& buildObj.attribute){
        newElement.setAttribute(`data-name`,buildObj.attribute) 
    }

    if (Array.isArray(buildObj.classArr)) {
        buildObj.classArr.forEach((c) =>{
            newElement.classList.add(c);
        });
    }
    else if (buildObj.classArr)
        newElement.classList.add(buildObj.classArr);

    if (buildObj.value)
        newElement.value  = buildObj.value;

        if (buildObj.name)
            newElement.innerHTML = buildObj.name;
        else if (buildObj.innerHTML)
            newElement.innerHTML = buildObj.innerHTML;

    if (buildObj.id)
        newElement.id = buildObj.id;
    
    if (buildObj.readonly)
        newElement.readOnly = true;

    if (buildObj.onClick) {
        newElement.onclick = buildObj.onClick;
    }

    return newElement;
}

function createTableTr(trCreateObjArr) {
    let masterTr =  buildElement(new BuildObj("tr"));
    trCreateObjArr.forEach((tdCreateObj)=>{
        if (Array.isArray(tdCreateObj)) {
            //for rating only
            if (tdCreateObj[0].id === "operator"){
                let rating = createTableTd(tdCreateObj[0]);
                let numberInputObjArr = createTableTd(tdCreateObj[1]);
                masterTr.appendChild(numberInputObjArr[0]);
                rating.forEach((td) => masterTr.appendChild(td));
                masterTr.appendChild(numberInputObjArr[1]);
            }
            else if (tdCreateObj[0].id === "searchBtn"){
                // for searchBtn 
                let searchBtn = buildElement(tdCreateObj[0]);
                let searchBtnIcon = createTableTd(tdCreateObj[1]);
                searchBtn.appendChild(searchBtnIcon[0]);
                let newTd =  buildElement(new BuildObj("td"));
                newTd.colSpan = "6";
                newTd.appendChild(searchBtn);
                masterTr.appendChild(newTd);
            }
        }else{
            let innerTd = createTableTd(tdCreateObj);

            if (Array.isArray(innerTd)) {
                innerTd.forEach((td)=>{
                    masterTr.appendChild(td);
                });
            }
            else
                masterTr.appendChild(innerTd);
         }

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
        returnArr = createTableTdHelper(tdCreateObjArr);
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
    returnArr.push(innterTd);
    return returnArr;

}

function buildObjHelper(createHash) {
    let buildObj = new BuildObj();

    for (const key in createHash) {
        buildObj[key] = createHash[key];
    }
    return buildObj;
}

function optionObjHashHelper(operatorHash,type) {
    let optionObjList = [];
    if (type != "orderBy")
        optionObjList.push(new OptionObj("",""));
    for (const key in operatorHash) {
        let optionObj = new OptionObj();
        optionObj.value = key;
        optionObj.displayText = operatorHash[key];
        optionObjList.push(optionObj);
    }
    return optionObjList;
}
function optionObjArrHelper(valueList,keyList) {
    let optionObjList = [];
    optionObjList.push(new OptionObj("",""));
    for (let i=0;i<valueList.length;i++) {
        let optionObj = new OptionObj();
        optionObj.value = keyList[i];
        optionObj.displayText = valueList[i];
        optionObjList.push(optionObj);
    }
    return optionObjList;
}
function searchObjArrHelper() {
    let gameName = document.getElementById("gameName");
    let releaseFrom = document.getElementById("releaseFrom");
    let releaseTo = document.getElementById("releaseTo");
    let operator = document.getElementById("operator");
    let rating = document.getElementById("rating");
    let languages = document.getElementById("languages");
    let categories = document.getElementById("categories");
    let orderBy = document.getElementById("orderBy");

    let searchObj = new SearchObj();

    searchObj.gameName = gameName.value;
    searchObj.releaseFrom = releaseFrom.value;
    searchObj.releaseTo = releaseTo.value;
    searchObj.operator = operator.value;
    searchObj.rating = rating.value;
    searchObj.languages = languages.value;
    searchObj.categories = categories.value;
    searchObj.orderBy = orderBy.value;

    return searchObj;
}

    function displayDetial(name) {
        console.log(dataSet[name]);
    }
    
    populateFrontPageBtn();
    populateNavBtn(); 
    populateSearchPage(searchCriteriaCreateArr);
});



