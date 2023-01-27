import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  ngOnInit() {
    this.taskForm.reset();
  }
  @Output() taskOut = new EventEmitter();
  taskForm = new FormGroup({
    recipename: new FormControl(''),
    description: new FormControl(''),
    ingredients: new FormControl(''),
    steps: new FormControl('')
  });

  addrecipe(){
    this.taskOut.emit(this.taskForm.value);
  }

}
