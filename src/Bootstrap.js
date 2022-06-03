import { Tab } from "bootstrap";
import { Button, Tabs } from "react-bootstrap";

export default function Bootstrap(){
return (
    <div>
        <h3>
            Bootstrap Components
        </h3>
        <Button>Buton</Button>
        <Button variant="success">Buton</Button>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <div>Home</div>
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <div>Profile</div>
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
  <div>Contact</div>
  </Tab>
</Tabs>
    </div>
)
}
