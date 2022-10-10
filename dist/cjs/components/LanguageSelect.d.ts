import PropTypes from "prop-types";
interface languageSelectProps {
    parentCallback(res: object): any;
    language: {
        value: string;
        label: string;
    };
}
declare const LanguageSelect: {
    ({ parentCallback, language }: languageSelectProps): JSX.Element;
    propTypes: {
        parentCallback: PropTypes.Requireable<(...args: any[]) => any>;
        language: PropTypes.Requireable<object>;
    };
    defaultProps: {};
};
export default LanguageSelect;
