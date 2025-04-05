/*Model contains all the data so i think all the date generation must be done here. */
/*Date */
export const model={
    /*dont forget this is object no need to write let,const */
    monthToday: new Date().getMonth(),
    yearToday: new Date().getFullYear(),
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
    dayAtStart(){
        return new Date(model.yearToday,model.monthToday,1).getDay();
        /*I still do not know why we are making a new date object every time but i know everything other than that*/
    },
    monthDaysEnglish(monthToday){
        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const dayToday=this.dayAtStart(monthToday,this.yearToday);
        return [months[monthToday],days[dayToday]];
    }
}