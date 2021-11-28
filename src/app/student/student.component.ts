import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jda-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  name: string = "Luke";
  isJedi: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
