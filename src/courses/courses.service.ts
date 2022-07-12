/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'teste do name course',
            description: 'teste description',
            tags: ['teste', 'node', 'javascript'],
        }
    ];


    findAll() {
        return this.courses
    }

    findOne(id: string) {
        //abaixo localiza o id para comparar, retorna string então faz cast de numero
        return this.courses.find((course: Course) => course.id === Number(id))
    }

    //abaixo estrutura dto
    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id));
        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id));

        //abaixo numero 1 é quantidade de registros a apagar
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }
    }
}
