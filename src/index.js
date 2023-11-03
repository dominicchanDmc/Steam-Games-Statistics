import './index.scss';
import BuildObj from "./scripts/buildObj.js"
import SearchObj from "./scripts/searchObj.js"
import * as Helper from "./scripts/helper.js"
import * as Builder from "./scripts/builder.js"
import * as Chart from "./scripts/chart.js"
import ConfirmModal from './scripts/confirmModal';

async function getData (){
    const request = await fetch("./data/steamData-after2019.json")    
    const respone = await request.json();
    const array = Object.values(respone);
    const newObj = array.reduce((obj,item)=>Object.assign(obj,{[item.name]: item}),{})
    return newObj;
}
document.addEventListener("DOMContentLoaded", async () => {

//pullDownList 
const operatorList = Helper.optionObjHashHelper({greaterEqual:"Greater And Equal (>=)",greater:"Greater (>)",samller:"Samller (<)"});
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
const searchBtnIconObj = Helper.buildObjHelper({tag:"i",classArr:["fa-solid", "fa-magnifying-glass"],skipTd:true});
const radioBtnDLCYObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"dlcY",value:"Yes", attributes: { name: "includeDLC", value: "Yes", id: "dlcY" ,checked:"checked"}});
const radioBtnDLCNObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"dlcN",value:"No", attributes: { name: "includeDLC", value: "No", id: "dlcN" }});

const searchCriteriaCreateArr = [[nameInputObj,releaseFromInputObj,releaseToInputObj]
,[[ratingInputObj,numberInputObj],languagesInputObj,categoriesInputObj],[[radioBtnDLCYObj,radioBtnDLCNObj],orderInputObj,[searchBtnObj,searchBtnIconObj]]];
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
const compareNameObj = Helper.buildObjHelper({tag:"input",id:"gameCompare1",inputType:"text",classArr:["CompareCol-300"],lableName:"Game 1:",readonly:"true",colSpan:2});
const compareName2Obj = Helper.buildObjHelper({tag:"input",id:"gameCompare2",inputType:"text",classArr:["CompareCol-300"],lableName:"Game 2:",readonly:"true",colSpan:2});
const radioBtnTbObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"tb",value:"Table", attributes: { name: "displayBy", value: "Table", id: "tb" ,checked:"checked"}});
const radioBtnChartObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"ch",value:"Chart", attributes: { name: "displayBy", value: "ch", id: "ch" }});
const compareBtnObj = Helper.buildObjHelper({tag:"button",classArr:["compareCriteriaBtn"], id:"compareBtn",innerHTML:"Compare"});
const compareBtnIconObj = Helper.buildObjHelper({tag:"i",classArr:["fa-solid", "fa-table"],skipTd:true});
const ownersChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"ownersChb",classArr:["compareChbClass"],value:"owners",lableName:"Owners",skipTd:false, attributes: {value: "owners", id: "ownersChb" }});
const releaseDateChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"releaseDateChb",classArr:["compareChbClass"],value:"releaseDate",lableName:"Release Date", skipTd:false, attributes: {value: "releaseDate", id: "releaseDateChb"}});
const priceChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"priceChb",classArr:["compareChbClass"],value:"price",lableName:"Price",skipTd:false, attributes: {value: "price", id: "priceChb" }});
const supportedLanguagesChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"supportedLanguagesChb",classArr:["compareChbClass"],value:"supportedLanguages",lableName:"Supported Languages", skipTd:false, attributes: {value: "supportedLanguages", id: "supportedLanguages"}});
const categoriesChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"categoriesChb",classArr:["compareChbClass"],value:"categories",lableName:"Categories",skipTd:false, attributes: {value: "categories", id: "categoriesChb" }});
const genresChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"genresChb",classArr:["compareChbClass"],value:"genres",lableName:"Genres", skipTd:false, attributes: {value: "genres", id: "genres"}});
const tagsChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"tagsChb",classArr:["compareChbClass"],value:"tags",lableName:"Tags", skipTd:false, attributes: {value: "tags", id: "tags"}});
const averageForeverChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",classArr:["compareChbClass"],id:"averageForeverChb",value:"averageForever",lableName:"User Average Forever (C)", skipTd:false, attributes: {value: "averageForeverChbObj", id: "averageForeverChbObj"}});
const totalNegativeChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",classArr:["compareChbClass"],id:"totalNegativeChb",value:"totalNegative",lableName:"Total Negative (C)",skipTd:false, attributes: {value: "totalNegative", id: "totalNegativeChb" }});
const totalPositiveChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",classArr:["compareChbClass"],id:"totalPositiveChb",value:"totalPositive",lableName:"Total Positive (C)", skipTd:false, attributes: {value: "totalPositive", id: "totalPositive"}});
const reviewScoreChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",classArr:["compareChbClass"],id:"reviewScoreChb",value:"reviewScore",lableName:"Review Score (C)", skipTd:false, attributes: {value: "reviewScore", id: "reviewScore"}});
const ratingChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",classArr:["compareChbClass"],id:"ratingChb",value:"rating",lableName:"Rating (C)", skipTd:false, attributes: {value: "ratingChbObj", id: "ratingChbObj"}});
const masterChbObj = Helper.buildObjHelper({tag:"input",inputType:"checkbox",id:"compareMasterCheckbox",lableName:"Check All",lableId:"compareMasterCheckboxLabel", attributes: {id: "compareMasterCheckbox"}});

