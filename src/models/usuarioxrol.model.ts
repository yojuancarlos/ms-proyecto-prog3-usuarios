import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuarioxrol extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_usuarioxrol?: string;


  constructor(data?: Partial<Usuarioxrol>) {
    super(data);
  }
}

export interface UsuarioxrolRelations {
  // describe navigational properties here
}

export type UsuarioxrolWithRelations = Usuarioxrol & UsuarioxrolRelations;
