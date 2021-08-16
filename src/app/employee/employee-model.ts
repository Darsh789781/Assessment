export class Employee {
      id!: number;
      firstname!: string;
      lastname!: string;
      birthdate!: string;
      gender!: string;
      department!: string;
      selected!:string;
      enable!:boolean;
      
    
      constructor(
            id: number,
            firstname: string,
            lastname: string,
            birthdate: string,
            gender: string,
            department: string,
            selected:string,
            enable:boolean


          
      ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.gender = gender;
        this.department = department;
        this.selected = selected;
        this.enable=enable;
       
      }
    }