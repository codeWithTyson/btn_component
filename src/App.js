import React from "react";
import Button from "./Components/button/Button";

const App = () => {
  return (
    <div className="container">
      <h1>Buttons</h1>
      <div className="btn__component">
        <div>
          <span> {"<button />"} </span>
          <Button variant="default" />
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button hvrFocus />
        </div>
        <div>
          <span> {"<Button variant=”outline” />"} </span>
          <Button variant="outline" />
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button variant="outline" hvrFocus />
        </div>
        <div>
           <span> {"<Button variant=”text” />"} </span>
          <Button variant="text" />
        </div>
        <div>
          <span>&:hover, &:focus</span>
          <Button variant="text" hvrFocus />
        </div>
        <div>
           <span> {"<Button disableShadow />"} </span>
          <Button disableShadow />
        </div>
        <div></div>
        <div>
          <span> {"<Button disabled />"} </span>
          <Button disabled color="primary" />
        </div>
        <div>
          <span> {`<Button type="text" disabled />`} </span>
          <Button variant="text" disabled />
        </div>
        <div>
          <span> {`<Button startIcon=”fas fa-shopping-cart” />`} </span>
          <Button startIcon="fas fa-shopping-cart" color="danger" />
        </div>
        <div>
          <span> {`<Button endIcon=”fas fa-shopping-cart” />`} </span>
            <Button endIcon="fas fa-shopping-cart" color="warning" />
        </div>
      </div>
    </div>
  );
};

export default App;
