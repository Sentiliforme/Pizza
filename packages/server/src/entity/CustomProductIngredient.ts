import { Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { CustomProduct } from './CustomProduct'
import { Ingredient } from './Ingredient'

@Entity()
export class CustomProductIngredient {
  @PrimaryColumn()
  customProductId: number

  @PrimaryColumn()
  ingredientId: number

  @ManyToOne(type => CustomProduct, { cascade: true })
  customProduct: CustomProduct

  @ManyToOne(type => Ingredient, { cascade: true })
  ingredient: Ingredient
}
