import { result } from './result';

export class testResult{
    employeeId : string;
    testId : String;
    testResponses : result[];
    correct : number;
    incorrect : number;
    score : number;
    percentage : number;
    constructor(employeeId,testId,testResponses,correct,incorrect,score,percentage){
        this.employeeId=employeeId;
        this.testId=testId;
        this.testResponses=testResponses;
        this.correct=correct;
        this.incorrect=incorrect;
        this.score=score;
        this.percentage=percentage;
    }
}