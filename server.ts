import express, { Express, static as staticServe, Response, Request } from 'express';
import { createServer, Server } from 'http';
// @ts-ignore
import path from 'path';
import { config as envConfig } from 'dotenv';

envConfig();

const app: Express = express();

const server: Server = createServer(app);

const DIST: string = path.resolve(__dirname, './build');
app.use(staticServe(DIST));

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.use('*', (req: Request, res: Response) => res.sendFile(path.resolve(DIST, 'index.html')));

server.listen(PORT, () => console.log(PORT));
