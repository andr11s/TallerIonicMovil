import { Component } from '@angular/core';
import { MusicService } from 'src/services/Music-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Canciones: any[] = [];
  constructor(private music: MusicService,
    private activeroute: ActivatedRoute) { }

  async ngOnInit() {
    (await this.music.getAllMusic()).subscribe((element: any) => {
      this.Canciones = element.data;
    });
  }
}
