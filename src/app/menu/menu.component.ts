import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() randomColor: string | undefined;
  menu = [
    {name: 'Accueil', isSelect:false, link:'/'},
    {name: 'A propos', isSelect:false, link:'/about'},
    {name: 'Contact', isSelect:false, link:'/contact'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {

    for (const m of this.menu){
      if(this.router.url === m.link) m.isSelect = true
    }
    console.log(this.randomColor)

  }

  activate(m:any){

    for (const a of this.menu) {
      if(a.isSelect) a.isSelect = false; //Deactivate other button action
    }
    m.isSelect = true; //Set boolean on true for ngClass in html
  }

}
