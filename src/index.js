import './index.scss';
import BuildObj from "./scripts/buildObj.js"
import * as Helper from "./scripts/helper.js"
  
  function test() {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }


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
//compareCriteria
const compareNameObj = Helper.buildObjHelper({tag:"input",id:"gameCompare1",inputType:"text",classArr:["searchListCol-150"],lableName:"Game 1:",readonly:"true",colSpan:2});
const compareName2Obj = Helper.buildObjHelper({tag:"input",id:"gameCompare2",inputType:"text",classArr:["searchListCol-150"],lableName:"Game 2:",readonly:"true",colSpan:2});
const radioBtnTbObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"tb",value:"Table", attributes: { name: "displayBy", value: "Table", id: "tb" ,checked:"checked"}});
const radioBtnChartObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"ch",value:"Chart", attributes: { name: "displayBy", value: "ch", id: "ch" }});
const compareBtnObj = Helper.buildObjHelper({tag:"button",classArr:["compareCriteriaBtn"], id:"compareBtn",innerHTML:"Compare"});
const compareBtnIconObj = Helper.buildObjHelper({tag:"i",classArr:["fa-solid", "fa-table"]});
const ownersChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"ownersChb",value:"owners",lableName:"Owners",skipTd:false, attributes: {value: "owners", id: "ownersChb" }});
const releaseDateChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"releaseDateChb",value:"releaseDate",lableName:"Release Date", skipTd:false, attributes: {value: "releaseDate", id: "releaseDateChb"}});
const priceChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"priceChb",value:"price",lableName:"Price",skipTd:false, attributes: {value: "price", id: "priceChb" }});
const supportedLanguagesChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"supportedLanguagesChb",value:"supportedLanguages",lableName:"Supported Languages", skipTd:false, attributes: {value: "supportedLanguages", id: "supportedLanguages"}});
const categoriesChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"categoriesChb",value:"categories",lableName:"Categories",skipTd:false, attributes: {value: "categories", id: "categoriesChb" }});
const genresChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"genresChb",value:"genres",lableName:"Genres", skipTd:false, attributes: {value: "genres", id: "genres"}});
const tagsChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"tagsChb",value:"tags",lableName:"Tags", skipTd:false, attributes: {value: "tags", id: "tags"}});
const averageForeverChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"averageForeverChb",value:"averageForever",lableName:"User Average Forever (C)", skipTd:false, attributes: {value: "averageForeverChbObj", id: "averageForeverChbObj"}});
const totalNegativeChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"totalNegativeChb",value:"totalNegative",lableName:"Total Negative (C)",skipTd:false, attributes: {value: "totalNegative", id: "totalNegativeChb" }});
const totalPositiveChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"totalPositiveChb",value:"totalPositive",lableName:"Total Positive (C)", skipTd:false, attributes: {value: "totalPositive", id: "totalPositive"}});
const reviewScoreChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"reviewScoreChb",value:"reviewScore",lableName:"Review Score (C)", skipTd:false, attributes: {value: "reviewScore", id: "reviewScore"}});
const ratingChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"ratingChb",value:"rating",lableName:"Rating (C)", skipTd:false, attributes: {value: "ratingChbObj", id: "ratingChbObj"}});


