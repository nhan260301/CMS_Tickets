import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

function StartFirebase() {
    const firebaseConfig = {
        apiKey: 'AIzaSyAb5Cr2Wn09l0WgolXzRR-wo6GSjkrUk_4',
        authDomain: 'dangthanhnhan-15f52.firebaseapp.com',
        databaseURL: 'https://dangthanhnhan-15f52-default-rtdb.firebaseio.com',
        projectId: 'dangthanhnhan-15f52',
        storageBucket: 'dangthanhnhan-15f52.appspot.com',
        messagingSenderId: '110975839601',
        appId: '1:110975839601:web:1c8d1b0a8ddf3d43e11ad0',
        measurementId: 'G-7GY2MBNP48',
    };

    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}
export default StartFirebase;
