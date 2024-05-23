import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes-example',
  templateUrl: './on-changes-example.component.html',
  styleUrls: ['./on-changes-example.component.css']
})
export class OnChangesExampleComponent implements OnChanges {

  title = 'ngOnChanges'

  @Input() inputValue?: number;
  currentValue?: number;
  previousValue?: number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Input property changed: ", changes);

    if (changes['inputValue']) {
      this.currentValue = changes['inputValue'].currentValue;
      this.previousValue = changes['inputValue'].previousValue;
    }
  }
}
