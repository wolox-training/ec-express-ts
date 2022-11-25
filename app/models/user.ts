import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column({
    type: 'varchar',
    unique: true
  })
  email: string;

  @Column({ type: 'varchar' })
  password: string;
}
