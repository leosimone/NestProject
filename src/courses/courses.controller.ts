/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {

    }

    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Lista completa');
    }

    @Get(':id')
    findOne(
        @Param('id') id: string
    ) {
        return `Curso inicial ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;
    }


    @Patch('id')
    update(@Param('id') id: string, @Body() body) {
        return `Curso ${id} atualizado`
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return `Curso ${id} excluído`
    }
}
