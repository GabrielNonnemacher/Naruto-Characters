import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';
import { Character, CharacterDTO } from './models/character.model';
import { DialogComponent } from './ui/components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private appService: AppService,
    private dialog: MatDialog
    ) { }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(DialogComponent, {
        width: '750px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }

  title = 'Naruto-characters-front-Angular';
  value: string = "";
  characters: Character[] = [] as Character[];
  charactersFiltereds: Character[] = [] as Character[];
  ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.appService.listar()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((characters) => {
        this.characters = characters.map(CharacterDTO.mapperDTO);
        this.charactersFiltereds = this.characters;
      });
  }

  public filter(value: string): void {
    const valueToLowerCase = value.toLowerCase();

    this.charactersFiltereds = this.characters.filter(
      (n) => {
        if (n.name.toLowerCase().includes(valueToLowerCase)) {
          return n;
        }
        return;
      })


    console.log(this.characters);
  }
}



