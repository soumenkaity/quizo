import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-ins',
  templateUrl: './test-ins.component.html',
  styleUrls: ['./test-ins.component.css']
})
export class TestInsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
