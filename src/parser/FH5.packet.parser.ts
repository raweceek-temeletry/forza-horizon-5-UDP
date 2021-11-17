import { FH5Parser } from './FH5.parser'
import { FH5Packet } from './types'

export class FH5PacketParser extends FH5Parser {
    data: FH5Packet

    constructor(buffer: Buffer) {
        super()

        this.endianess('little')

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

        this.data = this.fromBuffer(buffer) as FH5Packet

    }

}