import { join } from 'path';
import readFilePromise = require('fs-readfile-promise');
import { Question } from './models/Question';

(async () => {
    const filename = join('testdata', '001.txt');
    const file = await readFilePromise(filename);

    const question = await Question.parse(file.toString());

    console.log(question);

})()
.then()
.catch();
