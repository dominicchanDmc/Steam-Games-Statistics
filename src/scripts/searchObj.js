class SearchObj{
    constructor(gameName,releaseFrom,releaseTo,operator,rating,languages
        ,categories,orderBy) {
        this.gameName = gameName;
        this.releaseFrom = releaseFrom;
        this.releaseTo = releaseTo;
        this.operator = operator;
        this.rating = rating;
        this.languages = languages;
        this.categories = categories;
        this.orderBy = orderBy;
    }
    checkOnlyOneCriteria(source,num) {
        let count = 0;
    
        if (source === "search"){
            if (this.gameName) count++;
            if (this.releaseFrom) count++;
            if (this.releaseTo) count++;
            if (this.operator || this.rating) count++;
            if (this.languages) count++;
            if (this.categories) count++;
        }
        else if (source === "compare"){
            if (this.owners) count++;
            if (this.release_date) count++;
            if (this.price) count++;
            if (this.supported_languages) count++;
            if (this.categories) count++;
            if (this.genres) count++;
            if (this.tags) count++;
            if (this.average_forever) count++;
            if (this.total_negative) count++;
            if (this.total_positive) count++;
            if (this.review_score) count++;
            if (this.rating) count++;
        }    
        else if (source === "compare"){
            if (this.supported_languages) count++;
            if (this.categories) count++;
            if (this.genres) count++;
            if (this.tags) count++;
        }  
        return count === num;
    }
    getCheckedPropertiesArray() {
        const checkedProperties = [];
        for (const property in this) {
            if (this[property]) {
                checkedProperties.push(property);
            }
        }
        const filter_checkedProperties = checkedProperties.filter((item)=>{
            if (item ==="gameCompare1" || item ==="gameCompare2"||item ==="radioBtn")
                return false;
            else
                return true;
        });
        return filter_checkedProperties;
    }

    areOnlyFiveFieldsChecked() {
        const requiredFields = ["rating", "total_negative", "total_positive", "review_score", "average_forever"];
        const checkedFields = this.getCheckedPropertiesArray();
        
        return checkedFields.every(field => requiredFields.includes(field)); 
      }
}

export default SearchObj;