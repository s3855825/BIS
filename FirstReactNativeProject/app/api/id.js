import * as SecureStore from 'expo-secure-store';

const setID = (id) => {
    return SecureStore.setItemAsync('secure_id', id);
};

const getID = () => {
    return SecureStore.getItemAsync('secure_id');
};

export default {
    setID,
    getID,
}