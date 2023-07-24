class SearchObj{
    constructor(gameName,releaseFrom,releaseTo,operator,rating,languages
        ,value) {
        this.gameName = gameName;
        this.releaseFrom = releaseFrom;
        this.releaseTo = releaseTo;
        this.operator = operator;
        this.rating = rating;
        this.languages = languages;
        this.categories = categories;
    }
    checkOnlyOneCriteria(num) {
        let count = 0;
    
        if (this.gameName) count++;
        if (this.releaseFrom) count++;
        if (this.releaseTo) count++;
        if (this.operator && this.rating) count++;
        if (this.languages) count++;
        if (this.categories) count++;
    
        return count === num;
      }
      getCriteriaHash() {
        const criteriaHash = {};
    
        if (this.gameName) criteriaHash["gameName"] = this.gameName;
        if (this.releaseFrom) criteriaHash["releaseFrom"] = this.releaseFrom;
        if (this.releaseTo) criteriaHash["releaseTo"] = this.releaseTo;
        if (this.operator && this.rating) {
          criteriaHash["operator"] = this.operator;
          criteriaHash["rating"] = this.rating;
        }
        if (this.languages) criteriaHash["languages"] = this.languages;
        if (this.categories) criteriaHash["categories"] = this.categories;
    
        return criteriaHash;
      }
      
}

export default SearchObj;