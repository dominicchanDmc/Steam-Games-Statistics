# Steam-Games-Statistics
## Background 
Steam is the world's most popular PC Gaming hub, with over 7,000 games and a community of millions of gamers. It includes everything from big companies to individual, great data statistics tools can help companies to find out the market needs.

The website likely fetches data from <a href='https://www.kaggle.com/datasets/mikekzan/steam-games-dlcs?select=steam.csv'>kaggle</a> related to video games, such as their names, release dates, ratings, supported languages, categories, and tags. Users can search for specific games, compare two games, or perform statistical analysis on game data. The app offers options for filtering, sorting, and displaying the data in both tabular and chart formats.
## Live version 
Live version can be seen on <a href='https://dominicchandmc.github.io/Steam-Games-Statistics/'>this link</a>
<h2>Instructions</h2>
Navigate through the slides to search, compare and statistics. Click on the "home" button to navigate back to the beggining.
Recommend do the searching first, that select 2 game to compare.

## Technologies
In this website,I have use 2 Libraries:

- **Chat.js**: Rendering charts and graphs on the web page.
- **Font Awesome**: The commom and easy to understand icon

## Technical Features 
### Dynamic Building of HTML Elements

Writing HTML elements manually can lead to a lot of boilerplate code, especially when dealing with large datasets, so dynamically generate HTML elements with appropriate attributes and content is important.

These helper functions abstract away the complexities of element creation and make the code more maintainable and organized. By passing the necessary parameters, the functions construct the desired HTML components, which are then appended to the DOM.

Example is define 4 const to build a 1 row 3 col table. I just want to change the value of the obj to control the table.

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
### Transforming and manipulating data
When doing data statistics or analysis, sometimes the data can have diffenert formmat in the some field or have some space in the work.
For example:  
<img
  src="/assets/ScreenshotP.png"
  title="Screenshot1"
  style="display: inline-block; margin: 0 auto; max-width: 300px"> <br>
  I get a "languages" field in data, and return **"English: 1"** and **English: 11**, because of the **space** and the **""**, they not count the same<br>

I write two function to solve this problem
#### dataTranArray 
  Use the stringCut function to remove any square brackets and single quotes from the input string. Then, use the split method with a comma as the delimiter to split the string into an array of values. Also need to handle scenarios where the input string is empty or does not contain any commas.
```JavaScript
export function stringCut(string) {
    return string.replace(/\[|\]|'/g, "")
}
export function dataTranArray(dataString) {
  let finalArr = [];
  let dataStringCut = stringCut(dataString);
    if (dataStringCut){
        let stringSpilt = dataStringCut.split(',');
        if (Array.isArray(stringSpilt))
            return stringSpilt       
        else
            finalArr.push(stringSpilt); 
    }
    return finalArr;
}
```
#### rebuildHash 
Use the Object.keys method to iterate through the keys of the original hash. For each key, we clean and normalize it by converting it to lowercase, removing any special characters or quotes, and capitalizing the first letter. Then use the cleaned key as the key for the rebuiltHash object and sum up the corresponding values. If a key already exists in the rebuiltHash, add its value to the existing value; otherwise, create a new entry with the cleaned key and its value.
```JavaScript
export function rebuildHash(originalHash) {
    const rebuiltHash = {};
  
    Object.keys(originalHash).forEach((key) => {
      const cleanedKeyTemp = key.trim().toLowerCase().replace(/"/g, '');
      const cleanedKey = cleanedKeyTemp.charAt(0).toUpperCase() + cleanedKeyTemp.slice(1);
      if (rebuiltHash[cleanedKey]) {
        rebuiltHash[cleanedKey] += originalHash[key];
      } else {
        rebuiltHash[cleanedKey] = originalHash[key];
      }
    });
  
    return rebuiltHash;
  }
```


## Screenshots
<img
  src="/assets/Screenshot1.png"
  title="Screenshot1"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
<img
  src="/assets/Screenshot2.png"
  title="Screenshot2"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
## Future  Features
-  **Enhance user experience**:  Enhance the layout to make paging for search result (now limit 100 record)
-  **Export the statistics result**:  Export to file
