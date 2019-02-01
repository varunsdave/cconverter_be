import {RegisterRoutes} from './routes';
import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser  from 'body-parser';
import {Express, NextFunction, Request, Response} from 'express';
import * as PATH from 'path';
import * as process from 'process';
import * as http from 'http';


const app = express();
app.use(helmet());

this.app.use(bodyParser.json({limit: '500mb'})); //limit incoming request size
this.app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

this.app.use('/docs', express.static(PATH.join(this.path, 'dist/swagger-ui')));
this.app.use('/swagger.json', express.static(PATH.join(this.path, 'dist/swagger.json')));

let server = null;

if (process.env.NODE_ENV !== 'production') {
    // non production stuff
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // works for self signed certificates
    server = http.createServer(this.app);
    server.listen('8040', () => {

    });
} else {
    // production environment specific stuff
}


