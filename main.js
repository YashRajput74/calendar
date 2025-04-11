import { controller as calendarController} from "./components/calendar/controller";
import { controller as weatherController } from "./components/weather/controller";

calendarController.init();
calendarController.todayDateRender();
weatherController.init();