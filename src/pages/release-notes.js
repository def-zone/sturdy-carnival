import { Title } from '../components/title';

export const ReleaseNotes = (props) => {
    return (
        <div>
            <Title title="Release Notes" />
            <div className="text-xl font-bold mb-4">New + Improved</div>
            <div className="md:pl-10">
                <ul className="list-disc">
                    <li>All subscription error are now returned successfully from our payment processor</li>
                    <li>Comment email improvements</li>
                    <li>Lots of roadmap card improvements!</li>
                    <ul className="list-disc md:pl-10">
                        <li>Roadmap cards now show last updated time stamp</li>
                        <li>Roadmap cards can now be followed</li>
                        <li>Revision history now available</li>
                        <li>Roadmap cards now have owner assignments</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}