import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './common/entities/student/student.entity';
import { Like, Repository } from 'typeorm';
import { CreateStudentDto } from './dtos/creste.student.dto';
import { FilterStudentDto } from './dtos/filter.student.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository:Repository<StudentEntity>
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  async findlist(){
    try {
      return await this.studentRepository.find()
    } catch (error) {
      throw error
    }
  }

  async find(filter:FilterStudentDto){
    try {
      const whereCondition={}
      if(filter.name){
        whereCondition['name']=Like(`%${filter.name}%`);
      }
      if(filter.nub_id){
        whereCondition['nub_id']=Like(`%${filter.nub_id}%`);
      }
      if(filter.email){
        whereCondition['email']=Like(`%${filter.email}%`);
      }
      if(filter.phone_number){
        whereCondition['phone_number']=Like(`%${filter.phone_number}%`);
      }

      return await this.studentRepository.find({where:{...whereCondition}})
    } catch (error) {
      throw error
    }
  }

  async create(createStudentDto:CreateStudentDto){
    try {
      const {name,nub_id,email,photo,phone_number}=createStudentDto;
      return await this.studentRepository.save({name,nub_id,email,photo,phone_number})
    } catch (error) {
      throw error
    }
  }

  async update(id:string,createStudentDto:CreateStudentDto){
    try {
      const {name,nub_id,email,photo,phone_number}=createStudentDto;
      if(!id) throw new NotAcceptableException('id null not acceptable');
      const existId=await this.studentRepository.findOne({where:{id}});
      if(!existId) throw new NotFoundException('id not found');
      return await this.studentRepository.update({id},{name,nub_id,email,photo,phone_number})
    } catch (error) {
      throw error
    }
  }

  async delete(id:string){
    try {
      const existId=await this.studentRepository.findOne({where:{id}});
      if(!existId) throw new NotFoundException('id not found');
      return await this.studentRepository.softDelete(id)
    } catch (error) {
      throw error
    }
  }
}