const compareCriteriaCreateArr = [[releaseDateChbObj,ownersChbObj,ratingChbObj,priceChbObj]
,[totalPositiveChbObj,totalNegativeChbObj,reviewScoreChbObj,averageForeverChbObj]
,[supportedLanguagesChbObj,categoriesChbObj,tagsChbObj,genresChbObj]
,[[radioBtnTbObj,radioBtnChartObj],[compareBtnObj,compareBtnIconObj]]];

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

    function addDataForCreateSearchResultArr(headerTrCreateArr_i,data) {
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
            addToCompare(data.name);
        }
        headerTrCreateArr_new.push(headerTrAddToCompareBtnObj_new);
        return headerTrCreateArr_new;
    }
    
    function populateComparePage(createStr) {
        const compareCriteriaArea = document.getElementById("compare-searchArea");
        const tableCompareArea =  buildElement(new BuildObj("table"));
        const compareCriteriaTr =  buildElement(new BuildObj("tr"));
        const compareCriteriaTd =  buildElement(new BuildObj("td"));
        const compareCriteriaTd2 =  buildElement(new BuildObj("td"));
        const labelG1Obj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Game1",lableName:"gameCompare1"}));
        const labelG2Obj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Game2",lableName:"gameCompare2"}));
        const compareBtnObj = buildElement(Helper.buildObjHelper({tag:"button",id:"clearBtn",innerHTML:"Clear"}));
        const compareBtn2Obj = buildElement(Helper.buildObjHelper({tag:"button",id:"clearBtn2",innerHTML:"Clear"}));
        const compareNameInput = buildElement(compareNameObj);
        const compareNameInput2 = buildElement(compareName2Obj);

        compareBtnObj.onclick = function () {
            compareNameInput.value = "";
        }

        compareBtn2Obj.onclick = function () {
            compareNameInput2.value = "";
        }
        compareCriteriaTd.colSpan = 2;
        compareCriteriaTd.appendChild(labelG1Obj);
        compareCriteriaTd.appendChild(compareNameInput);
        compareCriteriaTd.appendChild(compareBtnObj);
        compareCriteriaTd2.colSpan = 2;
        compareCriteriaTd2.appendChild(labelG2Obj);
        compareCriteriaTd2.appendChild(compareNameInput2);
        compareCriteriaTd2.appendChild(compareBtn2Obj);

        compareCriteriaTr.appendChild(compareCriteriaTd);
        compareCriteriaTr.appendChild(compareCriteriaTd2);
        tableCompareArea.appendChild(compareCriteriaTr);

        createStr.forEach((row) =>{
             let tr = createTableTr(row);
             tableCompareArea.appendChild(tr);
        });
        compareCriteriaArea.appendChild(tableCompareArea);

        let compareBtn = document.querySelector(".compareCriteriaBtn")
        compareBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            compareData(dataSet);
         })

         const masterCheckbox = document.getElementById('masterChb');
        //  const checkboxes = document.querySelectorAll('.checkbox');
       
         masterCheckbox.addEventListener('change', () => {
           if (masterCheckbox.checked) {
             checkAllCheckboxes();
           } else {
             uncheckAllCheckboxes();
           }
         });
    }
    
function searchData(dataSet) {
    const searchObj = Helper.searchObjArrHelper("search");
    if (searchObj.checkOnlyOneCriteria("search",0)){
        alert("At least choose one Criteria");
        return;
    }
    if (!searchVaildation(searchObj))
        return;
    else{
        const filteredData = filterData(searchObj,dataSet);
        console.log(filteredData);
        displaySeachResult(filteredData);
    }
}

function compareData(dataSet) {
    const searchObj = Helper.searchObjArrHelper("compare");

    if (!searchObj.gameCompare1 || !gameCompare2){
        alert("Must select 2 games");
        return;
    }
    if (searchObj.checkOnlyOneCriteria("compare",0)){
        alert("At least choose one Criteria");
        return;
    }
    if (searchObj.radioBtn === "Chart" &&
     !searchObj.areOnlyFiveFieldsChecked()){
        alert("Display By Chart only support the criteria with (C)");
        return;
    }
       
    const gameData1 = dataSet[searchObj.gameCompare1];
    const gameData2 = dataSet[searchObj.gameCompare2];
    const propertyList = searchObj.getCheckedPropertiesArray();
    const compareResultP = document.getElementById("compareResultP");
    const compareResult = document.getElementById("compareResult");
    compareResultP.innerHTML = "";
    compareResult.innerHTML = "";

    if (searchObj.radioBtn === "Table")
        compareDisplayByTable(propertyList,gameData1,gameData2); 
    else 
        compareDisplayByChart(propertyList,gameData1,gameData2); 
}

