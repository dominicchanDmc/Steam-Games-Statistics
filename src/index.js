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
const createSearchBtnStr = ["fa-solid", "fa-magnifying-glass","Search","Search and display detail information by different criteria"];
const createCompareBtnStr = ["fa-solid", "fa-table","Compare","Compare item between 2 games with table or chart"];
const createStatisticsBtnStr = ["fa-solid", "fa-chart-simple","Statistics","Data statistics for the period"];
const createHomeBtnStr = ["fa-solid", "fa-house","Home"];


document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.getElementById("navBtn");
    const btnScrollUp = document.getElementById("scrollUp");
    const frontPageBtn = document.querySelector(".frontPageBtn");

    function populateFrontPageBtnArea(createStr){
        const divBtnArea = document.createElement("div");
        const spanBtnArea = document.createElement("span");
        const iBtnArea = document.createElement("i");
        const pBtnArea = document.createElement("p");
        const h6BtnArea = document.createElement("h6");
    
    
        divBtnArea.classList.add("btnArea");
        spanBtnArea.classList.add("icon", "icon-circle");
        iBtnArea.classList.add(createStr[0],createStr[1],"icon-1", "icon-1b");
        h6BtnArea.innerHTML = createStr[2];
        pBtnArea.classList.add("text-6");
        pBtnArea.innerHTML = createStr[3];
        
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
        const buttonNavSub = document.createElement("button");
        const spanNavSub = document.createElement("span");
        const iNavSub = document.createElement("i");

        buttonNavSub.classList.add("navSubBtn");
        spanNavSub.classList.add("text");
        spanNavSub.innerHTML = createStr[2];
        iNavSub.classList.add(createStr[0],createStr[1]);

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
    
    populateFrontPageBtn();
    populateNavBtn();
});
