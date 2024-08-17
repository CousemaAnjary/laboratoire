import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleGoogleCallback } from '@/services/authGoogleService';

const GoogleCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const processCallback = async () => {
            try {
                // Appeler la fonction pour gérer le callback de Google
                await handleGoogleCallback();

                // Rediriger l'utilisateur vers le tableau de bord après l'authentification
                navigate('/dashboard');
            } catch (error) {
                console.error('Erreur lors de la gestion du callback Google:', error);
                // En cas d'erreur, rediriger l'utilisateur vers la page de login
                navigate('/login');
            }
        };

        processCallback();
    }, [navigate]);

    return (
        <div>
            <h1>Traitement de l'authentification Google...</h1>
        </div>
    );
};

export default GoogleCallback;
