class TransportManager {
  constructor(transportManager) {
    this.transportManager = transportManager;
  }

  sendMail(option) {
    return this.transportManager.sendMail(option);
  }
}

export default TransportManager;
