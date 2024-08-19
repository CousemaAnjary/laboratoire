import api from "./config/apiConfig"

export const googleAuthRedirect = async () => {
    try {
        const response = await api.get(`${import.meta.env.VITE_BACKEND_API_URL}/auth/google/redirect`);
        window.location.href = response.data.url;
    } catch (error) {
        console.error('Erreur lors de la redirection Google:', error);
    }
};

export const handleGoogleCallback = async () => {
    try {
        // Extraire le code de l'URL après la redirection
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (!code) {
            throw new Error("Code de retour Google manquant.");
        }

        // Appel à l'API pour échanger le code contre un token et des informations utilisateur
        const response = await api.post('/auth/google/callback', { code });

        // Récupérer le token et les informations de l'utilisateur depuis la réponse
        const { token, user } = response.data;

        // Stocker le token et les informations de l'utilisateur dans le localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Retourner les données récupérées
        return { token, user };

    } catch (error) {
        console.error('Erreur lors de la récupération du callback Google:', error);
        // Vous pouvez également ajouter une gestion des erreurs plus détaillée ou rediriger l'utilisateur en cas d'échec
        throw error; // Propager l'erreur pour la gestion en amont
    }
}

export const logout = () => {
    // Supprimer le token et les informations utilisateur du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};
