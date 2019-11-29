export class result{
    id : string;
    option : number;
    correctOption : number;
    userResponse : boolean;
    constructor(id,option,correctOption,userResponse){

        this.id=id;
        this.option=option;
        this.correctOption=correctOption;
        this.userResponse=userResponse;
    }
}