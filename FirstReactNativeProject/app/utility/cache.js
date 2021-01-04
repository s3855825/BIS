import AsyncStorage from '@react-native-async-storage/async-storage';

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem('cache' + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
}

const get = (key) => {
    try {
        const value = await AsyncStorage.getItem('cache' + key);
        const item = JSON.parse(value);

        if (!item) return null;

        

    } catch (error) {
        console.log(error);
    }
}

export default {
    store,
    get
}