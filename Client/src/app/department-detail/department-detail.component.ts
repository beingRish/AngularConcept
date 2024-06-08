import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  departmentId!: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const idParam = this.route.snapshot.paramMap.get('id')
    // if(idParam !== null){
    //   let id = parseInt(idParam);
    //   this.departmentId =  id;
    // }

    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        let id = parseInt(idParam); // Use the base parameter to avoid unexpected behavior
        if (!isNaN(id)) {
          this.departmentId = id;
        }
      }
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId])
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId])
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id : selectedId}])
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route})
  }


  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route})
  }


}
