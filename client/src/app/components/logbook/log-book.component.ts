import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-logbook',
  templateUrl: './log-book.component.html',
  styleUrls: ['./log-book.component.css']
})
export class LogBookComponent implements OnInit{
  logbook: any[] = [];


  constructor(
    private service: DataService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getById(this.auth.currentUser.userId).subscribe(
      (response: any) => {
        this.logbook = response;
      },
      (error: any) => {
        console.error('Błąd podczas pobierania dziennika:', error);
      }
    );
  }

  editLogBook(logbook: any): void {
    this.router.navigate(['/edit', logbook.id], { state: { data: logbook } });
  }

  changeAssoc(logbook: any): void {
    this.service.changeAssoc(logbook).subscribe(
      (response: any) => {
        this.getAll();
      },
      (error: any) => {
        console.error('Błąd', error);
      }
    );
  }

  deleteIndex(logbook: any): void {
    this.service.deleteById(logbook.id).subscribe(
      (response: any) => {
        this.logbook = response;
        this.getAll();
      },
      (error: any) => {
        console.error('Błąd podczas usuwania wpisu', error);
      }
    );
  }
}
