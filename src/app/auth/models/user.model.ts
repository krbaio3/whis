export class User {
  public nombre: string;
  public email: string;
  public uid: string;

  constructor(userObject: UserObject) {
    this.nombre  = userObject && userObject.nombre || null;
    this.uid     = userObject && userObject.uid || null;
    this.email   = userObject && userObject.email || null;
  }
}
interface UserObject {
  nombre: string;
  email: string;
  uid: string;
}
