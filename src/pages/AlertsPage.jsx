import { useEffect } from "react";

import PageHeading from "../components/PageHeading";
import Alert from "../components/Alerts";

const AlertsPage = () => {
  useEffect(() => {
    document.title = "Alerts — Lusi Design";
  }, []);

  return (
    <div id="alertsPage" className="AlertsPage">
      <PageHeading title="Alerts" />
      <div className="Page__container">
        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Simple alerts</h2>
            <p>The alerts offers four severity levels that set a distinctive icon and color.</p>
            <Alert variant="error">This is an error alert &mdash; check it out!</Alert>
            <Alert variant="warning">This is a warning alert &mdash; check it out!</Alert>
            <Alert variant="info">This is an info alert &mdash; check it out!</Alert>
            <Alert variant="success">This is a success alert &mdash; check it out!</Alert>
          </section>

          <section className="Page__section">
            <h2>Outlined alerts</h2>
            <p>Two additional variants are available – outlined and filled.</p>
            <Alert variant="error" style="outline">
              This is an error alert &mdash; check it out!
            </Alert>
            <Alert variant="warning" style="outline">
              This is a warning alert &mdash; check it out!
            </Alert>
            <Alert variant="info" style="outline">
              This is an info alert &mdash; check it out!
            </Alert>
            <Alert variant="success" style="outline">
              This is a success alert &mdash; check it out!
            </Alert>
          </section>

          <section className="Page__section">
            <h2>Filled alerts</h2>
            <p>Two additional variants are available – outlined and filled.</p>
            <Alert variant="error" style="fill">
              This is an error alert &mdash; check it out!
            </Alert>
            <Alert variant="warning" style="fill">
              This is a warning alert &mdash; check it out!
            </Alert>
            <Alert variant="info" style="fill">
              This is an info alert &mdash; check it out!
            </Alert>
            <Alert variant="success" style="fill">
              This is a success alert &mdash; check it out!
            </Alert>
          </section>
        </div>

        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Advanced alerts</h2>
            <p>You can use the AlertTitle component to display a formatted title above the content.</p>
            <Alert variant="error">
              <Alert.Title>Error</Alert.Title>
              This is an error alert &mdash; check it out!
            </Alert>
            <Alert variant="warning">
              <Alert.Title>Warning</Alert.Title>
              This is a warning alert &mdash; check it out!
            </Alert>
            <Alert variant="info">
              <Alert.Title>Info</Alert.Title>
              This is an info alert &mdash; check it out!
            </Alert>
            <Alert variant="success">
              <Alert.Title>Success</Alert.Title>
              This is a success alert &mdash; check it out!
            </Alert>
          </section>

          <section className="Page__section">
            <h2>Actions</h2>
            <p>An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert.</p>
            <Alert variant="success" action="close">
              This is an success alert &mdash; check it out!
            </Alert>
            <Alert variant="success" action="undo">
              This is a success alert &mdash; check it out!
            </Alert>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
