import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  doCheckRenders: string[] = [];

  renders: string[] = [];
  constructor( ) { }
 
  addRender(val: string) {
    if (this.renders.includes(val)) return;
    this.renders.push(val);
  }
 
  addDoCheckRender(val: string) {
    if (this.doCheckRenders.includes(val)) return;
    this.doCheckRenders.push(val);
  }
}
