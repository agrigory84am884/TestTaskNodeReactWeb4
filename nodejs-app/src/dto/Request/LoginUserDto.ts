import { IsBoolean, IsEmail, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;
  
  @IsBoolean()
  remember?: boolean;
}
