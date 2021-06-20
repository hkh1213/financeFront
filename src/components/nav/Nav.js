import React, { useEffect }   from 'react'
import { connect }  from 'react-redux'
import { Grid }     from '@material-ui/core'
import NavItem          from './NavItem'
import NavUpdateTime    from './NavUpdateTime'
import AnalyzerSearch   from '../analyzer/AnalyzerSearch'

import { updateGetThunk } from '../../slice/UpdateSlice'

const Nav = props => {
    const { dispatch } = props;

    useEffect(() => {
        dispatch(updateGetThunk());
    }, [dispatch]);

    return (
        <Grid container spacing={1}>
            <NavItem name='Guide' href='/guide' />
            <NavItem name='Search' href='/search' />
            <NavItem name='Update' href='/update' />
            <NavItem name='Chart' href='/chart' />
            
            <NavUpdateTime {...props.update} />
            <AnalyzerSearch {...props.search} />
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        update: state.update,
        search: state.search
    };
}

export default connect(mapStateToProps)(Nav)