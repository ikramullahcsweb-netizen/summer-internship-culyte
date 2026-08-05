import { Child } from "./component/day 1/Child";
import Progress from "./component/day 2,3/progress";


export default function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', background: '#121212', minHeight: '100vh' }}>
            <h2 style={{ color: '#4ecca3' }}>React Props & State Practice</h2>

            <Child name="ikramullah" role="Full Stack Developer" />
            <Child name="AliKhan" role="CEO culyte" /> 
            <Progress/>
        </div>
    );
}