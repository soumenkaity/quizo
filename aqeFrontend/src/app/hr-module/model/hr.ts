export class Hr{

    private name: string;
    private password: string;
    private emailid: string;
    private company: string;
    private mobileNo: string;   

    constructor(name, password, emailid, company, mobileNo)
    {
     this.name=name;
     this.emailid=emailid;
     this.mobileNo=mobileNo;
     this.password=password;
     this.company=company;
    }

}