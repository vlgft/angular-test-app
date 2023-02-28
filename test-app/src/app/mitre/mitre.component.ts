import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../server-http.service';

@Component({
  selector: 'app-mitre',
  templateUrl: './mitre.component.html',
  styleUrls: ['./mitre.component.scss']
})
export class MitreComponent implements OnInit {
  mitre_tatic: string[] = [];
  mitre_technique: string[] = [];
  drive_compromise: string[] = [];

  get_mitre_tatics(): void {
    // let tech_ids = [];
    this.svHttp.getMitreTatics().subscribe((data) => {
      for (var n in data) {
        // console.log(data[n].technique_id);
        this.mitre_tatic.push(data[n].name);
        // tech_ids.push(data[n].technique_id);
      }
      // return tech_ids
    })
  }

  get_mitre_technique() {
    this.svHttp.getMitreTechnique().subscribe((data) => {
      // this.mitre_technique = data;
      for (var n in data) {
        // console.log(data[n].technique_id);
        this.mitre_technique.push(data[n].name);
        // tech_ids.push(data[n].technique_id);
      }
    })

  }

  get_drive_compromise() {
    this.svHttp.getDriveCompromise().subscribe((data) => {
      // this.drive_compromise = data;
      for (var n in data) {
        // console.log(data[n].technique_id);
        this.drive_compromise.push(data[n].name);
        // tech_ids.push(data[n].technique_id);
      }
    })
  }

  constructor(private svHttp: ServerHttpService) { }

  ngOnInit(): void {
    this.get_mitre_tatics();
    this.get_mitre_technique();
    this.get_drive_compromise();
  }

}
