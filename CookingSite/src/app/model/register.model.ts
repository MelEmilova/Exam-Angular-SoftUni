export class RegisterModel{
  constructor(
    public email:string,
    public password: string,
    public confirmPassword: string
  ){}
}