import { Injectable } from '@angular/core';
import { Task } from '../components/Task';


import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = new HttpHeaders ({
  'Content-Type':'application/json' //las cosas de html van entre llaves

})

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ='http://localhost:5000/tasks';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> { //con el observable va a estar mirando a task que es donde esta mi DB,
    //cuando algo dentro de ella cambien a todos los subscritos a este metodo les avisara y reaccionaran con algo
    /*const tasks = of(Tasks);
    return tasks;*/

    return this.http.get<Task[]>(this.apiUrl) // .get para consultar la db
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}` // me tomaba a this.apiUrl como string por ponerlo en () en vez de  {}
    return this.http.delete<Task>(url) // .delete para elimar algo de mi pseudo db
  }
  
  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, {headers: {'Content-Type': 'application/json'}})
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, {headers: {'Content-Type': 'application/json'}})
  }

}
