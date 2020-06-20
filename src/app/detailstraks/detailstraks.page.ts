import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from 'src/services/Music-service';
import { details } from './details.model';

@Component({
  selector: 'app-detailstraks',
  templateUrl: './detailstraks.page.html',
  styleUrls: ['./detailstraks.page.scss'],
})
export class DetailstraksPage implements OnInit {
  detailstraks: details = new details();

  constructor(
    private servicemusic: MusicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('id')) {
        return;
      }
      const MusicId = paramMap.get('id');

      (await this.servicemusic.getAllMusic()).subscribe((element: any) => {
        this.detailstraks = (<details[]>element.data).find(item => item.title == MusicId);
        console.log(this.detailstraks);
      });

    });


  }
}
