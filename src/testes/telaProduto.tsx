import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

import { observer } from 'mobx-react';

function TabContainer(props:IPropsF) {
    return (
        <Typography component="div" className="div">
            {props.children}
        </Typography>
    );
}

const styles =  (theme: Theme) => createStyles({

    paperDescricao: {
        display: 'flex',
        float: 'left',
        height: 225,
        marginLeft: '-637px',
        marginTop: '80px',
        width: '47%',
    },
    paperDescricaoProduto: {
        display: 'flex',
        float: 'left',
        height: 250,
        marginLeft: '2%',
        width: '92.5%',
    },
    paperFoto: {
        height: 280,
        margin: 25,
        width: '17%',
    },
    paperPreco: {
        height: '280px',
        marginLeft: '20px',
        marginTop: '25px',
        width: '25%',
    },
    paperTitulo: {
        height: 35,
        margin: 25,
        marginLeft: '-4px',
        width: '47%',
    }, 
});

interface IPropsF {
    children:string;
}

interface IProps extends WithStyles<typeof styles> {
    title: string;
    livro: any;
}

interface IState {
    value: number;
}

@observer
class TelaDescricao extends React.Component<IProps, IState> {

    public state = {
        value: 0,
    };

    public handleChange  = (): void => {
        this.setState({ value:0 });
    };

    public render(): JSX.Element {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <Grid container={true} spacing={16}>
            
                <Paper className={classes.paperFoto}>
                    Teste 1
                </Paper>
                <Paper className={classes.paperTitulo}>
                    <Typography>  Teste 2 </Typography>
                </Paper>
                <Paper className={classes.paperDescricao}>
                    <Typography> Teste 3 </Typography>
                </Paper>
                <Paper className={classes.paperPreco}>
                    <Typography> Teste 4 </Typography>
                </Paper>
                <Paper className={classes.paperDescricaoProduto}>
                    <Tabs value={value} onChange={this.handleChange}
                        indicatorColor="primary" textColor="primary" centered={true}>
                        <Tab label="Detalhes do Produto" />
                        <Tab label="Descrição do Produto" />
                    </Tabs>
                    {value === 0 && <TabContainer>Item One</TabContainer>}
                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                </Paper>
            </Grid>
        );
    }

}

export default withStyles(styles)(TelaDescricao);