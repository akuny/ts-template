import tap from 'tap';
import { App } from '../lib/App';

tap.test('app', (t) => {
    t.test('does start', (t) => {
        const myConfig = { name: 'Acme' };
        const myApp = new App(myConfig);
        t.equal(myApp.name, myConfig.name);
        t.end();
    });
    t.end();
});
