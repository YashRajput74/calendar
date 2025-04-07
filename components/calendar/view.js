export const view={
    changeTodayDate(dateDisplay){
        const dateDiv= document.querySelector(".displayedDate");
        dateDiv.textContent=dateDisplay;
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
                        td.classList.add("previous");
                        arr.shift();
                    }
                    else if(counter==noOfDays+1){
                        counter=1;
                        flag=1;
                        td.textContent=counter;
                        td.classList.add("nonMonth");
                        td.classList.add("next");
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
                        td.classList.add("next");
                        counter++;
                    }
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        }
        makeDays();
    }
}