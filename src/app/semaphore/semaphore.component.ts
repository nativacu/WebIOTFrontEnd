import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['./semaphore.component.css']
})
export class SemaphoreComponent implements OnInit {
  @Input() on = true;
  constructor() { }

  ngOnInit(): void {
  }
}
