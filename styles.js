import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontWeight: 'bold',
        color: '#191970',
        fontSize: 25,
        marginBottom: 5,
    },
    titulo: {
        fontWeight: 'bold',
        color: '#191970',
        fontSize: 40,
        marginBottom: 50,
        textDecorationLine: 'underline',
    },
    caixaTexto: {
        width: 200,
        height: 50,
        borderColor: '#191970',
        borderWidth: 1,
        textAlign: 'right',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 25,
        fontSize: 20,
    },
    textoEIconeCampo: {
        flexDirection: 'row',
    },
    containerCampo: {
        alignItems: 'center'
    },
    legendaCampo: {
        fontSize: 25,
        color: '#04397a',
        fontWeight: 'bold',
    },
    campoValor: {
        borderWidth: 1,
        borderColor: '#04397a',
        height: 60,
        width: 200,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    campoSomenteLeitura: {
        backgroundColor: '#bdcadb',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    areaBotoesCalculo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        marginBottom: 20
    }
});


export default styles;
