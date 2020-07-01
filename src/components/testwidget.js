import { React, Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CustomQuestionType extends Component {
    render() {
        return  <TextField label="fff" variant="outlined" id="material-ui-textfield-01" />;
    }
}

function init(Survey, $) {
    $ = $ || window.$;
    var testWidget = {
        name: "testwidget",
        title: "Test Widget",
        isDefaultRender: true,
        widgetIsLoaded: function () {
            return typeof $ == "function";
        },
        isFit: function (question) {
            return question.getType() == "text";
        },
        isDefaultRender: true,
        afterRender: () => <CustomQuestionType />,
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(testWidget);
}

// if (typeof Survey !== "undefined") {
//     init(Survey, window.$);
// }

export default init;