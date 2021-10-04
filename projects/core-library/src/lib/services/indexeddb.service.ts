import { Injectable } from '@angular/core';
import { del, get, set } from 'idb-keyval';
import { UserDTO } from '../user/userdto';

@Injectable({
  providedIn: 'root'
})

export class IndexeddbService{
  private  key: string = 'user';

  async addUser( data: UserDTO) {
     await set(this.key, data);
  }

  async getUser(): Promise<UserDTO> {
    // return await get(this.key);
    //TODO: falta implementar el token
    return {
      id: 'x',
      name: 'pepe',
      lastName: 'joseito',
      email: 'joseito@a.com',
      type: 'bearer',
      token: ''
    }
  }

  async removeUser() {
    await del(this.key);
  }
} 