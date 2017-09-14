import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductFormsService } from './product-forms.service';

@Component({
  selector: 'product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.css']
})
export class ProductFormsComponent implements OnInit {

  // if isMini then it is minimal menu list for displaying in toolbar.
  // If false then it will be display in dashboard component as full multi colored list.
  @Input()
  ismini = false;

  constructor(private _productService: ProductFormsService) { }

  addUserDetail() {
    this._productService.addUserDetail();
  }

  addOverloadCitation() {
    this._productService.addOverloadCitation();
  }


  addViolationNotice() {
    this._productService.addViolationNotice();
  }

  ngOnInit() {
  }

}
