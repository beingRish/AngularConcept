import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  topics = ['Angular', 'React', 'Vue']
  topicHasError = true;

  userModel = new User('', 'rob@test.com', 444456, 'default', 'morning', true);

  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }
  

  onSubmit(){
    console.log(this.userModel);
    
  }
}
