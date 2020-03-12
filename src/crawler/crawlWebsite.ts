import { parseCommandPath } from './../utils/helper';
import { ICommands } from './../interfaces/commands';
import Nightmare from 'nightmare';
import { webConfig } from './../config/webConfig';
import vo from 'vo';

const currentConfig: ICommands = webConfig[process.argv[2]];

vo(run)((err, res) => {
    if (err) throw err;

    console.log(res);
});

function *run() {
    const nightmare = Nightmare({ show: true });
    let result;
    const commands = currentConfig.commands;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < commands.length; i++) {
        const { functionName, args } = parseCommandPath(commands[i]);
        result = yield nightmare
            .useragent('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36')
            [functionName](...args)
    }

    yield nightmare.end();

    return result;
}