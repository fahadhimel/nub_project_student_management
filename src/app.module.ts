import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      insecureAuth: false,
      type: 'mysql',
      host: 'localhost',
      port: Number(3306),
      username: 'root',
      password: 'Gscs@123',
      database: 'STUDENT_MANAGEMENT',
      synchronize:
        process.env.SYNCHRONIZE && process.env.SYNCHRONIZE === 'true',
      logging: ['error'], // IF true THEN WILL LOG DATABASE SCHEMA
      dropSchema: false,
      entities: ['dist/**/*.entity.js'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    }),
    // ...AdminModuleList,
    // ...PublicModuleList,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
