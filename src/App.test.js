import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import {
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Header mounts in a full DOM', function() {
    expect(mount(< Header />).length).toBe(1);
});


it('Header title is h2 with "cookking" text', function() {
    expect(mount(< Header />).find('h2').text()).toBe('cookking');
});
