import { Attempt } from './Attempt'
export class EmployeeResult
{
      id: String;
      empId: String;
     topicId: String;
     empName: String;
     topicName:String;
     score:number;
     correct:number;
      wrong:number;
      attempts:Attempt[];
      constructor(id, empId, topicId, empName, topicName, score, correct, wrong, attempts)
      {
          this.id=id;
          this.empId=empId;
          this.topicId=topicId;
          this.empName=empName;
          this.topicName=topicName;
          this.score=score;
          this.correct=correct;
          this.wrong=wrong;
          this.attempts=attempts;
      }
}