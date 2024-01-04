import { Component } from '@angular/core';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css'],
})
export class ViewlistComponent {
  taskList: any[] = [];

  constructor() {}

  ngOnInit() {
    // Retrieve saved tasks from localStorage
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.taskList = JSON.parse(tasks);
    }
  }

  updateTask(index: number) {
    // Implement your update logic here
    const newTaskName = prompt('Enter the updated task name:');
    if (newTaskName !== null) {
      this.taskList[index].name = newTaskName;
      localStorage.setItem('tasks', JSON.stringify(this.taskList));
    }
  }

  deleteTask(index: number) {
    // Implement your delete logic here
    this.taskList.splice(index, 1);
  }
}
