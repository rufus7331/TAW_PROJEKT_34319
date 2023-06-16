import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-logbook',
  templateUrl: './edit-log-book.component.html',
  styleUrls: ['./edit-log-book.component.css']
})
export class EditLogBookComponent {
  name?: string;
  date?: string;
  weight?: number;
  logbook?: any;

  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private router: Router,
    ) {}

    ngOnInit(): void {
      const data = history.state.data;
      this.name = data.name;
      this.date = data.date;
      this.weight = data.weight;
      this.logbook = data;
    }

  editLogBook(): void {
    const edited: any = {
      id: this.logbook.id,
      name: this.name,
      date: this.date,
      weight: this.weight,
      userId: this.auth.currentUser.userId,
      association: this.logbook.association
    };

    this.dataService.editLogBook(edited).subscribe(
      (response: any) => {
        console.log('Nowy wpis został dodany:', response);
      },
      (error: any) => {
        console.error('Błąd podczas dodawania wpisu:', error);
      }
    );
    this.router.navigate(['/logbook'])
  }
}
