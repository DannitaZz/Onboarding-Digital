export const createDataBase = (nombreRepLegal,cedulaRresentanteLegal,nombreEmpresa,nit) => firebase.firestore().collection('users').doc(nit).set({
    nombreRepLegal,
    cedulaRresentanteLegal,
    nombreEmpresa,
    nit, 
    telefono:'',
    direccion:'',
    ciudad:'',
    departamento:'',
    StorageRef :[],
});

export const getDataByNit = (coll,nit)=> firebase.firestore().collection(coll).doc(nit).get();

export const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://dannitazz.github.io/Onboarding-Digital/src/index.html#/form',  
    handleCodeInApp: true,       
};

export const authWithEmail= (email,actionCodeSettings) => firebase.auth().sendSignInLinkToEmail(email,actionCodeSettings);

export const update = (id,updateCollection)=>firebase.firestore().collection('users').doc(id).update(updateCollection);

export const getCollection = (id) => firebase.firestore().collection('users').doc(id).get();

