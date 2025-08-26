export async function fakeLogin(email: string, password: string): 
Promise<string> {
    if (email === 'tst@ex.com' && password === '123') {
        return Promise.resolve('fk-jwt-token')
    }
    return Promise.reject('Credenciais inválidas')
}