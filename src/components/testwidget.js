import { React, Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CustomQuestionType extends Component {
    render() {
        return <TextField label="fff" variant="outlined" id="material-ui-textfield-01" />;
    }
}

function init(Survey) {
    var testWidget = {
        name: "testwidget",
        title: "Test Widget",
        category: "customtype",

        isDefaultRender: true,
        widgetIsLoaded: function () {
            return typeof $ == "function"; 
        },
        isFit: function (question) {
            return question.getType() === "testwidget";
        },
        htmlTemplate: () => <CustomQuestionType />,
        
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(testWidget, "customtype");

    // if (typeof Survey !== "undefined") {
    //     init(Survey);
    // }

}



export default init;