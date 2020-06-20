import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

const url = "/playlist/93489551/tracks/";
const urlid = "/search?q="

@Injectable({
    providedIn: "root"
})
export class MusicService {
    songs: any;

    constructor(private httpClien: HttpClient) {

    }
    async getAllMusic() {
        return this.httpClien.get<any[]>(url);
    }

    async getMusicId(MusicId) {

        (await this.getAllMusic()).subscribe((element: any) => {
            this.songs = (<any[]>element.data).find(item => item.title == MusicId);
            console.log(this.songs);
        });

    }

}