class BuildObj{
    constructor(tag,classArr, name,id,innerHTML
        ,inputType,lableName,value,attribute,options,readonly) {
        this.tag = tag;
        this.classArr = classArr;
        this.name = name;
        this.id = id;
        this.innerHTML = innerHTML;
        this.lableName = lableName;
        this.inputType = inputType;
        this.value = value;
        this.options = options;
        this.attribute = attribute;
        this.readonly = readonly;
        // this.innerText = innerText;
    }
}

export default BuildObj;