export const databaseConfig = (configService) => ({
    type: 'postgres',
    url: configService.getOrThrow('DATABASE_URL'),
    autoLoadEntities: true,
    synchronize: false,
    migrationsRun: false,
    logging: true,
});
//# sourceMappingURL=db.config.js.map