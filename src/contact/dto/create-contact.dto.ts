import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ example: 'John Doe', description: 'Sender name' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Sender email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'Hello from your portfolio!',
    description: 'Message content',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  message: string;
}
