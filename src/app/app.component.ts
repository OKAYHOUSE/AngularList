import { Component } from '@angular/core';
import { List } from './list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularList'; 
  listArray: List[] = [ 
    {task: "fold cloths ", completed: false},
    {task: "put clothes away ", completed: false},
    {task: "relax", completed: false},
    {task: "play games", completed: true},
    {task: "wash dishes", completed: false},
    {task: "be awesome", completed: false}
  ];
  searchedArray: List[] = this.listArray; 

  newTask: List = {task: "", completed: false}; 
  searchArrayByString: string = ""; 
  listArrayIndex: number = -1; 
  

  addTodo() {
    let task = Object.assign({}, this.newTask);
    this.listArray.push(task);

    this.searchArray(); 
    this.newTask.task = ""; 
  }

  completeTask(index: number) {
    this.getListArrayIndex(index);

    this.listArray[this.listArrayIndex].completed = true;
  }

  removeTask(index: number) {
    
    this.getListArrayIndex(index);
    
    this.listArray.splice(this.listArrayIndex, 1);

    this.searchArray();
  }

  searchArray() {
    this.searchedArray = this.listArray;

    this.searchedArray = this.listArray.filter((list) => {
      
      return list.task.includes(this.searchArrayByString);
    });
  }

  getListArrayIndex(index: number) {  
    this.listArrayIndex = this.listArray.findIndex((list) => { 
      return this.searchedArray[index] === list;
    });
  }
  
  ngOnInit(): void {
  }
}