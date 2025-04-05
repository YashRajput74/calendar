/*Dumb guy in the team but is the face of the team */
export const view={
    changeTodayDate(dateDisplay){
        const dateDiv= document.querySelector(".displayedDate");
        dateDiv.textContent=dateDisplay;
        /*maybe i shouldnt import model in this and write todays date and time like this...maybe the controller must do this. */
    },
    changeTime(timeDisplay){
        const currentTimeDiv=document.querySelector(".displayedDate~div");
        currentTimeDiv.textContent=timeDisplay;
    },
    updateMonthCalendar(noOfDays,arr,dateToday,noOfWeeks){
        let counter=1;
        const table=document.querySelector(".calendar>table");
        table.innerHTML="";
        let makeTr=()=>document.createElement("tr");
        let makeTd=()=>document.createElement("td");
        let tr=makeTr();
        tr.innerHTML=`
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                    <th>S</th>
                `;
        table.appendChild(tr);
        function makeDays(){
            for(let j=0;j<noOfWeeks;j++){
                let tr=makeTr();
                let flag=0;
                for(let k=0;k<7;k++){
                    let td=makeTd();
                    if(arr.length!=0){
                        td.textContent=arr[0];
                        td.classList.add("nonMonth");
                        arr.shift();
                    }
                    else if(counter==noOfDays+1){
                        counter=1;
                        flag=1;
                        td.textContent=counter;
                        td.classList.add("nonMonth");
                        counter++;
                    }
                    else if(flag==0){
                        td.textContent=counter;
                        if(counter==dateToday){
                            td.classList.add("todayDate");
                        }
                        counter++;
                    }
                    else if(flag==1){
                        td.textContent=counter;
                        td.classList.add("nonMonth");
                        counter++;
                    }
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        }
        makeDays();
        /**
         * first we have to make empty the table then we will append child 1by1.
         * for weekdays representation we can easily put tr:nthchild1.innerhtml=;
         * for dates we will run a loop for 5 times putting each week(1tr each time); in each tr we will run a loop 7 times creating(7tds each time) and putting dates inside them. You see first we have to put all the dates of the previous month, then we will put dates of this month with the help of a counter.
         * we also have to see if there are any dates left for the next month if yes then make them
         * the previous month dates and next month dates will be having an extra class...how to add that? we can check the counter when it starts then we wont add class and when it reaches value of today date we will add a special class and then when it ends we will add an extra class.
         * there is a case what if february starts from monday.
         */
    }
    /*view is going to be a little complex */

    /**
     * test case-1: if month starts from tuesday then the controller must provide the dates of previous day.----the controller will provide us the number of days possible and the starting day then the controller will have to calculate the data himself.
     * we will have a counter that will count that 35 dates will be written in the calendar----to be done
     * test case-2: why havent i thought if the user changes the month manually...we must have a model function that will see if it is provided a year and month and will give no of days(it is here) but what about the first day of that month what is it? that function is not generic neither is monthdays English it is calling currentyear to calculate the month's day.----made it generic.
     */
}