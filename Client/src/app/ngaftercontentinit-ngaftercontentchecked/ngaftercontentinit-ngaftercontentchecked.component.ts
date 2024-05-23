import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-ngaftercontentinit-ngaftercontentchecked',
  templateUrl: './ngaftercontentinit-ngaftercontentchecked.component.html',
  styleUrls: ['./ngaftercontentinit-ngaftercontentchecked.component.css']
})
export class NgaftercontentinitNgaftercontentcheckedComponent implements AfterContentInit, AfterContentChecked {
  title = 'ngAfterContentInit & ngAfterContentChecked'

  @ContentChild('projectedContent') projectedContent : any;


  ngAfterContentInit(): void {
    console.log('Projected content initialized', this.projectedContent);
    
  }

  ngAfterContentChecked(): void {
    console.log('Projected Content Checked');
    
  }
}
