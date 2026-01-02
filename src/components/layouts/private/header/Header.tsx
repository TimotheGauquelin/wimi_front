import React from 'react';

const Header = React.forwardRef<HTMLElement>((_props, ref) => {
    const LOGO_URL = `/assets/images/todoapp_logo.svg`;

    return (
        <header ref={ref} className="py-8 px-4">
            <div>
                <img src={LOGO_URL} alt="Logo ToDoApp" className="h-6 w-auto" />
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;