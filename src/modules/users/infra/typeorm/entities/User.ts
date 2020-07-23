
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';

import { Expose, Exclude } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  is_deleted: boolean;
  // @Expose({ name: 'avatar_url' })
  // get getAvatarUrl(): string | null {
  //   if (!this.avatar) {
  //     return null;
  //   }
  //   switch (uploadConfig.driver) {
  //     case 'disk':
  //       return `${process.env.APP_API_URL}/files/${this.avatar}`;
  //     case 's3':
  //       return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
  //     default:
  //       return null;
  //   }
  // }
}

export default User;
