import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer

  constructor() { }

  ngOnInit() {
    this.developer = new Developer("fernandez", "emilie", 22, "femelle", "hello das me", [new Skill("pouet", "logo", "site" ), new Skill("louloulou", "logo2", "site2")])
  }

}
