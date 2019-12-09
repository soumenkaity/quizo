export class TestUser {
    id: String;
    testId: String;
    userId: String;
    userName: String;
    userEmail: String;
    topicId: String;
    topicName: String;
    createdAt: Date;
    status: String;
    constructor(tid,ui,un,ue,ti,tn,ca,s){
      this.testId=tid; this.userId=ui;this.userName=un;this.userEmail=ue;this.topicId=ti;this.topicName=tn;this.createdAt=ca;this.status=s;
    }
}