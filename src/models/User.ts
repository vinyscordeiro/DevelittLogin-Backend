import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('timestamp with time zone')
    birthday: Date;

    @Column()
    email: string;

    @Column()
    password: string;

}

export default User;
