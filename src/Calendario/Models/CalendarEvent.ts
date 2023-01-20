

export class CalendarEvent {

    title:    string;  
    time:     number;
    duration: number;

    constructor(time:number,title:string, duration:number){
        
        this.title    = title;
        this.time     = time;     
        this.duration = duration;   
    
    }


}