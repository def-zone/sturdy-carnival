export const Menu = () => {
    return (
        <div>
            <Item name="introduction"/>
            <Item name="getting started"/>
            <Item name="deployment"/>
            <Item name="integrations"/>
            <Item name="use cases"/>
            <Item name="ui reference"/>
            <Item name="api reference"/>
            <Item name="policy reference"/>
            <Item name="secutitt guide"/>
            <Item name="user management"/>
            <Item name="release notes"/>
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="flex items-center justify-between font-medium text-gray-300 py-3 hover:text-gray-100 cursor-pointer">
            <span className="uppercase">{props.name}</span>
            <i className="fas fa-angle-down"></i>
        </div>
    )
}