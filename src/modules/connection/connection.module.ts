import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';

@Module({
  controllers: [],
  providers: [ConnectionService],
  exports: [ConnectionService]
})
export class ConnectionModule { }