const compareCriteriaCreateArr = [[releaseDateChbObj,ownersChbObj,ratingChbObj,priceChbObj]
,[totalPositiveChbObj,totalNegativeChbObj,reviewScoreChbObj,averageForeverChbObj]
,[supportedLanguagesChbObj,categoriesChbObj,tagsChbObj,genresChbObj]
,[[radioBtnTbObj,radioBtnChartObj],masterChbObj,[compareBtnObj,compareBtnIconObj]]];
//statistFilter
const filterTitleObj = Helper.buildObjHelper({tag:"label",classArr:["filterLabel"],innerHTML:"Data Filter",readonly:"true",colSpan:4,trClass:["filterTitle"]});
const filterReleaseFromObj = Helper.buildObjHelper({tag:"input",id:"filterReleaseFrom",inputType:"month",lableName:"Release From:"});
const filterReleaseToObj = Helper.buildObjHelper({tag:"input",id:"filterReleaseTo",inputType:"month",lableName:"Release To:"});
const filterRatingObj = Helper.buildObjHelper({tag:"select",id:"filterOperator",options:operatorList});
const filterNumberObj = Helper.buildObjHelper({tag:"input",name:"rating", id:"filterRating",inputType:"number",attribute:"0.01",lableName:"Rating:"});
const criteriaTitleObj = Helper.buildObjHelper({tag:"label",classArr:["filterLabel"],innerHTML:"Statistics Criteria",readonly:"true",colSpan:4,trClass:["filterTitle"]});
//statistCriteria
const statistSupportedLanguagesRadObj = Helper.buildObjHelper({tag:"input",inputType:"radio",name:"statistRad",id:"statistSupportedLanguagesRad",value:"supportedLanguages",lableName:"Supported Languages", skipTd:false, attributes: {value: "supportedLanguages", id: "supportedLanguages",name:"statistRad"}});
const statistCategoriesRadObj = Helper.buildObjHelper({tag:"input",inputType:"radio",name:"statistRad",id:"statistCategoriesRad",value:"categories",lableName:"Categories",skipTd:false, attributes: {value: "categories", id: "categoriesRad",name:"statistRad" }});
const statistGenresRadObj = Helper.buildObjHelper({tag:"input",inputType:"radio",name:"statistRad",id:"statistGenresRad",value:"genres",lableName:"Genres", skipTd:false, attributes: {value: "genres", id: "genres",name:"statistRad"}});
const statistTagsRadObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"statistTagsRad",value:"tags",lableName:"Tags", skipTd:false, attributes: {value: "tags", id: "tags",name:"statistRad"}});
const statistObj = Helper.buildObjHelper({tag:"button",classArr:["statistCriteriaBtn"], id:"statistBtn",innerHTML:"Statistics"});
const statistIconObj = Helper.buildObjHelper({tag:"i",classArr:["fa-solid", "fa-chart-simple"],skipTd:true});
const radioBtnDLCYStObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"dlcYSt",value:"Yes", attributes: { name: "includeDLCSt", value: "Yes", id: "dlcYSt" ,checked:"checked"}});
const radioBtnDLCNStObj = Helper.buildObjHelper({tag:"input",inputType:"radio",id:"dlcNSt",value:"No", attributes: { name: "includeDLCSt", value: "No", id: "dlcNSt" }});