function compareDisplayByTable(propertyList,gameData1,gameData2) {

    const compareResultTable = buildElement(new BuildObj("table"));
    const compareResultTr = buildElement(new BuildObj("tr"));
    const compareResultEmptyTh = buildElement(new BuildObj("th"));
    const compareResultTh = buildElement(new BuildObj("th"));
    const compareResultTh2 = buildElement(new BuildObj("th"));
    const game1Th = buildElement(Helper.buildObjHelper({tag:"input",inputType:"text",value:gameData1.name,readonly:true}));
    const game2Th = buildElement(Helper.buildObjHelper({tag:"input",inputType:"text",value:gameData2.name,readonly:true}));
    
    compareResultTh.appendChild(game1Th);
    compareResultTh2.appendChild(game2Th);
    compareResultTr.appendChild(compareResultEmptyTh);
    compareResultTr.appendChild(compareResultTh);
    compareResultTr.appendChild(compareResultTh2);

    compareResultTable.appendChild(compareResultTr);

    propertyList.forEach((property)=>{
        const trObj = buildElement(new BuildObj("tr"));
        let classArr = [];
        let input = "input";
        let gameData1Value = gameData1[property];
        let gameData2Value = gameData2[property];
        
        if (property ==="categories" || property ==="tags"
        || property ==="genres"|| property ==="supported_languages"){
            classArr = ["compareCol-500"]
            input = "textarea";
            gameData1Value = Helper.stringCut(gameData1[property]);
            gameData2Value = Helper.stringCut(gameData2[property]);
        }
        const labelObj = createTableTd(Helper.buildObjHelper({tag:"label",lableName:Helper.stringTran(property)}));
        const game1Obj = createTableTd(Helper.buildObjHelper({tag:input,classArr:classArr,inputType:"text",value:gameData1Value,readonly:true}));
        const game2Obj = createTableTd(Helper.buildObjHelper({tag:input,classArr:classArr,inputType:"text",value:gameData2Value,readonly:true}));
        labelObj.forEach(obj => trObj.appendChild(obj));
        game1Obj.forEach(obj => trObj.appendChild(obj));
        game2Obj.forEach(obj => trObj.appendChild(obj));
        compareResultTable.appendChild(trObj);
    });
    compareResult.appendChild(compareResultTable);
}

function compareDisplayByChart(propertyList,gameData1,gameData2) {
    appendCanvas(propertyList);
    let i=0;
    
    propertyList.forEach((property)=>{
        const ctx = document.getElementById(`canvas${i}`); 
        const createHash = {ctx:ctx,type:"bar",compareCol:property
        ,displayLable:property,game1Data:gameData1,game2Data:gameData2
    ,beginAtZero:false};
        const chartObj = Helper.chartObjHelper(createHash);
        
        buildCompareChart(chartObj);
        i++;
    });

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
            let headerTrCreateArrWithData = addDataForCreateSearchResultArr(headerTrCreateArr,data)
            const trSearchResult = createTableTr(headerTrCreateArrWithData);
            tableSearchResult.appendChild(trSearchResult);
        });       
        searchResultList.appendChild(tableSearchResult);

        if (filteredData.length === 1){
            displayDetial(filteredData[0].name);
        }
    }
}

