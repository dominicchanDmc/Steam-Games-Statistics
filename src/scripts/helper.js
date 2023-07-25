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

export function searchObjArrHelper(source) {
    //source
    let gameName = document.getElementById("gameName");
    let releaseFrom = document.getElementById("releaseFrom");
    let releaseTo = document.getElementById("releaseTo");
    let operator = document.getElementById("operator");
    let rating = document.getElementById("rating");
    let languages = document.getElementById("languages");
    let categories = document.getElementById("categories");
    let orderBy = document.getElementById("orderBy");

    //compare
    const gameCompare1 = document.getElementById('gameCompare1');
    const gameCompare2 = document.getElementById('gameCompare2');
    const radioBtnTb = document.getElementById('tb');
    const radioBtnChart = document.getElementById('ch');
    const ownersChb = document.getElementById('ownersChb');
    const releaseDateChb = document.getElementById('releaseDateChb');
    const priceChb = document.getElementById('priceChb');
    const supportedLanguagesChb = document.getElementById('supportedLanguagesChb');
    const categoriesChb = document.getElementById('categoriesChb');
    const genresChb = document.getElementById('genresChb');
    const tagsChb = document.getElementById('tagsChb');
    const averageForeverChb = document.getElementById('averageForeverChb');
    const totalNegativeChb = document.getElementById('totalNegativeChb');    
    const totalPositiveChb = document.getElementById('totalPositiveChb');
    const reviewScoreChb = document.getElementById('reviewScoreChb');
    const ratingChb = document.getElementById('ratingChb');

    let searchObj = new SearchObj();

    if (source === "search"){
        searchObj.gameName = gameName.value;
        searchObj.releaseFrom = releaseFrom.value;
        searchObj.releaseTo = releaseTo.value;
        searchObj.operator = operator.value;
        searchObj.rating = rating.value;
        searchObj.languages = languages.value;
        searchObj.categories = categories.value;
        searchObj.orderBy = orderBy.value;
    }
    else if (source === "compare"){
        searchObj.gameCompare1 = gameCompare1.value;
        searchObj.gameCompare2 = gameCompare2.value;
        if (radioBtnChart.checked)
            searchObj.radioBtn = radioBtnChart.value;
        else
            searchObj.radioBtn = radioBtnTb.value;

        searchObj.release_date = releaseDateChb.checked;
        searchObj.owners = ownersChb.checked ;
        searchObj.rating = ratingChb.checked;
        searchObj.price = priceChb.checked;
        searchObj.total_positive = totalPositiveChb.checked;
        searchObj.total_negative = totalNegativeChb.checked;
        searchObj.review_score = reviewScoreChb.checked;
        searchObj.average_forever = averageForeverChb.checked;
        searchObj.supported_languages = supportedLanguagesChb.checked;
        searchObj.categories = categoriesChb.checked;
        searchObj.tags = tagsChb.checked;
        searchObj.genres = genresChb.checked;
    }

    return searchObj;
}

export function stringCut(string) {
    return string.replace(/\[|\]|'/g, "")
}

export function stringTran(string) {
    switch (string) {
        case "average_forever":
            return "User Average Forever :";    
        case "release_date":
            return "Release Date :";    
        case "review_score":
            return "Review Score :";    
        case "supported_languages":
            return "Supported Languages :"; 
        case "total_negative":
            return "Total Negative :"; 
        case "total_positive":
            return "Total Positive :";    
        case "price":
            return "Price (USD) :"
        default:
           return string.charAt(0).toUpperCase() + string.slice(1) + " :";
    }
}