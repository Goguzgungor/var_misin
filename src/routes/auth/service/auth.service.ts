import { HttpException, Injectable } from '@nestjs/common';
import { CompletedDto } from '../../../core/models/default.dto';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { UserDto } from '../models/user.dto';
import { createUserStatus } from '../models/auth.dto';

@Injectable()
export class AuthService {
    constructor(private db:PrismaService){
    }
    async createUser(user:UserDto):Promise<CompletedDto>{
        const create = await this.db.user.create({
            data : {
                email: user.email,
                userID:user.userId,
                nodeUrl:user.nodeUrl,
                password:user.password,
            }
            
        })
        if (!create) {
            throw new HttpException('Forbidden',403);
        }
        return {completed : true};
    }

    getUser(user_id:string){
        const user=this.db.user.findFirst({
            where:{
                userID:user_id
            }
            
        }) 
        if (!user) {
            throw new HttpException('Not Found',404);
        }
        return user;
    }
    
    signIn(email:string,password:string){
        const user=this.db.user.findFirst({
            where: 
            {
                email:email,
                password:password
            }
 
        }) 
        if (!user) {
            throw new HttpException('Not Found',404);
        }
    }
    createUserStatus (userStatus:createUserStatus){
        const create_status = this.db.userStatus.create({
            data:{
                isReferee:userStatus.isReferee as boolean,
                user: {
                    connect:{
                        id:userStatus.userId as number
                    }
                }
            }
        })
        if (!create_status) {
            throw new HttpException('Validation Error',422);
        }
        return create_status;
    }

}
