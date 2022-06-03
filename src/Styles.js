import logo from "./logo.svg";
import Test from "./Test"
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";

// import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.css';
import styles from "./App.module.css"


function Styles() {
    return (
        <div className={styles.App}>
            <Title>{process.env.NODE_ENV}</Title>
            <Title theme="dark">{process.env.NODE_ENV}</Title>
            <p className="env">
                {process.env.REACT_APP_API_URL}
                <span>Test Scss</span>
            </p>
            <Test />
            {
                process.env.NODE_ENV === 'production' && (
                    <>
                        <img src="/logo192.png" alt="" />
                        <img src={logo} alt="" />
                    </>
                )
            }
            <Bootstrap />
            <Tailwind />
        </div>
    )
}

export default Styles