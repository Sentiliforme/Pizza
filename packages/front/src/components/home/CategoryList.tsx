import React, { useEffect, useState } from 'react'
import * as Api from '../../service/api'
import ListedCategory from './ListedCategory'
import { setAlert, setProducts } from '../../store'
import { useDispatch } from 'react-redux'

function CategoryList() {
  const [categories, setCategories] = useState<any>([])
  const dispatch = useDispatch()
  async function loadCategories() {
    try {
      const { categories } = await Api.getMenu()
      const products = categories.map((c) => c.products).flat()
      dispatch(setProducts(products))
      setCategories(categories)
    } catch (e) {
      dispatch(setAlert('Error al obtener las categorias'))
    }
  }
  useEffect(() => {
    loadCategories()
  }, [])
  return (
    <div>
      {categories.map((category: any) => (
        <ListedCategory category={category} key={category.id} />
      ))}
    </div>
  )
}

export default CategoryList
