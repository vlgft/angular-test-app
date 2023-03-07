import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../server-http.service';

@Component({
  selector: 'app-mitre',
  templateUrl: './mitre.component.html',
  styleUrls: ['./mitre.component.scss']
})
export class MitreComponent implements OnInit {
  mitre_tatic: { id: number, name: string }[] = [];
  mitre_technique: {"id": number,
  "mitre_id": string,
  "name": string,
  "tatic_id": number,
  "tech_content_id": Array<number>
} [] = [];
  mitre_subtechnique: { "id": number,
    "severity": string,
    "name": string,
    "description": string,
    "content": string,
    "Author": string,
    "status": string}[] = [];

  // mitre_tech_id: Array<number> = [1,2];
  // tatics_id: number = 1;

  get_mitre_tatics(): void {
    this.mitre_tatic = [];
    this.svHttp.getMitreTatics().subscribe((data) => {
      for (var n in data) {
        // console.log(data[n].technique_id);
        this.mitre_tatic.push({"id": data[n].id, "name": data[n].name});
        // tech_ids.push(data[n].technique_id);
      }
      this.get_mitre_technique(this.mitre_tatic[0].id);
    })
  }

  get_mitre_technique(tatic_id: number): void {
    // console.log(tatic_id);
    this.mitre_technique = [];
    this.svHttp.getMitreTechnique(tatic_id).subscribe((data) => {
      // this.mitre_technique = data;
      for (var n in data) {
        // console.log(data[n].name);
        this.mitre_technique.push({
          "id": data[n].id,
          "mitre_id": data[n].mitre_id,
          "name": data[n].name,
          "tatic_id": data[n].tatic_id,
          "tech_content_id": data[n].tech_content_id
        });
        // tech_ids.push(data[n].technique_id);
      }
      this.get_sub_technique(this.mitre_technique[0].tech_content_id);
    });

  }
  selectedValue = null;
  get_sub_technique(tech_ids: Array<number>) {
    // console.log(tech_ids);
    this.mitre_subtechnique = [];
    this.svHttp.getMitreSubTechnique(tech_ids).subscribe((data) => {
      // this.drive_compromise = data;
      for (var n in data) {
        // console.log(data[n].technique_id);
        this.mitre_subtechnique.push({
          "id": data[n].id,
          "severity": data[n].severity,
          "name": data[n].name,
          "description": data[n].description,
          "content": data[n].content,
          "Author": data[n].Author,
          "status": data[n].status
        });
        // tech_ids.push(data[n].technique_id);
      }
    });


  }
  // drawer edit sub technique
  visible = false;

  open(): void {
    this.visible = true;

  }

  close(): void {
    this.visible = false;
  }

  action_sub_tech() {

  }

  constructor(private svHttp: ServerHttpService) { }

  ngOnInit(): void {
    this.get_mitre_tatics();
    // this.get_mitre_technique(this.tatics_id);
    // this.get_sub_technique(this.mitre_tech_id);
  }

}
