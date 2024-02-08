import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private fb:FormBuilder){}

  form:FormGroup = this.fb.group({
    gameName:['',[Validators.required]],
    urls: this.fb.array([this.createInputControl()], Validators.required) //the initial value is setted by the function created
  })


  createInputControl():FormGroup{
    return  this.fb.group({
      url:['', [Validators.required]]
    });
  }

  //To get formarray 
  get urls():FormArray{
    return <FormArray> this.form.get("urls");
  }

  addUrlInput(){
    this.urls.push(this.createInputControl()); //Using the get created
  }

  removeUrlInput(formIndex:number){
    console.log("Input formGroupName: ", this.urls.removeAt(formIndex));
  }

  onSubmit(event:Event){
    event.preventDefault();

    console.log(this.form.value);
    
  }
}
