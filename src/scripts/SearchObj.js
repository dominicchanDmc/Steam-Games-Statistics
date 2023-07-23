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
}

export default SearchObj;