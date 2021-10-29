import { Spin } from 'antd';
import './styles.css';

export default function MyPreloader(props: Record<string, any>) {
    return (
        <div className="preloader">
            <Spin {...props} />
        </div>
    );
}
