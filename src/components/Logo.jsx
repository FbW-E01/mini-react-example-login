import logo from './logo_200x200.png';
import './Logo.css';

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Codelicious" />
        </div>
    );
}