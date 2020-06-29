import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

import * as SurveyKo from "survey-knockout";
import * as SurveyJSCreator from "survey-creator";
import "survey-creator/survey-creator.css";
import CustomQuestionType from "./components/CustomQuestionType";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

//import "icheck/skins/square/blue.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import * as widgets from "surveyjs-widgets";

SurveyJSCreator.StylesManager.applyTheme("default");

// //widgets.icheck(SurveyKo, $);
// widgets.prettycheckbox(SurveyKo);
// widgets.select2(SurveyKo, $);
// widgets.inputmask(SurveyKo);
// widgets.jquerybarrating(SurveyKo, $);
// widgets.jqueryuidatepicker(SurveyKo, $);
// widgets.nouislider(SurveyKo);
// widgets.select2tagbox(SurveyKo, $);
// //widgets.signaturepad(SurveyKo);
// widgets.sortablejs(SurveyKo);
// widgets.ckeditor(SurveyKo);
// widgets.autocomplete(SurveyKo, $);
// widgets.bootstrapslider(SurveyKo);
// CustomQuestionType(SurveyKo);

SurveyKo.CustomWidgetCollection.Instance.addCustomWidget({
  name: 'material-ui-textfield',
  isFit: function (question) {
    return question.getType() == "text";
  },
  render: question => {
    return <TextField variant="outlined" id="material-ui-textfield-01" />
  }
})

class SurveyCreator extends Component {
  surveyCreator;
  componentDidMount() {
    // export const CustomQuestionType = {
    //   name: "cdp",
    //   render: () => <CustomQuestionType />,
    //   isFit: function(question) {
    //       return question.getType() === 'text';
    //   }
    // };


    let options = { showEmbededSurveyTab: true };
    this.surveyCreator = new SurveyJSCreator.SurveyCreator(
      null,
      options
    );
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
    this.surveyCreator.tabs().push({
      name: "survey-templates",
      title: "My Custom Tab",
      template: "custom-tab-survey-templates",
      action: () => {
        this.surveyCreator.makeNewViewActive("survey-templates");
      },
      data: {},
    });
    this.surveyCreator.render("surveyCreatorContainer");
  }
  render() {
    return (<div>
      <script type="text/html" id="custom-tab-survey-templates">
        { `<div id="test">TEST</div>` }
      </script>

      <div id="surveyCreatorContainer" />
    </div>);
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.surveyCreator.text));
  };
}

export default SurveyCreator;
