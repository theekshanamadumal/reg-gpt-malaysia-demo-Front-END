import { Component, Input, OnInit } from '@angular/core';
import { QueryModel } from 'src/app/core/models/query.model';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // @Input() history: Array<Array<QueryModel>>;
  // @Input() showViewMore: Object = {};

  // indexToHide: number;
  // activeQuery: QueryModel = null;

  constructor(private homeComponent: HomeComponent) { }

  ngOnInit(): void {
  }

  // viewMore(dayQueries: Array<QueryModel>){
  //   this.homeComponent.viewMore(dayQueries);
  // }

  // showChat(query: QueryModel){
  //   this.activeQuery = query;
  //   this.homeComponent.showChat(query);
  // }

  // isActive(query: QueryModel): boolean {
  //   return this.activeQuery === query;
  // }

  // clearChat(){
  //   this.homeComponent.chats = [];
  // }
}
