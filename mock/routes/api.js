import express from "express";
const router = express.Router();

// Example mock endpoint
router.get("/operationCommand/getOperationCommands", (req, res) => {
  setTimeout(() => {
    res.json([
      {
        id: 369,
        name: "שיבוש בלוטוס",
        lastUpdateTime: "2025-05-22T20:30:34.941Z",
        creationTime: "2025-03-10T18:29:54.763Z",
        isActive: true,
        plannedStartDate: null,
        plannedEndDate: null,
        isNotified: false,
        missionTypes: ["dds"]
      }
    ]);
  }, 2000);
});

router.post("/systemManagement/updateDeviceStock", (req, res) => {
  res.json({
    error: null,
    result: "Success",
    statusCode: 200
  });
});

router.post("/missions/updateMissionParams", (req, res) => {
  res.json({
    id: 1308,
    operationCommandId: 369,
    type: "dds",
    lastUpdateTime: {
      hour: 6,
      minute: 24,
      nano: 98000000,
      second: 16,
      dayOfMonth: 26,
      dayOfWeek: "MONDAY",
      dayOfYear: 146,
      month: "MAY",
      monthValue: 5,
      year: 2025,
      chronology: {
        id: "ISO",
        calendarType: "iso8601"
      }
    },
    params: {
      techniqueUserParams: {
        slices: [
          {
            validation: {},
            startFreq: 2000,
            pl: 0,
            modulation: {
              modulationType: "CW",
              name: "modulation"
            },
            loFreq: 0,
            loFreqUnits: "MHz",
            techniqueName: "single"
          }
        ],
        selectedSlice: 0,
        globalValidation: [],
        techniqueName: "single"
      },
      equipmentPath: "addr=192.168.40.2,fpga=HG,name=,serial=32C3D58,type=x300,product=X310;TX;0",
      customName: "",
      technique: "single",
      equipmentUserParams: {
        amplifier: {},
        isWithAmplifier: false,
        stimulatorPower: 0
      },
      sij: {
        threats: [],
        lastThreatsInitedWithStatus: [],
        globalTxTime: null,
        globalRxTime: null,
        minGlobalTxTimeInSeconds: null,
        minGlobalRxTimeInSeconds: null,
        globalRxUnit: "sec",
        globalTxUnit: "sec",
        isManualUpdate: false,
        validation: {},
        import: {
          blockEditThreat: false,
          blockInitDueToNotSuitableEquipment: false,
          importError: false
        }
      },
      subMissionsMap: {},
      isSelectedMission: true,
      lastInitParams: {
        techniqueOrSijUserParams: {
          slices: [
            {
              validation: {},
              startFreq: 2000,
              pl: 0,
              modulation: {
                modulationType: "CW",
                name: "modulation"
              },
              loFreq: 0,
              loFreqUnits: "MHz",
              techniqueName: "single"
            }
          ],
          selectedSlice: 0,
          globalValidation: [],
          techniqueName: "single"
        },
        equipmentUserParams: {
          amplifier: {},
          isWithAmplifier: false,
          stimulatorPower: 0
        }
      }
    },
    devicesSerial: ["addr=192.168.40.2,fpga=HG,name=,serial=32C3D58,type=x300,product=X310;TX;0"],
    serviceName: null
  });
});

router.post("/api/algorithms/actions/initParams", (req, res) => {
  res.json({
    missionId: 1308
  });
});

router.post("/algorithms/actions/start", (req, res) => {
  res.json({
    error: null,
    result: 1308,
    statusCode: 200
  });
});

router.post("/algorithms/actions/pause", (req, res) => {
  res.json({
    error: null,
    result: 1308,
    statusCode: 200
  });
});

