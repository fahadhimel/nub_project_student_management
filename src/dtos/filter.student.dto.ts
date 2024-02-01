import { ApiProperty } from "@nestjs/swagger";

export class FilterStudentDto {
    @ApiProperty({
        type:String,
        description:'name',
        required:false
    })
    name:string

    @ApiProperty({
        type:String,
        description:'nub_id',
        required:false
    })
    nub_id:string

    @ApiProperty({
        type:String,
        description:'email',
        required:false
    })
    email:string

    @ApiProperty({
        type:String,
        description:'phone_number',
        required:false
    })
    phone_number:string
}