function addToCompare(name) {
    const gameCompare1 = document.getElementById("gameCompare1");
    const gameCompare2 = document.getElementById("gameCompare2");
    const comparePage = document.getElementById("comparePage");
    if (!gameCompare1.value){
        gameCompare1.value = name;
        alert("add success, you can add 1 more game for compare");
    }
    else if (!gameCompare2.value){
        if (gameCompare1.value === name){
            alert("This game alreadly added");
            return;
        }

        gameCompare2.value = name;
        const answer = window.confirm("add success, do you compare now?");
        if (answer)
            comparePage.scrollIntoView();
    }
    else
        alert("Only can compare between 2 game ");
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
        if (buildObj.inputType === "radio" && buildObj.attributes){
            for (const [key, value] of Object.entries(buildObj.attributes)) {
                newElement.setAttribute(key, value);
            }    
        }
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
            else if (tdCreateObj[0].id === "compareBtn"){
                // for compareBtn 
                let compareBtn = buildElement(tdCreateObj[0]);
                let compareBtnIcon = createTableTd(tdCreateObj[1]);
                compareBtn.appendChild(compareBtnIcon[0]);
                let newTd =  buildElement(new BuildObj("td"));
                newTd.colSpan = "6";
                newTd.appendChild(compareBtn);
                masterTr.appendChild(newTd);
            }
            else if (tdCreateObj[0].id === "tb"){
                //for compareRadio
                let newTd =  buildElement(new BuildObj("td"));
                let labelObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Display By:"}));
                let labelTbObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Table",lableName:"tb"}));
                let labelChObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Chart",lableName:"ch"}));
                newTd.appendChild(labelObj);    
                newTd.colSpan = 2;  
                let radioBtn = buildElement(tdCreateObj[0]);
                let radioBtn2 = buildElement(tdCreateObj[1]);
                newTd.appendChild(labelTbObj);
                newTd.appendChild(radioBtn);
                newTd.appendChild(labelChObj);
                newTd.appendChild(radioBtn2);

                masterTr.appendChild(newTd);
            }
            else{
                let innerTd = createTableTd(tdCreateObj);

                if (Array.isArray(innerTd)) {
                    innerTd.forEach((td)=>{
                        masterTr.appendChild(td);
                    });
                }
                else
                    masterTr.appendChild(innerTd);
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
            let labelObjClass=[];
            if (tdCreateObj.lableClass)
                labelObjClass = tdCreateObj.lableClass;
            let labelObj = new BuildObj("label",labelObjClass,null,null,tdCreateObj.lableName,tdCreateObj.id);
            let labelTd =  buildElement(labelObj);
            if (tdCreateObj.skipTd)
                returnArr.push(labelTd);
            else
                labelmasterTd.appendChild(labelTd);
        }  
            let innterTd = buildElement(tdCreateObj);
            if (tdCreateObj.skipTd)
                returnArr.push(innterTd);
            else
                labelmasterTd.appendChild(innterTd);

        if (!tdCreateObj.skipTd)
             returnArr.push(labelmasterTd);

        return returnArr;
}

