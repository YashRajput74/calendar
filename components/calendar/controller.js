/*Controller will take data from model pass it to view who will render it. */

import { model } from "./model";

export function controller(){
    console.log(model.monthToday);
    console.log(model.yearToday);
    console.log(model.monthlyDays(model.monthToday,model.yearToday));
    console.log(model.dayAtStart(model.monthToday,model.yearToday));
    console.log(model.monthDaysEnglish(model.monthToday))
}