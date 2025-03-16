import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature(
    [{ name: User.name, schema: UserSchema }]),
    JwtModule.register({ secret: 'secretKey', signOptions: { expiresIn: '1d' } })],
  controllers: [UsersController], 
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
