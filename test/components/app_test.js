import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//use 'describe' to group similar tests together
describe('App', () => {
  let component;
  beforeEach(()=>{
    component = renderComponent(App);
  });

  it('shows a comment box', ()=>{
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', ()=>{
    expect(component.find('.comment-box')).to.exist;
  });
});





//EXAMPLE
//use 'it' to test a single attribute of a target. Test a single thing.
// it('shows the correct text', () => {
//   //create an instance of App to test it
//   const component = renderComponent(App);
//   //use 'expect' to make an assertion about a target(i.e. what we are testing)
//   expect(component).to.contain('React simple starter');
//
// });
