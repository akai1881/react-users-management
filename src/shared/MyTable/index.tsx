import { Table } from 'antd';
import 'antd/lib/table/style/index.css';
import './styles.css';

export default function MyTable(props: Record<string, any>) {
    return <Table {...props} />;
}