function displayDetial(name) {
    let game = dataSet[name];
    console.log(game);
    const detialPage = document.getElementById("detialPage");

    const nameObj = Helper.buildObjHelper({tag:"input",classArr:["detialCol-1000"],inputType:"text",value:game.name,readonly:"true",lableName:"Name:",colSpan:"4"});
    const headerImageObj = Helper.buildObjHelper({tag:"img",classArr:["headerImage"],src:game["Header image"]});
    const noImageObj = Helper.buildObjHelper({tag:"input",classArr:["h1"],value:"No Image"});
    const releaseDateObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.release_date,readonly:"true",lableName:"Release Date:"});
    const ratingObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.rating,readonly:"true",lableName:"Rating:"});
    const languagesObj = Helper.buildObjHelper({tag:"textarea",classArr:["detialCol-1000"],inputType:"text",value:Helper.stringCut(game.supported_languages),readonly:"true",lableName:"Supported Languages:",colSpan:"4"});
    const achievementsObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.achievements,readonly:"true",lableName:"Achievements:"});
    const genresObj = Helper.buildObjHelper({tag:"textarea",classArr:["detialCol-1000"],inputType:"text",value:Helper.stringCut(game.genres),readonly:"true",lableName:"Genres:",colSpan:"4"});
    const ownersObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.owners,readonly:"true",lableName:"Owners:"});
    const tagsObj = Helper.buildObjHelper({tag:"textarea",classArr:["detialCol-1000"],inputType:"text",value:Helper.stringCut(game.tags),readonly:"true",lableName:"Tags:",colSpan:"4"});
    const platformsObj= Helper.buildObjHelper({tag:"input",inputType:"text",value:Helper.stringCut(game.platforms),readonly:"true",lableName:"Platforms:",colSpan:"4"});
    const priceObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.price,readonly:"true",lableName:"Price (USD):"});
    const categoriesObj = Helper.buildObjHelper({tag:"textarea",classArr:["detialCol-1000"],inputType:"text",value:Helper.stringCut(game.categories),readonly:"true",lableName:"Categories:",colSpan:"4"});
    const totalNegativeObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.total_negative,lableName:"Total Negative:",readonly:"true"});
    const totalPositiveObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.total_positive,lableName:"Total Positive:",readonly:"true"});
    const reviewScoreObj = Helper.buildObjHelper({tag:"input",inputType:"text",value:game.review_score,lableName:"Review Score:",readonly:"true"});
    

    const detailAddToCompareBtnObj = Helper.buildObjHelper({tag:"button",classArr:["detailBtn"],innerHTML:"Add To Compare"});
    const detailAddToCompareBtnIconObj = Helper.buildObjHelper({tag:"i",classArr:["fa-solid", "fa-table"]});
    
    const detialCreateArr = [[nameObj],[releaseDateObj,ownersObj],
    [ratingObj,priceObj],[platformsObj],[categoriesObj],
    [totalPositiveObj,totalNegativeObj],[languagesObj],[reviewScoreObj,
        achievementsObj],[genresObj],[tagsObj]];

    detialPage.innerHTML = "";


    
    if (game["Header image"]){
        let headerImage = buildElement(headerImageObj);
        detialPage.append(headerImage);
    }else{
        let noImage = buildElement(noImageObj);
        detialPage.append(noImage);
    }

    let imageAndBtnContainer = document.createElement("div");
    imageAndBtnContainer.style.display = "flex"; 
  
    let detailAddToCompareBtn = buildElement(detailAddToCompareBtnObj);
    detailAddToCompareBtn.onclick = function () {
        addToCompare(name);
    };
    let detailAddToCompareBtnIcon = buildElement(detailAddToCompareBtnIconObj);
    detailAddToCompareBtn.appendChild(detailAddToCompareBtnIcon);
    imageAndBtnContainer.appendChild(detailAddToCompareBtn);
  
    detialPage.appendChild(imageAndBtnContainer);
    
    const detialTable =  buildElement(new BuildObj("table"));
    detialCreateArr.forEach((row) =>{
            let tr = createTableTr(row);
            detialTable.appendChild(tr);
    });
    detialPage.appendChild(detialTable);
    detialPage.scrollIntoView();
}

function appendCanvas(propertyList) {
    const ctx = document.getElementById('chartArea'); 
    ctx.innerHTML = "";
    for(let i=0;i<propertyList.length;i++){
        let canvasId = "canvas" + i;
        const canvas = buildElement(
        Helper.buildObjHelper({tag:"canvas",id:canvasId}));
        ctx.appendChild(canvas);
    }
}


    
    populateFrontPageBtn();
    populateNavBtn(); 
    populateSearchPage(searchCriteriaCreateArr);
    populateComparePage(compareCriteriaCreateArr);
    // test();
});
  function buildCompareChart(chartObj) {

    new Chart(chartObj.ctx, {
      type: chartObj.type,
      data: {
        labels: [chartObj.game1Data.name,chartObj.game2Data.name],
        datasets: [{
          label: Helper.stringTran(chartObj.compareCol),
          data: [chartObj.game1Data[chartObj.compareCol],
          chartObj.game2Data[chartObj.compareCol]],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: chartObj.beginAtZero
          }
        }
      }
    });
}