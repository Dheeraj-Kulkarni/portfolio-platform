import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'full_name',
    type: 'varchar',
    length: 150,
    default: '',
  })
  fullName: string;

  @Column({
    type: 'varchar',
    length: 200,
    default: '',
  })
  headline: string;

  @Column({
    name: 'summary_md',
    type: 'text',
    nullable: true,
  })
  summaryMd: string;

  @Column({
    name: 'about_md',
    type: 'text',
    nullable: true,
  })
  aboutMd: string;

  @Column({
    name: 'avatar_url',
    type: 'varchar',
    nullable: true,
  })
  avatarUrl: string;

  @Column({
    name: 'resume_url',
    type: 'varchar',
    nullable: true,
  })
  resumeUrl: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  location: string;

  @Column({
    name: 'public_email',
    type: 'varchar',
    nullable: true,
  })
  publicEmail: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  availability: boolean;

  @Column({
    name: 'years_experience',
    type: 'int',
    default: 0,
  })
  yearsExperience: number;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  draft: Record<string, any>;

  @Column({
    name: 'published_at',
    type: 'timestamptz',
    nullable: true,
  })
  publishedAt: Date;

  @CreateDateColumn({
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
