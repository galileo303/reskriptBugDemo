
import Loading from './loading';
import {useToggler} from '@plume3/hooks'
function Demo(){
    const [state,setState] = useToggler()
    console.log('state',state);
    
    return (
        <div>
            {state.toString()}
            <div onClick={setState}>toggler</div>
        </div>
    )
}

function App() {
    return <Demo></Demo> 
}
export default App;
