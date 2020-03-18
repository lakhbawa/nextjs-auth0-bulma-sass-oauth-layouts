import React from 'react';
import Link from 'next/link';

class PageHeader extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link href="/">
                  <a>Home</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/about">
            <a>About Us</a>
          </Link>
                    </li>
                </ul>
                
          
            </div>
        )
    }
}

export default PageHeader