import { Component } from '@angular/core';;
import { Router } from '@angular/router';
import { categories } from '../category';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  categories = [...categories]; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/category/');
  }

  selectedCategory(event: any){
    this.router.navigateByUrl('/category/' + event.target.value);
  }
}
