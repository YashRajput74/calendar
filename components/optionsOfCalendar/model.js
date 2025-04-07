export const model={
    dateObject(){
        return new Date();
    },
    dateToday(){
        return this.dateObject().getDate();
    },
    monthToday(){
        return this.dateObject().getMonth();
    },
    yearToday(){
        return this.dateObject().getFullYear();
    }
}