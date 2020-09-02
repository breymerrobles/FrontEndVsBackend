import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../../services/technology.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: Technology[] = [];
  constructor(private readonly technologyService: TechnologyService) { }

  ngOnInit() {
    this.technologies = [];
    this.technologyService.getTechnologies().subscribe((data) => {
     
      this.technologies = data['data'];
    });
  }

}
