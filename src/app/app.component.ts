import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCRqzRgWeXogH1W2XT3uGABNYNq3Oz_4Uk',
      authDomain: 'blogpartie2.firebaseapp.com',
      databaseURL: 'https://blogpartie2.firebaseio.com',
      projectId: 'blogpartie2',
      storageBucket: 'blogpartie2.appspot.com',
      messagingSenderId: '433697153340',
      appId: '1:433697153340:web:a1f6acb93e494690'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
