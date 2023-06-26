import { useEffect, useState } from "react";

import PageHeading from "../components/PageHeading";
import { Button } from "../components/Buttons";
import { Dialog } from "../components/Dialogs";

const DialogsPage = () => {
  const [showSimpleDialog, setShowSimpleDialog] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [showMaxWidthDialog, setShowMaxWidthDialog] = useState(false);
  const [showBgClickDialog, setShowBgClickDialog] = useState(false);
  const [dialogWidth, setDialogWidth] = useState("xs");
  const [selectedButton, setSelectedButton] = useState();

  useEffect(() => {
    document.title = "Dialogs — Lusi Design";
  }, []);

  function handleButtonClick(e) {
    setShowSimpleDialog(false);
    setSelectedButton(e.currentTarget.innerText);
  }

  function handleSelectChange(e) {
    e.stopPropagation();
    setDialogWidth(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }

  return (
    <div className="DialogsPage">
      <PageHeading title="Dialogs" />

      <div className="Page__container">
        <div className="Page__section-container">
          <div className="Page__section">
            <h2>Simple Dialogs</h2>
            <p>Simple dialogs can provide additional details or actions about a list item.</p>
            <Button onClick={() => setShowSimpleDialog((prev) => !prev)} variant="fill">
              Open simple dialog
            </Button>
            <small style={{ display: "block" }}>Selected: {selectedButton}</small>

            {showSimpleDialog && (
              <Dialog onBgClick={() => setShowSimpleDialog(false)} maxWidth="sm">
                <Dialog.Title>Select a button</Dialog.Title>
                <Dialog.Body></Dialog.Body>
                <Dialog.Buttons>
                  <Button onClick={handleButtonClick} color="secondary" variant="text">
                    Cancel
                  </Button>
                  <Button onClick={handleButtonClick} color="secondary" variant="text">
                    Edit privileges
                  </Button>
                  <Button onClick={handleButtonClick} variant="fill">
                    Make admin
                  </Button>
                </Dialog.Buttons>
              </Dialog>
            )}
          </div>

          <div className="Page__section">
            <h2>Alert Dialogs</h2>
            <p>Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.</p>
            <Button onClick={() => setShowAlertDialog((prev) => !prev)} variant="fill">
              Open alert dialog
            </Button>

            {showAlertDialog && (
              <Dialog onBgClick={() => setShowAlertDialog(false)}>
                <Dialog.Title>Make Lucy Grace admin?</Dialog.Title>
                <Dialog.Body>
                  <Dialog.BodyText>Lucy Grace will be able to view reports, manage properties, generate payroll, approve leave, and manage other admins.</Dialog.BodyText>
                </Dialog.Body>
                <Dialog.Buttons>
                  <Button onClick={() => setShowAlertDialog(false)} variant="text" color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={() => setShowAlertDialog(false)}>Make admin</Button>
                </Dialog.Buttons>
              </Dialog>
            )}
          </div>
        </div>

        <div className="Page__section-container">
          <div className="Page__section">
            <h2>Optional Sizes</h2>
            <p>
              You can set a dialog maximum width using the <code> maxWidth </code> prop
            </p>
            <Button onClick={() => setShowMaxWidthDialog((prev) => !prev)} variant="outline">
              Open max-width dialog
            </Button>
            {showMaxWidthDialog && (
              <Dialog onBgClick={() => setShowMaxWidthDialog(false)} maxWidth={dialogWidth}>
                <Dialog.Title>Optional Sizes</Dialog.Title>
                <Dialog.Body>
                  <Dialog.BodyText>You can set maxWidth using these values. Note: view on large screen to see effect.</Dialog.BodyText>
                  <div className="Form-group">
                    <label htmlFor="max-width" style={{ width: "80px", margin: "0 auto", color: "var(--grey-600)" }}>
                      maxWidth
                      <select name="maxWidth" id="max-width" defaultValue={dialogWidth} onChange={handleSelectChange}>
                        <option value="xs">xs</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                      </select>
                    </label>
                  </div>
                </Dialog.Body>
                <Dialog.Buttons>
                  <Button onClick={() => setShowMaxWidthDialog(false)} variant="text" color="primary">
                    Close
                  </Button>
                </Dialog.Buttons>
              </Dialog>
            )}
          </div>

          <div className="Page__section">
            <h2>No Background Click Dialogs</h2>
            <p>
              Unset the <code>onBgClick</code> prop to make sure a dialog does not close when the background is clicked.
            </p>
            <Button onClick={() => setShowBgClickDialog((prev) => !prev)} variant="fill">
              Open onBgClick dialog
            </Button>

            {showBgClickDialog && (
              <Dialog>
                <Dialog.Title>No Background Click</Dialog.Title>
                <Dialog.Body>
                  <Dialog.BodyText>Click the background to NOT close.</Dialog.BodyText>
                  <Dialog.BodyText>
                    To add background functionality set prop: <code>onBgClick={"{() => setShowState(p => !p)}"}</code>
                  </Dialog.BodyText>
                </Dialog.Body>
                <Dialog.Buttons>
                  <Button onClick={() => setShowBgClickDialog(false)}>Close</Button>
                </Dialog.Buttons>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogsPage;
