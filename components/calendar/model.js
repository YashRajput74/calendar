export const model={
    dateObject(){
        return new Date();
    },
    timeNow(dateObj){
        const minutes= dateObj.getMinutes();
        const twoDigitMinutes=String(minutes).padStart(2,'0');
        return `${dateObj.getHours()}:${twoDigitMinutes}`;
    },
    dateToday(){
        return this.dateObject().getDate();
    },
    monthToday(){
        return this.dateObject().getMonth();
    },
    yearToday(){
        return this.dateObject().getFullYear();
    },
    monthlyDays(monthProvided,yearProvided){
        const possibleDays=[31,28,31,30,31,30,31,31,30,31,30,31];
        function leapYear(year){
            return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
        }
        if(monthProvided==1 && leapYear(yearProvided)){
            return 29;
        }
        return possibleDays[monthProvided];
    },
    dayAtStart(monthProvided,yearProvided){
        return new Date(yearProvided,monthProvided,1).getDay();
    },
    monthDaysEnglish(monthProvided,yearProvided){
        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const dayToday=this.dayAtStart(monthProvided,yearProvided);
        return [months[monthProvided],days[dayToday]];
    },
    previousMonthDays(monthProvided,yearProvided){
        const startingDay=this.dayAtStart(monthProvided,yearProvided);
        let previousDays;
        if(monthProvided==0){
            previousDays=this.monthlyDays(11,yearProvided-1);
        }
        else{
            previousDays=this.monthlyDays(monthProvided-1,yearProvided);
        }
        const arr=[];
        if(startingDay==1){
            return arr;
        }
        else if(startingDay==0){
            for(let i=0;i<6;i++){
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
    },
    noOfWeeks(monthProvided,yearProvided){
        const arr=this.previousMonthDays(monthProvided,yearProvided);
        const days=this.monthlyDays(monthProvided,yearProvided);
        const totalDays=arr.length+days;
        let weeks = Math.floor(totalDays / 7);
        if (totalDays % 7 > 0) {
            weeks += 1;
        }
        return weeks;
    }
}