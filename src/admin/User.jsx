import React from 'react'
import useGetData from '../custom-hooks/useGetData'
import { Container,Row,Col } from 'reactstrap'
import { deleteDoc,doc } from 'firebase/firestore'
import { db,storage } from '../firebase.config'
import { toast } from 'react-toastify'
const User = () => {
  const {data:userData} = useGetData('users')
  //const deleteUser =async(id)=>{
   // await deleteDoc(doc(dc,'users',id))
   // toast.success('user deleted!')
  //}
    return (
        <section>
        <Container>
          <Row>
            <Col lg='12'>
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>UserName</th>
                    <th>EMail</th>
                    {/*<th>Action</th>*/}
                  </tr>
                </thead>
                <tbody>
                    {
                        userData?.map(user=>(
                            <tr key={user.uid}>
                                <td><img src={user.photoURL} alt=""/></td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                {/*<td><button className='btn btn-danger' onClick={()=>{deleteUser(user.uid)}}>Delete</button></td>{" "}*/}
                            </tr>

                        ))
                    }
                </tbody>
                </table>
          </Col>
        </Row>
      </Container>
     </section>
  )
}

export default User