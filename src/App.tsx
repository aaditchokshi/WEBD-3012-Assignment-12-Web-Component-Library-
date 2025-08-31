import React, { useState } from "react";
import Button from './components/Button/Button';
import Label from "./components/Label/Label";
import Text from "./components/Text/Text";
import { Table } from "./components/Table/Table";
import Dropdown from "./components/Dropdown/Dropdown";
import RadioButton from "./components/RadioButton/RadioButton";
import HeroImage from "./components/HeroImage/HeroImage";
import Card from "./components/Card/Card";

const App: React.FC = () => {
  const [selectedDropdown, setSelectedDropdown] = useState("Option 1");
  const [selectedRadio, setSelectedRadio] = useState("Yes");

  return (
    <div style={{ padding: "2rem", fontFamily: "Verdana, sans-serif" }}>
      <h1>UI Garden - Component Library</h1>
      <p>Below are some of the components from my library:</p>

      {/* Button Demo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Button</h2>
        <Button
          text="Click Me"
          backgroundColor="green"
          onClick={() => alert("Button clicked!")}
        />
        <Button
          text="Disabled Button"
          disabled
          backgroundColor="gray"
        />
      </section>

      {/* Label + Text Demo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Label & Text</h2>
        <Label text="Name:" />
        <Text placeholder="Enter your name" />
      </section>

      {/* Table Demo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Table</h2>
        <Table
          headers={["Name", "Age", "Role"]}
          rows={[
            ["Alice", "25", "Designer"],
            ["Bob", "30", "Developer"],
            ["Charlie", "28", "Manager"],
          ]}
        />
      </section>

      {/* Dropdown Demo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Dropdown</h2>
        <Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
          selected={selectedDropdown}
          onChange={setSelectedDropdown}
        />
        <Dropdown
          options={["Disabled 1", "Disabled 2"]}
          selected="Disabled 1"
          disabled
        />
      </section>

      {/* RadioButton Demo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Radio Buttons</h2>
        <RadioButton
          label="Yes"
          name="example"
          value="Yes"
          checked={selectedRadio === "Yes"}
          onChange={setSelectedRadio}
        />
        <RadioButton
          label="No"
          name="example"
          value="No"
          checked={selectedRadio === "No"}
          onChange={setSelectedRadio}
        />
        <RadioButton
          label="Disabled Option"
          name="example2"
          value="Disabled"
          disabled
        />
      </section>

      {/* Hero Image Demo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Hero Image</h2>
        <HeroImage
          image="https://via.placeholder.com/600x200"
          title="Hero Title"
          subtitle="Hero subtitle goes here"
        />
        <HeroImage
          image="https://via.placeholder.com/600x200"
          title="Disabled Hero"
          subtitle="This hero is disabled"
          disabled
        />
      </section>

      {/* Card Demo */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Card</h2>
        <Card
          title="Card Title"
          description="This is some card content."
          image="https://via.placeholder.com/300x180"
          backgroundColor="#fff"
        />
        <Card
          title="Disabled Card"
          description="This card is disabled."
          image="https://via.placeholder.com/300x180"
          backgroundColor="#eee"
          disabled
        />
      </section>
    </div>
  );
};

export default App;
