import { Component, OnInit } from '@angular/core';
import { GHService } from './gh.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  user$;
  constructor(
    public ghService: GHService,
    private route: ActivatedRoute
  ) {
    this.user$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.ghService.getUser(params.get('id')))
  );
  }

  ngOnInit() {
  }

}
