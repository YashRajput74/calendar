/*Controller will take data from model pass it to view who will render it. */

import { model } from "./model";
import { view } from "./view";

export function controller(){
    /* console.log(model.timeNow());
    console.log(model.monthToday());
    console.log(model.yearToday());
    console.log(model.dayAtStart(model.monthToday(),model.yearToday()));
    console.log(model.monthDaysEnglish(model.monthToday(),model.yearToday()));
    console.log(model.monthDaysEnglish(model.monthToday()-1,model.yearToday()));
    console.log(view.dateDiv); */
    view.changeTodayDate(`${model.monthDaysEnglish(model.monthToday(),model.yearToday())[0]}, ${model.dateToday()}`);
    setInterval(
        ()=>view.changeTime(model.timeNow(model.dateObject()))/**this function is calling the timeNow() but the content inside it is not getting changed */
    ,1000);
    /*there is a problem with this setinterval, it is running only once...or maybe it running many times but the time he is bringing is same; */
    if(model.monthDaysEnglish(model.monthToday(),model.yearToday())[1]=="Monday" && model.monthToday()==1){
        view.updateMonthCalendar(model.monthlyDays(model.monthToday(),model.yearToday()),model.previousMonthDays(model.monthToday(),model.yearToday()),model.dateToday(),4);
    }
    else{
        view.updateMonthCalendar(model.monthlyDays(model.monthToday(),model.yearToday()),model.previousMonthDays(model.monthToday(),model.yearToday()),model.dateToday(),5);
    }
}