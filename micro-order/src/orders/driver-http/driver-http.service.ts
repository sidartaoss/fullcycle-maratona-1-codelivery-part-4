import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";

@Injectable()
export class DriverHttpService {
  baseUrl = process.env.MICRO_DRIVERS_URL;

  constructor(private readonly httpService: HttpService) {}

  list() {
    return this.httpService
      .get<{ drivers: any[] }>(`${this.baseUrl}/drivers`)
      .pipe(map((response) => response.data.drivers));
  }

  show(id) {
    return this.httpService
      .get(`${this.baseUrl}/drivers/${id}`)
      .pipe(map((response) => response.data));
  }
}
