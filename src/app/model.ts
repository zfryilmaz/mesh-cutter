
export class Model{
    user:any;
    items:any;

    constructor(){
        this.user = "Zafer";
        this.items = [
            new TodoItem("Kahvaltı",true),
            new TodoItem("Spor",true),
            new TodoItem("Kitap",false),
            new TodoItem("Sinema",false),     
          ];
    }
}
export class TodoItem{
    description;
    action;

    constructor(description : any, action:any){
        this.description = description;
        this.action = action;
    }
}