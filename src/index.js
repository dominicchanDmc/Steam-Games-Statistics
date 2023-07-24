import './index.scss';
import BuildObj from "./scripts/buildObj.js"
import * as Helper from "./scripts/helper.js"

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
const operatorList = Helper.optionObjHashHelper({greaterEqual:"Greater and Equal (>=)",greater:"Greater (>)",samller:"Samller (<)"});
const languagesValue = ["English","French","German","Italian","Japanese","Korean","Russian","Simplified Chinese","Traditional Chinese"];
const languagesKey = ["Eng","Fre","Ger","Ita","Jap","Koean","Rus","SC","TC"];
const languagesList = Helper.optionObjArrHelper(languagesValue,languagesKey);
const categoriesValue = ["Co-op","Full controller support","LAN Co-op","MMO","Multi-player","Online Co-op","Online PvP","Partial Controller Support","PvP","Shared/Split Screen","Single-player","Steam Achievements"];
const categoriesKey = ["Coo","FCS","LCoo","MMO","Mp","OCoo","OPvP","PCS","PvP","SSS","SP","SA"];
const categoriesList = Helper.optionObjArrHelper(categoriesValue,categoriesKey);
const orderList = Helper.optionObjHashHelper({ratingDesc:"Rating Descending",ratingAsc:"Rating Ascending",nameDesc:"Name Descending",nameAsc:"Name Ascending",releaseDateDesc:"Release Date Descending",releaseDateAsc:"Release Date Ascending",},"orderBy");


//frontPage
const searchBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-magnifying-glass"],"Search","searchPage","Search and display detail information by different criteria");
const compareBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-table"],"Compare","comparePage","Compare item between 2 games with table or chart");
const statisticsBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-chart-simple"],"Statistics","statistPage","Data statistics for the period");
const homeBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-house"],"Home","frontPage");
//searchCriteria
const nameInputObj = new BuildObj("input",null,null,"gameName",null,"text","Name:");
const releaseFromInputObj = new BuildObj("input",null,null,"releaseFrom",null,"month","Release From:");
const releaseToInputObj = new BuildObj("input",null,null,"releaseTo",null,"month","Release To:");
const ratingInputObj = Helper.buildObjHelper({tag:"select",id:"operator",options:operatorList});
const numberInputObj = Helper.buildObjHelper({tag:"input",name:"rating", id:"rating",inputType:"number",attribute:"0.01",lableName:"Rating:"});
const languagesInputObj = Helper.buildObjHelper({tag:"select",id:"languages",options:languagesList,lableName:"Supported languages:"});
const categoriesInputObj = Helper.buildObjHelper({tag:"select",id:"categories",options:categoriesList,lableName:"Categories:"});
const orderInputObj = Helper.buildObjHelper({tag:"select",id:"orderBy",options:orderList,lableName:"Order by:"});

const searchBtnObj = Helper.buildObjHelper({tag:"button",classArr:["searchCriteriaBtn"], id:"searchBtn",innerHTML:"Search"});
const searchBtnIconObj = Helper.buildObjHelper({tag:"i",classArr:["fa-solid", "fa-magnifying-glass"]});

const searchCriteriaCreateArr = [[nameInputObj,releaseFromInputObj,releaseToInputObj]
,[[ratingInputObj,numberInputObj],languagesInputObj,categoriesInputObj],[orderInputObj,[searchBtnObj,searchBtnIconObj]]];
//searchResultList
const headerTrNameObj = Helper.buildObjHelper({tag:"input",inputType:"text",classArr:["searchListCol-150"],value:"Name",readonly:"true"});
const headerTrReleaseDateObj = Helper.buildObjHelper({tag:"input",classArr:["searchListCol-80"],inputType:"text",value:"Release Date",readonly:"true"});
const headerTrRatingObj = Helper.buildObjHelper({tag:"input",classArr:["searchListCol-80"],inputType:"text",value:"Rating",readonly:"true"});
const headerTrLanguagesObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:"Languages",classArr:["searchListCol-150"],readonly:"true"});
const headerTrCategoriesObj = Helper.buildObjHelper({tag:"input",inputType:"text",classArr:["searchListCol-150"],value:"Categories",readonly:"true"});
const headerTrSelectBtnObj = Helper.buildObjHelper({tag:"button",classArr:["searchResultBtn"],innerHTML:"Select"});
const headerTrAddToCompareBtnObj = Helper.buildObjHelper({tag:"button",classArr:["searchResultBtn"],innerHTML:"Compare"});

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

    function addDataForCreateArr(headerTrCreateArr_i,data) {
        const headerTrCreateArr_new = headerTrCreateArr_i.map((element) => {
            return { ...element };
          });
        headerTrCreateArr_new[0].value = data.name;
        headerTrCreateArr_new[1].value = data.rating;
        headerTrCreateArr_new[2].value = data.release_date;
        headerTrCreateArr_new[3].value = Helper.stringCut(data.supported_languages);
        headerTrCreateArr_new[4].value = Helper.stringCut(data.categories);
    
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
    const searchObj = Helper.searchObjArrHelper();
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
        // (item.type==='game') &&
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
    else{
        searchResultP.innerHTML = "";
        const tableSearchResult = buildElement(new BuildObj("table"));
        const headerTrSearchResult = createTableTr(headerTrCreateArr);
        tableSearchResult.appendChild(headerTrSearchResult);

        filteredData.forEach((data)=>{
            let headerTrCreateArrWithData = addDataForCreateArr(headerTrCreateArr,data)
            const trSearchResult = createTableTr(headerTrCreateArrWithData);
            tableSearchResult.appendChild(trSearchResult);
        });       
        searchResultList.appendChild(tableSearchResult);

        if (filteredData.length === 1){
            displayDetial(filteredData[0].name);
        }
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
    else if (buildObj.tag === 'img'&& buildObj.src){
        newElement.src = buildObj.src;
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
                let ratingSelect = rating[0].children[0];
                let numberInputTd = numberInputObjArr[0];
 
                numberInputTd.insertBefore(ratingSelect, numberInputTd.lastElementChild);
                masterTr.appendChild(numberInputObjArr[0]);
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
            returnArr = returnArr.concat(createTableTdInner(tdCreateObj));
        });
    }
    else
        returnArr = createTableTdInner(tdCreateObjArr);
    return returnArr;
}

