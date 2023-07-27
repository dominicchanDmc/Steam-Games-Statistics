# Steam-Games-Statistics
<h2>Background</h2>
Steam is the world's most popular PC Gaming hub, with over 7,000 games and a community of millions of gamers. It includes everything from big companies to individual, great data statistics tools can help companies to find out the market needs.

The website likely fetches data from <a href='https://www.kaggle.com/datasets/mikekzan/steam-games-dlcs?select=steam.csv'>kaggle</a> related to video games, such as their names, release dates, ratings, supported languages, categories, and tags. Users can search for specific games, compare two games, or perform statistical analysis on game data. The app offers options for filtering, sorting, and displaying the data in both tabular and chart formats.
<h2>Live version</h2>
Live version can be seen on <a href='https://dominicchandmc.github.io/Steam-Games-Statistics/'>this link</a>
<h2>Instructions</h2>
Navigate through the slides to search, compare and statistics. Click on the "home" button to navigate back to the beggining.
Recommend do the searching first, that select 2 game to compare.

<h2>Technologies</h2>
In this website,I have use 2 Libraries:
<ul>
  <li><b>Chat.js:</b>Rendering charts and graphs on the web page. </li>
   <li><b>Font Awesome:</b>The commom and easy to understand icon
</li>
</ul>
<h2>Technical Features</h2>
Dynamically generate HTML elements with appropriate attributes and content. These helper functions abstract away the complexities of element creation and make the code more maintainable and organized. By passing the necessary parameters, the functions construct the desired HTML components, which are then appended to the DOM.

```JavaScript
const compareName2Obj = Helper.buildObjHelper({tag:"input",id:"gameCompare2",inputType:"text",classArr:["CompareCol-300"],lableName:"Game 2:",readonly:"true",colSpan:2});
const ratingInputObj = Helper.buildObjHelper({tag:"select",id:"operator",options:operatorList});
const compareBtnObj = Helper.buildObjHelper({tag:"button",classArr:["compareCriteriaBtn"], id:"compareBtn",innerHTML:"Compare"});

const tdCreateObjArr = [[compareName2Obj,ratingInputObj,compareBtnObj]];

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
    if (Array.isArray(buildObj.classArr)) {
        buildObj.classArr.forEach((c) =>{
            newElement.classList.add(c);
        });
    }
    else if (buildObj.classArr)
        newElement.classList.add(buildObj.classArr);
    return newElement;
}
```
<h2>Screenshots</h2>
<img
  src="/assets/Screenshot1.png"
  title="Screenshot1"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
<img
  src="/assets/Screenshot2.png"
  title="Screenshot2"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
<h2>Future  Features</h2>
<ul>
  <li><b>Enhance user experience:</b> Enhance the layout to make paging for search result (now limit 100 record)
</li>
  <li><b>Export the statistics result:</b> Export to file
</li>
</ul>
