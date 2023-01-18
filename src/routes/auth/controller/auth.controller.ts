import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiGet, ApiPost } from 'src/core/models/default.route.decerator';
import { AuthService } from '../service/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CompletedDto } from '../../../core/models/default.dto';
import { UserDto } from '../models/user.dto';
import { createUserStatus } from '../models/auth.dto';



@ApiTags('Auth İşlemleri')
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService) {
        
    }

    @ApiPost('/crateUser','Kullanıcı Yaratılır',CompletedDto)
    async create(@Body() user: UserDto) {
      return await this.authService.createUser(user);
    }

    @ApiGet('/getUser/:user_id','Id verilen kullanıcıyı getirir')
    async getUser(@Param('user_id') user_id:string){
      return await this.authService.getUser(user_id);
    }

    @ApiPost('/signIn')
    async signIn(@Body() signData: UserDto){
      return await this.authService.signIn(signData.email,signData.password);
    }
    @ApiPost('/userStatus/create')
    async createUserStatus(@Body() userStatus:createUserStatus){
      return await this.authService.createUserStatus(userStatus);
    }
}
