import { Title } from '../title';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CustomizeTheme = () => {

const colorVarible = 
`@primary-color: #1890ff; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.65); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 2px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers`;

    return (
        <div>
            <Title title="Customize Theme"></Title>
            <div className="mb-4">
                Allows you to customize our design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.
            </div>
            <div className="font-bold text-xl mb-4">
                Less variable
            </div>
            <div>
                We are using Less as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.
            </div>
            <div>
                There are some major variables below, all less variables could be found in Default Variables.
            </div>
            <SyntaxHighlighter language="css" style={atomDark} wrapLongLines>
                {colorVarible}
            </SyntaxHighlighter>
            <div className="mb-2">
            Please report an issue if the existing list of variables is not enough for you.
            </div>
            <div className="font-bold text-xl mb-4">
            How to do it
            </div>
            <div>
            We will use modifyVars provided by less.js to override the default values of the variables, You can use this example as a live playground. We now introduce some popular way to do it depends on different workflow.
            </div>
            <div className="font-bold text-xl mb-4">
            Customize in webpack
            </div>
            <div>
            We take a typical <span className="px-2 bg-gray-200 rounded">webpack.config.js</span> file as example to customize its less-loader options.
            </div>
        </div>
    )
}