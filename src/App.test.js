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

it('Header is selectable by class "App-header"', function() {
    expect(shallow( < Header / > ).is('.App-header')).toBe(true);
});

it('Header title mounts in a full DOM', function() {
    expect(mount(< Header />).find('.App-title').length).toBe(1);
});
