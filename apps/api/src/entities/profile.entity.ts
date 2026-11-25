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
    length: 150,
  })
  fullName: string;

  @Column({
    length: 200,
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
    nullable: true,
  })
  avatarUrl: string;

  @Column({
    name: 'resume_url',
    nullable: true,
  })
  resumeUrl: string;

  @Column({
    nullable: true,
  })
  location: string;

  @Column({
    name: 'public_email',
    nullable: true,
  })
  publicEmail: string;

  @Column({
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
  })
  createdAt: Date;
}
