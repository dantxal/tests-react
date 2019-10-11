import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '~/components/TechList'

describe('TechList component', ()=> {
  afterEach(cleanup);
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText, debug } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
    
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  })
})