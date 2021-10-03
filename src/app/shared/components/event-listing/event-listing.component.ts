import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {

  card: any = [];

  constructor() { }

  ngOnInit(): void {
    this.card = [
      {
        id: 1,
        image: 'assets/img/bg-cover.jpg',
        date: 'Tue, Oct 5 @ 7:00 PM PKT',
        title: 'Understanding Inclusive Design',
        text: 'Mento Design Academy Group',
        users: {
          count: '147',
          recentUsers: [
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            }
          ],
        }
      },
      {
        id: 2,
        image: 'assets/img/bg-cover.jpg',
        date: 'Tue, Oct 5 @ 7:00 PM PKT',
        title: 'Understanding Inclusive Design',
        text: 'Mento Design Academy Group',
        users: {
          count: '147',
          recentUsers: [
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            }
          ],
        }
      },
      {
        id: 3,
        image: 'assets/img/bg-cover.jpg',
        date: 'Tue, Oct 5 @ 7:00 PM PKT',
        title: 'Understanding Inclusive Design',
        text: 'Mento Design Academy Group',
        users: {
          count: '147',
          recentUsers: [
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            }
          ],
        }
      },
      {
        id: 4,
        image: 'assets/img/bg-cover.jpg',
        date: 'Tue, Oct 5 @ 7:00 PM PKT',
        title: 'Understanding Inclusive Design',
        text: 'Mento Design Academy Group',
        users: {
          count: '147',
          recentUsers: [
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            },
            {
              name: 'users',
              img: 'assets/img/bg-cover.jpg',
            }
          ],
        }
      },
    ]
  }

}