const countries = ["Afghanistan","Albania","Algeria",
"Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
"Argentina","Armenia","Aruba","Australia","Austria",
"Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
"Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",
"Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands",
"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada",
"Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia",
"Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus",
"Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
"El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)",
"Yemen","Zambia","Zimbabwe"];

const statistCriteriaCreateArr = [[filterTitleObj]
 ,[[filterRatingObj,filterNumberObj],filterReleaseFromObj,filterReleaseToObj]
 ,[criteriaTitleObj]
,[[statistSupportedLanguagesRadObj,statistCategoriesRadObj
,statistGenresRadObj,statistTagsRadObj]],[[radioBtnDLCYStObj,radioBtnDLCNStObj],[statistObj,statistIconObj]]];

const dataSet = await getData();
const dataSetNameArr = Object.keys(dataSet);

const navBtn = document.getElementById("navBtn");
const frontPageBtn = document.querySelector(".frontPageBtn");
const searchSearchArea = document.querySelector("#search-searchArea");

    function populateFrontPageBtnArea(buildObj){
        const divBtnArea = Builder.buildElement(new BuildObj("div","btnArea"));
        const spanBtnArea = Builder.buildElement(new BuildObj("span",["icon", "icon-circle"]));
        const iBtnArea = Builder.buildElement(new BuildObj("i",["icon-1", "icon-1b"].concat(buildObj.classArr)));
        const pBtnArea = Builder.buildElement(new BuildObj("p","text-6",null,null,buildObj.innerHTML));
        const h6BtnArea = Builder.buildElement(new BuildObj("h6",null,buildObj.name));

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
        const buttonNavSub =  Builder.buildElement(new BuildObj("button","navSubBtn"));
        const spanNavSub =  Builder.buildElement(new BuildObj("span","text",buildObj.name));
        const iNavSub =  Builder.buildElement(new BuildObj("i",buildObj.classArr));
        
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
        const tableSearchArea =  Builder.buildElement(new BuildObj("table","user-input-table"));
        createStr.forEach((row) =>{
             let tr = Builder.createTableTr(row);
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
        const tableCompareArea =  Builder.buildElement(new BuildObj("table"));
        const compareCriteriaTr =  Builder.buildElement(new BuildObj("tr"));
        const compareCriteriaTd =  Builder.buildElement(new BuildObj("td"));
        const compareCriteriaTd2 =  Builder.buildElement(new BuildObj("td"));
        const labelG1Obj = Builder.buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Game1",lableName:"gameCompare1"}));
        const labelG2Obj = Builder.buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Game2",lableName:"gameCompare2"}));
        const compareBtnObj = Builder.buildElement(Helper.buildObjHelper({tag:"button",id:"clearBtn",innerHTML:"Clear"}));
        const compareBtn2Obj = Builder.buildElement(Helper.buildObjHelper({tag:"button",id:"clearBtn2",innerHTML:"Clear"}));
        const compareNameInput = Builder.buildElement(compareNameObj);
        const compareNameInput2 = Builder.buildElement(compareName2Obj);

        compareBtnObj.onclick = function () {
            compareNameInput.value = "";
            if (compareCount >0)
                compareCount-=1;
        }

        compareBtn2Obj.onclick = function () {
            compareNameInput2.value = "";
            if (compareCount >0)
                compareCount-=1;
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
             let tr = Builder.createTableTr(row);
             tableCompareArea.appendChild(tr);
        });
        compareCriteriaArea.appendChild(tableCompareArea);

        let compareBtn = document.querySelector(".compareCriteriaBtn")
        compareBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            compareData(dataSet);
         })

         document.getElementById("compareMasterCheckbox").addEventListener("change", toggleCheckboxes);

    }
    
