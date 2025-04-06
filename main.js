import { controller as calendarController} from "./components/calendar/controller";
import { controller as optionsController } from "./components/optionsOfCalendar/controller";

calendarController.init();
calendarController.todayDateRender();
optionsController.init();

/**
 * i was thinking that for the optionsDiv i will make different componentfolder(model,view,controller) but it will be linked to the calender component so i will be needing to access the calendarcontroller methods, maybe i should do lke this or maybe i should embed both the functionalities in same mvc of calendar
 */