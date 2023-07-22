import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

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

const createSearchBtnStr = ["fa-solid", "fa-magnifying-glass","Search","searchPage","Search and display detail information by different criteria"];
const createCompareBtnStr = ["fa-solid", "fa-table","Compare","comparePage","Compare item between 2 games with table or chart"];
const createStatisticsBtnStr = ["fa-solid", "fa-chart-simple","Statistics","statistPage","Data statistics for the period"];
const createHomeBtnStr = ["fa-solid", "fa-house","Home","frontPage",];


document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.getElementById("navBtn");
    // const btnScrollUp = document.getElementById("scrollUp");
    const frontPageBtn = document.querySelector(".frontPageBtn");

    function populateFrontPageBtnArea(createStr){
        const divBtnArea =  buildElement("div","btnArea","");
        const spanBtnArea = buildElement("span",["icon", "icon-circle"],"");
        const iBtnArea = buildElement("i",[createStr[0],createStr[1],"icon-1", "icon-1b"],"");
        const pBtnArea =  buildElement("p","text-6",createStr[4]);
        const h6BtnArea =  buildElement("h6","",createStr[2]);
        
        divBtnArea.addEventListener("click", () => {
            document.getElementById(createStr[3]).scrollIntoView();
          });

        spanBtnArea.appendChild(iBtnArea);
        divBtnArea.appendChild(spanBtnArea);
        divBtnArea.appendChild(h6BtnArea);
        divBtnArea.appendChild(pBtnArea);
        frontPageBtn.appendChild(divBtnArea);
    }

    function populateFrontPageBtn() {
        populateFrontPageBtnArea(createSearchBtnStr);
        populateFrontPageBtnArea(createCompareBtnStr);
        populateFrontPageBtnArea(createStatisticsBtnStr);
    }

    function populateNavSubBtn(createStr) {
        const buttonNavSub =  buildElement("button","navSubBtn","");
        const spanNavSub =  buildElement("span","text",createStr[2]);
        const iNavSub =  buildElement("i",[createStr[0],createStr[1]],"");
        
        buttonNavSub.addEventListener("click", () => {
            document.getElementById(createStr[3]).scrollIntoView();
          });

        buttonNavSub.appendChild(iNavSub);
        buttonNavSub.appendChild(spanNavSub);
        navBtn.appendChild( buttonNavSub);
    }
    function populateNavBtn() {
        populateNavSubBtn(createHomeBtnStr);
        populateNavSubBtn(createSearchBtnStr);
        populateNavSubBtn(createCompareBtnStr);
        populateNavSubBtn(createStatisticsBtnStr);
    }

    function populateSearchPage(createStr) {
        
    }
    
    populateFrontPageBtn();
    populateNavBtn();
});

function buildElement(type,classList,innerHTML){
    let element = document.createElement(type);
    if (Array.isArray(classList)) {
        classList.forEach((c) =>{
            element.classList.add(c);
        });
    }
    else if (classList !="")
        element.classList.add(classList);
    if (innerHTML != "")
        element.innerHTML = innerHTML;
    return element;
}