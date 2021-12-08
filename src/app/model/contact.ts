export default class Contact{
  public _fullname: string = "";
  public get fullname(): string {
    return this._fullname;
  }
  public set fullname(value: string) {
    this._fullname = value;
  }
  public _username: string = "";
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  public _email: string = "";
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }


  constructor(){

  }




}
