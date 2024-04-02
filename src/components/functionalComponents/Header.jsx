import logo from '../../assets/logo2.png';

const Header = () => {
    return (
        <div className="relative">
            <div className="h-56 bg-black flex justify-center items-center">
                <img src={logo} alt="" className="h-9 w-9 animate-bounce mt-5"/>
                <h1 className="text-indigo-500 text-6xl font-black ml-2">todo</h1>
            </div>
        </div>
    )
}

export default Header;