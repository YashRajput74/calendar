import { model } from "./model";
import { view } from "./view";
import { controller as calendarController} from "../calendar/controller";

export const controller={
    init(){
        view.renderMonths(model.monthToday());
        view.renderYears(model.yearToday());
        document.querySelector(".optionsDiv").addEventListener("change",(event)=>{
            const selectedTarget=event.target;
            if(selectedTarget.tagName=="SELECT"){
                const monthSelected=document.querySelector("#monthSelect");
                const yearSelected=document.querySelector("#yearSelect");
                calendarController.dateRender(model.dateToday(),monthSelected.value,yearSelected.value);
            }
        })
        document.querySelector(".optionsDiv").addEventListener("click",(event)=>{
            if(event.target.classList.contains("jumpToday")){
                calendarController.todayDateRender();
            }
        })
    }
}