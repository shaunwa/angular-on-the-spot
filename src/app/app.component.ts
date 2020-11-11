import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    person = { name: 'Bert', age: 10 };
    myClass = "main-page-hello"
    selectedPersonName = null;

    setSelectedPerson(name) {
        this.selectedPersonName = name;
    }
}