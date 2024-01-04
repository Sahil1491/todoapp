import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],
})
export class AddtaskComponent implements OnInit {
  
  taskForm!: FormGroup;
// Initialize signupUserName with an empty string
signupUserName: string = '';


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskName: ['', [Validators.required]],
    });
    this.signupUserName = localStorage.getItem('loggedInUser') || '';
  
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskName = this.taskForm.value.taskName;
      let tasks = localStorage.getItem('tasks');
      
      if (!tasks) {
        tasks = '[]';
      }

      const taskList = JSON.parse(tasks);
      taskList.push({ name: taskName });
      localStorage.setItem('tasks', JSON.stringify(taskList));

      this.taskForm.reset();

      console.log('Task added:', taskName);
      alert('Task saved! You can see this in the task list.');
    }
  }
}
