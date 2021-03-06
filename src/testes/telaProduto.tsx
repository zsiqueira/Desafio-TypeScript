import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

import { observer } from 'mobx-react';
import LivroProduto from '../Stores/livroProduto';

import CircularIntegration from './progress';

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
    preco:{
        border: '1px solid',
        display: 'flex',
        fontSize: '18px',
        justifyContent:'center',
        margin: '40px',
    },
    txtTitulo:{
        fontSize: '22px',
        marginLeft: '1%',
        marginTop:'2px',
    },

    txtDescricao:{
        fontSize: '14px',
        margin: '3%',
    },
});

interface IPropsF {
    children:string;
}

interface IProps extends WithStyles<typeof styles> {
    produto: LivroProduto;
}

interface IState {
    value: number;
}

@observer
class TelaDescricao extends React.Component<IProps, IState> {

    public state:IState = {
        value: 0,
    };

    public handleChange = (value: number): void =>{
        let pog = value===0?1:0;
        pog = value===1?0:1;
        this.setState({ value: pog });
    };

    public render(): JSX.Element {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <Grid container={true} spacing={16}>
                <Paper className={classes.paperFoto}>
                    <img style={{height:'100%', width:'100%'}} src={require('../img/' + this.props.produto.livro.codigo+ '.jpg') } />
                </Paper>
                <Paper className={classes.paperTitulo}>
                    <Typography className={classes.txtTitulo}>
                        {this.props.produto.livro.nome}
                    </Typography>
                </Paper>
                <Paper className={classes.paperDescricao}>
                    <Typography className={classes.txtDescricao}> 
                        {this.props.produto.livro.desc}
                    </Typography>
                </Paper>
                <Paper className={classes.paperPreco}>
                    <Typography className={classes.preco}>
                        Ebook PDF: R$:{this.props.produto.livro.preco}
                    </Typography>
                    <Typography className={classes.preco}>
                        Livro Físico:  R$:{this.props.produto.livro.preco}
                    </Typography>
                    <CircularIntegration/>
                </Paper>
                <Grid container={true} wrap="nowrap" >
                <Paper  className={classes.paperDescricaoProduto}>
                    <Tabs value={value} onChange={() => this.handleChange(value)}   
                        indicatorColor="primary" textColor="primary" centered={true}>
                        <Tab label="Detalhes do Produto" />
                        <Tab label="Descrição do Produto" />
                    </Tabs>
                    {value === 0 && <TabContainer  >Item One</TabContainer>}
                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                </Paper>
                </Grid>
            </Grid>
        );
    }

}

export default withStyles(styles)(TelaDescricao);