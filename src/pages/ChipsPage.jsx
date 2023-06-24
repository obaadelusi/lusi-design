import { useEffect, useState } from "react";

import PageHeading from "../components/PageHeading";
import Chip from "../components/Chip";
import { CheckLg, PersonCircle, PersonDashFill, PersonExclamation, PersonFill, XLg } from "react-bootstrap-icons";

const ChipsPage = () => {
  const [chipData, setChipData] = useState([]);
  useEffect(() => {
    document.title = "Chips — Lusi Design";
    const languages = ["English", "Chinese", "⚡ French", "Vietnamese", "Yoruba"];
    setChipData(languages);
  }, []);

  function handleClick(e) {
    e.stopPropagation();

    let alertText = `You clicked the ${e.currentTarget.ariaLabel}.`;
    alert(alertText);
  }

  function deleteChip(e) {
    e.stopPropagation();
    if (e.currentTarget.parentElement.innerText == "⚡ French") {
      alert("Why would you want to delete French? 😉");
    } else {
      e.currentTarget.parentElement.style.display = "none";
    }
  }

  return (
    <div className="ChipsPage">
      <PageHeading title="Chips" />
      <div className="Page__container">
        <div className="Page__section-container">
          <div className="Page__section">
            <h2>Default chips</h2>
            <p>Examples of Chips, using an image Avatar, SVG Icon Avatar, "Letter" and (string) Avatar.</p>
            <Chip>
              <Chip.Text>Basic Chip</Chip.Text>
            </Chip>
            <Chip clickable={true} onClick={handleClick}>
              <Chip.Icon>
                <PersonCircle />
              </Chip.Icon>
              <Chip.Text>Clickable Chip</Chip.Text>
            </Chip>
            <Chip clickable={true} onClick={handleClick}>
              <Chip.Icon>OA</Chip.Icon>
              <Chip.Text>Clickable Chip</Chip.Text>
            </Chip>
            <Chip>
              <Chip.Icon>
                <PersonFill />
              </Chip.Icon>
              <Chip.Text>Deletable Chip</Chip.Text>
              <Chip.Button onClick={handleClick}>
                <XLg />
              </Chip.Button>
            </Chip>
            <Chip>
              <a href="#chip">
                <Chip.Text>Clickable Link Chip</Chip.Text>
              </a>
            </Chip>
            <Chip style="fill" color="primary" clickable={true} onClick={handleClick}>
              <Chip.Icon>PB</Chip.Icon>
              <Chip.Text>Clickable Primary Chip</Chip.Text>
            </Chip>
            <Chip style="fill" color="primary">
              <Chip.Icon>
                <PersonDashFill />
              </Chip.Icon>
              <Chip.Text>Deletable Primary Chip</Chip.Text>
              <Chip.Button onClick={handleClick}>
                <XLg />
              </Chip.Button>
            </Chip>
            <Chip style="fill" color="secondary" clickable={true} onClick={handleClick}>
              <Chip.Icon>PB</Chip.Icon>
              <Chip.Text>Clickable Secondary Chip</Chip.Text>
            </Chip>
            <Chip style="fill" color="secondary">
              <Chip.Icon>
                <PersonDashFill />
              </Chip.Icon>
              <Chip.Text>Deletable Secondary Chip</Chip.Text>
              <Chip.Button onClick={handleClick}>
                <XLg />
              </Chip.Button>
            </Chip>
          </div>

          <div className="Page__section">
            <h2>Chip array</h2>
            <p>An example of rendering multiple Chips from an array of values.</p>
            {chipData.map((item, key) => (
              <Chip key={key}>
                <Chip.Text>{item}</Chip.Text>
                <Chip.Button onClick={deleteChip}>
                  <XLg />
                </Chip.Button>
              </Chip>
            ))}
          </div>
        </div>

        <div className="Page__section-container">
          <div className="Page__section">
            <h2>Coloured chips</h2>
            <p>
              You can use the <code>color</code> prop to define a color from theme palette.
            </p>
            <Chip>Default</Chip>
            <Chip style="fill" color="primary">
              <Chip.Text>Primary</Chip.Text>
            </Chip>
            <Chip style="fill" color="secondary">
              <Chip.Text>Secondary</Chip.Text>
            </Chip>
            <Chip style="fill" color="success">
              <Chip.Text>Success</Chip.Text>
            </Chip>
            <Chip style="fill" color="warning">
              <Chip.Text>Warning</Chip.Text>
            </Chip>
            <Chip style="fill" color="error">
              <Chip.Text>Error</Chip.Text>
            </Chip>
            <Chip style="fill" color="info">
              <Chip.Text>Info</Chip.Text>
            </Chip>

            <Chip style="outline">
              <Chip.Text>Default</Chip.Text>
            </Chip>
            <Chip style="outline" color="primary">
              <Chip.Text>Primary</Chip.Text>
            </Chip>
            <Chip style="outline" color="secondary">
              <Chip.Text>Secondary</Chip.Text>
            </Chip>
            <Chip style="outline" color="success">
              <Chip.Text>Success</Chip.Text>
            </Chip>
            <Chip style="outline" color="warning">
              <Chip.Text>Warning</Chip.Text>
            </Chip>
            <Chip style="outline" color="error">
              <Chip.Text>Error</Chip.Text>
            </Chip>
            <Chip style="outline" color="info">
              <Chip.Text>Info</Chip.Text>
            </Chip>
          </div>
          <div className="Page__section">
            <h2>Outlined chips</h2>
            <p>Outlined chips offer an alternative style.</p>

            <Chip>
              <Chip.Text>Basic Chip</Chip.Text>
            </Chip>
            <Chip style="outline" clickable={true} onClick={handleClick}>
              <Chip.Icon>
                <PersonCircle />
              </Chip.Icon>
              <Chip.Text>Clickable Chip</Chip.Text>
            </Chip>
            <Chip style="outline" clickable={true} onClick={handleClick}>
              <Chip.Icon>OA</Chip.Icon>
              <Chip.Text>Clickable Chip</Chip.Text>
            </Chip>
            <Chip style="outline">
              <Chip.Icon>
                <PersonFill />
              </Chip.Icon>
              <Chip.Text>Deletable Chip</Chip.Text>
              <Chip.Button onClick={handleClick}>
                <XLg />
              </Chip.Button>
            </Chip>
            <Chip style="outline">
              <a href="#chip">
                <Chip.Text>Clickable Link Chip</Chip.Text>
              </a>
            </Chip>
            <Chip style="outline" color="primary" clickable={true} onClick={handleClick}>
              <Chip.Icon>
                <CheckLg />
              </Chip.Icon>
              <Chip.Text>Clickable Primary Chip</Chip.Text>
            </Chip>
            <Chip style="outline" color="primary">
              <Chip.Icon>
                <PersonDashFill />
              </Chip.Icon>
              <Chip.Text>Deletable Primary Chip</Chip.Text>
              <Chip.Button onClick={handleClick}>
                <XLg />
              </Chip.Button>
            </Chip>
            <Chip style="outline" color="secondary" clickable={true} onClick={handleClick}>
              <Chip.Icon>
                <CheckLg />
              </Chip.Icon>
              <Chip.Text>Clickable Secondary Chip</Chip.Text>
            </Chip>
            <Chip style="outline" color="secondary">
              <Chip.Icon>
                <PersonDashFill />
              </Chip.Icon>
              <Chip.Text>Deletable Secondary Chip</Chip.Text>
              <Chip.Button onClick={handleClick}>
                <XLg />
              </Chip.Button>
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipsPage;
