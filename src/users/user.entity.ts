import { generate } from 'rxjs';
import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: true, type: 'varchar', length: 20 })
  role: string;

  @Column({ nullable: true, default: true })
  status: boolean;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  salt: string;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  confirmationToken: string;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  recoverToken: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //if want to difine realtions... multiples
  // @OneToMany(type => Photo, photo => photo.user)
  // photos: Photo[];
}
