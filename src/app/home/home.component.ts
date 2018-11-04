import { Component, OnInit } from '@angular/core';
//import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { DataService } from '../data.service';
import   { FilterPipe } from '../filter.pipe';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
  })


export class HomeComponent implements OnInit {

  itemCount:number;
  goals = [];
  goalText:string;
  searchText:string;

  constructor(private _data: DataService) { }

  ngOnInit() {
  	this._data.goal.subscribe(res=> this.goals = res);
   	this.itemCount = this.goals.length;
  	this._data.changeGoal(this.goals);

  }
  addGoal()
  {
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
  	this._data.changeGoal(this.goals);
  }

  removeGoal(goal)
  {
    for(let i=0; i<this.goals.length; i++)
    {
      if(this.goals[i] == goal){
        console.log(i +" ======> "+goal);
        this.goals.splice(goal, 1);
        this.itemCount = this.goals.length;
        this._data.changeGoal(this.goals);
        
      }

    }
    
  	
    
  	
  }

}
