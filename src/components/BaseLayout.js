import React from 'react';
import {Link} from 'react-router-dom';

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                header
                <table style={{width: 500}}>
                    <tr>
                        <td>
                            Menu Items
                            <ul>
                                <li>
                                    <Link link to="/">Home Page</Link>
                                </li>
                            </ul>
                        </td>
                        <td>
                            Content
                            {this.props.children}
                        </td>
                    </tr>
                </table>
                <br />
                footer
            </div>
        );
    }
}

export default BaseLayout
