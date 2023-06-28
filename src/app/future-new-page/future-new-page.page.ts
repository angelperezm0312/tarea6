import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-new-page',
  templateUrl: './future-new-page.page.html',
  styleUrls: ['./future-new-page.page.scss'],
})
export class FutureNewPagePage implements OnInit {

  posts:any;
  error:boolean = false;

  constructor() { }

  ngOnInit() {
    this.getPosts();
  }


  async getPosts():Promise<void> {
    try {
      let response = await fetch('https://www.fortune.com/wp-json/wp/v2/posts?per_page=3');
      let jsonData = await response.json();
      
      this.posts = jsonData

      this.error = false;
    }catch(error) {
      this.error = true;
    }


  }

}
