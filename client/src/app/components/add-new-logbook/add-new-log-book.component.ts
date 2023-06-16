import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-new-logbook',
  templateUrl: './add-new-log-book.component.html',
  styleUrls: ['./add-new-log-book.component.css']
})
export class AddNewLogBookComponent {
  name?: string;
  date?: string;
  weight?: number;


  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private router: Router,
    ) {}

  createLogBook(): void {
    const newLogBook: any = {
      name: this.name,
      date: this.date,
      weight: this.weight,
      userId: this.auth.currentUser.userId,
      association: false
    };

    this.dataService.createLogBook(newLogBook).subscribe(
      (response: any) => {
        console.log('Nowy wpis został dodany:', response);
      },
      (error: any) => {
        console.error('Błąd podczas dodawania wpisu:', error);
      }
    );
    this.router.navigate(['/logbook']).then(r => location.reload())
  }

}
