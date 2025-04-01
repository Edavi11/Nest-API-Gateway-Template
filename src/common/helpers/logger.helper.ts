import { appendFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const LOG_DIR = join(__dirname, '../../../logs');

export class LoggerHelper {
    
    static writeLog(data: any) {
        if (!existsSync(LOG_DIR)) {
            mkdirSync(LOG_DIR, { recursive: true });
        }

        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const logFile = join(LOG_DIR, `${date}.log`);
        const logLine = JSON.stringify(data) + '\n';

        appendFileSync(logFile, logLine, { encoding: 'utf8' });
    }
}
