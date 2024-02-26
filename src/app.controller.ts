import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDto } from './dtos/creste.student.dto';
import { FilterStudentDto } from './dtos/filter.student.dto';

@ApiTags('student-api')
@Controller('student')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hi')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list')
  findlist (){
    return this.appService.findlist()
  }

  @Get('')
  find (@Query() filterStudentDto:FilterStudentDto){
    return this.appService.find(filterStudentDto)
  }

  @Post('')
  create (@Body() createStudentDto:CreateStudentDto){
    return this.appService.create(createStudentDto)
  }

  @Put('/:id')
  update (@Param('id') id:string,@Body() createStudentDto:CreateStudentDto){
    return this.appService.update(id, createStudentDto)
  }

  @Delete('/:id')
  getlist (@Param('id') id:string){
    return this.appService.delete(id)
  }
}