router.get("/devices/getStockDevices", (req, res) => {
  res.json({
    errors: [],
    results: [
      {
        stimulator: {
          technical: {
            isConnected: true,
            isRunning: false,
            isUsed: false,
            type: "x300",
            serial: "addr=192.168.40.2,fpga=HG,name=,serial=32C3D58,type=x300,product=X310;TX;0",
            lastTimeConnected: "2025-05-26T14:43:46.088Z",
            device_identifier: "addr=192.168.40.2,fpga=HG,name=,serial=32C3D58,type=x300,product=X310",
            isTransmitted: true,
            serviceName: "linux019-hp-prodesk-600-g2-sff"
          },
          name: null,
          nameOnlyForEdit: "0"
        },
        inStock: true,
        laneName: "0",
        amplifier: {
          name: "520-2500 חץ",
          address: "192.168.1.32",
          minFreq: 520,
          maxFreq: 2500,
          isLogicConnected: true,
          isOnline: false,
          estimatedRfOut: null,
          monitoring: {
            pin: -62.1,
            pout: -70,
            prev: -43.27,
            temp: 26
          },
          status: {
            mode: "hot standby",
            errorType: "",
            signal: false,
            errorContainer: {
              systemErrors: [],
              groupErrors: []
            }
          },
          lastConfig: {
            index: 1,
            GUI: "remote",
            mode: "online",
            modulation: "CW",
            detector: "RMS",
            powerManagement: "ALC",
            powerdBm: 50,
            PAR: 1,
            lastTechnique: "single"
          },
          type: "520-2500 חץ",
          isConnected: false,
          isBitFailed: false,
          bitAnswer: ""
        }
      }
    ]
  });
});

router.post("/algorithms/actions/update", (req, res) => {
  res.json({ missionId: 1311 });
});

router.post("/operationCommand/deactivate", (req, res) => {
  res.json({
    operationCommandId: 402
  });
});

router.post("/operationCommand/activate", (req, res) => {
  res.json({
    operationCommandId: 402
  });
});

router.post("/operationCommand/addOperationCommand", (req, res) => {
  res.json({
    id: 408,
    name: "naftali",
    lastUpdateTime: "2025-05-26T19:00:17.068Z",
    creationTime: "2025-05-26T19:00:17.068Z",
    isActive: false,
    plannedStartDate: null,
    plannedEndDate: null,
    isNotified: false,
    missionTypes: []
  });
});

router.post("/missions/addMission", (req, res) => {
  res.json({
    id: 1333,
    operationCommandId: 414,
    type: null,
    lastUpdateTime: {
      hour: 12,
      minute: 24,
      nano: 812000000,
      second: 47,
      dayOfMonth: 26,
      dayOfWeek: "MONDAY",
      dayOfYear: 146,
      month: "MAY",
      monthValue: 5,
      year: 2025,
      chronology: { id: "ISO", calendarType: "iso8601" }
    },
    params: null,
    devicesSerial: null,
    serviceName: null
  });
});

router.post("/missions/updateStimulatorMission", (req, res) => {
  res.json({
    id: 1334,
    operationCommandId: 415,
    type: "dds",
    lastUpdateTime: {
      hour: 13,
      minute: 8,
      nano: 402000000,
      second: 52,
      dayOfMonth: 26,
      dayOfWeek: "MONDAY",
      dayOfYear: 146,
      month: "MAY",
      monthValue: 5,
      year: 2025,
      chronology: { id: "ISO", calendarType: "iso8601" }
    },
    params: {
      techniqueUserParams: {
        slices: [
          {
            validation: { startFreq: "השדה  תדר לחסימה  לא מוגדר  " },
            startFreq: "",
            pl: 0,
            modulation: { modulationType: "CW", name: "modulation" },
            loFreq: 0,
            loFreqUnits: "MHz",
            techniqueName: "single"
          }
        ],
        selectedSlice: 0,
        globalValidation: [],
        techniqueName: "single"
      },
      equipmentPath: "",
      customName: "",
      technique: "single",
      equipmentUserParams: { amplifier: {}, isWithAmplifier: false, stimulatorPower: 0 },
      sij: {
        threats: [],
        lastThreatsInitedWithStatus: [],
        globalTxTime: null,
        globalRxTime: null,
        minGlobalTxTimeInSeconds: null,
        minGlobalRxTimeInSeconds: null,
        globalRxUnit: "sec",
        globalTxUnit: "sec",
        isManualUpdate: false,
        validation: {},
        import: { blockEditThreat: false, blockInitDueToNotSuitableEquipment: false, importError: false }
      },
      subMissionsMap: {},
      isSelectedMission: true
    },
    devicesSerial: ["addr=192.168.40.2,fpga=HG,name=,serial=32C3D58,type=x300,product=X310;TX;1"],
    serviceName: null
  });
});

router.post("/operationCommand/removeOperationCommand", (req, res) => {
  res.json({
    operationCommandId: 402
  });
});

router.post("/amplifiers/start", (req, res) => {
  res.json({});
});

router.post("/amplifiers/pause", (req, res) => {
  res.json({});
});

export default router;
