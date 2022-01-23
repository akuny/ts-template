import { appConfig } from './ts/types';

export class App {
    protected _name: string;

    constructor(config: appConfig) {
        const { name } = config;
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}
