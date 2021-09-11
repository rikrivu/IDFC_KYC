import './HeaderNav.scss';
import logo from '../../assets/images/bank-logo.png';

function HeaderNav () {
    return (
        <div className="header-panel">
            <img src={logo} alt="bank-logo.png"/>
            <div>
                <div className="user-icon">U</div>
                <span>reviewer@idfc.com</span>
            </div>
        </div>
    );
}

export default HeaderNav;