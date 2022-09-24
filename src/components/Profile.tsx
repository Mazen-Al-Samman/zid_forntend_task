import {Col, Container, Image, Row} from "react-bootstrap";

const Profile = () => {
    return (
        <Container fluid className="p-0 m-0">
            <Row className="d-flex justify-content-center position-relative">
                <div className="bg-yellow cover-img position-absolute"></div>
                <div className="break-section"></div>
                <div className="user-main-info d-flex flex-column align-items-center mt-5 text-light">
                    <article className="text-center text-dark mb-3 bold letter-spacing-1 profile-name">
                        <p>Mhd Mazen Al - Samman</p>
                    </article>
                    <Image width={150} height={150} src="/icons/batmanAvatar.png"
                           className="fullRadius profile-logo"></Image>
                </div>
            </Row>

            <Row className="p-5 d-flex justify-content-center gap-3">
                <Col lg={3} className="bg-light p-3 rounded text-center">
                    <p className="profile-attribute bold letter-spacing-1">Gender</p>
                    <p className="profile-value text-purple bold letter-spacing-1">Male</p>
                </Col>

                <Col lg={3} className="bg-light p-3 rounded text-center">
                    <p className="profile-attribute bold letter-spacing-1">User Name</p>
                    <p className="profile-value text-purple bold letter-spacing-1">Batman</p>
                </Col>

                <Col lg={3} className="bg-light p-3 rounded text-center">
                    <p className="profile-attribute bold letter-spacing-1">Age</p>
                    <p className="profile-value text-purple bold letter-spacing-1">25</p>
                </Col>

                <Col lg={4} className="bg-light p-3 rounded text-center">
                    <p className="profile-attribute bold letter-spacing-1">Email</p>
                    <p className="profile-value text-purple bold letter-spacing-1">mazenalsmman@gmail.com</p>
                </Col>

                <Col lg={4} className="bg-light p-3 rounded text-center">
                    <p className="profile-attribute bold letter-spacing-1">Phone Number</p>
                    <p className="profile-value text-purple bold letter-spacing-1">+962786119086</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;