import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTasks } from 'react-icons/fa';

function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="display-4"><FaTasks className="icon" />Welcome to Task Manager</h1>
                    <p className="lead">Manage your tasks efficiently and effectively with our intuitive app.</p>
                    <div className="button-group">
                        <Link to="/login">
                            <Button className="primary">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="secondary">Signup</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;

















// import '../css/home.css';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FaTasks } from 'react-icons/fa';

// function Home() {
//     return (
//         <Container className="mt-5">
//             <Row>
//                 <Col>
//                     <h1 className="display-4"><FaTasks className="icon" />Welcome to Task Manager</h1>
//                     <p className="lead">Manage your tasks efficiently and effectively with our intuitive app.</p>
//                     <div className="button-group">
//                         <Link to="/login">
//                             <Button variant="primary">Login</Button>
//                         </Link>
//                         <Link to="/signup">
//                             <Button variant="secondary">Signup</Button>
//                         </Link>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Home;
