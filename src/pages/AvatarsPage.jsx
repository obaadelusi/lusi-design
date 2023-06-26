import React from "react";

import PageHeading from "../components/PageHeading";
import Avatar from "../components/Avatar";
import profPicture from "../assets/profPicture.png";
import { ClipboardFill, FolderFill, Search } from "react-bootstrap-icons";

const AvatarsPage = () => {
  React.useEffect(() => {
    document.title = "Avatars — Lusi Design";
  }, []);
  return (
    <div className="AvatarsPage">
      <PageHeading title="Avatars" />
      <div className="Page__container">
        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Image Avatars</h2>
            <p>Creat image avatars by passing standard img attributes - src or srcSet - as props into the component.</p>
            <Avatar src={profPicture} />
            <Avatar src={profPicture} size={52} />
          </section>

          <section className="Page__section">
            <h2>Letter Avatars</h2>
            <p>Avatars containing simple characters can be created by passing your string as children.</p>
            <Avatar>B</Avatar>
            <Avatar bgColor="orangered">OA</Avatar>
            <Avatar bgColor="#663399">LG</Avatar>
          </section>
        </div>

        <div className="Page__section-container">
          <section className="Page__section">
            <h2>Icon Avatars</h2>
            <p>Icon avatars are created by passing an icon as children.</p>
            <Avatar>
              <FolderFill />
            </Avatar>
            <Avatar bgColor="#EC0B43">
              <Search />
            </Avatar>
            <Avatar bgColor="#60993E">
              <ClipboardFill />
            </Avatar>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvatarsPage;
