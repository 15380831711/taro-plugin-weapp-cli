import { exec, which } from 'shelljs';
const path = require('path');

let isOpen = false;

export default (ctx: any, options: any) => {
    ctx.onBuildFinish(() => {
        if (isOpen) {
            return;
        }
        const platform = ctx.runOpts.platform || ctx.runOpts.options.platform;
        if (platform !== 'weapp') {
            return;
        }
        const weAppDevToolsPath = options['weApp.devTools.path'];
        if (weAppDevToolsPath) {
            const projectPath = path.join(process.cwd(), 'dist');
            const cliPath = path.join(weAppDevToolsPath, 'cli');
            const wxCmd = `"${cliPath}" open --project ${projectPath}`;
            exec(wxCmd);
            isOpen = true;
        }
        if (which('xpack-cli')) {
            exec(`xpack-cli open weapp`);
            isOpen = true;
            return;
        }
    });
};
