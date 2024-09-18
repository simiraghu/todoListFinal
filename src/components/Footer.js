import React from 'react';

const Footer = () => {
    const footerStyle = {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: 'black',
        color:"white",
        textAlign: 'center',
        padding: '10px 0',
        boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.1)'
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} ToDos App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
