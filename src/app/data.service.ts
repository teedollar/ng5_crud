import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//BehaviorSubject is used to share data across different components.


@Injectable()
export class DataService {

  //Creating the array of items that will be shared by different components
  private goals = new BehaviorSubject<any>(["Be successfully succesful", "Have a very long life"]);
  goal = this.goals.asObservable();

  constructor() { }

  //method that will be accessed by the components that need to share this service.
  changeGoal(goal)
  {
  	this.goals.next(goal);
  }

}
