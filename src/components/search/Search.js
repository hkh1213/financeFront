import React        from 'react'
import { connect }  from 'react-redux'
import { Grid }     from '@material-ui/core'
import SearchContent from './SearchContent'

class Search extends React.Component {
    render() {
        return (
            <Grid container>
                <SearchContent />
            </Grid>
        );
    }
}

export default connect()(Search)