import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity.js';
import { ProjectEntity } from '../entities/project.entity.js';
import { PostEntity } from '../entities/post.entity.js';
import { ProfileEntity } from '../entities/profile.entity.js';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve .env relative to this file, not cwd — works regardless of where the command is run from
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({
  // from src/database/ → go up to apps/api/ where .env lives
  path: path.resolve(__dirname, '../../.env'),
});

export const AppDataSource = new DataSource({
  type: 'postgres',

  url: process.env.DATABASE_URL,

  entities: [UserEntity, ProfileEntity, ProjectEntity, PostEntity],

  migrations: ['src/database/migrations/*.ts'],

  synchronize: false,

  logging: true,
});
