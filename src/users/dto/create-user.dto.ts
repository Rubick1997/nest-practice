import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "test@gmail.com", description: "Email" })
  readonly email: string;
  @ApiProperty({ example: "1234", description: "Password" })
  readonly password: string;
}
