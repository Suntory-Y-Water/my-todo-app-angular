import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private dbService: NgxIndexedDBService) { }

  addTask(task: any): Observable<any> {
    return this.dbService.add('tasks', task);
  }

  getAllTasks(): Observable<any> {
    return this.dbService.getAll('tasks');
  }
}
