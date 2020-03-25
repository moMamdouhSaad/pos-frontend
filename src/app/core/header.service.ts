import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

 private adminPanelChoice = new BehaviorSubject<string>(null); 

  constructor() { }

  setAdminPanelChoice(choice: string){
    this.adminPanelChoice.next(choice)
  }
  getAdminPanelChoice$():Observable<string>{
    return this.adminPanelChoice.asObservable();
  }
}
