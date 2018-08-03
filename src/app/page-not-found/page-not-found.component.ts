import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  public innerWidth: string;
  public innerHeight: string;

  ngOnInit() {
    this.innerWidth = window.innerWidth.toString() + 'px';
    this.innerHeight = window.innerHeight.toString() + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth.toString() + 'px';
    this.innerHeight = window.innerHeight.toString() + 'px';
  }
}
