
import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container,Row} from 'reactstrap'
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <Helmet title ={'Dashboard'}>
      <>
        <section>
          <Container>
            <Row>
              <Col className='lg-3'>
                <div className='revenue__box'>
                  <h5>Tổng Doanh Thu</h5>
                  <span className="">3.000.000 VND</span>
                </div>
              </Col>
              <Col className='lg-3'>
                <div className='orders__box'>
                  <h5>Tổng Đơn</h5>
                  <span className="">50</span>
                </div>
              </Col>
              <Col className='lg-3'>
                <div className='pro__box'>
                  <h5>Tổng sách bán ra</h5>
                  <span className="">100</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    </Helmet>
  )
}

export default Dashboard