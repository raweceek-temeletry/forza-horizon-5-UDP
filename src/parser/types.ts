export interface Address {
    port: number;
    ip?: string;
}

export interface Options {
    port?: number;
    forwardAddresses?: Address[] | undefined;
    skipParsing?: boolean;
    address?: string;
}


export interface Data_Out {

    IsRaceOn: number;
    TimestampMs: number;

    EngineMaxRpm: number;
    EngineIdleRpm: number;
    CurrentEngineRpm: number;

    AccelerationX: number;
    AccelerationY: number;
    AccelerationZ: number;

    VelocityX: number;
    VelocityY: number;
    VelocityZ: number;

    AngularVelocityX: number;
    AngularVelocityY: number;
    AngularVelocityZ: number;

    Yaw: number;
    Pitch: number;
    Roll: number;

    NormalizedSuspensionTravelFrontLeft: number;
    NormalizedSuspensionTravelFrontRight: number;
    NormalizedSuspensionTravelRearLeft: number;
    NormalizedSuspensionTravelRearRight: number;

    TireSlipRatioFrontLeft: number;
    TireSlipRatioFrontRight: number;
    TireSlipRatioRearLeft: number;
    TireSlipRatioRearRight: number;

    WheelRotationSpeedFrontLeft: number;
    WheelRotationSpeedFrontRight: number;
    WheelRotationSpeedRearLeft: number;
    WheelRotationSpeedRearRight: number;

    WheelOnRumbleStripFrontLeft: number;
    WheelOnRumbleStripFrontRight: number;
    WheelOnRumbleStripRearLeft: number;
    WheelOnRumbleStripRearRight: number;

    WheelInPuddleDepthFrontLeft: number;
    WheelInPuddleDepthFrontRight: number;
    WheelInPuddleDepthRearLeft: number;
    WheelInPuddleDepthRearRight: number;

    SurfaceRumbleFrontLeft: number;
    SurfaceRumbleFrontRight: number;
    SurfaceRumbleRearLeft: number;
    SurfaceRumbleRearRight: number;

    TireSlipAngleFrontLeft: number;
    TireSlipAngleFrontRight: number;
    TireSlipAngleRearLeft: number;
    TireSlipAngleRearRight: number;

    TireCombinedSlipFrontLeft: number;
    TireCombinedSlipFrontRight: number;
    TireCombinedSlipRearLeft: number;
    TireCombinedSlipRearRight: number;

    SuspensionTravelMetersFrontLeft: number;
    SuspensionTravelMetersFrontRight: number;
    SuspensionTravelMetersRearLeft: number;
    SuspensionTravelMetersRearRight: number;

    CarOrdinal: number;
    CarClass: number;
    CarPerformanceIndex: number;
    DrivetrainType: number;
    NumCylinders: number;

    HorizonPlaceholder1: number;
    HorizonPlaceholder2: number;
    HorizonPlaceholder3: number;

    PositionX: number;
    PositionY: number;
    PositionZ: number;

    Speed: number;
    Power: number;
    Torque: number;

    TireTempFrontLeft: number;
    TireTempFrontRight: number;
    TireTempRearLeft: number;
    TireTempRearRight: number;

    Boost: number;
    Fuel: number;
    DistanceTraveled: number;
    BestLap: number;
    LastLap: number;
    CurrentLap: number;
    CurrentRaceTime: number;

    LapNumber: number;
    RacePosition: number;
    Accel: number;
    Brake: number;
    Clutch: number;
    HandBrake: number;
    Gear: number;
    Steer: number;
    NormalizedDrivingLine: number;
    NormalizedAIBrakeDifference: number;



}