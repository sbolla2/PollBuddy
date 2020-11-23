import React, {Component} from "react";
import {MDBContainer} from "mdbreact";
import "./questionEditor.scss";

export default class QuestionEditor extends Component {

  render() {
    return (
      <MDBContainer className="question-editor-container">
        <MDBContainer className="question-editor-field-group">
          <label htmlFor={"questionText"}>Question Text:</label>
          <input
            name="questionText"
            id="questionText"
            className="question-text-box textBox"
          />
        </MDBContainer>
        <MDBContainer className="question-editor-field-group">
          <label>Image (optional):</label>
          <input type="file" name="file" id="file" className="input-file"/>
          <label htmlFor="file">Browse</label>
        </MDBContainer>
        {/*question text component here*/}
        <MDBContainer className={"question-data-container"}>
          <span className="question-editor-field-group">
            <span>Question Points:</span>
            <input type="number" value={1} className="input-number"/>
          </span>
            <span className="question-editor-field-group">
            <span>Max Choices:</span>
            <input type="number" value={1} className="input-number"/>
          </span>
            <span className="question-editor-field-group">
            <span>Time limit:</span>
            <input type="time" className="input-time"/>
          </span>
        </MDBContainer>
      </MDBContainer>
    );
  }
}
