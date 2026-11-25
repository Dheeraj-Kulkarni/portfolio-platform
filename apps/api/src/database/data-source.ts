import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity.js';
import { ProjectEntity } from '../entities/project.entity.js';
import { PostEntity } from '../entities/post.entity.js';
import { ProfileEntity } from '../entities/profile.entity.js';
import dotenv from 'dotenv';
import path from 'node:path';
// Load environment variables from root .env
dotenv.config({
  path: path.resolve(process.cwd(), '../../.env'),
});

export const AppDataSource = new DataSource({
  type: 'postgres',

  url: process.env.DATABASE_URL,

  entities: [UserEntity, ProfileEntity, ProjectEntity, PostEntity],

  migrations: ['src/database/migrations/*.ts'],

  synchronize: false,

  logging: true,
});
