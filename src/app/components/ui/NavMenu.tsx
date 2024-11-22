import MenuItem from "./MenuItem";

interface NavMenuProps {
    onItemClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({onItemClick}) => {
    return (
        <>
            <MenuItem href="/" onClick={onItemClick}>HOME</MenuItem>
            <MenuItem href="/products" onClick={onItemClick}>PRODUCTS</MenuItem>
            <MenuItem href="/about" onClick={onItemClick}>ABOUT</MenuItem>
            <MenuItem href="/signup" onClick={onItemClick}>SIGN UP</MenuItem>
        </>
    );
};

export default NavMenu;

