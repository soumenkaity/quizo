import { Question } from './question';

export class Topic {
    id: String;
    name: String;
    questions: Question[];
    createdAt: Date;
    link: String;
    keywords: String[];
    constructor(i,n,q,c,l,k){
        this.id=i;this.name=n;this.questions=q;this.createdAt=c;this.link=l;this.keywords=k;
    }
}


// private String id;
// private String name;
// private List<Question> questions;
// private Date createdAt;
// private String link;
// private List<String> keywords;
