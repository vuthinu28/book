import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'

import products from '../assets/data/products'
import productsList from '../components/UI/ProductsList'
import '../styles/shop.css'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {
  const [productsData, setProductsData] = useState(products)

  const handleFilter = (e) => {
    const filterValue = e.target.value
    if (filterValue === 'Tiểu Thuyết') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Tiểu Thuyết'
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === 'Văn Học Và Tiểu Thuyết') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Văn Học Và Tiểu Thuyết'
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === 'Ngoại Ngữ') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Ngoại Ngữ'
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === 'Tâm Lý-Kỹ Năng sống') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Tâm Lý-Kỹ Năng sống'
      )

      setProductsData(filteredProducts)
    }

  
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setProductsData(searchedProducts)
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value='Văn Học Và Tiểu Thuyết'>Văn Học Và Tiểu Thuyết</option>
                  <option value='Ngoại Ngữ'>Ngoại Ngữ</option>
                  <option value='Tâm Lý-Kỹ Năng sống'>Tâm Lý-Kỹ Năng sống</option>
                  <option value='Tiểu Thuyết'>Tiểu Thuyết</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className='filter__widget'>
                <select>
                  <option>Sort By</option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='search__box'>
                <input
                  type='text'
                  placeholder='Search...'
                  onChange={handleSearch}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No products found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
