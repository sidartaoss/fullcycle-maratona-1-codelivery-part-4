import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum OrderStatus {
  PENDING = 1,
  DONE = 2,
}

@Entity({
  name: "orders",
})
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  driver_id: string;

  @Column()
  driver_name: string;

  @Column()
  location_id: number;

  @Column("simple-array")
  location_geo: number[];

  @Column()
  status: OrderStatus = OrderStatus.PENDING;

  @CreateDateColumn()
  created_at: Date;
}
