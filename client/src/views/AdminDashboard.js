
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "../components/Navbars/Header";
import NewUserForm from "../components/Forms/NewUserForm";
import CreateListing from "../components/Forms/CreateListing";
import PHCreateListing from "../components/PLACEHOLDERS/PHCreateListing";

//IMPORT: Reactstrap
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Table,
    Placeholder,
} from "reactstrap";

function AdminDashboard(props) {

    return (
        <>

            <Container className="adminDashboardHolder p-0 text-center">
                

                <Row>
                    <Col className="py-3">
                        <h1>Admin Dashboard</h1>
                    </Col>
                </Row>

                <Row className="p-3">
                    <Col xs="12" lg="6" className="mx-auto my-2">
                        <NewUserForm />
                    </Col>
                    <Col xs="12" lg="6" className="mx-auto my-2">
                        <PHCreateListing />
                    </Col>
                </Row>
                <Row className="px-3">
                    <Col xs="12" lg="6">
                        <Placeholder animation="glow">

                        </Placeholder>
                    </Col>
                    <Col xs="12" lg="6">
                    </Col>
                </Row>






            </Container>

        </>
    );
}

export default AdminDashboard;
