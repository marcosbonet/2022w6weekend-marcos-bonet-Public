import { ClothesType } from '../../types/types';
import { Repository } from './repository';

export class ClothesRepository implements Repository<ClothesType> {
    url: string;
    constructor(url = '') {
        this.url = url ? url : (process.env.REACT_APP_URL_CLOTHES as string);
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<ClothesType[]> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => `${error}`);
    }

    create(task: Partial<ClothesType>): Promise<ClothesType> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => `${error}`);
    }

    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
            })
            .catch((error) => `${error}` as unknown as void);
    }

    update(partialClothes: Partial<ClothesType>): Promise<ClothesType> {
        return fetch(`${this.url}/${partialClothes.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialClothes),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => `${error}`);
    }
}
