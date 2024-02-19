import BleManager from 'react-native-ble-plx';

const BleService = {
  initialize: () => {
    BleManager.start({ showAlert: false });
  },

  startScan: (onDeviceDiscovered) => {
    BleManager.scan([], 5, true).then(() => {
      console.log('Scanning started');
    });

    BleManager.onDeviceUpdated((device) => {
      onDeviceDiscovered(device);
    });
  },

  stopScan: () => {
    BleManager.stopScan();
  },

  connect: (deviceId, onSuccess, onError) => {
    BleManager.connect(deviceId)
      .then(() => {
        onSuccess();
      })
      .catch((error) => {
        onError(error);
      });
  },

  disconnect: (deviceId, onSuccess, onError) => {
    BleManager.disconnect(deviceId)
      .then(() => {
        onSuccess();
      })
      .catch((error) => {
        onError(error);
      });
  },
};

export default BleService;
