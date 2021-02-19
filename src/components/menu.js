import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <div>
            <Item name="introduction" />
            <Item name="getting started" />
            <Item name="deployment" />
            <Item name="integrations" />
            <Item name="use cases" />
            <Item name="ui reference" />
            <Item name="api reference" />
            <Item name="policy reference" />
            <Item name="secutitt guide" />
            <Item name="user management" />
            <Item name="release notes" url="/release-notes"/>
        </div>
    )
}

const Item = (props) => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div>
            {
                props.url ? (
                    <Link to={props.url} className={`flex items-center justify-between font-medium py-3 hover:text-gray-100 cursor-pointer ${show ? 'text-gray-100' : 'text-gray-300'}`}>
                        <span className="uppercase">{props.name}</span>
                    </Link>

                ) : (
                        <div
                            className={`flex items-center justify-between font-medium py-3 hover:text-gray-100 cursor-pointer ${show ? 'text-gray-100' : 'text-gray-300'}`}
                            onClick={handleShow}
                        >
                            <span className="uppercase">{props.name}</span>
                            {
                                show ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>
                            }
                        </div>
                    )
            }

        </div>
    )
}