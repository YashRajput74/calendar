import { controller as calendarController} from "./components/calendar/controller";
import { controller as optionsController } from "./components/optionsOfCalendar/controller";

calendarController.init();
calendarController.todayDateRender();
optionsController.init();