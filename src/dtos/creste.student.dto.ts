import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
    @ApiProperty({
        type:String,
        description:'name',
        required:true
    })
    name:string

    @ApiProperty({
        type:String,
        description:'nub_id',
        required:true
    })
    nub_id:string

    @ApiProperty({
        type:String,
        description:'email',
        required:true
    })
    email:string


    @ApiProperty({
        type:String,
        description:'photo',
        required:true
    })
    photo:string

    @ApiProperty({
        type:String,
        description:'phone_number',
        required:true
    })
    phone_number:string
}