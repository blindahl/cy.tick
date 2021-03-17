import { Component } from '@angular/core';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';
import { PingService } from './ping.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'cy-tick';

  constructor(private pingService: PingService ) {

  }

  ngOnInit() {
    // Application waits 10 sec and make a http GET requst to http://localhost:3000/ping
    interval(10000).subscribe(() => {
      this.pingService.ping().pipe(take(1)).subscribe();
    });
  }

}
