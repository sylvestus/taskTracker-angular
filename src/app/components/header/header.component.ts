import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'tack tracker';
  showAddTask: boolean
  subscription: Subscription

  constructor(private uiService:UiService,private router:Router) {
    // watch the change
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
   }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleAddTask()
  }

  // restricting buttons to home page ,,will be used in ngIf on the html
  hasRoute(route:string){
    return this.router.url ===route
  }
}
