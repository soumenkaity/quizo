export class Question {
    id: String;
    question: String;
    answer: String;
    choices: String[];
    difficulty: String;
    score: number;
    weight: number;
    
    constructor(i,q,a,c,d,s,w){
        this.id = i;this.question=q;this.answer=a;this.choices=c;this.difficulty=d;this.score=s;this.weight=w;
    }

    
}
// private String id;
// private String question;
// private String answer;
// private String[] choices;
// private Difficulty difficulty;
// private int score;
// private int weight;