import { Injectable } from '@angular/core';
import { ProjectGroup, ProjectGroupItems } from '../model/projectGroup.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  projectGroup!:ProjectGroup[]
  constructor() {
    this.projectGroup =[ {
        
      "name": "Group1",
      "projectGroupItems": [
        {
          "name": "Item1",
          "targetDate": "2022-08-24",
          "status":"Working on it"
        },
        {
          "name": "Item2",
          "targetDate": "2022-08-24",
          "status":"Done"
        },
        {
          "name": "Item3",
          "targetDate": "2022-08-24",
          "status":"Paused"
        }
      ]
    }
			,{
        
				"name": "Group2",
				"projectGroupItems": [
					{
						"name": "Item1",
						"targetDate": "2022-08-24",
            "status":"Done"
					},
					{
						"name": "Item2",
						"targetDate": "2022-08-24",
            "status":"Done"
					},
					{
						"name": "Item3",
						"targetDate": "2023-08-24",
            "status":"Done"
					}
				]
			}]
		}

    getProjectGroup(){
      return this.projectGroup
    }

    addProjectGroup(data:ProjectGroup){
      
      console.log("data from service",this.projectGroup)
    }
}
