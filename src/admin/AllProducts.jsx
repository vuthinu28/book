
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'
const AllProducts = () => {
  const {data:productsData}= useGetData('products')
  //console.log(productsData)



  return (
     <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  productsData.map(item=>(
                <tr key={item.id}>
                  <td><img src={item.imgUrl} alt=''/></td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.price} VND</td>
                  <td><button className='btn btn-danger'>Delete</button></td>
                </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
     </section>
  )
}

export default AllProducts