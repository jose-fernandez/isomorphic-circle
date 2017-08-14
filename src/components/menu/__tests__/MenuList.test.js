import React from 'react';
import MenuList from '../MenuList';
import { shallow } from 'enzyme';

jest.unmock('../MenuList');
jest.unmock('../MenuItem');

describe('Testing MenuList Component', () => {
  let varMenuHeader;
  let varItems;
  let varVisibility;
  const expected = 'ButtonGroup';


  xit('should show the menu component with a menu name', () => {
    varItems = [{ title: 'Users', url: 'http://www.whatever.com' },
    { title: 'Blusers', url: 'www.whatweater.com' }];
    varVisibility = true;

    const wrapper = shallow(<MenuList items={varItems} visibility={varVisibility} />);
    expect(wrapper.node.type.displayName).toEqual(expected);
  });

  xit('should show two menu items', () => {
    const wrapper = shallow(
      <MenuList menuHeader={varMenuHeader} items={varItems} visibility={varVisibility} />
    );
    expect(wrapper.find('MenuItem').length).toBe(varItems.length);
  });
});

    /*
    // it('Testing more', () => {
    //   //console.log('test = ' + found.textContent);
    //
    //   let componentType = TestUtils.findRenderedComponentWithType(componentInstance, MenuList);
    //   //console.log(componentType);
    //
    //   //console.log('returnRender: ',returnRender.props.children);
    //
    //   //console.log('componentInstance: ',componentInstance.props);
    //
    //   // expect(result.type).toBe('div');
    //   // expect(result.props.children).toEqual([
    //   //   <span className="heading">Title</span>,
    //   //   <Subcomponent foo="bar" />
    //
    //   let renderer = TestUtils.createRenderer();
    //   renderer.render(<MenuList
    //   menuHeader={varMenuHeader} items={varItems} visibility={varVisibility} />);
    //   let output = renderer.getRenderOutput();
    //   console.log('prueba 2', output.props.children[1].props.children[1].type);
    // });

      //   it('Testing onUpdate function', () =>{
      //     var prueba = document.getElementById('container');
      //     componentInstance.onUpdate;
      //     expect(componentInstance.state.mHidden).toBe(true);
      //   });

      // console.log(componentInstance);
      // var renderedMyComponent = ReactDOM.findDOMNode(componentInstance);
      // console.log(renderedMyComponent);
      //
      // let renderer = TestUtils.createRenderer();
      //
      //

      // renderer.render(<Home/>);
      // let output = renderer.getRenderOutput();
      // output.props.children.props.children.props.children[1].props.onUpdate;
      // console.log(output.props.children.props);
      // expect(output).not.toBe(null);

      //componentInstance.setState({isCool: true});
      //html = componentInstance.getDOMNode().textContent;

     /!*  function getColumn() {
              const col = TestUtils.renderIntoDocument(
                <EmployeePage />);

              return React.findDOMNode(col);
          }
      *!/
      //console.log(componentInstance);
      //var comp = ReactDOM.findDOMNode(componentInstance);
      //console.log(comp);
      //var comp2 = getColumn();
      //expect(html).toContain('something cool');

      //console.log(renderedMyComponent.attributes);
      //expect(TestUtils.isDOMComponent(renderedMyComponent)).not.toBe(null);

      //expect(renderedMyComponent.attributes['mHidden'].value).toBeTruthy();

      // console.log(comp2);
      */
