import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectGroup, ProjectGroupItems } from '../model/projectGroup.model';
import { ProjectDataService } from '../service/project-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  onClick(cell: any) {
    console.log(cell.key.newCurrency - cell.key.oldCurrency);
  }
  currency = [
    {
      currency: 'Indian',
      currentPrice: 1000,
      lastPrice: 20,
      difference: 'positive or negative',
    },
    {
      currency: 'Australian',
      currentPrice: 30,
      lastPrice: 20,
      difference: 'positive or negative',
    },
    {
      currency: 'United States',
      currentPrice: 0,
      lastPrice: 10,
      difference: 'positive or negative',
    },
    {
      currency: 'United Kingdom',
      currentPrice: 20,
      lastPrice: 20,
      difference: 'positive or negative',
    },
    {
      currency: 'German',
      newCurrency: 20,
      oldCurrency: 20,
      difference: 'positive or negative',
    }
  ];
  statuses = [
    {
      id: 1,
      name: 'Working on it',
    },
    {
      id: 2,
      name: 'Done',
    },
    {
      id: 3,
      name: 'Paused',
    },
  ];
  status = ['working on it', 'Done', 'Paused'];
  statusess = [
    {
      id: 1,
      name: 'Not Started',
    },
    {
      id: 2,
      name: 'In Progress',
    },
    {
      id: 3,
      name: 'Deferred',
    },
    {
      id: 4,
      name: 'Need Assistance',
    },
    {
      id: 5,
      name: 'Completed',
    },
  ];
  editorOptions = {
    itemTemplate: 'statusTemplate',
  };
  ProjectGroupData = {
    name: '',
    projectGroupItems: [
      {
        name: 'New Item',
        targetDate: '',
        status: '',
      },
    ],
  };
 
  itemJson = {
    name: 'Project1',
    assignedUserName: 'admin',
    assignedUserId: '2',
    status: 'ACTIVE',
    projectGroup: [
      {
        name: 'Group1',
        projectGroupItems: [
          {
            name: 'Item1',
            targetDate: '2022-08-24',
            status: 'Working on it',
          },
          {
            name: 'Item2',
            targetDate: '2022-08-24',
            status: 'Done',
          },
          {
            name: 'Item3',
            targetDate: '2022-08-24',
            status: 'Paused',
          },
        ],
      },
      {
        name: 'Group2',
        projectGroupItems: [
          {
            name: 'Item1',
            targetDate: '2022-08-24',
            status: 'Done',
          },
          {
            name: 'Item2',
            targetDate: '2022-08-24',
            status: 'Done',
          },
          {
            name: 'Item3',
            targetDate: '2023-08-24',
            status: 'Done',
          },
        ],
      },
    ],
  };

  addNewTable() {
    // this.itemJson.projectGroup.push(this.ProjectGroupData)
            // or 
    this.itemJson.projectGroup.splice(
      this.itemJson.projectGroup.length,
      0,
      this.ProjectGroupData
    );
    // this.ProjectGroupDataArray = [...this.ProjectGroupDataArray,this.ProjectGroupData]
    // console.log('new table : ',this.ProjectGroupDataArray)
  }

  isPopupVisible!: boolean;

  constructor(private service: ProjectDataService) {
    this.isPopupVisible = false;
  }
  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
  ngOnInit(): void {}

  
}










// extra code

// totalIndex:any = [];
  // onCellPrepared (e:any) {
  // console.log("total e : ",e)
  // console.log(e.column)
  // console.log(e.rowType)
  // let a:number = e.row.rowIndex
  // this.totalIndex.push(a)
  // let finalIndex =  (this.totalIndex.length/4)
  // const box = document.querySelector<HTMLElement>('.dx-toolbar-after')
  // if(box){
  //   box.style.top = `${(9.9)+((2.1)*(finalIndex-2))}rem`
  // }
  //  this.totalIndex = []

  //   console.log("box ",typeof(box))
  // if(e.row.rowIndex == 6 && e.column.index == 0 ){
  //     console.log(e.column)
  //     e.column.width = '500px'
  //     // if(e.column.index== 0){
  //     //     e.column.width = "1000"
  //     // }

  // }

  // if(e.cellElement.ariaColIndex == "2"){
  //     let value = e.value.trim()
  //     console.log(value)
  //     if(value == "ongoing"){
  //         e.cellElement.bgColor = "blue"
  //     }
  //     if(value == "finished"){
  //         e.cellElement.bgColor = "green"
  //     }
  //     if(value == "pending"){
  //         e.cellElement.bgColor = "red"
  //     }

  
