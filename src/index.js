import './index.scss';
import BuildObj from "./scripts/BuildObj.js"
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

//frontPage
const searchBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-magnifying-glass"],"Search","searchPage","Search and display detail information by different criteria");
const compareBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-table"],"Compare","comparePage","Compare item between 2 games with table or chart");
const statisticsBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-chart-simple"],"Statistics","statistPage","Data statistics for the period");
const homeBtnStrBuildObj = new BuildObj("",["fa-solid", "fa-house"],"Home","frontPage");
//searchCriteria
const nameInputObj = new BuildObj("text",null,"gameName","gameName",null,"Name");

const searchCriteriaCreateArr = [[nameInputObj]];

document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.getElementById("navBtn");
    // const btnScrollUp = document.getElementById("scrollUp");
    const frontPageBtn = document.querySelector(".frontPageBtn");
    const searchSearchArea = document.querySelector(".search-searchArea");


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

    function createTableTr(createStr) {
        const masterTr =  buildElement("tr","","");
        createStr.forEach((td)=>{
            const innerTd =  buildElement("td","","");
            // const innerTd =  buildElement("td","","");


            masterTr.appendChild(innerTd);
        });
    }
    function createTableTd(createStr) {
        const masterTd =  buildElement("td","","");
        createStr.forEach((el)=>{
            const innerTd =  buildElement("td","","");


            innerTd.appendChild(innerTd);
        });
    }

    function populateSearchPage(createStr) {
        const tableSearchArea =  buildElement(new BuildObj("table","user-input-table"));
        createStr.forEach((row) =>{
            // let tr = 
        });

    }
    
    populateFrontPageBtn();
    populateNavBtn(); 
    // populateSearchPage(searchCriteriaCreateArr);
});

function buildElement(buildObj){
    let element = document.createElement(buildObj.type);
    if (Array.isArray(buildObj.classArr)) {
        buildObj.classArr.forEach((c) =>{
            element.classList.add(c);
        });
    }
    else if (buildObj.classArr)
        element.classList.add(buildObj.classArr);
    
    if (buildObj.name)
        element.innerHTML = buildObj.name;
    else if (buildObj.innerHTML)
        element.innerHTML = buildObj.innerHTML;

    if (buildObj.type === 'label' && buildObj.lableFor) 
        element.setAttribute('for', buildObj.lableFor);
        
    
    return element;
}