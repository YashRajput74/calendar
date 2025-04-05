/*Model contains all the data so i think all the date generation must be done here. */
/*Date */
export const model={
    /*dont forget this is object no need to write let,const */
    dateObject: new Date(),
    timeNow(){
        const minutes= this.dateObject.getMinutes();
        const twoDigitMinutes=String(minutes).padStart(2,'0');
        return `${this.dateObject.getHours()}:${twoDigitMinutes}`;
    },
    dateToday(){
        return this.dateObject.getDate();
    },
    monthToday(){
        return this.dateObject.getMonth();
    },
    yearToday(){
        return this.dateObject.getFullYear();
    },
    monthlyDays(monthToday,yearToday){
        const possibleDays=[31,28,31,30,31,30,31,31,30,31];
        function leapYear(year){
            return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
        }
        if(monthToday==1 && leapYear(yearToday)){
            return 29;
        }
        return possibleDays[monthToday];
    },
    dayAtStart(yearToday,monthToday){
        return new Date(yearToday,monthToday,1).getDay();
        /*I still do not know why we are making a new date object every time but i know everything other than that*/
    },
    monthDaysEnglish(monthToday,yearToday){
        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const dayToday=this.dayAtStart(yearToday,monthToday);
        return [months[monthToday],days[dayToday]];
    },
    previousMonthDays(monthToday,yearToday){
        const startingDay=this.dayAtStart(yearToday,monthToday);
        let previousDays=this.monthlyDays(monthToday-1,yearToday);
        const arr=[];
        if(startingDay==1){
            return arr;
        }
        else if(startingDay==0){
            for(let i=0;i<5;i++){
                arr.unshift(previousDays);
                previousDays--;
            }
        }
        else{
            for(let i=0;i<startingDay-1;i++){
                arr.unshift(previousDays);
                previousDays--;
            }
        }
        return arr;
    }
}