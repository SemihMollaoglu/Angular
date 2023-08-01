import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/project.mock';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  filteredProjects: Project[];
  searchKey: string;

  constructor(private projectService: ProjectsService, private activeRoute: ActivatedRoute) { }
  //! Api den departmana göre filtrelemiyoruz. Zaten yüklü olan projeler içerisinde filtreliyoruz.
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;

      this.activeRoute.params.subscribe(routeData => {
        console.log("Gelen parametre:", routeData["id"]);
        this.filteredProjects = routeData["id"] != undefined ? this.projects.filter(f => f.departmentId == routeData["id"])
          : this.projects;
      })
    });
  }
}
