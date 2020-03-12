import fs from 'fs';
import childProcess from 'child_process';
import schedule from 'node-schedule';
import { parse } from './utils/helper';

const timingInterval = parse(fs.readFileSync(process.cwd() + '/src/config/timer.json'));
const targetWebsites = parse(fs.readFileSync(process.cwd() + '/src/config/targets.json'));

function runScript(scriptPath, params, callback) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    let invoked = false;

    const process = childProcess.fork(scriptPath, params);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', (err) => {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', (code) => {
        if (invoked) return;
        invoked = true;
        const err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

const interval = schedule.scheduleJob(`*/${timingInterval.minutes} * * * *`, () => {
  runScript('./dist/crawler/crawlWebsite.js', [targetWebsites.first], (firstError: any) => {
    if (firstError) throw firstError;
    console.log('Finished with ' + targetWebsites.first);
    runScript('./dist/crawler/crawlWebsite.js', [targetWebsites.second], (secondError: any) => {
      if (secondError) throw secondError;
      console.log('Finished with ' + targetWebsites.second);
    });
  });
});