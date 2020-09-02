import { Component, OnInit } from '@angular/core';
import { Technology } from '../../models/technology.model';
import { ActivatedRoute } from '@angular/router';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  technologies: Technology[] = [];
  query = '';
  constructor(private activatedRoute: ActivatedRoute, private readonly technologyService: TechnologyService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.query = param['query'];
      this.technologyService.search(this.query).subscribe(data => {
        this.technologies = data['data'];
      });
    });
  }

}
