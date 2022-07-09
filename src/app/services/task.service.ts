import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { Task } from '../Task';
// for fetching backend data
import {HttpClient,HttpHeaders} from '@angular/common/http'

// headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
 
  // define the httpClient in the constuctor
  constructor(private http:HttpClient) { }
// using observables on type task
  getTasks(): Observable<Task[]>{
    // Http what you called  httpClient in the constructor
    // <Task[]> gives it the type task array -->> interface task
    return this.http.get<Task[]>(this.apiUrl)
  }

  // delete Task
  deleteTask(task:Task):Observable<Task>{
      const url=`${this.apiUrl}/${task.id}`;
      return this.http.delete<Task>(url);
  }
  //  update                  what it returns
  updateTaskReminder(task:Task): Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task,httpOptions); 
  }
  // add task
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }
}

