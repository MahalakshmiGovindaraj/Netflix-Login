import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 md:bg-black/80 text-gray-400 px-6 py-6 text-base md:px-16 md:py-16">
            <p className="mb-4 text-white/85">
                Questions? Call <a href="#">000-800-919-1694(Toll Free)</a>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/75">
                <a href="#" className="underline hover:text-gray-200">FAQ</a>
                <a href="#" className="underline hover:text-gray-200">Help Centre</a>
                <a href="#" className="underline hover:text-gray-200">Terms of Use</a>
                <a href="#" className="underline hover:text-gray-200">Privacy</a>
                <a href="#" className="underline hover:text-gray-200">Cookie Preferences</a>
                <a href="#" className="underline hover:text-gray-200">Corporate Information</a>
            </div>

        </footer>
    );
}
export default Footer;

