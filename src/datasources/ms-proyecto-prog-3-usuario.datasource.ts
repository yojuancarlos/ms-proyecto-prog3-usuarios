import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ms_proyecto_prog3_usuario',
  connector: 'mongodb',
  url: 'mongodb+srv://usuarioucaldas:aA1234@cluster0.us0as.mongodb.net/usuariosdelaudb?retryWrites=true&w=majority',
  host: 'localhost',
  port: 27017,
  user: 'usuarioucaldas',
  password: 'aA1234',
  database: 'usuariosdelaudb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MsProyectoProg3UsuarioDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ms_proyecto_prog3_usuario';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ms_proyecto_prog3_usuario', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
