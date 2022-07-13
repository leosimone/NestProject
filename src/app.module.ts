/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';


@Module({
    imports: [CoursesModule,
        //TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: 'localhost',
        //     port: 5432,
        //     username: 'postgres',
        //     password: 'example',
        //     database: 'postgres',
        //     autoLoadEntities: false,
        //     synchronize: false,
        // })
        DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
