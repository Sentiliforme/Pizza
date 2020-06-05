import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Category } from './Category'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: number

  @ManyToOne(type => Category, { nullable: true })
  category: Category

  constructor(obj: Partial<Product> = {}) {
    Object.assign(this, obj)
  }
}
