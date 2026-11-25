import 'reflect-metadata';
import 'dotenv/config';

import * as argon2 from 'argon2';
import { AppDataSource } from '../data-source.js';
import { UserEntity } from '../../entities/user.entity.js';

async function seedAdmin() {
  try {
    await AppDataSource.initialize();

    const email = process.env.ADMIN_EMAIL;

    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required');
    }

    const userRepository = AppDataSource.getRepository(UserEntity);

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await userRepository.findOne({
      where: {
        email: normalizedEmail,
      },
    });

    if (existingUser) {
      console.log('Admin already exists');

      return;
    }

    const passwordHash = await argon2.hash(password);

    const admin = userRepository.create({
      email: normalizedEmail,

      password: passwordHash,
    });

    await userRepository.save(admin);

    console.log('Admin created successfully');
  } catch (error) {
    console.error('Admin seed failed:', error);

    process.exitCode = 1;
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
}

seedAdmin();
