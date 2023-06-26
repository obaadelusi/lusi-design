import { useState, useEffect } from "react";

import PageHeading from "../components/PageHeading";
import { BadgeContainer, Badge } from "../components/Badges";
import { Button } from "../components/Buttons";
import { Envelope, EnvelopeFill } from "react-bootstrap-icons";
import { ToggleSwitch } from "../components/FormControls";

const BadgesPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    document.title = "Badges — Lusi Design";
  }, []);

  function handleToggle(input) {
    setIsChecked(!input.checked);
  }

  return (
    <div className="CardsPage">
      <PageHeading title="Badges" />
      <div className="Page__container">
        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Icon badges</h2>
            <p>Examples of badges on icons containing text, using primary and secondary colors.</p>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="37" variant="primary" />
            </BadgeContainer>
            <BadgeContainer>
              <Envelope size={24} />
              <Badge content="7" variant="primary" />
            </BadgeContainer>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="37" variant="secondary" />
            </BadgeContainer>
            <BadgeContainer>
              <Envelope size={24} />
              <Badge content="7" variant="secondary" />
            </BadgeContainer>
          </section>

          <section className="Page__section">
            <h2>Coloured icon badges</h2>
            <p>Examples of badges on icons containing text, using the available theme palette colors.</p>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="7" variant="primary" />
            </BadgeContainer>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="7" variant="secondary" />
            </BadgeContainer>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="37" variant="success" />
            </BadgeContainer>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="7" variant="warning" />
            </BadgeContainer>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="7" variant="error" />
            </BadgeContainer>
            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="7" variant="info" />
            </BadgeContainer>
          </section>
        </div>

        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Button badges</h2>
            <p>Examples of badges on buttons containing text, using primary and secondary colors.</p>

            <BadgeContainer>
              <Badge content="7" variant="error" />
              <Button variant="fill">Button 1</Button>
            </BadgeContainer>

            <BadgeContainer>
              <Badge content="137" variant="error" />
              <Button variant="fill">Button 2</Button>
            </BadgeContainer>
          </section>

          <section className="Page__section">
            <h2>Button visibility</h2>
            <p>The visibility of badges can be controlled using the invisible property.</p>

            <BadgeContainer>
              <EnvelopeFill size={24} />
              <Badge content="7" variant="error" invisible={isChecked} />
            </BadgeContainer>
            <ToggleSwitch defaultCheck={true} onToggle={handleToggle}>
              Show Badge
            </ToggleSwitch>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;
