export const getURLs = () => {
    console.log("Variables de entorno:")
    console.log(process.env)
    console.log(process.env.REACT_APP_AMBIENTE)

    switch (process.env.REACT_APP_AMBIENTE) {
        case 'Development': return urls("localServicios")
        default: return urls("localServicios")
    }
}

type Ambiente =
    "localServicios"

const Routes = {
    AuthenticationSignUp: "/auth/signup",
    AuthenticationSignIn: "/auth/signin",
    AuthenticationLogOut: "/auth/logout",
    UsersMe: "/users/me"
}

const baseAPIs = {
    suffix: "/api",
    localServicios: {
        backend: "http://localhost:3000"
    }
}

const urls = (ambiente: Ambiente) => {
    return {
        AuthenticationSignUp: baseAPIs[ambiente].backend + baseAPIs.suffix + Routes.AuthenticationSignUp,
        AuthenticationSignIn: baseAPIs[ambiente].backend + baseAPIs.suffix + Routes.AuthenticationSignIn,
        AuthenticationLogOut: baseAPIs[ambiente].backend + baseAPIs.suffix + Routes.AuthenticationLogOut,
        UsersMe: baseAPIs[ambiente].backend + baseAPIs.suffix + Routes.UsersMe
    }
}