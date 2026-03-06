import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work-details',
  imports: [],
  templateUrl: './work-details.html',
  styleUrl: './work-details.scss',
})
export class WorkDetails {
  private activatedRoute = inject(ActivatedRoute);
  id = toSignal(this.activatedRoute.params.pipe(map((params) => params['id'])));
}
