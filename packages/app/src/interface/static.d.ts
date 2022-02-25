/* eslint-disable */
declare module '*.css' {
    type Primitive = string | number | boolean | null | undefined;
    const content: {
        [className: string]: string;
        (...names: Array<Primitive | Record<string, Primitive>>): string;
    };
    export default content;
}

declare module '*.less' {
    import style from '*.less';
    export default style;
}

declare module '*.scss' {
    import style from '*.scss';
    export default style;
}

declare module '*.png' {
    const url: string;
    export default url;
}

declare module '*.jpeg' {
    const url: string;
    export default url;
}

declare module '*.jpg' {
    const url: string;
    export default url;
}

declare module '*.svg' {
    declare const url: string;
    export default url;
}

declare module '*.svg?react' {
    import {SVGAttributes, ComponentType, RefAttributes} from 'react';

    const Component: ComponentType<SVGAttributes<SVGElement> & RefAttributes<SVGElement>>;
    export default Component;
}

declare module 'remote/H5' {
    const remote:any
    export default remote;
}

declare module 'remote/PC' {
    const remote:any
    export default remote;
}

interface Window{
    remoteUrl?:string
}