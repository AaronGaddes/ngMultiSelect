import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  inputText = '';
  tags = [
    {
      label: "test 1"
    },
    {
      label: "test 2"
    },
    {
      label: "test 3"
    }
  ]

  removeTag(i){
    this.tags.splice(i,1);
  }

  submitText() {
    if(this.inputText.replace(RegExp(' ','g'), '') == '') {
    } else {
      this.tags.push({
        label: this.inputText
      });
      this.inputText = '';
    }
    
  }

  backspaceRemove(){
    if(this.inputText == '') {
      this.tags.pop();
    }
  }

}
