import { useState, useEffect } from 'react';
import { auth } from "../lib/firebase";

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    useEffect(() => {
        const listener = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, []);

    return { user };
}





// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUserName } from "../features/usernameSlice";
// import { login, logout, selectUser } from "../features/userSlice";
// import { auth } from "../lib/firebase";

// export default function useAuthListener() {
//     const user = useSelector(selectUser);
//     const firstName = useSelector(selectUserName);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const listner = auth.onAuthStateChanged(userAuth => {
//             if (userAuth) {
//                 localStorage.setItem('userAuth', JSON.stringify(userAuth));
//                 dispatch(login({
//                     uid: userAuth.uid,
//                     email: userAuth.email,
//                 }))
//                 userAuth.updateProfile({
//                     displayName: firstName,
//                     photoURL: Math.floor(Math.random() * 5) + 1,
//                 });
//             } else {
//                 localStorage.removeItem('userAuth');
//                 dispatch(logout());
//             }
//         })

//         return listner;
//     }, [dispatch]);

//     return { user };
// }