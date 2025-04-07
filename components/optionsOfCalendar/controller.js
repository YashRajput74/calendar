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
            /* maybe i should see if the event targeted is select if yes then check the parent's .optiondiv and check both the select's value and change the value of controller..*/
        })
    }
}