import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './common/entities/student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({

      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "Gscs@123",
      "database": "STUDENT_MANAGEMENT",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": false

      //type: 'mysql',
      //host: 'localhost',
      //port: 3306,
      //username: 'root',
      //password: 'Gscs@123',
      //database: 'STUDENT_MANAGEMENT',
      //synchronize:true,
       //process.env.SYNCHRONIZE && process.env.SYNCHRONIZE === 'true',
     // logging: ['error'], // IF true THEN WILL LOG DATABASE SCHEMA
      //dropSchema: false,
      //entities: [],//'dist/**/*.entity.js'
      //extra: {
        //charset: 'utf8mb4_unicode_ci',
      //},
    }),
    // ...AdminModuleList,
    // ...PublicModuleList,
    TypeOrmModule.forFeature([StudentEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