function populateStatistPage(createStr) {
    const statistCriteriaArea = document.getElementById("statist-searchArea");
    const tableStatistArea =  Builder.buildElement(new BuildObj("table"));
        
    createStr.forEach((row) =>{
        let tr = Builder.createTableTr(row);
        tableStatistArea.appendChild(tr);
   });
   statistCriteriaArea.appendChild(tableStatistArea);

   let statistBtn = document.querySelector(".statistCriteriaBtn")
   statistBtn.addEventListener("click",(e)=>{
       e.preventDefault();
        statistData(dataSet);
    })
}

function searchData(dataSet) {
    const searchObj = Helper.searchObjArrHelper("search");
    if (searchObj.checkOnlyOneCriteria("search",0)){
        Helper.openModal("At least choose one Criteria");
        return;
    }
    if (!searchVaildation(searchObj))
        return;
    else{
        const filteredData = filterData(searchObj,dataSet);
        // console.log(filteredData);
        displaySeachResult(filteredData);
    }
}

function compareData(dataSet) {
    const searchObj = Helper.searchObjArrHelper("compare");
    const confirmModal = new ConfirmModal();

    if (!searchObj.gameCompare1 || !gameCompare2){
    //    const answer =  window.confirm(("Must select 2 games, go select now?"));
    confirmModal.open(
        "Must select 2 games, go select now?",
        () => {
            const searchPage = document.getElementById("searchPage");
            searchPage.scrollIntoView();
        },
        () => {
            return;
        }
    );
    //    if (answer){
    //     const searchPage = document.getElementById("searchPage");
    //     searchPage.scrollIntoView();
    //    }
         return;
    }
    if (searchObj.checkOnlyOneCriteria("compare",0)){
        Helper.openModal("At least choose one Criteria");
        return;
    }
    if (searchObj.radioBtn === "Chart" &&
     !searchObj.areOnlyFiveFieldsChecked()){
        Helper.openModal("Display By Chart only support the criteria with (C)");
        return;
    }
       
    const gameData1 = dataSet[searchObj.gameCompare1];
    const gameData2 = dataSet[searchObj.gameCompare2];
    const propertyList = searchObj.getCheckedPropertiesArray("compare");
    const compareResultP = document.getElementById("compareResultP");
    const compareResult = document.getElementById("compareResult");
    const chartArea = document.getElementById("chartArea");

    compareResultP.innerHTML = "";
    compareResult.innerHTML = "";
    chartArea.innerHTML = "";

    if (searchObj.radioBtn === "Table")
        compareDisplayByTable(propertyList,gameData1,gameData2); 
    else 
        compareDisplayByChart(propertyList,gameData1,gameData2); 
}
function statistData(dataSet) {
    const searchObj = Helper.searchObjArrHelper("statist");

    if (!searchVaildation(searchObj))
        return;
    if (searchObj.checkOnlyOneCriteria("statist",0)){
        Helper.openModal("At least choose one Criteria");
        return;
    }

    const criteria = searchObj.getSelectedRadio();
    const statistResultP = document.getElementById("statistResultP");
    const chartArea = document.getElementById("statist-chartArea");

    statistResultP.innerHTML = "";
    chartArea.innerHTML = "";
    appendCanvas([criteria],"statist");
    const ctx = document.getElementById('statist-canvas0'); 

    const filteredData = filterData(searchObj,dataSet);
    const criteriaDataHash= Helper.rebuildHash(getCriteriaDataHash(filteredData,criteria));
            // console.log(filteredData);

    let chartType ="doughnut";
    // if (criteria === "tags")
    //     chartType = "bar";
    const createHash = {ctx:ctx,type:chartType,compareCol:criteria
    ,displayLable:criteria
    ,dataHash:criteriaDataHash,backgroundColor:'white'
    ,borderColor:'red'};
    const chartObj = Helper.chartObjHelper(createHash);
    
    Chart.buildStatistChart(chartObj);

}

