import { useEffect } from "react";

import PageHeading from "../components/PageHeading";
import { Button, FloatingActionButton, IconButton, LinkButton } from "../components/Buttons";
import { CaretUp, CaretUpFill, MicFill, Pencil, PencilSquare, PlusLg, Save, ShareFill, Trash3, TrashFill, Upload } from "react-bootstrap-icons";

const ButtonsPage = () => {
  useEffect(() => {
    document.title = "Buttons — Lusi Design";
  }, []);

  return (
    <div id="buttonsPage" className="ButtonsPage">
      <PageHeading title="Buttons" />
      <div className="Page__container">
        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Simple Buttons</h2>
            <p>Simple buttons are low-emphasis, distinguished by their light fill.</p>
            <Button>Default</Button>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
            <Button variant="info">Info</Button>
            <Button isDisabled={true}>Disabled</Button>
          </section>

          <section className="Page__section">
            <h2>Fill Buttons</h2>
            <p>Fill buttons are high-emphasis, distinguished by their use of elevation and fill.</p>
            <Button style="fill">Default</Button>
            <Button style="fill">Primary</Button>
            <Button variant="secondary" style="fill">
              Secondary
            </Button>
            <Button variant="success" style="fill">
              Success
            </Button>
            <Button variant="warning" style="fill">
              Warning
            </Button>
            <Button variant="error" style="fill">
              Error
            </Button>
            <Button variant="info" style="fill">
              Info
            </Button>
            <Button style="fill" isDisabled={true}>
              Disabled
            </Button>
          </section>

          <section className="Page__section">
            <h2>Outlined Buttons</h2>
            <p>Outlined buttons are medium-emphasis buttons which contain actions that are not that important.</p>
            <Button style="outline">Default</Button>
            <Button variant="primary" style="outline">
              Primary
            </Button>
            <Button variant="secondary" style="outline">
              Secondary
            </Button>
            <Button style="outline" isDisabled={true}>
              Disabled
            </Button>
            <LinkButton path="#" style="outline">
              Link
            </LinkButton>
          </section>

          <section className="Page__section">
            <h2>Text Buttons</h2>
            <p>Text buttons are typically used for less-pronounced actions in your app.</p>
            <Button style="text">Default</Button>
            <Button style="text">Primary</Button>
            <Button style="text" variant="secondary">
              Secondary
            </Button>
            <Button style="text" isDisabled={true}>
              Disabled
            </Button>
            <LinkButton path="#" style="text">
              Link
            </LinkButton>
          </section>
        </div>

        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Button Sizes</h2>
            <p>Fancy larger or smaller buttons? Use the size property.</p>
            <div>
              <Button style="text" size="small">
                Small
              </Button>
              <Button style="text" size="medium">
                Medium
              </Button>
              <Button style="text" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button style="outline" size="small">
                Small
              </Button>
              <Button style="outline" size="medium">
                Medium
              </Button>
              <Button style="outline" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
            <div>
              <Button style="fill" size="small">
                Small
              </Button>
              <Button style="fill" size="medium">
                Medium
              </Button>
              <Button style="fill" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button style="fill" size="small">
                <PlusLg />
              </Button>
              <Button style="fill" size="medium">
                <PlusLg />
              </Button>
              <Button style="fill" size="large">
                <PlusLg />
              </Button>
            </div>
            <div>
              <Button style="text" size="small" variant="secondary">
                <TrashFill />
              </Button>
              <Button style="text" size="medium" variant="secondary">
                <TrashFill />
              </Button>
              <Button style="text" size="large" variant="secondary">
                <TrashFill />
              </Button>
            </div>
          </section>

          <section className="Page__section">
            <h2>Floating Action Buttons</h2>
            <p>A floating action button (FAB) performs the primary, or most common, action on a screen.</p>
            <FloatingActionButton style="fill round">
              <PlusLg />
            </FloatingActionButton>
            <IconButton style="fab" variant="secondary" icon={<CaretUpFill />}>
              Navigate
            </IconButton>
            <FloatingActionButton style="round">
              <Pencil />
            </FloatingActionButton>
            <FloatingActionButton style="round" isDisabled={true}>
              <Trash3 />
            </FloatingActionButton>
            <FloatingActionButton style="fill round">
              <ShareFill />
            </FloatingActionButton>
          </section>

          <section className="Page__section">
            <h2>Icon Buttons</h2>
            <p>Sometimes you might want to have icons for certain button to enhance the UX.</p>
            <IconButton>Default</IconButton>
            <IconButton style="fill" icon={<PlusLg />}>
              Add
            </IconButton>
            <IconButton style="outline" icon={<PencilSquare />}>
              Edit
            </IconButton>
            <IconButton style="fill" icon={<Upload />}>
              Upload
            </IconButton>
            <IconButton style="fill" isDisabled={true} icon={<MicFill />}>
              Talk
            </IconButton>
            <IconButton style="fill" icon={<Save />}>
              Save
            </IconButton>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
