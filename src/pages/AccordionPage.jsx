import { useEffect } from "react";

import PageHeading from "../components/PageHeading";
import Accordion from "../components/Accordion";
import faqData from "../data/data.json";

const AccordionPage = () => {
  useEffect(() => {
    document.title = "Accordion — Lusi Design";
  }, []);
  return (
    <div id="accordionPage" className="AccordionPage">
      <PageHeading title="Accordion" />

      <div className="Page__container">
        <div className="Page__section-container">
          <div className="Page__section">
            <h2>Simple expansion panel</h2>
            <p>A lightweight container that may either stand alone or be connected to a larger surface, such as a card.</p>
            <Accordion>
              <Accordion.Title>Accordion title</Accordion.Title>
              <Accordion.Frame>
                {faqData.map((item) => (
                  <Accordion.Item key={item.id}>
                    <Accordion.ItemHeader>{item.header}</Accordion.ItemHeader>
                    <Accordion.ItemBody>{item.body}</Accordion.ItemBody>
                  </Accordion.Item>
                ))}
              </Accordion.Frame>
            </Accordion>
          </div>
        </div>

        <div className="Page__section-container">
          <div className="Page__section">
            <h2>Controlled expansion accordion</h2>
            <p>Extend the default panel behavior to create an accordion with the Accordion component.</p>
            <Accordion>
              <Accordion.Title>Frequently Asked Questions</Accordion.Title>
              <Accordion.Frame>
                {faqData.map((item) => (
                  <Accordion.Item key={item.id}>
                    <Accordion.ItemHeader>{item.header}</Accordion.ItemHeader>
                    <Accordion.ItemBody>{item.body}</Accordion.ItemBody>
                  </Accordion.Item>
                ))}
              </Accordion.Frame>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
