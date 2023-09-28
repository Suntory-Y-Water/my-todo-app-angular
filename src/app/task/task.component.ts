import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  // task.component.ts
  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(
      tasks => {
        this.tasks = tasks;
        console.log('Tasks loaded:', tasks);
      },
      error => {
        console.error('Error loading tasks:', error);
      }
    );
  }

  addTask(newTask: string): void {
    const task = { title: newTask, status: 'pending' };
    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  // Other methods for updating and deleting tasks...
}
