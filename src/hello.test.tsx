import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import Hello from "./hello";

describe('Hello', () => {
  it('should update text value if clicked on the button', () => {
    const {container} = render(<Hello/>)

    const button = container.querySelector('button')!;
    fireEvent.click(button);

    const textInput = container.querySelector('input')!;
    expect(textInput.value).toEqual('world');
  });
})
