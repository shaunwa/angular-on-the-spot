import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greeting-message',
  templateUrl: './greeting-message.component.html',
  styleUrls: ['./greeting-message.component.css']
})
export class GreetingMessageComponent implements OnInit {
    @Input() person;

    constructor() { }

    ngOnInit(): void {
    }
}
