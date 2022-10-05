// export class Grandetabela {}

// import { generate } from 'rxjs';

import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
//,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,
@Entity()
// @Unique(['email'])
export class Grandetabela extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  // @Column({ nullable: true, type: 'varchar', length: 200 })
  // Row_ID: number;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  Order_ID: string;
  @Column({ nullable: true, type: 'varchar', length: 200 })
  Order_Date: Date;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Ship_Date: Date;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Ship_Mode: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Customer_ID: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Customer_Name: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Segment: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Country: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  City: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  State: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Postal_Code: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Region: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Product_ID: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Category: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Sub_Category: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Product_Name: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Sales: number;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Quantity: number;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Discount: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Profit: string;
}
