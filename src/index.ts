import { Address, Data_Out, Options } from './parser/types';
import * as dgram from 'dgram';
import { EventEmitter } from 'events';
import { AddressInfo } from 'net';
import { FH5PacketParser } from './parser/FH5.packet.parser';


const DEFAULT_PORT = 5555;
const FORWARD_ADDRESSES = undefined;
const ADDRESS = 'localhost';

export class forzaHorizon5Client extends EventEmitter {


  port: number;
  forwardAddresses?: Address[];
  address: string;
  socket?: dgram.Socket;

  constructor(opts: Options = {}) {
    super();

    const {
      port = DEFAULT_PORT,
      forwardAddresses = FORWARD_ADDRESSES,
      address = ADDRESS,
    } = opts;

    this.port = port;
    this.forwardAddresses = forwardAddresses;
    this.address = address;
    this.socket = dgram.createSocket('udp4');
  }

  /**
    * Method to start listening for packets
    */
  start(): void {
    if (!this.socket) {
      return;
    }

    this.socket.on('listening', (): void => {
      if (!this.socket) {
        return;
      }

      const address: AddressInfo = this.socket.address();
      console.log(`UDP Client listening on ${address.address}:${address.port} 🏎`);
      this.socket.setBroadcast(true);
    });

    this.socket.on('message', (m: Buffer): void => this.handleMessage(m));
    this.socket.bind({
      port: this.port,
      address: this.address,
      exclusive: false,
    });
  }

  handleMessage(message: Buffer): void {
    if (this.forwardAddresses) {
      // bridge message
      this.bridgeMessage(message);
    }

    const parsedMessage: any = forzaHorizon5Client.parseBufferMessage(
      message
    );

    if (!parsedMessage || !parsedMessage.packetData) {
      return;
    }

    // emit parsed message
    this.emit('data-out', parsedMessage.packetData.data);

    // log parsed message
    // console.log(parsedMessage.packetData.data);
  }

  bridgeMessage(message: Buffer): void {
    if (!this.socket) {
      throw new Error('Socket is not initialized');
    }
    if (!this.forwardAddresses) {
      throw new Error('No ports to bridge over');
    }
    for (const address of this.forwardAddresses) {
      this.socket.send(message, 0, message.length, address.port, address.ip || '0.0.0.0');
    }
  }

  static parseBufferMessage(
    message: Buffer): any {
    const parser: typeof FH5PacketParser = FH5PacketParser
    if (!parser) {
      return;
    }

    const packetData: any = new parser(message);
    return { packetData };
  }

  /**
   * Method to close the client
   */
  stop(): dgram.Socket | undefined {
    if (!this.socket) {
      return;
    }

    return this.socket.close((): void => {
      console.log('UDP Client closed 🏁');
      this.socket = undefined;
    });
  }
}
