import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DynamicForm } from './form.model';
import { debounceTime } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'trufla-form';
  formJsonFormControl: FormControl;
  ourForm: DynamicForm =  null;
  subscriptions: Subscription[] = [];

  

  ngOnInit(){
    this.formJsonFormControl = new FormControl();
    this.convert();
  }

  convert(){
    this.subscriptions.push(
      this.formJsonFormControl.valueChanges.subscribe(result => {
      this.ourForm =  JSON.parse(result) as DynamicForm ;
      this.ourForm.controls =  this.ourForm.controls.map(function(v){ 
        if(v.type == 'submit'){ 
          v.callbackFn = function(){ console.log('hello from callback')} 
        } 
        return v;})
    }))
  }

  ngOnDestroy(){
    if(this.subscriptions?.length) this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }
}
