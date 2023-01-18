import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEthereumAddress, IsNotEmpty } from 'class-validator';
import { UserDto } from './user.dto';



export class UserStatus {

  @ApiProperty({
    type: Boolean,
    required: true,
    description: 'Is this User is a Referee in this WorkCase or not',
    default: true,
  })
  isReferee:Boolean;
  
  
    @ApiProperty({
      type: Boolean,
      required: true,
      description: 'Is this User is a Referee in this WorkCase or not',
      default: true,
    })
    user:UserDto;
    


  
  
    @ApiProperty({
      type: Number,
      required: true,
      description: 'Is this User is a Referee in this WorkCase or not',
      default: true,
    })
    userId:Number;
    


  }
export type createUserStatus = Pick<UserStatus, "isReferee" | "userId">;



export class WorkCaseDto{

  @ApiProperty({
    type: String,
    required: false,
    description: 'Private Key for User 1',
    default: 'string',
  })
  privateKey_1:string;
  
  @ApiProperty({
    type: String,
    required: false,
    description: 'Private Key for User 1',
    default: 'string',
  })
  privateKey_2:string;
  
  @ApiProperty({
    type: Boolean,
    required: true,
    description: 'Is case still open?',
    default: 'false',
  })
  isCaseOpen:Boolean;
  
  @ApiProperty({
    type: Number,
    required: true,
    description: 'Is case still open?',
    default: 100.00,
  })
  price:Boolean;
  
  
  @ApiProperty({
    type: Array<UserDto>,
    required: true,
    description: 'Is case still open?',
    default: 100.00,
  })
  user:Array<UserDto>;
  
}