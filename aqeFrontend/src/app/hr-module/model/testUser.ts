export class TestUser {
    id: String;
    userId: String;
    userName: String;
    userEmail: String;
    topicId: String;
    topicName: String;
    createdAt: Date;
    status: String;
    constructor(ui,un,ue,ti,tn,ca,s){
       this.userId=ui;this.userName=un;this.userEmail=ue;this.topicId=ti;this.topicName=tn;this.createdAt=ca;this.status=s;
    }
}