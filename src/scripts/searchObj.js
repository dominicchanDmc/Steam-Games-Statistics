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
            if (this.ownersChb) count++;
            if (this.releaseDateChb) count++;
            if (this.priceChb) count++;
            if (this.supportedLanguagesChb) count++;
            if (this.categoriesChb) count++;
            if (this.genresChb) count++;
            if (this.tagsChb) count++;
            if (this.averageForeverChb) count++;
            if (this.totalNegativeChb) count++;
            if (this.totalPositiveChb) count++;
            if (this.reviewScoreChb) count++;
            if (this.ratingChb) count++;
        }

    
        return count === num;
      }
}

export default SearchObj;