function getCriteriaDataHash(filteredData,property) {
    const criteriaDataHash = {};

    filteredData.forEach((data)=>{
        const criteriaData = Helper.dataTranArray(data[property]);
        if (criteriaData){
            criteriaData.forEach((el)=>{
                if (!criteriaDataHash[el])
                    criteriaDataHash[el] = 0;
                criteriaDataHash[el] +=1;
            });
        }
    });
    return criteriaDataHash;
}
function compareDisplayByTable(propertyList,gameData1,gameData2) {
    const compareResult = document.getElementById("compareResult");

    const compareResultTable = Builder.buildElement(new BuildObj("table"));
    const compareResultTr = Builder.buildElement(new BuildObj("tr"));
    const compareResultEmptyTh = Builder.buildElement(new BuildObj("th"));
    const compareResultTh = Builder.buildElement(new BuildObj("th"));
    const compareResultTh2 = Builder.buildElement(new BuildObj("th"));
    const game1Th = Builder.buildElement(Helper.buildObjHelper({tag:"input",inputType:"text",value:gameData1.name,readonly:true}));
    const game2Th = Builder.buildElement(Helper.buildObjHelper({tag:"input",inputType:"text",value:gameData2.name,readonly:true}));
    
    compareResultTh.appendChild(game1Th);
    compareResultTh2.appendChild(game2Th);
    compareResultTr.appendChild(compareResultEmptyTh);
    compareResultTr.appendChild(compareResultTh);
    compareResultTr.appendChild(compareResultTh2);

    compareResultTable.appendChild(compareResultTr);

    propertyList.forEach((property)=>{
        const trObj = Builder.buildElement(new BuildObj("tr"));
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
        const labelObj = Builder.createTableTd(Helper.buildObjHelper({tag:"label",lableName:Helper.stringTran(property)}));
        const game1Obj = Builder.createTableTd(Helper.buildObjHelper({tag:input,classArr:classArr,inputType:"text",value:gameData1Value,readonly:true}));
        const game2Obj = Builder.createTableTd(Helper.buildObjHelper({tag:input,classArr:classArr,inputType:"text",value:gameData2Value,readonly:true}));
        labelObj.forEach(obj => trObj.appendChild(obj));
        game1Obj.forEach(obj => trObj.appendChild(obj));
        game2Obj.forEach(obj => trObj.appendChild(obj));
        compareResultTable.appendChild(trObj);
    });
    compareResult.appendChild(compareResultTable);
}

