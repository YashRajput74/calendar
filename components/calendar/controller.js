import { model } from "./model";
import { view } from "./view";

export const controller={
    displayedMonth: "",
    yearProvided: model.yearToday(),
    init(){
        this.changeDate(model.dateToday(),model.monthToday(),model.yearToday());
        setInterval(
            ()=>view.changeTime(model.timeNow(model.dateObject()))
        ,1000);
        document.querySelector("table").addEventListener("click",(event)=>{
            if(event.target.tagName=="TD"){
                const targetedCell=event.target;
                const table=targetedCell.closest("table");
                table.querySelectorAll("td").forEach(element => {
                    element.classList.remove("selected");
                });
                if(targetedCell.classList.contains("todayDate")){

                }
                else if(targetedCell.classList.contains("nonMonth")){
                    if(targetedCell.classList.contains("previous")){
                        const date=targetedCell.textContent;
                        if(this.displayedMonth==0){
                            this.dateRender(date,11,this.yearProvided-1);
                        }
                        else{
                            this.dateRender(date,this.displayedMonth-1,this.yearProvided);
                        }
                    }
                    else if(targetedCell.classList.contains("next")){
                        const date=targetedCell.textContent;
                        if(this.displayedMonth==11){
                            this.dateRender(date,0,this.yearProvided+1);
                        }
                        else{
                            this.dateRender(date,this.displayedMonth+1,this.yearProvided);
                        }
                    }
                }
                else{
                    targetedCell.classList.add("selected");
                }
            }
        })
    },
    changeDate(dateProvided,monthProvided,yearProvided){
        /*this is changing the year but year is not coming when we select previous months date why?
        debugger */
        view.changeTodayDate(`${model.monthDaysEnglish(monthProvided,yearProvided)[0]} ${dateProvided}, ${yearProvided}`);
    },
    todayDateRender(){
        this.dateRender(model.dateToday(),model.monthToday(),model.yearToday());
    },
    dateRender(dateProvided,monthProvided,yearProvided){
        this.displayedMonth=monthProvided;
        this.displayedYear=yearProvided;
        this.changeDate(dateProvided,monthProvided,yearProvided);
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
    },
}