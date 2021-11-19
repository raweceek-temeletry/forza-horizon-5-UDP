# forza-horizon-5-UDP

This is a TypeScript UDP telemetry parser and client for the Forza Horizon 5 game.


![](forza.gif)


## usage

```ts
import { forzaHorizon5Client } from 'forza-horizon-5-udp'

// default port is 5555
// default address is localhost

/*
const client = new forzaHorizon5Client({
    address:'192.168.1.5',
    port:5555
    })
    
*/
const client = new forzaHorizon5Client()



client.on('data-out', (data) => {

  console.log(data)
})


client.start()

```

## packet data-out types



```cs

IsRaceOn:uint32 
TimestampMs:uint32 

EngineMaxRpm:float 
EngineIdleRpm:float 
CurrentEngineRpm:float 

AccelerationX:float 
AccelerationY:float 
AccelerationZ:float 

VelocityX:float 
VelocityY:float 
VelocityZ:float 

AngularVelocityX:float 
AngularVelocityY:float 
AngularVelocityZ:float 

Yaw:float 
Pitch:float 
Roll:float 

NormalizedSuspensionTravelFrontLeft:float 
NormalizedSuspensionTravelFrontRight:float 
NormalizedSuspensionTravelRearLeft:float 
NormalizedSuspensionTravelRearRight:float 

TireSlipRatioFrontLeft:float 
TireSlipRatioFrontRight:float 
TireSlipRatioRearLeft:float 
TireSlipRatioRearRight:float 

WheelRotationSpeedFrontLeft:float 
WheelRotationSpeedFrontRight:float 
WheelRotationSpeedRearLeft:float 
WheelRotationSpeedRearRight:float 

WheelOnRumbleStripFrontLeft:int32 
WheelOnRumbleStripFrontRight:int32 
WheelOnRumbleStripRearLeft:int32 
WheelOnRumbleStripRearRight:int32 

WheelInPuddleDepthFrontLeft:float 
WheelInPuddleDepthFrontRight:float 
WheelInPuddleDepthRearLeft:float 
WheelInPuddleDepthRearRight:float 

SurfaceRumbleFrontLeft:float 
SurfaceRumbleFrontRight:float 
SurfaceRumbleRearLeft:float 
SurfaceRumbleRearRight:float 

TireSlipAngleFrontLeft:float 
TireSlipAngleFrontRight:float 
TireSlipAngleRearLeft:float 
TireSlipAngleRearRight:float 

TireCombinedSlipFrontLeft:float 
TireCombinedSlipFrontRight:float 
TireCombinedSlipRearLeft:float 
TireCombinedSlipRearRight:float 

SuspensionTravelMetersFrontLeft:float 
SuspensionTravelMetersFrontRight:float 
SuspensionTravelMetersRearLeft:float 
SuspensionTravelMetersRearRight:float 

CarOrdinal:int32 
CarClass:int32 
CarPerformanceIndex:int32 
DrivetrainType:int32 
NumCylinders:int32 

HorizonPlaceholder: unknown // 12 bytes

PositionX:float 
PositionY:float 
PositionZ:float 

Speed:float 
Power:float 
Torque:float 

TireTempFrontLeft:float 
TireTempFrontRight:float 
TireTempRearLeft:float 
TireTempRearRight:float 

Boost:float 
Fuel:float 
DistanceTraveled:float 
BestLap:float 
LastLap:float 
CurrentLap:float 
CurrentRaceTime:float 

LapNumber:uint16 
RacePosition:uint8 
Accel:uint8 
Brake:uint8 
Clutch:uint8 
HandBrake:uint8 
Gear:uint8 
Steer: int8 
NormalizedDrivingLine: int8
NormalizedAIBrakeDifference: int8 

```