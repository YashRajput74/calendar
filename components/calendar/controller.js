import { model } from "./model";
import { view } from "./view";

export const controller={
    init(){
        view.changeTodayDate(`${model.monthDaysEnglish(model.monthToday(),model.yearToday())[0]}, ${model.dateToday()}`),
        setInterval(
            ()=>view.changeTime(model.timeNow(model.dateObject()))
        ,1000)
    },
    todayDateRender(){
        this.dateRender(model.dateToday(),model.monthToday(),model.yearToday());
    },
    dateRender(dateProvided,monthProvided,yearProvided){
        if(
            model.monthDaysEnglish(monthProvided,yearProvided)[1]=="Monday" &&
            model.monthToday()==1
        ){
            view.updateMonthCalendar(
                model.monthlyDays(monthProvided,yearProvided),
                model.previousMonthDays(monthProvided,yearProvided),
                dateProvided,
                4
            );
        }
        else{
            view.updateMonthCalendar(
                model.monthlyDays(monthProvided,yearProvided),
                model.previousMonthDays(monthProvided,yearProvided),
                dateProvided,
                5
            );
        }
        /*now i have to make an object of this cuz i made a function inside function it is better to make function inside object */
    }
}