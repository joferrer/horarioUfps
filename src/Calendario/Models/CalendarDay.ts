import { CalendarEvent } from "./CalendarEvent";


export class CalendarDay {

    day    : number;
    name   : string;
    events : Array<CalendarEvent>;

    constructor (day:number, name:string, events: Array<CalendarEvent> = new Array<CalendarEvent>){
        
        this.day    = day;
        this.name   = name;
        this.events = events;
    
    }
}