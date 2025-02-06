import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { MarvelComponent } from './components/marvel/marvel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MarvelComponent],
  providers: [UsersService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'interview';

  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers();
  }

}
