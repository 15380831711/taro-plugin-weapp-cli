import { exec, which } from 'shelljs';
const path = require('path');

export default (ctx: any, options: any) => {
    ctx.onBuildFinish(() => {
        const platform = ctx.runOpts.platform || ctx.runOpts.options.platform;
        if (platform !== 'weapp') {
            return;
        }
        if (which('xpack-cli')) {
            exec(`xpack-cli open weapp`);
            return;
        }
        const weAppDevToolsPath = options['weApp.devTools.path'];
        if (!weAppDevToolsPath) {
            return;
        }
        const projectPath = path.join(process.cwd(), 'dist');
        const cliPath = path.join(weAppDevToolsPath, 'cli');
        const wxCmd = `"${cliPath}" open --project ${projectPath}`;
        exec(wxCmd);
    });
};
