import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => {
    // const {endereco, nome} = props;

// export default () => {

// export default function (){

    // const usuario = {
    //     nome: ' Marcos Bernardino',
    //     avatar: 'https://imjustcreative.com/wp-content/uploads/2012/05/evolution-of-batman-logo-Tim-Burton.jpg'
    // }
    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src= {`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>{ nomeUsuario }</h1>
        </header>
    )
    }


// }

export default Perfil;