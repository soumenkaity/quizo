import { topicName } from './topicName';

export interface topic{
    question: string,
    answer: string, 
    choices: string[]
};
export interface topics{
    topicList: topicName[];
}