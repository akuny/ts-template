import { App } from '../src/App';

describe('app', () => {
    it('does start', (done): void => {
        const myConfig = {
            name: 'Acme',
        };

        const myApp = new App(myConfig);

        expect(myApp.name).toEqual(myConfig.name);

        done();
    });
});
