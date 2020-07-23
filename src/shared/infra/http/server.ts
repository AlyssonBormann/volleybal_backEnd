import 'reflect-metadata';
import express, { Request, Response, NextFunction, response } from 'express';

import AppError from '@shared/errors/AppError';
import routes from './routes';
import '@shared/infra/typeorm';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err:Error, request: Request, resposne: Response, _:NextFunction)=>{
  if( err instanceof AppError){
    return response.status(err.statusCode).json({
      status:'error',
      message: err.message
    })
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Erro do servidor interno - Fez bosta 💩 rsrsrsr',
  });
});




app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
