import React, {useMemo, memo, useCallback, useState, useRef} from 'react';

function useToggler(initialVal: boolean = true): [boolean, (...args: any[]) => void] {
    const [visible, setVisible] = useState<boolean>(initialVal);
    const isToggler = useRef(visible);
    isToggler.current = visible;

    const toggler = useCallback((current?: boolean|Event) => {
        if (typeof current === 'object' || current === undefined) {
            current = !isToggler.current;
        }
        setVisible(current);
    }, []
    );

    return [visible, toggler];
}


export default useToggler;
