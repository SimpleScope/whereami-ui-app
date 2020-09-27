import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
