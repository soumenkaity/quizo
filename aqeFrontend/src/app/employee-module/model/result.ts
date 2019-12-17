export interface Result{
    id: String;
    empId: String;
    topicId: String;
    testId: String;
    empName: String;
    topicName: String;
    score: number;
    correct: number;
    wrong: number;
    attempts: {
        questionId: String;
        question: String;
        response: String;
        answer: String;
        choices: String[];
    }
}