import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements AfterViewInit{

  // @ViewChild("highlight")marker? : ElementRef;
  @ViewChildren("highlight")marker?:QueryList<any>;

  ngAfterViewInit(): void {
    console.log(this.marker);

    if (this.marker) { 
      // this.marker.nativeElement.style.color = 'red';   // for @ViewChild()

      // for @ViewChildren()
      this.marker.first.nativeElement.style.color = 'red' 
      this.marker.last.nativeElement.style.color = 'blue' 

    }
  }
}
