/* eslint-disable prettier/prettier */
import store from '@/store/index.js';
import { getAccessTokenFromCookie } from '@/utils/cookies.js';

function setInterceptors(instance) {
    instance.interceptors.request.use(
        config => {
            config.headers.Authorization =
                store.getters['userToken'] || getAccessTokenFromCookie();
            return config;
        },
        error => Promise.reject(error.response),
    );
    instance.interceptors.response.use(
        config => config,
        error => Promise.reject(error.response),
    );
    return instance;
}

export { setInterceptors };
