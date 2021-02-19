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
            <Item name="ui reference" subMenu={
                [{
                    id: 1,
                    name: "Customize Theme",
                    url: "/customize-theme"
                }]}
            />
            <Item name="api reference" />
            <Item name="policy reference" />
            <Item name="secutitt guide" />
            <Item name="user management" />
            <Item name="release notes" url="/release-notes" />
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
                        <div>
                            <div
                                className={`flex items-center justify-between font-medium py-3 hover:text-gray-100 cursor-pointer ${show ? 'text-gray-100' : 'text-gray-300'}`}
                                onClick={handleShow}
                            >
                                <span className="uppercase">{props.name}</span>
                                {
                                    show ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>
                                }
                            </div>
                            {
                                props.subMenu && (
                                    <div className={show ? 'px-2 py-1' : 'hidden'}>
                                        <SubMenu items={props.subMenu} />
                                    </div>
                                )
                            }
                        </div>
                    )
            }

        </div>
    )
}

const SubMenu = (props) => {
    return (
        props.items.map(item => (
            <Link to={item.url} className="mb-2 pl-4 text-gray-300 border-l border-gray-500" key={item.id}>
                {item.name}
            </Link>
        ))
    )
}