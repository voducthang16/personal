import './Loading.css';
interface Props {
    message?: string;
}

const Loading: React.FC<Props> = ({ message = 'Loading...' }) => (
    <div className="loading">
        <div className="loading-spinner"></div>
        <p>{message}</p>
    </div>
);

export default Loading;
