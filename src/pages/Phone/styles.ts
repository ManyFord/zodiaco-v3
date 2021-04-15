import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#DCF3EE',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    covidRun: {
        height: '35%',
        resizeMode: 'contain'
    },
    whiteMap: {
        width: 500,
        height: 600,
        position: 'absolute',
        zIndex: -1
    },
    arrowContainer: {
        height: 40,
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: 40,
        marginTop: 70
    },
    instructionContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 60,
        width: '80%',
        backgroundColor: '#FAFAFA',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#F8F4F4',
        color: '#4B4B4B',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        textAlign: 'center'

    },
    instructionText: {
        textAlign: 'center',
        color: '#4B4B4B',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
    },
    joinText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16
    },
    joinButton: {
        backgroundColor: '#7AC8C3',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 260,
        borderRadius: 30
    },


})


export default styles