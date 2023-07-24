import OptionObj from "./optionObj.js"
import BuildObj from "./buildObj.js"
import SearchObj from "./searchObj.js"

export function optionObjHashHelper(operatorHash,type) {
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

export function optionObjArrHelper(valueList,keyList) {
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

export function buildObjHelper(createHash) {
    let buildObj = new BuildObj();

    for (const key in createHash) {
        buildObj[key] = createHash[key];
    }
    return buildObj;
}

export function searchObjArrHelper() {
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

export function stringCut(string) {
    return string.replace(/\[|\]|'/g, "")
}