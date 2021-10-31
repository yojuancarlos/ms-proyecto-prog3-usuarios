import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MsProyectoProg3UsuarioDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.ms_proyecto_prog3_usuario') dataSource: MsProyectoProg3UsuarioDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
