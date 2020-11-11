import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const fakePeople = [{
    name: 'John',
    age: 34,
}, {
    name: 'Susan',
    age: 10,
}, {
    name: 'Sonic the Hedgehog',
    age: 29,
}];

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    people = fakePeople;

    @Output() personClicked = new EventEmitter<string>();

    constructor() { }

    onPersonClicked(name) {
        this.personClicked.emit(name);
    }

    ngOnInit(): void {
    }

}
