import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechnologyService } from '../../services/technology.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
technology : Technology = new Technology();
  constructor(private activatedRoute: ActivatedRoute, private readonly technologyService: TechnologyService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param =>{
       const id = param['id'];
       this.technologyService.getTechnology(id).subscribe(data => {
        this.technology = data['data'];
       });
    });
  }

}
