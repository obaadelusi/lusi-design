import { useEffect } from "react";

import PageHeading from "../components/PageHeading";
import { Button, FloatingActionButton, IconButton, LinkButton } from "../components/Buttons";
import { CaretUpFill, MicFill, Pencil, PencilSquare, PlusLg, Save, ShareFill, Trash3, TrashFill, Upload } from "react-bootstrap-icons";

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
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
            <Button color="info">Info</Button>
            <Button disabled={true}>Disabled</Button>
          </section>

          <section className="Page__section">
            <h2>Fill Buttons</h2>
            <p>Fill buttons are high-emphasis, distinguished by their use of elevation and fill.</p>
            <Button variant="fill">Default</Button>
            <Button variant="fill">Primary</Button>
            <Button color="secondary" variant="fill">
              Secondary
            </Button>
            <Button color="success" variant="fill">
              Success
            </Button>
            <Button color="warning" variant="fill">
              Warning
            </Button>
            <Button color="error" variant="fill">
              Error
            </Button>
            <Button color="info" variant="fill">
              Info
            </Button>
            <Button variant="fill" disabled={true}>
              Disabled
            </Button>
          </section>

          <section className="Page__section">
            <h2>Outlined Buttons</h2>
            <p>Outlined buttons are medium-emphasis buttons which contain actions that are not that important.</p>
            <Button variant="outline">Default</Button>
            <Button color="primary" variant="outline">
              Primary
            </Button>
            <Button color="secondary" variant="outline">
              Secondary
            </Button>
            <Button variant="outline" disabled={true}>
              Disabled
            </Button>
            <LinkButton to="#" variant="outline">
              Link
            </LinkButton>
          </section>

          <section className="Page__section">
            <h2>Text Buttons</h2>
            <p>Text buttons are typically used for less-pronounced actions in your app.</p>
            <Button variant="text">Default</Button>
            <Button variant="text">Primary</Button>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
            <Button variant="text" disabled={true}>
              Disabled
            </Button>
            <LinkButton path="#" variant="text">
              Link
            </LinkButton>
          </section>
        </div>

        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Button Sizes</h2>
            <p>Fancy larger or smaller buttons? Use the size property.</p>
            <div>
              <Button variant="text" size="small">
                Small
              </Button>
              <Button variant="text" size="medium">
                Medium
              </Button>
              <Button variant="text" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button variant="outline" size="small">
                Small
              </Button>
              <Button variant="outline" size="medium">
                Medium
              </Button>
              <Button variant="outline" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
            <div>
              <Button variant="fill" size="small">
                Small
              </Button>
              <Button variant="fill" size="medium">
                Medium
              </Button>
              <Button variant="fill" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button variant="fill" size="small">
                <PlusLg />
              </Button>
              <Button variant="fill" size="medium">
                <PlusLg />
              </Button>
              <Button variant="fill" size="large">
                <PlusLg />
              </Button>
            </div>
            <div>
              <Button variant="text" size="small" color="secondary">
                <TrashFill />
              </Button>
              <Button variant="text" size="medium" color="secondary">
                <TrashFill />
              </Button>
              <Button variant="text" size="large" color="secondary">
                <TrashFill />
              </Button>
            </div>
          </section>

          <section className="Page__section">
            <h2>Floating Action Buttons</h2>
            <p>A floating action button (FAB) performs the primary, or most common, action on a screen.</p>
            <FloatingActionButton variant="fill round">
              <PlusLg />
            </FloatingActionButton>
            <IconButton variant="fab" color="secondary" icon={<CaretUpFill />}>
              Navigate
            </IconButton>
            <FloatingActionButton variant="round">
              <Pencil />
            </FloatingActionButton>
            <FloatingActionButton variant="round" disabled={true}>
              <Trash3 />
            </FloatingActionButton>
            <FloatingActionButton variant="fill round">
              <ShareFill />
            </FloatingActionButton>
          </section>

          <section className="Page__section">
            <h2>Icon Buttons</h2>
            <p>Sometimes you might want to have icons for certain button to enhance the UX.</p>
            <IconButton>Default</IconButton>
            <IconButton variant="fill" icon={<PlusLg />}>
              Add
            </IconButton>
            <IconButton variant="outline" icon={<PencilSquare />}>
              Edit
            </IconButton>
            <IconButton variant="fill" icon={<Upload />}>
              Upload
            </IconButton>
            <IconButton variant="fill" disabled={true} icon={<MicFill />}>
              Talk
            </IconButton>
            <IconButton variant="fill" icon={<Save />}>
              Save
            </IconButton>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
