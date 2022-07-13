/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    constructor(
        @Inject('COURSES_REPOSITORY')
        private readonly courseRepository: Repository<Course>,
    ) {
    }

    findAll() {
        return this.courseRepository.find();
    }

    findOne(id: string) {
        const course = this.courseRepository.findOne({
            where: {
                id
            }
        });
        if (!course) {
            throw new NotFoundException(`Course ID ${id} nor found`);
        }
        return course;
    }

    create(createCourseDto: CreateCourseDto) {
        const course = this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        const course = await this.courseRepository.preload({
            id: id, // esse + na frente converte string pra numerico
            ...updateCourseDto,
        });
        if (!course) {
            throw new NotFoundException(`Course ID ${id} nor found`);
        }
        return this.courseRepository.save(course)
    }

    async remove(id: string) {
        const course = await this.courseRepository.findOne({
            where: { id }
        });
        if (!course) {
            throw new NotFoundException(`Course ID ${id} nor found`);
        }
        return this.courseRepository.remove(course)
    }
}
