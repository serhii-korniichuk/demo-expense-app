import { BASE_URL } from '../api/endpoints';

function wait(delay: number) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

type RequestMethod = 'GET' | 'POST';

function request<T>(
    url: string,
    method: RequestMethod,
    data: any = null,
): Promise<T> {
    const options: RequestInit = { method };

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'Content-Type': 'application/json; charset=UTF-8',
        };
    }

    return wait(300)
        .then(() => fetch(BASE_URL + url, options))
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
        });
}

export const client = {
    get: <T>(url: string) => request<T>(url, 'GET'),
    post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
};
