import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'blockchain-poll';
  showForm = false;
  
  polls = [{
	  question: "do you like dogs or cats?",
	  image : 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
	  votes : [0, 5, 7],
	  voted : true,
  },
  {
	  question: "Best month for summer holidays?",
	  image : 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
	  votes : [1, 6, 4],
	  voted : false,
  }
  ]
}
