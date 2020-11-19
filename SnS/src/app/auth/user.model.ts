export class User {

  constructor(
    public email: string,
    public id: string,
    //private-> should be accessible only in a way which also check for validity
    private _token: string,
    private _tokenExpirationDate: Date
    ) {}

    //getter -looks like a function, but accessable like property(user.token). Special type of property, user can't override it(that's what setter is for).
    get token() {
      //current date is smaller than tokenExpDate -> it is in the past -> EXPIRED!
      if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
        return null;
      }
      return this._token;
    }
}
