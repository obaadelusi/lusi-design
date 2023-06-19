import { useEffect } from "react";

import { Card, CardImage, CardBody } from "../components/Cards";
import { Button } from "../components/Buttons";
import PageHeading from "../components/PageHeading";

const CardsPage = () => {
  useEffect(() => {
    document.title = "Cards — Lusi Design";
  }, []);

  return (
    <div className="CardsPage">
      <PageHeading title="Cards" />
      <div className="Page__container">
        <div className="Page__section-container">
          <Card>
            <CardImage src="https://images.unsplash.com/photo-1615841192203-84f7b2899c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <CardBody>
              <h2>Languages</h2>
              <p>
                Have you ever heard a language that sounded like a song? <br />
                There are many tonal languages in the world. Yoruba, a West African language, is a language with three tones. Think of the music tonic sofas: do re mi.
              </p>
              <Button style="fill">Learn more</Button>
              <Button style="text">Share</Button>
            </CardBody>
          </Card>
        </div>
        <div className="Page__section-container">
          <Card>
            <CardBody>
              <span>Yoruba word of the day</span>
              <h2>a•lá•gbá•ra</h2>
              <span>noun</span>
              <p>powerful, strong, potent, intense.</p>
              <p>
                Literal translation: <strong>One who has power.</strong>
              </p>
              <p>
                "alágbára ni Ọba." <em>The king is powerful.</em>
              </p>
              <Button style="text">Share</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
