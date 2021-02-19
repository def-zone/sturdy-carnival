import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Title } from '../components/title';

export const GettingStarted = () => {

const codeString = `"ConnectionStrings": {
    "DefaultConnection": "Server=.\\SQL;Database=CrispyDb;Trusted_Connection=True;MultipleActiveResultSets=true"
}`;

    return (
        <div>
            <Title title="Getting Started" />
            <div className="text-xl font-bold mb-4">Start a New Project</div>
            <div className="mb-6">
                Once authenticated, the daemon sends hertbeat messages to the service and receives instructions from the services as responses to the hearbeat messages. If an attack has been scheduled, the daemon receives the instructions for executing that attack. Each instruction action is pre-defined within the daemon.
            </div>
            <SyntaxHighlighter language="json" style={atomDark} wrapLongLines>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}