function compareDisplayByChart(propertyList,gameData1,gameData2) {
    appendCanvas(propertyList,"compare");
    let i=0;
    
    propertyList.forEach((property)=>{
        const ctx = document.getElementById(`compare-canvas${i}`); 
        const createHash = {ctx:ctx,type:"bar",compareCol:property
        ,displayLable:property,game1Data:gameData1,game2Data:gameData2
    ,beginAtZero:false};
        const chartObj = Helper.chartObjHelper(createHash);
        
        Chart.buildCompareChart(chartObj,i);
        i++;
    });

}
function filterData(criteria, dataSet) {
    let releaseFrom,releaseTo,operator,rating;
    const filteredData = Object.values(dataSet).filter((item) => {
        if (criteria.source === "search"){
            releaseFrom = Date.parse(criteria.releaseFrom);
            releaseTo = Date.parse(criteria.releaseTo);
            operator = criteria.operator;
            rating = criteria.rating;
        }
        else if (criteria.source === "statist"){
            releaseFrom = Date.parse(criteria.filterReleaseFrom);
            releaseTo = Date.parse(criteria.filterReleaseTo);
            operator = criteria.filterOperator;
            rating = criteria.filterRating;
        }

    const gameReleaseDate = Date.parse(item.release_date);

    const languagesHash = Helper.hashHelper(languagesKey,languagesValue);
    const categoriesHash = Helper.hashHelper(categoriesKey,categoriesValue);
      if (
        (!criteria.gameName || item.name.toLowerCase().includes(criteria.gameName.toLowerCase())) &&
        (!releaseFrom || gameReleaseDate >= releaseFrom) &&
        (!releaseTo || gameReleaseDate <= releaseTo) &&
        (!operator || (
          operator === "greaterEqual" && item.rating >= rating) ||
          (operator === "greater" && item.rating > rating) ||
          (operator === "smaller" && item.rating < rating)
        ) && 
         (criteria.radioBtnDlc !=="No" || item.type==='game') &&
        (!criteria.languages || criteria.languages.length === 0 || item.supported_languages &&
            Helper.dataTranArray(item.supported_languages).some(sub=> languagesHash[criteria.languages].includes(sub))) &&
        (!criteria.categories || criteria.categories.length === 0 || item.categories &&
            Helper.dataTranArray(item.categories).some(sub =>categoriesHash[criteria.categories].includes(sub))))
       {
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
    if (criteria.source === "search"){
        const limitedData = filteredData.slice(0, 100);
        return limitedData;
    }
    else
        return filteredData;
  }

function displaySeachResult(filteredData) {
   const searchResultP = document.getElementById("searchResultP");
   const searchResultList = document.getElementById("searchResultList");
   searchResultList.innerHTML = "";

    if (filteredData.length === 0)
        searchResultP.innerHTML = "No result";
    else{
        searchResultP.innerHTML = "";
        const tableSearchResult = Builder.buildElement(new BuildObj("table"));
        const headerTrSearchResult = Builder.createTableTr(headerTrCreateArr);
        tableSearchResult.appendChild(headerTrSearchResult);

        filteredData.forEach((data)=>{
            let headerTrCreateArrWithData = addDataForCreateSearchResultArr(headerTrCreateArr,data)
            const trSearchResult = Builder.createTableTr(headerTrCreateArrWithData);
            tableSearchResult.appendChild(trSearchResult);
        });       
        searchResultList.appendChild(tableSearchResult);

        if (filteredData.length === 1){
            displayDetial(filteredData[0].name);
        }
    }
}

function displayDetial(name) {
    let game = dataSet[name];
    //  console.log(game);
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
        let headerImage = Builder.buildElement(headerImageObj);
        detialPage.append(headerImage);
    }else{
        let noImage = Builder.buildElement(noImageObj);
        detialPage.append(noImage);
    }

    let imageAndBtnContainer = document.createElement("div");
    imageAndBtnContainer.style.display = "flex"; 
  
    let detailAddToCompareBtn = Builder.buildElement(detailAddToCompareBtnObj);
    detailAddToCompareBtn.onclick = function () {
        addToCompare(name);
    };
    let detailAddToCompareBtnIcon = Builder.buildElement(detailAddToCompareBtnIconObj);
    detailAddToCompareBtn.appendChild(detailAddToCompareBtnIcon);
    imageAndBtnContainer.appendChild(detailAddToCompareBtn);
  
    detialPage.appendChild(imageAndBtnContainer);
    
    const detialTable =  Builder.buildElement(new BuildObj("table"));
    detialCreateArr.forEach((row) =>{
            let tr = Builder.createTableTr(row);
            detialTable.appendChild(tr);
    });
    detialPage.appendChild(detialTable);
    detialPage.scrollIntoView();
}
 
    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        let currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function(e) {
            let a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            let x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus letiable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
            } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus letiable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
            } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
            }
        });
        function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
        }
        function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

    populateFrontPageBtn();
    populateNavBtn(); 
    populateSearchPage(searchCriteriaCreateArr);
    populateComparePage(compareCriteriaCreateArr);
    populateStatistPage(statistCriteriaCreateArr);
    autocomplete(document.getElementById("gameName"), dataSetNameArr);
});

