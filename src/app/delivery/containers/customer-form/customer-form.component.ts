import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { pipe, Observable } from 'rxjs';
import { map, debounceTime, switchMap } from 'rxjs/operators';
import { DeliveryFacade } from '../../facades/delivery-facade';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerFormGroup:FormGroup = new FormGroup({
    customerPhone : new FormControl(''),
    customerName : new FormControl(''),
    customerAddress : new FormControl('')
  })
  filteredCustomers:Observable<any>;
  filter:any;
  constructor(private deliveryFacade:DeliveryFacade ,private router:Router) { }

  ngOnInit() {
    this.customerFormGroup.get('customerPhone').valueChanges.pipe(debounceTime(300),
   switchMap(val=>this.deliveryFacade.search(val))
   ).subscribe(data=>{
    console.log(data)
  },err=>{
    this.deliveryFacade.errHandlerService.showDialog();
  })

    this.filteredCustomers = this.customerFormGroup.get('customerPhone').valueChanges.pipe(debounceTime(300),
    switchMap(val=>this.deliveryFacade.search(val)),map((x:any)=>x.response)
    )
    // this.filteredCustomers.subscribe(data=>console.log(data))
  }
  getCustomerInfo(event){
    this.customerFormGroup.get("customerPhone").patchValue(event.customer_phone)
    this.customerFormGroup.get("customerName").patchValue(event.customer_name)
    this.customerFormGroup.get("customerAddress").patchValue(event.customer_address)
  }
  displayFn(customer: any) {
    if (customer) { return customer.customer_phone }
  }

  posScreenRedirect(){
    const customerInfo: Customer = {
      name: this.customerFormGroup.get("customerName").value,
      address: this.customerFormGroup.get("customerAddress").value,
      phone: this.customerFormGroup.get("customerPhone").value
    }
    this.deliveryFacade.setCustomerInfo(customerInfo)
    this.router.navigate(["delivery/order"])
  }
}
