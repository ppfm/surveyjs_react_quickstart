import { React, Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CustomQuestionType extends Component {
    render() {
        return  <TextField label="fff" variant="outlined" id="material-ui-textfield-01" />;
    }
}

// function CustomQuestionType(Survey) {
//     Survey.CustomWidgetCollection.Instance.addCustomWidget({
//         name: 'material-ui-textfield',
//         isFit: function (question) {
//             return question.getType() == "text";
//           },
//         render: question => {
//             return <TextField label={ question } variant="outlined" id="material-ui-textfield-01" />
//         }
//     })
// }

// if (typeof Survey !== "undefined") {
//     CustomQuestionType(Survey);
// }

// export default CustomQuestionType;