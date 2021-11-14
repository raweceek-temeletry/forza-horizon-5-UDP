import * as dgram from 'dgram';
import {EventEmitter} from 'events';
import {AddressInfo} from 'net';
import {Parser} from 'binary-parser';

const port = 5555;
const address = 'localhost';

const socket = dgram.createSocket('udp4');

function start(): void {
  if (!socket) {
    return;
  }

  socket.on('listening', (): void => {
    if (!socket) {
      return;
    }

    const address: AddressInfo = socket.address();
    console.log(`UDP Client listening on ${address.address}:${address.port} 🏎`);
    socket.setBroadcast(true);
  });

  socket.on('message', (m: Buffer): void => {
    const parser = new Parser()

      .uint32le('IsRaceOn')
      .uint32le('TimestampMs')

      .floatle('EngineMaxRpm')
      .floatle('EngineIdleRpm')
      .floatle('CurrentEngineRpm')

      .floatle('AccelerationX')
      .floatle('AccelerationY')
      .floatle('AccelerationZ')

      .floatle('VelocityX')
      .floatle('VelocityY')
      .floatle('VelocityZ')

      .floatle('AngularVelocityX')
      .floatle('AngularVelocityY')
      .floatle('AngularVelocityZ')

      .floatle('Yaw')
      .floatle('Pitch')
      .floatle('Roll')

      .floatle('NormalizedSuspensionTravelFrontLeft')
      .floatle('NormalizedSuspensionTravelFrontRight')
      .floatle('NormalizedSuspensionTravelRearLeft')
      .floatle('NormalizedSuspensionTravelRearRight')

      .floatle('TireSlipRatioFrontLeft')
      .floatle('TireSlipRatioFrontRight')
      .floatle('TireSlipRatioRearLeft')
      .floatle('TireSlipRatioRearRight')

      .floatle('WheelRotationSpeedFrontLeft')
      .floatle('WheelRotationSpeedFrontRight')
      .floatle('WheelRotationSpeedRearLeft')
      .floatle('WheelRotationSpeedRearRight')

      .int32le('WheelOnRumbleStripFrontLeft')
      .int32le('WheelOnRumbleStripFrontRight')
      .int32le('WheelOnRumbleStripRearLeft')
      .int32le('WheelOnRumbleStripRearRight')

      .floatle('WheelInPuddleDepthFrontLeft')
      .floatle('WheelInPuddleDepthFrontRight')
      .floatle('WheelInPuddleDepthRearLeft')
      .floatle('WheelInPuddleDepthRearRight')

      .floatle('SurfaceRumbleFrontLeft')
      .floatle('SurfaceRumbleFrontRight')
      .floatle('SurfaceRumbleRearLeft')
      .floatle('SurfaceRumbleRearRight')

      .floatle('TireSlipAngleFrontLeft')
      .floatle('TireSlipAngleFrontRight')
      .floatle('TireSlipAngleRearLeft')
      .floatle('TireSlipAngleRearRight')

      .floatle('TireCombinedSlipFrontLeft')
      .floatle('TireCombinedSlipFrontRight')
      .floatle('TireCombinedSlipRearLeft')
      .floatle('TireCombinedSlipRearRight')

      .floatle('SuspensionTravelMetersFrontLeft')
      .floatle('SuspensionTravelMetersFrontRight')
      .floatle('SuspensionTravelMetersRearLeft')
      .floatle('SuspensionTravelMetersRearRight')

      .int32le('CarOrdinal')
      .int32le('CarClass')
      .int32le('CarPerformanceIndex')
      .int32le('DrivetrainType')
      .int32le('NumCylinders')

      .int32le('HorizonPlaceholder1')
      .uint32le('HorizonPlaceholder2')
      .uint32le('HorizonPlaceholder3')

      .floatle('PositionX')
      .floatle('PositionY')
      .floatle('PositionZ')

      .floatle('Speed')
      .floatle('Power')
      .floatle('Torque')

      .floatle('TireTempFrontLeft')
      .floatle('TireTempFrontRight')
      .floatle('TireTempRearLeft')
      .floatle('TireTempRearRight')

      .floatle('Boost')
      .floatle('Fuel')
      .floatle('DistanceTraveled')
      .floatle('BestLap')
      .floatle('LastLap')
      .floatle('CurrentLap')
      .floatle('CurrentRaceTime')

      .uint16le('LapNumber')
      .uint8('RacePosition')
      .uint8('Accel')
      .uint8('Brake')
      .uint8('Clutch')
      .uint8('HandBrake')
      .uint8('Gear')
      .int8('Steer')
      .int8('NormalizedDrivingLine')
      .int8('NormalizedAIBrakeDifference')

      .parse(m);

    console.clear();
    console.log('IsRaceOn', parser.IsRaceOn);
    console.log('TimestampMs', parser.TimestampMs);
    console.log('NumCylinders', parser.NumCylinders);

    console.log('CurrentEngineRpm', parser.CurrentEngineRpm);

    console.log('HorizonPlaceholder', parser.HorizonPlaceholder1);
    console.log('HorizonPlaceholder', parser.HorizonPlaceholder2);
    console.log('HorizonPlaceholder', parser.HorizonPlaceholder3);

    console.log('speed', parser.Speed * 3.6);
    console.log('racePosition', parser.RacePosition);
    console.log('Gear', parser.Gear);
    console.log('LapNumber', parser.LapNumber);
    
    
  });

  socket.bind({
    port: port,
    address: address,
    exclusive: false,
  });
}

socket.on('listening', () => {
  const address = socket.address() as AddressInfo;
  console.log(`UDP Server listening on ${address.address}:${address.port}`);
});

start();
