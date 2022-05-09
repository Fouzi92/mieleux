import React from 'react';
import Logo1 from "../media/logo-mieleux.png"

const LogoMiel = () => {
    return (
        <div className='logo-miel'>
            <img src={Logo1}
            width={100}
            height={100}
             alt="logo" />
        </div>
    );
};

export default LogoMiel;