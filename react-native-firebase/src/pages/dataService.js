import { db } from './db';

export const addItem =  (firstname,lastname,company,department,position,email) => {
    db.ref('/userData').push({
        firstname: firstname,
        lastname: lastname,
        company: company,
        department: department,
        position: position,
        email: email

    });
}

