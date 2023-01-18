import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { UserStatus } from './auth.dto';
export class UserDto {
    @ApiProperty({
      type: String,
      required: true,
      description: 'E-mail',
      default: 'default@default.com',
    })
    @IsEmail("example@example.com",{message: "email string bir değer olmalı"})
    email: string;
  
    @ApiProperty({
      type: String,
      required: true,
      description: 'Kullanıcı adı',
            default: 'string',

    })
    userId:string;

    @ApiProperty({
      type: String,
      required: true,
      description: 'Blockchain but iban',
      default: 'Node Url',
    })
    nodeUrl:string;
    
    @ApiProperty({
        type: String,
        required: true,
        description: 'Password for users',
        default: 'pasword123',
    })
    password:string;


    
    @ApiProperty({
        type: String,
        required: true,
        description: 'Password for users',
        default: 'pasword123',
    })
    userStatus:UserStatus;


}