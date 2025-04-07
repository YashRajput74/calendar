import { model } from "./model";
import { view } from "./view";

export const controller={
    init(){
        this.changeDate(model.dateToday(),model.monthToday(),model.yearToday()),
        setInterval(
            ()=>view.changeTime(model.timeNow(model.dateObject()))
        ,1000)
    },
    changeDate(dateProvided,monthProvided,yearProvided){
        view.changeTodayDate(`${model.monthDaysEnglish(monthProvided,yearProvided)[0]} ${dateProvided}, ${yearProvided}`)
    },
    todayDateRender(){
        this.dateRender(model.dateToday(),model.monthToday(),model.yearToday());
    },
    dateRender(dateProvided,monthProvided,yearProvided){
        this.changeDate(dateProvided,monthProvided,yearProvided),
        view.updateMonthCalendar(
            model.monthlyDays(monthProvided,yearProvided),
            model.previousMonthDays(monthProvided,yearProvided),
            dateProvided,
            model.noOfWeeks(monthProvided,yearProvided)
        );
        if(model.noOfWeeks(monthProvided,yearProvided)==6){
            document.querySelector(".calendar>table").style.height="280px";
        }
        else if(model.noOfWeeks(monthProvided,yearProvided)==5){
            document.querySelector(".calendar>table").style.height="250px";
        }
        /*you see i had covered two test cases here when the month is february and month start from monday i will need four weeks otherwise 5 will be suffeicient to render 31 dates but i was wrong when i rendered the march of 2025 it needed 6 weeks because the atrting date was staring from saturday. so i will ask my model function to calculate the number of weeks required too...*/
        /*now i have to make an object of this cuz i made a function inside function it is better to make function inside object */
    },
}