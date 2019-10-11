import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux'
import { addTech } from '~/store/modules/techs/actions'


import TechList from '~/components/TechList'

jest.mock('react-redux');

describe('TechList component', ()=> {
 it('should render tech list based on redux state', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'ReactJS']
    }));

    const { getByText, getByTestId } = render(<TechList />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
 });

 it('should be able to dispatch action to add newTech to redux state', () => {
const { getByTestId, getByLabelText } = render(<TechList />);

const dispatch = jest.fn();

useDispatch.mockReturnValue(dispatch);

fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
fireEvent.submit(getByTestId('tech-form'));

console.log(dispatch.mock.calls)

expect(dispatch).toHaveBeenCalledWith(
  addTech('Node.js')
);
 })
})