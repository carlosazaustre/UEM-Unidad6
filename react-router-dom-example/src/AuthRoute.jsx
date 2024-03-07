import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AuthRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
    });

    return children;
}