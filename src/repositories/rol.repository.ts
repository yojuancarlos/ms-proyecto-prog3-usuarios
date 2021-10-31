import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MsProyectoProg3UsuarioDataSource} from '../datasources';
import {Rol, RolRelations} from '../models';

export class RolRepository extends DefaultCrudRepository<
  Rol,
  typeof Rol.prototype.id,
  RolRelations
> {
  constructor(
    @inject('datasources.ms_proyecto_prog3_usuario') dataSource: MsProyectoProg3UsuarioDataSource,
  ) {
    super(Rol, dataSource);
  }
}
