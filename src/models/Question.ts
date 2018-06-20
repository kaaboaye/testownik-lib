import { Answer } from './Answer';

export class Question {
    content: string;
    answers: Answer[] = [];

    static async parse?(text: string): Promise<Question> {
        const question = new Question();

        // Get rid off \r
        text = text.replace(/\r/g, '');

        // Split into lines
        const lines = text.split('\n');

        // Get question content
        question.content = lines[1];

        // Get answers
        const correctness = lines[0].slice(1);

        // For each answer
        lines.slice(2).map((content: string, qid: number) => {
            if (content === '') {
                return;
            }

            const answer = new Answer();
            answer.content = content;
            answer.isCorrect = correctness[qid] === '1';

            question.answers.push(answer);
        });

        return question;
    }
}
