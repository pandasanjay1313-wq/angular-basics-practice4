import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  productId: any;

  constructor(private router: Router, private route: ActivatedRoute) {
      this.route.params.subscribe((params: any) => {
      this.productId = params['id'];
    });
  }

  // ngOnInit() {}


  nextProduct(){
    this.router.navigate(['/product',102],{
      queryParams: { price: 10000 },
      queryParamsHandling: 'merge'

      // queryParamsHandling: 'preserve'


    });
  }


}
