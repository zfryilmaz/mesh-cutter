import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    model = new Model();
    DisplayAll : boolean = false;
    getName()
    {
      return this.model.user;
    }
    getItems()
    {
      if (this.DisplayAll) {
        return this.model.items;
      }
      return this.model.items.filter((item:any) => !item.action);
    }
    addItem(value:any)
    {
      if(value != "")
      {
        this.model.items.push(new TodoItem(value,false)); 
      }
    }
}
