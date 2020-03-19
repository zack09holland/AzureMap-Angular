import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  /*
  * !!IMPORTANT!!
  * TO RUN EXAMPLES INSERT YOUR AZURE MAP KEY HER
  * KEY IN NECESSARY TO DISPLAY MAP OR USE API
   */
  key: string = 'TfUWvWqVnTGKGMcIvxr5coNt7eiWrKxh6wJe0keVZSs';

  constructor() {
  }

  public getKey(): any {
    return this.key.includes('<', 0) ? alert('To run examples insert azure map key in app->dashboard->key.service'): this.key;
  }
}
