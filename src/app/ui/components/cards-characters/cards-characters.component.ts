import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/models/character.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-cards-characters',
  templateUrl: './cards-characters.component.html',
  styleUrls: ['./cards-characters.component.scss']
})
export class CardsCharactersComponent {
  constructor(private dialog: MatDialog) {}

  @Input() character: Character = {} as Character;

  public openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.character
    });
  }
}
