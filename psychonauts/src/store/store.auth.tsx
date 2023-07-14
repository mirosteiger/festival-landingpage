import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { auth } from "database/firebase.configSetter"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { IAuthStore, ICredentials } from "types"
import { createUserCart } from "database/firebase.utils"

export const useAuthStore = create<IAuthStore>()(
    devtools(
        persist(
            (set) => ({
                isLoggedIn: auth.currentUser !== null,
                loginError: '',
                currentUser: null,
                login: async (cred: ICredentials) => {
                    const { email, password } = cred
                    await signInWithEmailAndPassword(auth, email, password)
                        .then((userCredentials) => {
                            set({ currentUser: userCredentials.user })
                            set({ isLoggedIn: true })
                            
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                },
                logout: () => {
                    signOut(auth)
                        .then(() => {
                            console.log("signed out")
                            set({ isLoggedIn: false })
                            set({ currentUser: null })
                            
                        })
                        .catch(err => {
                            console.log(err)
                        })
                },

                register: async (cred: ICredentials) => {
                    const { email, password } = cred
                    await createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredentials) => {
                            set({ currentUser: userCredentials.user })
                            set({ isLoggedIn: true })
                            createUserCart(userCredentials.user.uid)
                        })
                        .catch((e) => {
                            console.log(e)
                        });

                }
            }),
            { name: "user" }),
    )

)
