import { ExpandTest } from './expand-test.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DBService {
  //result handling moved to component, but heavy lifting is here(part detached from the template and UI).
  //Sending requests and transforming the data in service is keeping my component lean.
  constructor(private http: HttpClient){}

  storeExpand(tiTle: string, conTent: string){
    const postData: ExpandTest = {title: tiTle, content: conTent}
    this.http
    .post<{name: string}>('https://ng-sns.firebaseio.com/expands.json', postData)
    //component does not care about this subscription, there is no reason to subscribe in the component, could be done here
    .subscribe(responseData => {
    console.log(responseData);
  });
  }

  fetchExpands(){
        //More elegant angular way to define a type of our response
        return this.http.get<{[key: string]: ExpandTest}>('https://ng-sns.firebaseio.com/expands.json')
        //to transform data from json file to array
        //map wraps into an observable, so we can still subscribe to it
        .pipe(
          map(responseData => {
          const expandsArray: ExpandTest[] = [];
          //loop through each key in my response data
          for (const key in responseData) {
            //good practice to wrap in if statement when using for loop
            //we checking if resData has key as its own property - we are not trying to access property of some prototype?
            if (responseData.hasOwnProperty(key)){
            //and push each key to my array
            // expandsArray.push(responseData[key])
            //I want to push a new object! Spread operator pulls out all key-value pairs of that nested object we accessing here, then i can add 1 new key-v pair : ID (cryptic key useful later for deleting)
            expandsArray.push({ ...responseData[key], id: key})
          }}
          //this is now forwarded to our subscribe function
          return expandsArray;
        }));
  }
}
