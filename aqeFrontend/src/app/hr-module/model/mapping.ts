export class Mapping {
    id: String;
    testName: String;
    createdAt: Date;
    expiresAt: Date;
    topicId: String;
    topicName: String;
    users: User[]
    constructor(i,n,c,e,t,tn,u){
        this.id=i;this.testName=n;this.createdAt=c;this.expiresAt=e;this.topicId=t;this.topicName=tn;this.users=u;
    }
}

class User{
    id: String;
    status: String;
}


// private String id;
// private String testName;
// private Date createdAt;
// private Date expiresAt;
// private String topicId;
// private String topicName;
// private List<Users> users;
