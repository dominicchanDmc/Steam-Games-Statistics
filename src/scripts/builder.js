import BuildObj from "./buildObj.js";
import * as Helper from "./helper.js"

export function buildElement(buildObj){
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

export function createTableTr(trCreateObjArr) {
    let masterTr =  buildElement(new BuildObj("tr"));
    trCreateObjArr.forEach((tdCreateObj)=>{
        if (tdCreateObj.trClass){
            if(tdCreateObj.trClass[0] === "filterTitle")
            masterTr.classList.add(tdCreateObj.trClass);
        }
       
        if (Array.isArray(tdCreateObj)) {
            //for rating only
            if (tdCreateObj[0].id === "operator" || tdCreateObj[0].id === "filterOperator"){
                let rating = createTableTd(tdCreateObj[0]);
                let numberInputObjArr = createTableTd(tdCreateObj[1]);
                let ratingSelect = rating[0].children[0];
                let numberInputTd = numberInputObjArr[0];
                if (tdCreateObj[0].id === "filterOperator") 
                    numberInputTd.colSpan = 2;
                numberInputTd.insertBefore(ratingSelect, numberInputTd.lastElementChild);
                masterTr.appendChild(numberInputObjArr[0]);
            }
            else if (tdCreateObj[0].id === "searchBtn" ||
             tdCreateObj[0].id === "compareBtn" ||
             tdCreateObj[0].id === "statistBtn"){
                // for searchBtn,compareBtn,statistBtn
                let searchBtn = buildElement(tdCreateObj[0]);
                let searchBtnIcon = createTableTd(tdCreateObj[1]);
                searchBtn.appendChild(searchBtnIcon[0]);
                let newTd =  buildElement(new BuildObj("td"));
                newTd.colSpan = "6";
                if (tdCreateObj[0].id === "statistBtn")
                    newTd.classList.add("statistBtnTd");
                newTd.appendChild(searchBtn);
                masterTr.appendChild(newTd);
            }
            else if (tdCreateObj[0].id === "tb"
            ||tdCreateObj[0].id === "dlcY"
            ||tdCreateObj[0].id === "dlcYSt"){
                //for compareRadio / searchRadio /statistRadio
                let newTd =  buildElement(new BuildObj("td"));
                let labelObj,labelTbObj,labelChObj;
                if (tdCreateObj[0].id === "tb"){
                    labelObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Display By:"}));
                    labelTbObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Table",lableName:"tb"}));
                    labelChObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Chart",lableName:"ch"}));                
                    newTd.colSpan = 2;  
                }
                else if(tdCreateObj[0].id === "dlcY") {
                    labelObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Include DLC:"}));
                    labelTbObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Yes",lableName:"dlcY"}));
                    labelChObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"No",lableName:"dlcN"}));                
                }
                else if(tdCreateObj[0].id === "dlcYSt") {
                    labelObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Include DLC:"}));
                    labelTbObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"Yes",lableName:"dlcYSt"}));
                    labelChObj = buildElement(Helper.buildObjHelper({tag:"label",innerHTML:"No",lableName:"dlcNSt"}));                
                }
                newTd.appendChild(labelObj);    
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

export function createTableTd(tdCreateObjArr) {
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

export function createTableTdInner(tdCreateObj) {
    let returnArr = [];
    let labelmasterTd =  buildElement(new BuildObj("td"));

    if (tdCreateObj.tdClass)
        labelmasterTd.classList.add(tdCreateObj.tdClass);

    if (tdCreateObj.colSpan)
        labelmasterTd.colSpan = tdCreateObj.colSpan;
    if (tdCreateObj.lableName){
        let labelObjClass=[];
        let lableId = null;
        if (tdCreateObj.lableClass)
            labelObjClass = tdCreateObj.lableClass;
        if (tdCreateObj.lableId)
            lableId = tdCreateObj.lableId;
        let labelObj = new BuildObj("label",labelObjClass,null,lableId,tdCreateObj.lableName,tdCreateObj.id);
        let labelTd =  buildElement(labelObj);
        if (tdCreateObj.skipTd)
            returnArr.push(labelTd);
        else 
            labelmasterTd.appendChild(labelTd);
    }   
        let innterTd = buildElement(tdCreateObj);
        if (tdCreateObj.skipTd)
            returnArr.push(innterTd);
        else if (tdCreateObj.id ==='gameName'){
            // let autoCompleteDiv = Helper.buildObjHelper({tag:"div",id:"autocompleteDiv",classArr:["autocomplete"]});
            // let autoCompleteDiv = '<div class="autocomplete" style="width:300px;"></div>'
            let autoCompleteDiv =  buildElement(new BuildObj("div"));
            autoCompleteDiv.classList.add(["autocomplete"]);
            autoCompleteDiv.id = "autocompleteDiv";
            autoCompleteDiv.appendChild(innterTd);
            labelmasterTd.appendChild(autoCompleteDiv);
        }
        else
            labelmasterTd.appendChild(innterTd);

    if (!tdCreateObj.skipTd)
            returnArr.push(labelmasterTd);

    return returnArr;
}

