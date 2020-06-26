import React from "react";
import * as Survey from "survey-react";
import TextField from '@material-ui/core/TextField';

export class MyQuestionModel extends Survey.Question {
  getType() {
    return "myquestion";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class MyQuestion extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    return (
      <TextField variant="outlined" id="standard-basic" label="Standard" defaultValue={this.question.text} />
    );
  }
}

Survey.Serializer.addClass(
  "myquestion",
  [
    { name: "text" }
  ],
  function() {
    return new MyQuestionModel("");
  },
  "question"
);


Survey.ReactQuestionFactory.Instance.registerQuestion("myquestion", props => {
  return React.createElement(MyQuestion, props);
});