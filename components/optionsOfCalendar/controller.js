import { model } from "./model";
import { view } from "./view";

export const controller={
    init(){
        view.renderMonths(model.monthToday());
        view.renderYears(model.yearToday());
    }
}