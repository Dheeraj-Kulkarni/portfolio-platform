import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 *
 * @param configService
 * @description The `databaseConfig` function is a factory function that generates the configuration options for the TypeORM module in a NestJS application. It takes a `ConfigService` instance as an argument, which is used to retrieve environment variables and other configuration settings. The function returns an object that conforms to the `TypeOrmModuleOptions` interface, which includes properties such as the database type, connection URL, and other settings related to entity loading, synchronization, migrations, and logging.
 * @returns
 */
export const databaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  /**
   * @description The `url` option is set to the value of the `DATABASE_URL` environment variable, which is retrieved using the `ConfigService`. This allows the database connection URL to be easily configured and changed without modifying the code. The `getOrThrow` method is used to ensure that the value is present and will throw an error if it is not found, preventing potential runtime errors due to missing configuration.
   */
  url: configService.getOrThrow<string>('DATABASE_URL'),
  /**
   * @description The `autoLoadEntities` option is set to true, which means that TypeORM will automatically load all entities that are registered in the application. This is useful for development and testing purposes, as it allows you to easily add new entities without having to manually register them in the configuration.
   */
  autoLoadEntities: true,
  synchronize: false,
  migrationsRun: false,
  logging: true,
});
