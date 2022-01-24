import React from 'react';
import {create, act} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);

        const root = component.root;

      //  let root;
      //  act(() => {
      //      root = create(<ProfileStatus status="it-kamasutra.com" />)
      //    });
        
        expect(root.state.status).toBe("it-kamasutra.com");
    });

  /*  test("after creation <span> should be diasplayed with correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        let root = component.root;
        let span = root.findByType("span");
        expect(span.length).toBe(1);
    });*/
});