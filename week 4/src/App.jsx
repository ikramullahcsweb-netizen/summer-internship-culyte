import { Child } from "./component/day 1/Child";
import Progress from "./component/day 2,3/progress";
import Axios from "./component/day 4,5/Axios";
import Fetch from "./component/day 4,5/Fetch";
import ProductCards from "./component/practical/ProductCards";


export default function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px',  minHeight: '100vh' }}>
            <h2 style={{ color: '#4ecca3' }}>React Props & State Practice</h2>

            <Child name="ikramullah" role="Full Stack Developer" />
            <Child name="AliKhan" role="CEO culyte" /> 
            <Progress/>
            <Fetch />
            <Axios />
            <ProductCards />
        </div>
    );
}