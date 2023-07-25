class BuildObj{
    constructor(tag,classArr, name,id,innerHTML
        ,inputType,lableName,value,attribute,options,readonly
        ,onClick,src,rowSpan,colSpan,skipTd) {
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
        this.onClick = onClick;
        this.src = src;
        this.skipTd = skipTd
        // this.rowSpan = rowSpan
        this.colSpan = colSpan
    }
}

export default BuildObj;