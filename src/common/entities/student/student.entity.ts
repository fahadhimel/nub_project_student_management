import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../commonEntity';

@Entity('student')
export class StudentEntity extends CommonEntity {
  @Column({ type: String, nullable: false, length: 100 })
  name: string;

  @Column({ type: String, nullable: false, length: 100 })
  nub_id: string;

  @Column({ type: String, nullable: true, length: 100 })
  email: string;

  @Column({ type: String, nullable: true, length: 100 })
  photo: string;

  @Column({ type: String, nullable: false, length: 100 })
  phone_number: string;
}