function createTableTdInner(tdCreateObj) {
    let returnArr = [];
    let labelmasterTd =  buildElement(new BuildObj("td"));
    if (tdCreateObj.colSpan)
        labelmasterTd.colSpan = tdCreateObj.colSpan;
    if (tdCreateObj.lableName){
        let labelObj = new BuildObj("label",null,null,null,tdCreateObj.lableName,tdCreateObj.id);
        let labelTd =  buildElement(labelObj);
        labelmasterTd.appendChild(labelTd);
    }
    
    let innterTd = buildElement(tdCreateObj);
    labelmasterTd.appendChild(innterTd);
    // returnArr.push(innterTd);
    returnArr.push(labelmasterTd);
    return returnArr;

}

function displayDetial(name) {
    let game = dataSet[name];
    console.log(game);
    const detialPage = document.getElementById("detialPage");

    const nameObj = Helper.buildObjHelper({tag:"input",classArr:["detialCol-200"],inputType:"text",value:game.name,readonly:"true",lableName:"Name:",colSpan:"4"});
    const headerImageObj = Helper.buildObjHelper({tag:"img",classArr:["headerImage"],src:game["Header image"]});
    const releaseDateObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.release_date,readonly:"true",lableName:"Release Date:"});
    const ratingObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.rating,readonly:"true",lableName:"Rating:"});
    const languagesObj = Helper.buildObjHelper({tag:"textarea",classArr:["detialCol-200"],inputType:"text",value:Helper.stringCut(game.supported_languages),readonly:"true",lableName:"Supported Languages:",colSpan:"4"});
    const achievementsObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.achievements,readonly:"true",lableName:"Achievements:"});
    const genresObj = Helper.buildObjHelper({tag:"textarea",classArr:["detialCol-200"],inputType:"text",value:Helper.stringCut(game.genres),readonly:"true",lableName:"Genres:",colSpan:"4"});
    const ownersObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.owners,readonly:"true",lableName:"Owners:"});
    const tagsObj = Helper.buildObjHelper({tag:"textarea",classArr:["detialCol-200"],inputType:"text",value:Helper.stringCut(game.tags),readonly:"true",lableName:"Tags:",colSpan:"4"});
    const platformsObj= Helper.buildObjHelper({tag:"input",inputType:"text",value:Helper.stringCut(game.platforms),readonly:"true",lableName:"Platforms:"});
    const priceObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.price,readonly:"true",lableName:"Price (USD):"});

    const detailSelectBtnObj = Helper.buildObjHelper({tag:"button",classArr:["detailBtn"],innerHTML:"Select"});
    const detailAddToCompareBtnObj = Helper.buildObjHelper({tag:"button",classArr:["detailBtn"],innerHTML:"Compare"});
    

    const detialCreateArr = [[nameObj],[releaseDateObj,ratingObj],[ownersObj,priceObj],[languagesObj],[platformsObj,achievementsObj],[genresObj],[tagsObj]];
    detialPage.innerHTML = "";


    
    if (game["Header image"]){
        let headerImage = buildElement(headerImageObj);
        detialPage.append(headerImage);
    }
    const detialTable =  buildElement(new BuildObj("table"));
    detialCreateArr.forEach((row) =>{
            let tr = createTableTr(row);
            detialTable.appendChild(tr);
    });
    detialPage.appendChild(detialTable);
    detialPage.scrollIntoView();
}
    
    populateFrontPageBtn();
    populateNavBtn(); 
    populateSearchPage(searchCriteriaCreateArr);
});



