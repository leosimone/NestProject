/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesModule } from './courses/courses.module';


@Module({
    imports: [CoursesModule],
    controllers: [AppController],
    providers: [AppService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
