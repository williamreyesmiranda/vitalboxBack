import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Los servicios estan funcionando perfectamente';
  }
}
