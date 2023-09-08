import { footerLogo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <footer className="text-footer-text py-6 max-container">
            <div className="flex flex-col justify-between lg:flex-row items-start gap-20 px-4">
                {/* Logo */}
                <div className="flex flex-col justify-center mb-4 lg:mb-0">
                    <img src={footerLogo} alt="Logo" width={150} height={46} />
                </div>

                {/* Contact Us */}
                <div className="mb-4 lg:mb-0 w-[17rem]">
                    <h2 className="font-source text-2xl text-primary font-semibold mb-2">Contact Us</h2>
                    <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                    <p className="py-6">example2020@gmail.com</p>
                    <p>(904) 443-0343</p>
                </div>

                {/* More Section */}
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-2xl text-primary font-semibold mb-2">More</h2>
                    <ul>
                        {footerLinks.map((link, index) => (
                            <li key={index} className="mt-5 leading-normal text-base hover:text-slate-gray cursor-pointer">
                                <a href="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col mb-4 lg:mb-0">
                    <h2 className="text-2xl text-primary font-semibold mb-2 max-md:hidden">Social links</h2>
                    <div className="flex flex-1 flex-col gap-[90px] max-md:flex-col-reverse max-md:items-center max-md:gap-6">
                        <div className="flex space-x-4">
                            {socialMedia.map((icon, index) => (
                                <div key={index} className="flex justify-center items-center w-12 h-12 relative max-sm:left-[30px]">
                                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                                </div>
                            ))}
                        </div>
                        <div className="relative max-sm:left-[30px] text-center">
                            <p>&copy; 2022 Food Truck Example</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer


// className = "" >