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
                <table >
                    <tbody>
                        <tr>
                            <td style={{width: 300}}>
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
                    </tbody>
                </table>
                <br />
                footer
            </div>
        );
    }
}

export default BaseLayout