function searchVaildation(searchObj){
    let releaseFrom,releaseTo,operator,rating;
    if (searchObj.source === "search"){
        releaseFrom = Date.parse(searchObj.releaseFrom);
        releaseTo = Date.parse(searchObj.releaseTo);
        operator = searchObj.operator;
        rating = searchObj.rating;
    }
    else if (searchObj.source === "statist"){
        releaseFrom = Date.parse(searchObj.filterReleaseFrom);
        releaseTo = Date.parse(searchObj.filterReleaseTo);
        operator = searchObj.filterOperator;
        rating = searchObj.filterRating;
    }

    if (releaseFrom && releaseTo){
        if (releaseTo < releaseFrom){
            Helper.openModal('Release To must later than Release From')
            return false;
        }
    }

    if ((operator && !rating)||
     (!operator && rating)){
        Helper.openModal('Missing Operator or Rating')
            return false;
     }

    return true;
}
let compareCount = 0;
function addToCompare(name) {
    const gameCompare1 = document.getElementById("gameCompare1");
    const gameCompare2 = document.getElementById("gameCompare2");
    const comparePage = document.getElementById("comparePage");
    const confirmModal = new ConfirmModal();

    if (gameCompare1.value === name || gameCompare2.value === name){
        Helper.openModal("This game alreadly added");
        return; 
    }

    if (!gameCompare1.value){
        gameCompare1.value = name;      
        compareCount +=1;
        if (compareCount === 1)
            Helper.openModal("add success, you can add 1 more game for compare");
        else if (compareCount === 2){
            // const answer = window.confirm("add success, do you compare now?");
            confirmModal.open(
                "Add success, do you compare now?",
                () => {
                    comparePage.scrollIntoView();
                },
                () => {
                    return;
                }
            );
            return; 
            // if (answer)
            // comparePage.scrollIntoView();
        } 
    }
    else if (!gameCompare2.value){
        gameCompare2.value = name;
        compareCount +=1;
        confirmModal.open(
            "Add success, do you compare now?",
            () => { 
                comparePage.scrollIntoView();
            },
            () => {
                return;
            }
        );
        return;
        // const answer = window.confirm("add success, do you compare now?");
        // if (answer)
            // comparePage.scrollIntoView();
    }
    else
        Helper.openModal("Only can compare between 2 game ");
}

function appendCanvas(propertyList,type) {
    let ctx;
    if (type ==="compare")
        ctx = document.getElementById('chartArea'); 
    else if (type === "statist")
        ctx = document.getElementById('statist-chartArea'); 
    ctx.innerHTML = "";
    for(let i=0;i<propertyList.length;i++){
        let canvasId = `${type}-canvas${i}`;
        const canvas = Builder.buildElement(
        Helper.buildObjHelper({tag:"canvas",id:canvasId,classArr:["canvasClass"]}));
        ctx.appendChild(canvas);
    }
}

function toggleCheckboxes() {
    const masterCheckbox = document.getElementById("compareMasterCheckbox");
    const masterCheckboxLabel = document.getElementById("compareMasterCheckboxLabel");
    const compareCheckboxes = document.getElementsByClassName("compareChbClass");
    const displayText = masterCheckbox.checked ? "Uncheck All" : "Check All";
  
    for (let i = 0; i < compareCheckboxes.length; i++) {
      compareCheckboxes[i].checked = masterCheckbox.checked;
    }
  
    masterCheckboxLabel.innerHTML = displayText;
  } 


