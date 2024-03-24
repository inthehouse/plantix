import React, { useState, useEffect } from 'react';
import '../styles/alert.css';

interface CustomAlertProps {
    type: 'success' | 'error';
    message: string;
    onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type, message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const handleClose = () => {
        setVisible(false);
        onClose();
    };

    return (
        <>
            {visible && (
                <div className={`custom-alert ${type === 'error' ? 'error' : 'success'}`}>
                    <div className="alert-content">
                        <span>{message}</span>
                        <span className="close-btn" onClick={handleClose}></span>
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomAlert;
