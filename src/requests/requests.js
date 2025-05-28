import axios from "axios";
import { BASE_URL } from "../constants";

export const getStockDevices = async () => {
  const response = await axios.get(`${BASE_URL}devices/getStockDevices`);
  return response.data;
};

export const getOperationCommand = async () => {
  const response = await axios.get(`${BASE_URL}operationCommand/getOperationCommands`);
  return response.data;
};

export const amplifiersPause = async amplifierIp => {
  const data = {
    ip: amplifierIp
  };
  const response = await axios.post(`${BASE_URL}amplifiers/pause`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const amplifiersStart = async amplifierIp => {
  const data = {
    ip: amplifierIp
  };
  const response = await axios.post(`${BASE_URL}amplifiers/start`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const removeOperationCommand = async operationCommandId => {
  const data = {
    id: operationCommandId
  };
  const response = await axios.post(`${BASE_URL}operationCommand/removeOperationCommand`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const updateStimulatorMission = async (missionId, devicesSerial) => {
  const data = {
    id: missionId,
    devices_serial: [devicesSerial]
  };
  const response = await axios.post(`${BASE_URL}missions/updateStimulatorMission`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const addMission = async missionId => {
  const data = {
    id: missionId
  };
  const response = await axios.post(`${BASE_URL}missions/addMission`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const addOperationCommand = async () => {
  const data = {
    isActive: false,
    lastUpdateTime: `2025-05-19T14:27:13.711Z`,
    creationTime: `2025-05-19T14:27:13.711Z`,
    name: `diego`,
    plannedEndDate: ``,
    plannedStartDate: ``,
    missionTypes: [],
    isNotified: false
  };
  const response = await axios.post(`${BASE_URL}operationCommand/addOperationCommand`, data);
  console.log(response.status, response.data);

  return response.data;
};

export const activateOperationCommand = async operationCommandId => {
  const data = {
    id: operationCommandId
  };
  const response = await axios.post(`${BASE_URL}operationCommand/activate`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const deactivateOperationCommand = async operationCommandId => {
  const data = {
    id: operationCommandId
  };
  const response = await axios.post(`${BASE_URL}operationCommand/deactivate`, data);
  console.log(response.status, response.data);

  return response.data;
};

export const uptateMission = async (missionId, serviceName, device_serial, freq, center_freq) => {
  const data = {
    missionId: missionId,
    serviceName: serviceName,
    missionType: `dds`,
    missionParams: {
      missionType: `dds`,
      stimulatorType: `x300`,
      devices: [
        {
          device_serial: device_serial,
          rate: 200000000,
          channels: [
            {
              channel_number: 0,
              power: 0,
              slices: [
                {
                  center_freq: freq,
                  dwell: 0,
                  sub_channels: [{ tasks: [{ type: `cw`, freq: freq, dwell: 0, pl: 0, LO: 0 }] }]
                }
              ]
            }
          ]
        }
      ]
    },
    devicesSerial: [device_serial],
    attackedFrequencies: 0
  };
  const response = await axios.post(`${BASE_URL}algorithms/actions/update`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const pauseStimulator = async (missionId, serviceName) => {
  const data = { missionId: missionId, serviceName: serviceName };
  const response = await axios.post(`${BASE_URL}algorithms/actions/pause`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const startStimulator = async (missionId, serviceName) => {
  const data = { missionId: missionId, serviceName: serviceName };
  const response = await axios.post(`${BASE_URL}algorithms/actions/start`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const initParams = async (missionId, serviceName, device_serial, freq) => {
  const data = {
    missionId: missionId,
    serviceName: serviceName,
    missionType: `dds`,
    missionParams: {
      missionType: `dds`,
      stimulatorType: `x300`,
      devices: [
        {
          device_serial: device_serial,
          rate: 200000000,
          channels: [
            {
              channel_number: 0,
              power: 0,
              slices: [
                {
                  center_freq: freq,
                  dwell: 0,
                  sub_channels: [{ tasks: [{ type: `cw`, freq: freq, dwell: 0, pl: 0, LO: 0 }] }]
                }
              ]
            }
          ]
        }
      ]
    },
    devicesSerial: [device_serial],
    attackedFrequencies: 0
  };
  const response = await axios.post(`${BASE_URL}missions/updateMissionParams`, data);
  console.log(response.status, response.data);

  return response.data;
};

//todo check if needed
export const updateMissionParams = async (missionId, operationCommandId, startFreq, devicesSerial, serviceName) => {
  const data = {
    id: missionId,
    operationCommandId: operationCommandId,
    type: `dds`,
    lastUpdateTime: {
      dayOfMonth: 13,
      dayOfWeek: `TUESDAY`,
      dayOfYear: 133,
      month: `MAY`,
      monthValue: 5,
      year: 2025,
      hour: 0,
      minute: 0,
      nano: 0,
      second: 0,
      chronology: { id: `ISO`, calendarType: `iso8601` }
    },
    params: {
      techniqueUserParams: {
        slices: [
          {
            validation: {},
            startFreq: startFreq,
            pl: 0,
            modulation: { modulationType: `CW`, name: `modulation` },
            loFreq: 0,
            loFreqUnits: `MHz`,
            techniqueName: `single`
          }
        ],
        selectedSlice: 0,
        globalValidation: [],
        techniqueName: `single`
      },
      equipmentPath: devicesSerial,
      customName: ``,
      technique: `single`,
      equipmentUserParams: { amplifier: {}, isWithAmplifier: false, stimulatorPower: 0 },
      sij: {
        threats: [],
        lastThreatsInitedWithStatus: [],
        globalTxTime: null,
        globalRxTime: null,
        minGlobalTxTimeInSeconds: null,
        minGlobalRxTimeInSeconds: null,
        globalRxUnit: `sec`,
        globalTxUnit: `sec`,
        isManualUpdate: false,
        validation: {},
        import: { blockEditThreat: false, blockInitDueToNotSuitableEquipment: false, importError: false }
      },
      subMissionsMap: {},
      isSelectedMission: true,
      lastInitParams: {
        techniqueOrSijUserParams: {
          slices: [
            {
              validation: {},
              startFreq: startFreq,
              pl: 0,
              modulation: { modulationType: `CW`, name: `modulation` },
              loFreq: 0,
              loFreqUnits: `MHz`,
              techniqueName: `single`
            }
          ],
          selectedSlice: 0,
          globalValidation: [],
          techniqueName: `single`
        },
        equipmentUserParams: { amplifier: {}, isWithAmplifier: false, stimulatorPower: 0 }
      }
    },
    devicesSerial: [devicesSerial],
    serviceName: serviceName,
    wasInitPerformed: false,
    isRunning: false,
    isLoading: true
  };
  const response = await axios.post(`${BASE_URL}missions/updateMissionParams`, data);
  console.log(response.status, response.data);

  return response.data;
};
export const updateDeviceStock = async (missionId, serviceName) => {
  const data = { missionId: missionId, serviceName: serviceName };
  const response = await axios.post(`${BASE_URL}systemManagement/updateDeviceStock`, data);
  console.log(response.status, response.data);

  return response.data;
};
