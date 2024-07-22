import React, { Children } from 'react';
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    
    const childrenArray = Children.toArray(children);

    return (
        <>
            <Header />
            <div className="content">
                {childrenArray.map(child => (
                    <div key={child.key}>{child}</div>
                ))}



            </div>

            <Footer />
        </>
    );
};
export default Layout;

