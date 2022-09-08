import { Injectable } from '@nestjs/common';
// import { UserRepository } from './users.repository';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  // private readonly users: any = [];
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(users: any) {
    try {
      const user = this.usersRepository.create(users);
      await this.usersRepository.save(users);
    } catch (error) {
      console.log('erro this email is already exited!');
    }
  }
  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }
  async findAll(): Promise<any> {
    return await this.usersRepository.find();
  }
  async update(id, users: any): Promise<any> {
    try {
      console.log('id chegando: ', id, 'userchegando: ', users);
      await this.usersRepository.update(id, users);
      console.log('user updated!');
    } catch (error) {
      console.log('no possible to update user!');
    }
  }
  async remove(id: number): Promise<any> {
    try {
      await this.usersRepository.delete(id);
    } catch (error) {
      console.log('User deleted!');
    }
  }
}
