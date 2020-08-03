import * as React from 'react';
import ComponentTopo from './../Components/Topo/Topo';
import ComponentFooter from './../Components/Footer/Footer';
import ComponentAmas from './../Components/PageArmas/Armas';


class Armas extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <ComponentTopo />
                <ComponentAmas />
                <ComponentFooter />
            </>
        );
    }
}

export default Armas;