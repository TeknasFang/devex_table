
export class ProjectGroupItems{
    name:string="";
    targetDate:string="";
    status:string="";
    constructor(name:string,targetDate:string,status:string){
        this.name = name;
        this.targetDate = targetDate;
        this.status = status
    }
}

export class ProjectGroup{
        
        "name"!:string;
        "projectGroupItems"!:any

}
export class itemJSON{
    
		"name"!:string ;
		"assignedUserName"!:string ;
		"assignedUserId"!:string ;
		"status"!:string ;
		"projectGroup"!:ProjectGroup[]
	

}
