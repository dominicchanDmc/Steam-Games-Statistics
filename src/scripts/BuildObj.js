class BuildObj{
    constructor(tag,classArr, name,id,innerHTML
        ,inputType,lableName,value,attribute,obj) {
        this.tag = tag;
        this.classArr = classArr;
        this.name = name;
        this.id = id;
        this.innerHTML = innerHTML;
        this.lableName = lableName;
        this.inputType = inputType;
        this.value = value;
        this.obj = obj;
        this.attribute = attribute;
    }
}

export default BuildObj;