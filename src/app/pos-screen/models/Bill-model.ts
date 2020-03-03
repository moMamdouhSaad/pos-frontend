import { Customer } from 'src/app/models/customer';

export interface BillModel{
    serial_number?:number;
    bill_type:string;
    table_number?:number;
    bill_status?:string;
    lines:line[];
    subtotal:number;
    tax_rate:number;
    total:number;
    customerInfo?:Customer;
}

export interface line{
    product_id:string;
    qty:number;
    total:number;
}