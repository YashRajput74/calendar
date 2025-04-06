export const model={
    dateObject(){
        return new Date();
    },
    monthToday(){
        return this.dateObject().getMonth();
    },
    yearToday(){
        return this.dateObject().getFullYear();
    }
}