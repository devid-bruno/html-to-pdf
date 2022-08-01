import fs from 'fs';
import util from 'util';


class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath, 'utf8');
        } catch (err) {
            return undefined;
        }
    }
}


export default Reader;