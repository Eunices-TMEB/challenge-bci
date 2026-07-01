import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError, finalize, Observable, of, shareReplay } from 'rxjs';
import { Element } from '../../interfaces/element.interface';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  private readonly elementService = inject(ElementService);

  public readonly loading = signal(true);
  public readonly error = signal<string | null>(null);
  public elements$!: Observable<Element[]>;

  public ngOnInit(): void {
    this.elements$ = this.elementService.getElements().pipe(
      catchError((err: Error) => {
        this.error.set(err.message);
        return of([]);
      }),
      finalize(() => this.loading.set(false)),
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.elements$.subscribe();
  }
}
