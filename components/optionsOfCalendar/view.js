export const view={
    renderMonths(currentMonth){
        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        let counter=-1;
        const select=document.querySelector("#monthSelect");
        select.innerHTML=`
        ${months.map((item)=>{
            if(item==months[currentMonth]){
                    counter++;
                    return `<option value="${counter}" selected>${item}</option>`;
                }
                else{
                    counter++;
                    return `<option value="${counter}">${item}</option>`;
                }
            }).join('')}
        `;
    },
    renderYears(currentYear){
        const select=document.querySelector("#yearSelect");
        let startYear=currentYear-5;
        let tpl=``;
        for(let j=0;j<10;j++){
            if(startYear==currentYear){
                tpl+= `<option value="${startYear}" selected>${startYear}</option>`;
                startYear++;
            }
            else{
                tpl+= `<option value="${startYear}">${startYear}</option>`;
                startYear++;
            }
        }
        select.innerHTML=tpl;
    }
}