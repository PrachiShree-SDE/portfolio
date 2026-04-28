import copyright from "../assets/copyright.svg";

const Footer = () => {
    return(
        <div className="flex justify-center p-2 bg-blue-200">
            <img className="h-7 w-7" src={copyright} alt="copyright" />
            <h1 className="font-semibold">Prachi Shree. All rights reserved.</h1>
        </div>
    )
}

export default Footer;