export default class CommonDataManager {
  static myInstance = null;

  _userID = "";
  numServicios = 0;

  /**
   * @returns {CommonDataManager}
   */
  static getInstance() {
    if (CommonDataManager.myInstance == null) {
      CommonDataManager.myInstance = new CommonDataManager();
    }

    return this.myInstance;
  }

  getUserID() {
    return this._userID;
  }

  setUserID(id) {
    this._userID = id;
  }

  getNumServicios() {
    return this.numServicios;
  }

  setNumServicios(numServicios) {
    this.numServicios = numServicios;
  }

  contratarServicio() {
    this.numServicios = this.numServicios + 1;
  }
}
