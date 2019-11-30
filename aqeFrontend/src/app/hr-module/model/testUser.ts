export class TestUser {
    id: String;
    userId: String;
    topicId: String;
    topicName: String;
    createdAt: Date;
    status: String;
    constructor(ui,ti,tn,ca,s){
       this.userId=ui;this.topicId=ti;this.topicName=tn;this.createdAt=ca;this.status=s;
    }
}