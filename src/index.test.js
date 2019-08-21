import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import * as serviceWorker from './serviceWorker';

it('renders the App component on the DOM', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('test the ReactDOM.rendrer function', () => {
    const spy = jest.spyOn(ReactDOM, 'render');
    // const isRendering = ReactDOM.render();
  
    expect(spy).toHaveBeenCalled();
    expect(ReactDOM.render()).toBe(true);
  
    spy.mockRestore();
});

test('test the serviceWorker unregister function', () => {
    const spy = jest.spyOn(serviceWorker, 'unregister');
    // const unregistering = serviceWorker.unregister();
  
    expect(spy).toHaveBeenCalled();
    expect(serviceWorker.unregister()).toBe(true);
  
    spy.mockRestore();
});