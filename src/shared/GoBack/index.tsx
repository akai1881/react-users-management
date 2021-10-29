import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useHistory } from 'react-router';

const GoBack = () => {
    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    };

    return (
        <Button icon={<ArrowLeftOutlined />} type="link" onClick={handleClick}>
            Back
        </Button>
    );
};

export default GoBack;
