import { renderComponent, expect } from '../testConfig';
import App from '../../src/js/components/App';

describe('App' , () => {

  it('shows a comment box', () => {
    const component = renderComponent(App);
    expect(component.find('.commentBox')).to.exist;
  });

  it('shows a comment list', () => {
    const component = renderComponent(App);
    expect(component.find('.commentList')).to.exist;
  });

  it('has the correct class', () => {
    const component = renderComponent(App);
    expect(component).to.have.class('app');
  });

  // it('shows the correct text', () => {
  //   const component = renderComponent(App);
  //   expect(component).to.contain('hello testing');
  // });


});
