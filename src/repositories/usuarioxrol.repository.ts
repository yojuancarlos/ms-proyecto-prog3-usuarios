import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MsProyectoProg3UsuarioDataSource} from '../datasources';
import {Usuarioxrol, UsuarioxrolRelations} from '../models';

export class UsuarioxrolRepository extends DefaultCrudRepository<
  Usuarioxrol,
  typeof Usuarioxrol.prototype.id_usuarioxrol,
  UsuarioxrolRelations
> {
  constructor(
    @inject('datasources.ms_proyecto_prog3_usuario') dataSource: MsProyectoProg3UsuarioDataSource,
  ) {
    super(Usuarioxrol, dataSource);
  }
}
