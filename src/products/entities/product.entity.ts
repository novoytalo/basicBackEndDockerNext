// export class Product {}
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
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  // @Column({ nullable: true, type: 'varchar', length: 200 })
  // Row_ID: number;

  //   @Column({ nullable: true, type: 'varchar', length: 200 })
  //   Order_ID: string;
  //   @Column({ nullable: true, type: 'varchar', length: 200 })
  //   Order_Date: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Ship_Date: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Ship_Mode: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Customer_ID: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Customer_Name: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Segment: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Country: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   City: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   State: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Postal_Code: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Region: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Product_ID: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Category: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Sub_Category: string;
  @Column({ nullable: false, type: 'varchar', length: 200 })
  Product_Name: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Sales: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Quantity: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Discount: string;
  //   @Column({ nullable: false, type: 'varchar', length: 200 })
  //   Profit: string;

  /////////////////////////////////////////////////////////
  // @PrimaryGeneratedColumn('increment')
  // id: number;

  // @Column({ nullable: true, type: 'varchar', length: 200 })
  // ORDERNUMBER: string;

  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // QUANTITYORDERED: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // PRICEEACH: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // ORDERLINENUMBER: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // SALES: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // ORDERDATE: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // STATUS: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // QTR_ID: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // MONTH_ID: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // YEAR_ID: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // PRODUCTLINE: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // MSRP: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // PRODUCTCODE: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // CUSTOMERNAME: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // PHONE: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // ADDRESSLINE1: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // ADDRESSLINE2: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // CITY: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // STATE: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // POSTALCODE: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // COUNTRY: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // TERRITORY: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // CONTACTLASTNAME: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // CONTACTFIRSTNAME: string;
  // @Column({ nullable: false, type: 'varchar', length: 200 })
  // DEALSIZE: string;

  ///////////////////////////////////////////////////////////////
  //   @Column({ nullable: true, type: 'varchar', length: 20 })
  //   role: string;

  //   @Column({ nullable: true, default: true })
  //   status: boolean;

  //   @Column({ nullable: true })
  //   password: string;

  //   @Column({ nullable: true })
  //   salt: string;

  //   @Column({ nullable: true, type: 'varchar', length: 64 })
  //   confirmationToken: string;

  //   @Column({ nullable: true, type: 'varchar', length: 64 })
  //   recoverToken: string;

  //   @CreateDateColumn()
  //   createAt: Date;

  //   @UpdateDateColumn()
  //   updatedAt: Date;

  //if want to difine realtions... multiples
  // @OneToMany(type => Photo, photo => photo.user)
  // photos: Photo[];
}
