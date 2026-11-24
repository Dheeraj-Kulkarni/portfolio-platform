import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        instrument: ObserveInstrument,
    });
    app.setGlobalPrefix('api');
    app.use(helmet());
    app.enableCors({ origin: process.env.WEB_ORIGIN, credentials: true });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    const config = new DocumentBuilder()
        .setTitle('Portfolio API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    SwaggerModule.setup('api/docs', app, SwaggerModule.createDocument(app, config));
    await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
//# sourceMappingURL=main.js.map